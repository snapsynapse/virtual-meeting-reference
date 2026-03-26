# Architecture

## Principles

1. **File-over-App** — Data lives in durable markdown files, not locked in a database.
2. **Zero-Dependency Build** — All scripts use Node.js built-ins only. No npm install, no supply chain risk.
3. **Config-Driven** — `project.yml` is the single source of truth for domain configuration.
4. **Ontology-Driven** — A formal entity model governs the data structure. See [ONTOLOGY.md](ONTOLOGY.md).
5. **Docs-as-Code** — Validation in CI, peer review via PR, version control via Git.
6. **GitOps** — Git is the single source of truth. All state lives in commits.

## Build Pipeline

```
project.yml ─────┐
                  ├──→ build.js ──→ docs/
data/examples/ ──┘         │         ├── index.html (+ 8 core pages)
                           │         ├── container/{id}/index.html
                           │         ├── primary/{id}/index.html
                           │         ├── authority/{id}/index.html
                           │         ├── requires/{container}/{primary}/index.html
                           │         ├── compare/{a}-vs-{b}/index.html
                           │         ├── api/v1/*.json
                           │         ├── sitemap.xml
                           │         └── CNAME
                           │
                    validate.js ──→ cross-reference checks
```

## Deployment

GitHub Actions workflow (`.github/workflows/build.yml`):
1. Push to `main` triggers build
2. Workflow runs `validate.js` then `build.js`
3. Commits generated `docs/` back to `main` with `[skip ci]`
4. GitHub Pages serves from `main:/docs/`
5. CNAME file generated from `project.yml` URL

## JSON API

Static JSON files at `docs/api/v1/`:

| Endpoint | Contents |
|----------|----------|
| `index.json` | API manifest with links to all endpoints |
| `containers.json` | All platforms with metadata |
| `primaries.json` | All features with metadata |
| `authorities.json` | All vendors |
| `mappings.json` | All capability mappings |
| `matrix.json` | Feature coverage matrix |
| `comparisons.json` | Pre-computed platform comparisons |
