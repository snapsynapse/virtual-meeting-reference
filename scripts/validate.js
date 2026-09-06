#!/usr/bin/env node
'use strict';

/**
 * Knowledge-as-Code — Cross-Reference Validator
 * Validates that all references between entities are consistent.
 *
 * Usage: node scripts/validate.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Minimal YAML parser (same as build.js)
function parseYaml(content) {
    const result = {};
    const stack = [{ obj: result, indent: -1 }];

    for (const rawLine of content.split('\n')) {
        if (rawLine.trim().startsWith('#') || rawLine.trim() === '') continue;
        const indent = rawLine.search(/\S/);
        const line = rawLine.trim();

        if (line.startsWith('- ')) continue; // Skip list items for config parsing

        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) continue;

        const key = line.slice(0, colonIdx).trim();
        const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');

        while (stack.length > 1 && stack[stack.length - 1].indent >= indent) stack.pop();
        const parent = stack[stack.length - 1].obj;

        if (value === '') {
            parent[key] = {};
            stack.push({ obj: parent[key], indent });
        } else {
            parent[key] = value;
        }
    }
    return result;
}

function parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};
    const fm = {};
    match[1].split('\n').forEach(line => {
        const [key, ...vParts] = line.split(':');
        if (key && vParts.length) {
            const value = vParts.join(':').trim();
            if (value) fm[key.trim()] = value;
        }
    });
    return fm;
}

function loadMappingIndex(filePath) {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf-8');
    const entries = [];
    let current = null;

    for (const line of content.split('\n')) {
        if (line.startsWith('- id:')) {
            if (current) entries.push(current);
            current = { id: line.replace('- id:', '').trim(), obligations: [] };
        } else if (current) {
            const match = line.match(/^\s+(\w[\w_]*):\s*(.+)/);
            if (match && match[1] !== 'obligations') current[match[1]] = match[2].trim();
            const listMatch = line.match(/^\s+-\s+(.+)/);
            if (listMatch) current.obligations.push(listMatch[1].trim());
        }
    }
    if (current) entries.push(current);
    return entries;
}

function validate() {
    const configPath = path.join(ROOT, 'project.yml');
    if (!fs.existsSync(configPath)) {
        console.error('Error: project.yml not found.');
        process.exit(1);
    }

    const config = parseYaml(fs.readFileSync(configPath, 'utf-8'));
    console.log('Validating cross-references...\n');

    // Find data directory
    const dataDirs = ['data/examples', 'data'];
    let dataDir;
    for (const d of dataDirs) {
        if (fs.existsSync(path.join(ROOT, d))) { dataDir = path.join(ROOT, d); break; }
    }
    if (!dataDir) { console.error('No data directory found.'); process.exit(1); }

    const primaryDir = path.join(dataDir, config.entities?.primary?.directory || 'primary');
    const containerDir = path.join(dataDir, config.entities?.container?.directory || 'container');
    const authorityDir = path.join(dataDir, config.entities?.authority?.directory || 'authority');

    // Load IDs
    const loadIds = dir => {
        if (!fs.existsSync(dir)) return [];
        return fs.readdirSync(dir).filter(f => f.endsWith('.md') && !f.startsWith('_')).map(f => f.replace('.md', ''));
    };

    const primaryIds = loadIds(primaryDir);
    const containerIds = loadIds(containerDir);
    const authorityIds = loadIds(authorityDir);

    console.log(`  ${config.entities?.primary?.plural || 'Primaries'}: ${primaryIds.length}`);
    console.log(`  ${config.entities?.container?.plural || 'Containers'}: ${containerIds.length}`);
    console.log(`  ${config.entities?.authority?.plural || 'Authorities'}: ${authorityIds.length}`);

    // Load mapping
    const mappingFile = config.mapping?.file || 'provisions/index.yml';
    let mappingPath = path.join(dataDir, mappingFile);
    if (!fs.existsSync(mappingPath)) mappingPath = path.join(dataDir, 'mapping', 'index.yml');
    const mappings = loadMappingIndex(mappingPath);
    console.log(`  Mappings: ${mappings.length}`);

    let errors = 0;

    // Validate mapping references
    for (const m of mappings) {
        if (m.regulation && !containerIds.includes(m.regulation)) {
            console.error(`  ERROR: Mapping "${m.id}" references unknown container "${m.regulation}"`);
            errors++;
        }
        for (const obl of m.obligations) {
            if (!primaryIds.includes(obl)) {
                console.error(`  ERROR: Mapping "${m.id}" references unknown primary "${obl}"`);
                errors++;
            }
        }
        if (m.authority && !authorityIds.includes(m.authority)) {
            console.error(`  ERROR: Mapping "${m.id}" references unknown authority "${m.authority}"`);
            errors++;
        }
    }

    // Validate container authority references
    for (const cId of containerIds) {
        const content = fs.readFileSync(path.join(containerDir, `${cId}.md`), 'utf-8');
        const fm = parseFrontmatter(content);
        if (fm.authority && !authorityIds.includes(fm.authority)) {
            console.error(`  ERROR: Container "${cId}" references unknown authority "${fm.authority}"`);
            errors++;
        }

        const allowedStatuses = new Set(['active', 'limited', 'discontinued']);
        if (!allowedStatuses.has(fm.status)) {
            console.error(`  ERROR: Container "${cId}" has invalid status "${fm.status || ''}"`);
            errors++;
        }

        if (!/^\d{4}-\d{2}-\d{2}$/.test(fm.last_verified || '') || Number.isNaN(Date.parse(fm.last_verified))) {
            console.error(`  ERROR: Container "${cId}" has invalid last_verified date "${fm.last_verified || ''}"`);
            errors++;
        }

        if (/https:\/\/www\./.test(content)) {
            console.error(`  ERROR: Container "${cId}" contains a non-canonical www URL`);
            errors++;
        }

        if (/^### Talking Point$/m.test(content) || /^> "/m.test(content)) {
            console.error(`  ERROR: Container "${cId}" contains an unattributed quotation-style talking point`);
            errors++;
        }

        const capabilityStatuses = [...content.matchAll(/^\| Status \| ([^|]+) \|$/gm)].map(match => match[1].trim());
        for (const status of capabilityStatuses) {
            if (!allowedStatuses.has(status)) {
                console.error(`  ERROR: Container "${cId}" contains invalid capability status "${status}"`);
                errors++;
            }
            if (fm.status === 'discontinued' && status !== 'discontinued') {
                console.error(`  ERROR: Discontinued container "${cId}" contains capability status "${status}"`);
                errors++;
            }
        }
    }

    // Validate that mapping headings still exist in their owning platform files.
    for (const m of mappings) {
        if (!m.regulation || !m.source_heading) continue;
        const ownerPath = path.join(containerDir, `${m.regulation}.md`);
        if (!fs.existsSync(ownerPath)) continue;
        const content = fs.readFileSync(ownerPath, 'utf-8');
        if (!content.includes(`## ${m.source_heading}`)) {
            console.error(`  ERROR: Mapping "${m.id}" references missing heading "${m.source_heading}" in "${m.regulation}"`);
            errors++;
        }
    }

    if (errors > 0) {
        console.error(`\n${errors} validation error${errors !== 1 ? 's' : ''} found.`);
        process.exit(1);
    }

    console.log('\nAll cross-references valid.');
}

validate();
