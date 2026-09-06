<!-- Upstream template: portfolio-search-indexing-audit bundle v7; repository contract v4 -->
---
title: "Search indexing"
purpose: "Property-specific index policy, validation commands, deployment gate, and console follow-up."
status: active
updated: 2026-09-05
owner: "Sam"
open_tasks: []
---
# Search indexing

Canonical origin: `https://virtualclassroom.watch/`

Console property ID: `UNSET: verify before console work`

Property mode: `website`

Generated output: `docs`

If deployment assembles a separate staging directory, this path must name that exact deployable artifact, not its source directory.

## Index policy

| Surface | Policy | Reason |
|---|---|---|
| Core pages, `/container/`, `/primary/`, `/authority/`, `/requires/`, and substantive `/compare/` routes | Index and include in sitemap | Canonical reader and comparison destinations |
| `404.html` and comparisons with no shared capabilities | `noindex` and omit from sitemap | Not useful search destinations |
| `index.xml`, `/api/`, `robots.txt`, `llms.txt`, `agents.json`, and `/.well-known/` | Crawlable machine surfaces, omit from HTML sitemap | Discovery or machine consumption, not canonical HTML |
| Retired UberConference capability routes | Return 404 and remain absent from sitemap | UberConference is a historical Dialpad alias, not a separate capability source |
| External platform copies | Omit from sitemap | Distribution copies are not site canonical pages |

## Validation lanes

- Offline: `node scripts/check-search.mjs`
- Production after deployment: `node scripts/check-production-search.mjs`
- Machine-readable output: add `--json`
- Local HTTP test: add `--base=http://127.0.0.1:8765/` after starting the static server on port 8765

Exit code `0` is pass, `1` is a site defect, and `2` is configuration or infrastructure failure.

For a creator-profile or external-platform property, replace the website validation lanes with the reports and controls the property actually exposes. Do not invent repository, production, sitemap, or indexing work.

## Deployment and console sequence

1. Run the normal build and offline search contract.
2. If deployment copies or transforms output, stage the exact deployable artifact with the same builder used by release automation.
3. Ensure repository-wide checks include newly scaffolded files, including checks based on `git ls-files`.
4. Deploy through the repository's normal release path.
5. Wait for the deployment to complete.
6. Run the production search contract.
7. Confirm the deployed sitemap URL set matches the repository sitemap.
8. Refresh a materially changed stale sitemap at most once, using its full canonical URL for a domain property.
9. Inspect or request indexing for canonical HTML pages.
10. Start issue-group validation only when matching production behavior is live.
11. Record console state under `ops/search/<provider>/YYYY-MM-DD/`.

## Expected noise

- `https://www.virtualclassroom.watch/` redirects to the bare canonical host.
- `404.html` and zero-overlap comparison pages are intentionally noindex.
- Feed, API, and agent discovery resources are crawlable but are not HTML sitemap targets.
- Removed UberConference capability paths are intentional 404 responses.

## Current baseline

Audit date: 2026-09-05.

- Authority: local fixes, evidence writes, Git commit, push, and deployment authorized. Google Search Console mutation remains outside this delivery until the exact property is identified and the deployed sitemap passes production verification.
- Source revision: `997b34545b01274793c33d73418e6c2c251836c9` plus the current uncommitted correction tranche.
- Offline contract: 424 sitemap pages, 0 defects, 0 infrastructure failures after remediation.
- Production deployment: GitHub Pages reports built from `main` at `997b34545b01274793c33d73418e6c2c251836c9`.
- Production state: healthy HTTP, canonical, robots, discovery files, and hard 404 behavior, but stale relative to local corrections.
- Sitemap drift: production has 449 URLs; corrected local output has 424. The production contract identifies 25 stale URLs, all involving the retired UberConference record: four capability routes and 21 comparison routes.
- Console property ID: unknown. The sitemap has never been submitted to Google Search Console; console reports and actions were not inspected.
- Publication sequence: commit and push the corrected repository, wait for the Pages deployment, run the production contract, and verify `https://virtualclassroom.watch/sitemap.xml` before any first submission.

Do not repeat before deployment: no sitemap submission, indexing request,
validation request, or IndexNow action has been accepted in this run.

## Console action ledger

Read this table before opening the console. Add only observed actions and confirmations. An accepted request remains pending until a later report proves completion.

| Provider and property | Action and target | Accepted at | Confirmation | Result class | Repeat policy | Next review |
|---|---|---|---|---|---|---|

Keep rejected attempts and unknown outcomes distinct from accepted actions. Do not repeat an accepted action merely because the provider report remains stale.

Append each observed action immediately and read it back. Keep this as the authoritative ledger; dated reports should link here rather than duplicate the table. Before closeout, verify the baseline and ledger against observed results and check for incidental browser artifacts. Record evidence-only commits separately from the verified implementation deployment.
