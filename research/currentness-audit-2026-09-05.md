# Currentness audit, 2026-09-05

## Scope and method

This audit checked all 22 platform records against first-party product, support, pricing, release-note, and corporate sources available on 2026-09-05. It did not change the dataset. A claim is not treated as current merely because the repository validates or builds.

## Conclusion

The repository needs a substantive data refresh. Counts, cross-references, and generated/source parity are healthy, but every platform record has the same `last_verified: 2026-03-25` stamp and material status, pricing, capacity, terminology, chronology, URL, and provenance defects remain.

## Implementation status

The corrections identified below were applied locally on 2026-09-05. Defensible current facts replaced stale claims; claims that could not be confirmed from accessible first-party material were changed to quote-based, capacity-based, or explicitly unverified language. UberConference is retained as a historical alias with no duplicate capability mappings. Generated output now contains 153 current capability mappings.

## P0: status and identity corrections

| Record | Current repo claim | Finding | First-party evidence |
|---|---|---|---|
| Skype | `limited` | Consumer Skype retired on 2025-05-05. Change the platform and capability statuses to `discontinued`, add the retirement milestone, and remove current pricing framing. | [Microsoft Skype retirement notice](https://support.microsoft.com/en-us/skype/4e034bbd-cb7a-48b7-9f5a-594255f62836) |
| AnyMeeting | `discontinued` | Intermedia currently markets AnyMeeting within Unite. Restore an active/current framing and reverify its current limits, AI recap, pricing, URL, and capabilities. | [Intermedia AnyMeeting](https://intermedia.com/products/anymeeting-video-conferencing), [Intermedia FAQ](https://support.intermedia.com/app/articles/detail/a_id/15495/~/intermedia-anymeeting-common-topics-%26-faqs) |
| Lifesize | `limited`; Enghouse acquisition dated 2022-10-01 | Enghouse currently markets and supports Lifesize. Enghouse completed the asset acquisition on 2023-08-01. The invented 2023 limited-availability milestone and old pricing need removal or replacement. | [Enghouse Lifesize](https://enghousevideo.com/lifesize), [Enghouse acquisition release](https://enghouse.com/wp-content/uploads/2023/08/20230801-Enghouse-Systems-Completes-Lifesize-Acquisition.pdf) |
| UberConference | rebranded in 2020; capabilities still `active` under a discontinued container | Dialpad announced the Dialpad Meetings name on 2021-06-30. Treat UberConference consistently as a historical alias or migrate its capabilities to the existing Dialpad Meetings record to avoid double-counting. | [Dialpad rebrand documentation](https://help.dialpad.com/docs/dialpad-meetings-rebrand), [Dialpad announcement](https://dialpad.com/press/dialpad-meetings/) |

## P1: material active-product corrections

| Platform | Material updates required | First-party evidence |
|---|---|---|
| Whereby | Replace all plan prices and Free limits; distinguish Meetings local recording from Embedded cloud recording; remove or prove polling. Current monthly figures are Free $0 with 4 attendees/30 minutes, Pro $10.99 with 100 attendees, and Business $13.99 per host with a three-host minimum and 200 attendees. | [Whereby pricing](https://whereby.com/information/meetings/pricing), [Whereby features](https://whereby.com/information/features) |
| Zoho Meeting | Free 100/60 remains current, but the $1 Standard and $3 Professional prices are stale. Use the live capacity/host selector or avoid fixed prices. | [Zoho Meeting pricing](https://zoho.com/meeting/pricing.html), [volume discounts](https://zoho.com/meeting/volume-discounts.html) |
| ClickMeeting | Separate online meetings, live webinars, and Custom events. Meetings allow 40 active participants, live webinars up to 1,000, and Custom events up to 10,000. Fixed prices and the 1,000 Enterprise ceiling are stale. | [ClickMeeting pricing](https://clickmeeting.com/pricing), [event types](https://knowledge.clickmeeting.com/knowledge-base/event-types/live-webinars/) |
| Dialpad Meetings | Do not present Dialpad Connect prices as Meetings plans. Regular Meetings Business supports 150; the Large Meetings add-on advertises up to 1,500. Reframe the “native whiteboard” as a Miro integration. | [Dialpad Meetings billing](https://help.dialpad.com/docs/dialpad-ai-meetings-billing), [Large Meetings](https://help.dialpad.com/v1/docs/large-meetings), [Miro integration](https://help.dialpad.com/docs/miro-dialpad-meetings) |
| Lark | The main plans page lists Starter at 20 users with one-to-one meetings, adds Basic at $6/user/month annually, and gives Pro/Enterprise a 500-participant maximum. The repo's Starter 50-user and Enterprise “Unlimited” claims are wrong. | [Lark plans](https://larksuite.com/en_us/plans) |
| BigBlueButton | Remove the universal 300 ceiling and third-party $5-$50 hosted price. Official guidance recommends no single session over 200 and capacity is deployment-dependent. Add current 3.0 context. | [BigBlueButton FAQ](https://docs.bigbluebutton.org/support/faq/), [installation guide](https://docs.bigbluebutton.org/administration/install/) |
| Jitsi Meet | Remove the universal 500-person range. Self-hosted limits are configurable and infrastructure-dependent. Refresh or mark the JaaS price rows unverifiable. | [Jitsi FAQ](https://jitsi.github.io/handbook/docs/faq/), [reservation and limits](https://jitsi.github.io/handbook/docs/devops-guide/reservation/) |
| Adobe Connect | Replace obsolete Named/Shared Host pricing with current annual Standard, Premium, Enterprise, and capacity-upgrade pricing. Virtual backgrounds are current across base tiers, not `limited`. Correct the Connect 12 rollout dates. | [Adobe Connect pricing](https://adobe.com/products/adobeconnect/pricing.html), [12.7 release notes](https://helpx.adobe.com/adobe-connect/release-note/adobe-connect-12-7-release-notes.html), [12 release notes](https://helpx.adobe.com/adobe-connect/release-note/adobe-connect-12-release-notes.html) |
| Microsoft Teams | Replace the bare 20,000 range. Regular meetings support 1,000 interactive plus 10,000 view-only participants; large-event packaging differs. Update Business pricing and state exact Copilot/intelligent-recap license prerequisites. | [Microsoft meeting and event limits](https://learn.microsoft.com/en-us/microsoftteams/overview-meetings-webinars-town-halls), [Teams business pricing](https://microsoft.com/en-us/microsoft-teams/compare-microsoft-teams-business-options) |
| Google Meet | Increase the qualified maximum to 1,000 for Enterprise Plus and Enterprise Essentials Plus, noting that connections after 500 are view-only. | [Google Meet participant limits](https://support.google.com/meet/answer/7317473) |
| Slack | Update Business+ from $12.50 to $15 annually or $18 monthly. State that a 50-person huddle permits only 25 simultaneous video participants and at most two simultaneous screen sharers. | [Slack pricing](https://slack.com/pricing), [Slack huddles limits](https://slack.com/help/articles/4402059015315-Use-huddles-in-Slack) |
| Zoom Workplace | Qualify 1,000 participants as an eligible enterprise or Large Meeting capacity, not a generic paid-plan maximum. Refresh AI Companion terminology and packaging against Zoom's current ZoomMate presentation. | [Zoom collaboration products](https://zoom.com/en/products/collaboration-tools/) |
| RingCentral Video | Refresh RingSense terminology to RingCentral AI Assistant for meeting transcription, summaries, action items, highlights, and chapters. Do not freshly verify inaccessible prices or precise entitlement claims without manual first-party evidence. | [RingCentral plans](https://ringcentral.com/us/en/office/plansandpricing.html) |
| GoTo Meeting | Current public material supports named tiers and 150/250 capacities but not the repo's fixed prices. Polling appears conflated with GoTo Webinar, and “whiteboard” should be narrowed to annotation unless independently proven. | [GoTo Meeting pricing](https://goto.com/pricing/meeting) |

## P2: records needing bounded refresh or verification

- 8x8 remains active and the 500-participant claim is current, but hard-coded X-series prices are no longer supported by the current quote-based page. [8x8 video conferencing](https://8x8.com/products/video-conferencing)
- BlueJeans is correctly classified as discontinued, but `bluejeans.com` is dead, all nine citations are unusable, and the recorded 2024 wind-down dates lack first-party support. Verizon documented a cease-to-offer date of 2023-08-08. [Verizon service guide](https://verizon.com/business/service_guide/reg/bluejeans_by_verizon_2023SEP01_mk.pdf)
- Webex remains active and core features are directionally current, but current plan prices and entitlements were not accessible enough to confirm. Mark them unverified until manually checked. [Webex pricing](https://webex.com/pricing.html)
- TrueConf's 1,500 capacity, on-premises model, recording, and 4K support remain supported. Current fixed prices and several fine-grained feature claims were not verifiable. [TrueConf webinar guidance](https://trueconf.com/blog/knowledge-base/how-to-host-a-webinar-using-trueconf-server)

## Corpus-wide provenance and validation defects

1. All 157 capability records present an unattributed sentence in both a Markdown blockquote and quotation marks. Generic product pages do not establish these as verbatim vendor quotations. Relabel them as editorial summaries and remove quotation formatting, or attach a precise source and attribution.
2. Exact day-level timeline dates are commonly supported only by current product homepages. Add release-note/newsroom evidence or reduce precision to the level actually supported.
3. The validator checks cross-references, not status consistency, date validity, URL health, pricing freshness, redirects, or quotation provenance. That is why it passes with contradictions such as `lifesize` being `limited` while its capabilities are `active`, and `uberconference` being `discontinued` while its capabilities are `active`.
4. `generatedAt` in the JSON API is derived from the maximum `last_verified` source date, not the actual build time. Rename the field or emit separate `sourceVerifiedThrough` and build timestamps.
5. Normalize ordinary web URLs from `www` to bare domains under the repository's global URL convention.

## What is healthy

- `node scripts/validate.js` passes.
- README counts match the data: 22 platforms, 20 vendors, 9 features, and 157 capability mappings.
- Source and generated output are in parity.
- The repository worktree was clean before this audit note was added.

## Recommended remediation order

1. Correct Skype, AnyMeeting, Lifesize, and UberConference/Dialpad identity and status.
2. Correct Whereby, Zoho, ClickMeeting, Dialpad, Lark, Adobe, Teams, and Google capacity/pricing facts.
3. Remove misleading quotation formatting and replace generic citations with claim-level sources.
4. Refresh the remaining active records, changing `last_verified` only after their individual claims are checked.
5. Extend validation for container/capability status contradictions, date shape and chronology, URL health/redirects, and provenance requirements.
6. Rebuild generated output and then verify the live deployment separately.
