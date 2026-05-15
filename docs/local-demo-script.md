# AI Adoption Readiness Kit — 5-Minute Local Demo Script

> Fictional/local demo only. This is not approval to inspect private systems, process customer data, create a remote, push, publish, deploy, contact anyone, spend money, change accounts/credentials, or create a paid offer.

Use this script to show the kit's value quickly without touching real workflows, private systems, or external accounts.

## Demo goal

Show how a reviewer can move from intake to a safe decision:

- capture candidate workflows;
- identify data sensitivity and approval gates;
- score use cases;
- apply mandatory blocker overrides;
- draft one local-only pilot plan or mark a use case `[blocked]`.

## Setup

From the repository root:

```bash
npm run check
git status --short --branch
```

Expected result: validation passes and the repo is clean after committed work.

## Minute-by-minute walkthrough

### Minute 1 — purpose and guardrails

Open `README.md` and point to:

- local starter artifact only;
- fictional or explicitly approved data only;
- no private-system inspection, customer data processing, deployment, outreach, spend, or credential changes without explicit approval;
- AI recommendations stay draft work until reviewed by a human.

Reviewer question: "Could this be run without touching real customer data?"

Expected answer: yes; the kit works as a fictional/local readiness review.

### Minute 2 — intake

Open `templates/readiness-questionnaire.md`.

Point out:

- workflow candidates;
- data sensitivity checkboxes;
- approval gates;
- success criteria;
- stop conditions.

Reviewer question: "What gets blocked before scoring?"

Expected answer: anything requiring secrets, production access, private/customer data, regulated data, external contact, spend, deployment, or account changes without approval.

### Minute 3 — scoring and blocker overrides

Open:

1. `templates/use-case-scorecard.md`
2. `docs/scoring-rubric.md`

Narrate the decision logic:

- 21-25 can become a draft-only pilot candidate if no blockers apply.
- 16-20 should be refined before pilot.
- 10-15 should usually be parked.
- Below 10 should stop.
- Mandatory blockers override high scores.

Reviewer question: "Can a high-value workflow still be `[blocked]`?"

Expected answer: yes; a high score does not approve private data, customer-impacting automation, production access, external contact, or spend.

### Minute 4 — fictional samples

Open:

1. `samples/fictional-readiness-review.md`
2. `samples/fictional-trades-readiness-review.md`
3. `samples/fictional-retail-readiness-review.md`

Compare the decisions:

- internal SOP/checklist work is a safer draft-only candidate;
- customer transaction categorization is `[blocked]` because it needs private financial data;
- emergency customer replies are `[blocked]` because they are customer-impacting communication;
- route planning is `[blocked]` because it needs live schedules and location/customer data.

Reviewer question: "What makes the safer candidates safer?"

Expected answer: they use fictional or approved non-sensitive internal notes, keep human review mandatory, and avoid production/customer-impacting systems.

### Minute 5 — pilot plan and externalization safety

Open:

1. `templates/pilot-plan.md`
2. `docs/externalization-preflight.md`
3. `docs/review-packet.md`

Run:

```bash
npm run check
```

Reviewer question: "What is the safest next action?"

Expected answer: keep local and fictional. If continuing later, choose exactly one approval-gated path: more fictional examples, private backup, public-safe prep, or a specific real-team review with clear data boundaries.

## Demo pass criteria

The demo passes if a reviewer can answer yes to all of these:

- The intake-to-scorecard-to-pilot flow is understandable in five minutes.
- Blocked workflows are clearly marked before any real data is used.
- high scores do not bypass approval gates.
- The pilot plan remains draft-only and human-reviewed.
- No real private system, customer/user data, regulated data, production URL, account, credential, contact detail, deployment, spend, or external action is needed.
- Validation passes locally.

## Demo fail criteria

Stop and revise if any are true:

- The reviewer needs real private/customer data to understand the value.
- The scorecard appears to approve implementation by itself.
- `[blocked]` use cases look like lower-priority backlog items instead of hard approval stops.
- The pilot plan implies deployment, automation, outreach, spend, or private-system access.
- Skipped checks can be confused with a pass instead of `not reviewed`.
