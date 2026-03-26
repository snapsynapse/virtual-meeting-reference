# Contributing

## Adding a New Platform

1. **Create the platform file** at `data/examples/platforms/{id}.md`
   - Use kebab-case for the filename (e.g., `goto-meeting.md`)
   - Follow the format in `data/examples/_schema.md`
   - Include frontmatter, timeline table, pricing table, and at least one provision section

2. **Create or verify the vendor file** at `data/examples/vendors/{id}.md`
   - If the vendor doesn't exist yet, create it
   - Add the new platform ID to the vendor's platforms list

3. **Add capability entries** to `data/examples/mapping/index.yml`
   - Map each provision section to its feature(s)

4. **Validate**: `node scripts/validate.js`

5. **Build**: `node scripts/build.js`

6. **Submit a PR** with your changes

## Adding a New Feature

1. **Create the feature file** at `data/examples/features/{id}.md`
   - Include `id`, `name`, `group`, and `status` in frontmatter
   - Add `Summary`, `What Counts`, and `What Does Not Count` sections
   - Assign to a group: `communication`, `collaboration`, `management`, or `engagement`

2. **Add capability mappings** for existing platforms that support the feature

3. **Validate and build**

## Updating an Existing Platform

1. Edit the platform file in `data/examples/platforms/`
2. Update the `last_verified` date
3. Add timeline entries for any new milestones
4. Run validate and build

## Date Conventions

- Use ISO 8601 dates: `YYYY-MM-DD`
- Always update `last_verified` when you review a platform (even if nothing changed)

## Style Guide

- Use plain English over marketing language
- Platform names should match the vendor's official naming
- Pricing should reflect the most current published rates
- IDs are kebab-case slugs derived from the display name
- Feature definitions should be specific enough to distinguish "has it" from "doesn't have it"
