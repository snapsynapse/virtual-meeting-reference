# Accessibility Audit Project Context

## Project

- name: Virtual Classroom Watch
- base_url: http://127.0.0.1:8765
- repo_root: .
- app_root: .

## Audit Scope

- standards: WCAG 2.2 AA
- scan_mode: full
- include_routes:
  - /
- priority_routes:
  - /
  - /containers.html
  - /matrix.html
  - /compare.html
  - /container/zoom-workplace/
  - /primary/video-conferencing/
  - /authority/zoom/

## Output Configuration

- output_mode: markdown
- report_path: docs/accessibility/audits/audit-2026-09-05.md

## Regression Gate

- fail_on: new
- baseline_path: .a11y-audit/baseline.json
- baseline_policy: Baseline changes require explicit review and commit.
