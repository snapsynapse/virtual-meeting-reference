---
name: Jitsi Meet
authority: jitsi-community
market: Global
type: platform
status: active
enacted: 2016-01-01
effective: 2016-01-01
official_url: https://meet.jit.si
pricing_page: https://jaas.8x8.vc/
range: deployment-dependent
last_verified: 2026-09-05
---

## Timeline

| Milestone | Date | Notes |
|-----------|------|-------|
| Jitsi SIP Communicator | 2003-01-01 | Original open-source VoIP and IM client |
| Jitsi Meet launch | 2016-01-01 | WebRTC-based video conferencing application |
| 8x8 acquisition | 2018-10-01 | 8x8 acquires the Jitsi team and IP |
| Excalidraw whiteboard | 2022-06-01 | Integrated collaborative whiteboard via Excalidraw |

## Pricing

| Plan | Price | Notes |
|------|-------|-------|
| Self-hosted | Open source | Capacity depends on infrastructure and configuration |
| Jitsi as a Service | Usage-based | Verify current usage tiers in the JaaS billing console |

---

## Video Conferencing

| Property | Value |
|----------|-------|
| Obligation | video-conferencing |
| Sections | Meetings |
| Status | active |
| Effective | 2016-01-01 |
| Verified | 2026-09-05 |
| Checked | 2026-09-05 |

### Requirements

| Requirement | Details |
|-------------|---------|
| Participant limit | No hard limit; performance depends on server capacity |
| Video quality | WebRTC with adaptive simulcast |
| No account required | Anyone can join a meeting without creating an account |

### Editorial Summary

Jitsi Meet removes all sign-up barriers, letting anyone join a meeting instantly with just a browser link.

### Sources

- [Jitsi Meet](https://jitsi.org/jitsi-meet/)

---

## Screen Sharing

| Property | Value |
|----------|-------|
| Obligation | screen-sharing |
| Sections | Meetings |
| Status | active |
| Effective | 2016-01-01 |
| Verified | 2026-09-05 |
| Checked | 2026-09-05 |

### Requirements

| Requirement | Details |
|-------------|---------|
| Sharing options | Full screen, application window, or browser tab |
| Audio sharing | System audio can be shared with screen |
| Multiple sharers | Multiple participants can share simultaneously |

### Editorial Summary

Jitsi Meet supports multiple simultaneous screen shares, useful for pair programming and collaborative reviews.

### Sources

- [Jitsi Meet](https://jitsi.org/jitsi-meet/)

---

## Breakout Rooms

| Property | Value |
|----------|-------|
| Obligation | breakout-rooms |
| Sections | Meetings |
| Status | active |
| Effective | 2022-01-01 |
| Verified | 2026-09-05 |
| Checked | 2026-09-05 |

### Requirements

| Requirement | Details |
|-------------|---------|
| Room creation | Moderator creates breakout rooms from the main meeting |
| Assignment | Participants can be assigned or can self-select rooms |
| Auto-close | Rooms can be configured to close after a set duration |

### Editorial Summary

Jitsi Meet added breakout rooms to support educational and workshop scenarios alongside its open-source flexibility.

### Sources

- [Jitsi Meet](https://jitsi.org/jitsi-meet/)

---

## Recording and Transcription

| Property | Value |
|----------|-------|
| Obligation | recording |
| Sections | Meetings |
| Status | active |
| Effective | 2018-01-01 |
| Verified | 2026-09-05 |
| Checked | 2026-09-05 |

### Requirements

| Requirement | Details |
|-------------|---------|
| Jibri recording | Server-side recording via the Jibri component |
| Dropbox integration | Recordings can be saved directly to Dropbox |
| Live streaming | Stream meetings to YouTube or other RTMP destinations |

### Editorial Summary

Jitsi uses the Jibri component for server-side recording and live streaming to YouTube and RTMP endpoints.

### Sources

- [Jitsi Meet](https://jitsi.org/jitsi-meet/)

---

## Chat and Messaging

| Property | Value |
|----------|-------|
| Obligation | chat-messaging |
| Sections | Meetings |
| Status | active |
| Effective | 2016-01-01 |
| Verified | 2026-09-05 |
| Checked | 2026-09-05 |

### Requirements

| Requirement | Details |
|-------------|---------|
| In-meeting chat | Text chat during live meetings |
| Private messages | Direct messages to individual participants |
| Chat integration | XMPP-based messaging for extensibility |

### Editorial Summary

Jitsi's XMPP foundation enables extensible chat that can integrate with external messaging systems.

### Sources

- [Jitsi Meet](https://jitsi.org/jitsi-meet/)

---

## Polling and Q&A

| Property | Value |
|----------|-------|
| Obligation | polling |
| Sections | Meetings |
| Status | active |
| Effective | 2022-06-01 |
| Verified | 2026-09-05 |
| Checked | 2026-09-05 |

### Requirements

| Requirement | Details |
|-------------|---------|
| Polls | In-meeting polls for quick audience feedback |
| Reactions | Emoji reactions and raise hand functionality |
| Results | Poll results shared with all participants |

### Editorial Summary

Jitsi Meet's polling and reaction features provide lightweight audience engagement without third-party plugins.

### Sources

- [Jitsi Meet](https://jitsi.org/jitsi-meet/)

---

## Whiteboard

| Property | Value |
|----------|-------|
| Obligation | whiteboard |
| Sections | Meetings |
| Status | active |
| Effective | 2022-06-01 |
| Verified | 2026-09-05 |
| Checked | 2026-09-05 |

### Requirements

| Requirement | Details |
|-------------|---------|
| Excalidraw integration | Collaborative whiteboard powered by Excalidraw |
| Drawing tools | Freehand, shapes, text, and arrows |
| Real-time collaboration | All participants can draw simultaneously |

### Editorial Summary

Jitsi Meet integrates the open-source Excalidraw whiteboard, aligning with its fully open-source philosophy.

### Sources

- [Jitsi Meet](https://jitsi.org/jitsi-meet/)

---

## Virtual Backgrounds

| Property | Value |
|----------|-------|
| Obligation | virtual-backgrounds |
| Sections | Meetings |
| Status | active |
| Effective | 2021-01-01 |
| Verified | 2026-09-05 |
| Checked | 2026-09-05 |

### Requirements

| Requirement | Details |
|-------------|---------|
| Background images | Select from built-in options or upload custom images |
| Background blur | Blur background with adjustable intensity |
| Client-side processing | Virtual backgrounds processed locally via WebAssembly |

### Editorial Summary

Jitsi Meet processes virtual backgrounds locally via WebAssembly, keeping video data private on the client side.

### Sources

- [Jitsi Meet](https://jitsi.org/jitsi-meet/)
