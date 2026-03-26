# Data Schema

This document specifies the canonical format for all data files.

## Platform Files (`data/examples/platforms/{id}.md`)

### Frontmatter

```yaml
---
name: Platform Display Name
authority: vendor-id              # references data/examples/vendors/
market: Global                    # market scope
type: platform
status: active | limited | discontinued
enacted: YYYY-MM-DD              # launch date
effective: YYYY-MM-DD            # general availability date
official_url: https://...
pricing_page: https://...        # optional
range: min-max                   # participant range (e.g., "2-1,000")
last_verified: YYYY-MM-DD
---
```

### Status Values

| Status | Meaning |
|--------|---------|
| `active` | Currently available and actively maintained |
| `limited` | Available but with restricted functionality or sunsetting |
| `discontinued` | No longer available or actively maintained |

### Body Structure

**Timeline table** (required):

```markdown
## Timeline

| Milestone | Date | Notes |
|-----------|------|-------|
| Founded | 2011-04-21 | Company founding |
| Public launch | 2013-01-01 | Version 1.0 released |
```

**Pricing table** (required):

```markdown
## Pricing

| Plan | Price | Notes |
|------|-------|-------|
| Free | $0/mo | 40-min limit |
| Pro | $13.33/mo | 100 participants |
```

**Provision sections** (one per supported feature, separated by `---`):

```markdown
---

## Video Conferencing

| Property | Value |
|----------|-------|
| Obligation | video-conferencing |
| Status | active |
| Effective | 2013-01-01 |

**Talking Point:** "Zoom supports up to 1,000 participants with HD video."

### Requirements

| Requirement | Details |
|-------------|---------|
| Max participants | 1,000 (Enterprise plan) |
| HD video | Up to 1080p |

### Sources

| Title | URL |
|-------|-----|
| Zoom Plans | https://zoom.us/pricing |
```

## Vendor Files (`data/examples/vendors/{id}.md`)

### Frontmatter

```yaml
---
id: vendor-id
name: Vendor Display Name
jurisdiction: Global
website: https://...
---
```

### Body Structure

```markdown
## Platforms

- platform-id-1
- platform-id-2
```

## Feature Files (`data/examples/features/{id}.md`)

### Frontmatter

```yaml
---
id: feature-id
name: Feature Display Name
group: communication | collaboration | management | engagement
status: active
search_terms:                    # optional, improves site search
  - alternative name
  - related term
---
```

### Groups

| Group | Color | Examples |
|-------|-------|---------|
| `communication` | Blue | Video conferencing, chat and messaging |
| `collaboration` | Purple | Screen sharing, whiteboard, breakout rooms |
| `management` | Orange | Recording, AI notetaker |
| `engagement` | Green | Polling, virtual backgrounds |

### Body Sections

```markdown
## Summary

One-paragraph description of what this feature is.

## What Counts

- Bullet list of what qualifies as having this feature
- Be specific enough to distinguish "has it" from "doesn't"

## What Does Not Count

- Bullet list of what does NOT qualify
- Helps prevent false positives
```

## Mapping Entries (`data/examples/mapping/index.yml`)

Each entry connects a platform's provision to one or more features:

```yaml
- id: unique-mapping-id
  regulation: platform-id         # references a platform file
  authority: vendor-id            # references a vendor file
  source_file: data/examples/container/platform-id.md
  source_heading: Section Heading
  obligations:
    - feature-id                  # references a feature file
```

### Naming Convention

Mapping IDs follow the pattern: `{platform}-{feature}` (e.g., `zoom-video-conferencing`, `teams-breakout-rooms`).
