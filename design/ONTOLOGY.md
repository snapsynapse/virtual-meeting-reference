# Ontology

## Core Principle

Every knowledge domain has stable concepts and unstable implementations. The ontology separates them:

- **Features** (Primary) are stable anchors — video conferencing exists regardless of which platforms offer it
- **Platforms** (Container) are the implementations — they launch, evolve, get acquired, and sometimes shut down
- **Capabilities** (Secondary) bridge platforms to features — how a specific platform supports a specific feature
- **Vendors** (Authority) are the companies that produce platforms

## Relationship

```
Vendor → Platform → Capability → Feature
```

### Example

```
Zoom (vendor)
  → Zoom Workplace (platform)
    → supports screen sharing with annotation, up to 1080p (capability)
      → Screen Sharing (feature)
```

Microsoft Teams and Zoom Workplace both support Screen Sharing, but their capabilities differ — Teams integrates with PowerPoint Live, while Zoom offers multi-share and annotation. The feature is stable; the implementations vary.

## Rules

1. **Features are stable; platforms are unstable.** When a platform updates its offering, its capabilities change, but the underlying features persist.
2. **Prefer relationships over buckets.** Don't categorize platforms by feature — map capabilities explicitly.
3. **Plain-English naming over jargon.** "Video Conferencing" not "Synchronous AV Communication."
4. **IDs are kebab-case slugs.** Derived from the display name: `breakout-rooms`, `screen-sharing`.
5. **Every claim needs a date.** Platforms change — `last_verified` tracks when data was confirmed.

## Feature Groups

Features are organized into four groups:

| Group | Purpose | Examples |
|-------|---------|---------|
| Communication | Core real-time interaction | Video conferencing, chat and messaging |
| Collaboration | Shared work surfaces | Screen sharing, whiteboard, breakout rooms |
| Management | Session administration | Recording, AI notetaker |
| Engagement | Participant interaction | Polling, virtual backgrounds |

## Configuration

The ontology is defined in `project.yml` under `entities:`. Entity names, groups, statuses, and relationships are all configurable. The build script reads this config and generates the site accordingly.
