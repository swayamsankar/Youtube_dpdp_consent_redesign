<div align="center">

# YouTube · DPDP Consent Redesign

**Designing a DPDP-Compliant Consent & Child Privacy System for YouTube**

*Product thinking case study · Built for Vedantu's product design assignment*

[![Made with HTML/CSS/JS](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-FF0000?style=flat-square)](#)
[![DPDP Act 2023](https://img.shields.io/badge/compliance-DPDP%20Act%202023-111111?style=flat-square)](#)
[![Status](https://img.shields.io/badge/status-prototype-brightgreen?style=flat-square)](#)

[View the deck](#-case-study-deck) · [Try the prototype](#-clickable-prototype) · [Read the flow](#-redesigned-flow)

</div>

---

## Overview

YouTube currently has no way to tell a child from an adult at sign-up, and no verifiable, purpose-specific way for a parent to consent to a minor's data being processed. Under **India's DPDP Act, 2023**, that's not just a UX gap — Section 9 requires **verifiable parental consent** for any user under 18, with penalties of up to **₹200 crore** per breach.

This project redesigns YouTube's sign-up and consent experience around a simple idea: **ask honestly, verify lightly, consent specifically, and give parents a real place to control it.**

<br/>

## The Problem

| Today | Why it fails DPDP |
|---|---|
| Age is a self-declared date-of-birth field | Not verifiable — a 13-year-old can lie once and nobody checks |
| One bundled "I agree" to Google's ToS + Privacy Policy | Not "free, specific, informed, unambiguous" per Section 6 |
| No dedicated guardian role in the flow | Parents have no legal say despite being accountable under Section 9 |
| No single place to review or revoke consent | Fails the access/erasure rights guaranteed under Sections 11–13 |

<br/>

## 🖼️ UI Preview
<img width="1766" height="892" alt="image" src="https://github.com/user-attachments/assets/f7ff3f5e-cba8-4bc6-9adb-3433a696be77" />
<img width="1798" height="890" alt="image" src="https://github.com/user-attachments/assets/f74cde94-eeba-4953-91a1-3e2590c6f2b3" />
<img width="1825" height="911" alt="image" src="https://github.com/user-attachments/assets/b93a0467-7774-41b5-8a6c-69e0bb89adbe" />



## The Redesign

A four-part consent layer, purpose-built for minors — not a bigger checkbox:

- **🎯 Real age-intent gate** — asks directly and neutrally whether the account is for someone under 18
- **🛡️ Verifiable parental consent** — lightweight OTP verification to a separate guardian number, followed by a short, purpose-by-purpose consent screen
- **🚫 Off-by-default tracking** — behavioural tracking and targeted ads are switched off automatically for verified-minor accounts, no settings hunt required
- **🔑 Family Privacy Centre** — one screen for parents to see what's collected, adjust consent per purpose, or request erasure

```
User signs up as under 18
        ↓
Guardian mobile number entered
        ↓
OTP verification
        ↓
Parent gives purpose-specific consent
        ↓
Child account created
        ↓
Family Privacy Centre unlocked
```

**Why OTP-based guardian verification over the alternatives:**

| Option | Verdict | Reasoning |
|---|---|---|
| Document upload | ❌ Rejected | Too much friction for a mainstream consumer app |
| Aadhaar-linked verification | ❌ Rejected | Raises its own privacy and scope-creep concerns |
| **OTP to guardian's number** | ✅ Selected | Fast, low friction, independently checkable — good enough |

<br/>

## Clickable Prototype

A fully interactive, happy-path prototype covering sign-up through the Family Privacy Centre — including a condensed **Quick Setup** alternate path for users who'd rather complete everything on one screen.

### Screens
1. Sign up
2. Age-intent gate *(with link to Quick Setup)*
3. Guardian mobile number
4. OTP verification
5. Purpose-specific consent
6. Confirmation
7. Home feed *(supervised experience)*
8. Family Privacy Centre
9. Edit consent
10. Quick Setup *(condensed alternate flow)*

### Run it locally
No build step required — it's plain HTML/CSS/JS.

```bash
git clone https://github.com/<your-username>/youtube-dpdp-consent-redesign.git
cd youtube-dpdp-consent-redesign
open index.html   # or just double-click the file
```

### Project structure
```
youtube-dpdp-consent-redesign/
├── index.html      # markup for all 10 screens
├── style.css        # design tokens, layout, components
├── script.js         # screen navigation + history-aware back button
└── README.md
```

<br/>

## Measuring Success

**North Star Metric:** % of active under-18 accounts with valid, current, verified parental consent on file

| Supporting metrics | Guardrail metrics |
|---|---|
| Guardian consent-flow completion rate | New minor-account signup abandonment rate (must not spike) |
| Median time-to-complete the consent flow | DAU / watch-time for the verified-minor cohort (must not crater) |
| % of verified-minor accounts with tracking correctly disabled | |

**60-day success criteria:** ≥90% of newly created minor accounts carry verified consent · signup abandonment rises <5pp · zero unresolved critical compliance flags

<br/>

## Rollout Plan

Phased by cohort, validated by trend — not a blanket A/B test, since **whether to require verified consent is a legal floor, not a growth lever**.

1. **Phase 1 — New signups only:** ship to all new India sign-ups for smallest blast radius, fastest signal
2. **Phase 2 — Prompted re-verification:** existing self-declared-minor accounts get an in-app prompt with a grace period
3. **Phase 3 — Full enforcement:** unverified minor accounts default to tracking-off + limited features until consent completes

<br/>

## Trade-offs Accepted

Short-term signup and ad-revenue friction for the minor cohort, in exchange for a defensible compliance posture and durable parental trust. Chose OTP-based verification over document upload — lower friction, slightly weaker verification confidence.

<br/>

## Case Study Deck

The full 12-slide product thinking case study — problem framing, user research, current-state audit, redesign rationale, diagnostic thinking for a metric regression, a mock analytics dashboard, and expected impact — is included in this repo.

📄 `YouTube_DPDP_Consent_Deck.pdf`

<br/>

---

<div align="center">

*Built as a product thinking case study for Vedantu · Focus area: Children's Data Protection, Section 9, DPDP Act 2023*

</div>
