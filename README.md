# Virtual Meeting Software Guide

A structured, version-controlled reference tracking virtual meeting and classroom platforms, their vendors, and feature capabilities.

**Live site:** https://meetings.snapsynapse.com

## What This Tracks

- **22 platforms** — Zoom, Microsoft Teams, Google Meet, Webex, BigBlueButton, and more
- **9 features** — video conferencing, screen sharing, breakout rooms, AI notetakers, and more
- **20 vendors** — the companies behind the platforms
- **157 capabilities** — individual assessments of how each platform supports each feature

## Data Model

**Feature-first ontology:** Stable meeting features (video conferencing, screen sharing) are the anchors. Platform capabilities are implementations — different platforms support the same features differently.

```
Vendor → Platform → Capability → Feature
```

| Role | Entity | What it is |
|------|--------|-----------|
| Authority | Vendor | Company that produces the platform (Zoom, Microsoft, Google) |
| Container | Platform | The meeting product (Zoom Workplace, Microsoft Teams, Google Meet) |
| Secondary | Capability | How a platform supports a feature (its specific implementation) |
| Primary | Feature | A stable meeting capability (video conferencing, breakout rooms) |

## Access Layers

| Layer | Path | Consumer |
|-------|------|----------|
| HTML Site | `docs/` | Human readers |
| JSON API | `docs/api/v1/` | Programmatic access |

## Quick Start

```bash
# Validate all cross-references
node scripts/validate.js

# Build the site and JSON API
node scripts/build.js
```

Zero dependencies — uses only Node.js built-ins.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add or update platform data.

## Architecture

See [design/](design/) for architecture patterns and the ontology model.

## Disclaimer

This is a reference tool, not professional advice. Platform pricing, features, and availability change frequently. Always verify with the vendor's official site before making purchasing decisions.

## License

[MIT](LICENSE)
