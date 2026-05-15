# Fictional AI Adoption Readiness Review — Greenfield Plumbing Co.

> Fictional sample only. No real company, customer, employee, system, credential, location, phone number, or private data is represented.

## Context

Greenfield Plumbing Co. is a fictional five-person local trades business. The owner wants to know where AI could help without risking customer privacy, scheduling mistakes, or production workflow disruption.

## Candidate workflows

| Workflow | Current pain | Repetition | Human review? | Customer impact? | Decision |
| --- | --- | --- | --- | --- | --- |
| Draft internal job checklist updates | Checklists are inconsistent after jobs | High | Yes | Low | Good draft-only candidate |
| Summarize fictional supplier product notes | Product comparisons take time | Medium | Yes | Low | Good secondary candidate |
| Auto-reply to customer emergency messages | Speed matters, but mistakes are risky | High | Partial | High | `[blocked]` |
| Predict technician routes from live calendar | Needs real schedules and locations | High | Yes | High | `[blocked]` |

## Scorecard

| Candidate use case | Value | Repetition | Data safety | Human review | Measurability | Total | Decision |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Draft internal job checklist updates | 4 | 4 | 5 | 5 | 4 | 22 | Draft-only pilot candidate |
| Summarize fictional supplier product notes | 3 | 3 | 5 | 5 | 3 | 19 | Refine scope |
| Auto-reply to customer emergency messages | 5 | 5 | 2 | 2 | 4 | 18 | `[blocked]` due to customer-impacting communication |
| Predict technician routes from live calendar | 4 | 4 | 2 | 4 | 4 | 18 | `[blocked]` due to live schedule/location data |

## Recommended pilot

Start with draft-only internal job checklist updates. Use fictional job notes or explicitly approved non-sensitive internal notes. A human owner reviews every output before it is used.

Do not connect calendars, messaging tools, customer systems, dispatch software, route planners, payments, or email/SMS accounts.

## Approval gates

Explicit approval is required before any of these:

- using real customer names, addresses, phone numbers, or job history;
- connecting calendar, dispatch, CRM, accounting, email, or SMS tools;
- sending or drafting customer-facing messages from real cases;
- using live technician schedules or locations;
- changing account settings, credentials, automations, pricing, or booking rules.

## Evidence to collect

| Evidence | Status | Notes |
| --- | --- | --- |
| Before/after checklist quality | not reviewed | Compare fictional checklist drafts only. |
| Owner edit notes | not reviewed | Human review required before use. |
| Time estimate | not reviewed | Manual estimate only. |
| Risk or error log | not reviewed | Record unsafe suggestions or missing caveats. |
| Customer-impact review | `[blocked]` | No customer-facing output approved. |

## Blockers

- Emergency message replies are `[blocked]` because they could affect real customers and safety expectations.
- Route planning is `[blocked]` because it needs live schedules, locations, and potentially customer addresses.
- No production systems, private accounts, customer records, technician locations, or credentials should be accessed.

## Go/no-go decision

- Decision: continue only with a draft-only internal checklist pilot.
- Stop if the pilot needs customer data, live schedules, account access, automation, or external communication.
