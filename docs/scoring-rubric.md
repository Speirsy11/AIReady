# AI Adoption Readiness Kit — Scoring Rubric

> Local review aid only. Scores do not approve implementation, deployment, private-data processing, external contact, spend, account changes, or private-system inspection.

Use this rubric to move from questionnaire notes to a clear decision: draft-only pilot, refine scope, park, stop, or `[blocked]`.

## Scoring dimensions

Score each candidate from 1 to 5 in `templates/use-case-scorecard.md`.

| Dimension | 1 | 3 | 5 |
| --- | --- | --- | --- |
| Value | Nice-to-have or unclear pain | Some recurring pain | Clear painful workflow with obvious benefit |
| Repetition | Rare or one-off | Monthly/occasional | Weekly/daily repeatable workflow |
| Data safety | Needs sensitive/private/regulated data | Mixed data, needs redaction | Public, fictional, or approved non-sensitive internal data |
| Human review | No clear reviewer | Reviewer exists but time is limited | Named reviewer can check every output |
| Measurability | Success is subjective | Some before/after signal | Clear time, quality, error, or confidence measure |

## Decision thresholds

| Total | Decision | Meaning |
| ---: | --- | --- |
| 21-25 | Draft-only pilot candidate | Good local candidate if no blockers apply. |
| 16-20 | Refine scope | Narrow data, workflow, reviewer, or metric before pilot. |
| 10-15 | Park | Likely low value, risky, or too vague for now. |
| Below 10 | Stop | Do not spend more local effort unless the workflow changes. |

## Mandatory blockers override scores

Mark the candidate `[blocked]` even if the total score is high when it requires:

- secrets, credentials, tokens, account changes, or billing access;
- production system access or production URLs;
- customer-impacting automation or customer-facing messages;
- private customer/user data, regulated data, financial/health/legal records, or live location/schedule data without approval;
- external contact, outreach, public posting, publishing, deployment, or spend;
- live security testing, scanning, exploitation, bounty submission, trading, or financial action.

## Intake-to-decision flow

1. Capture candidate workflows in `templates/readiness-questionnaire.md`.
2. Remove or mark `[blocked]` anything that needs approval-gated data/actions.
3. Score only the candidates that can be reviewed with fictional/sample or approved non-sensitive data.
4. Choose at most one draft-only pilot candidate.
5. Draft `templates/pilot-plan.md` with evidence, owner, and stop conditions.
6. Keep skipped checks as `not reviewed`; never treat skipped review as a pass.

## Example interpretation

A candidate with a score of 22 can still be `[blocked]` if it needs customer messages or live production data.

A candidate with a score of 17 may be worth refining if the risk can be reduced by using fictional data, narrowing the workflow, or adding a named human reviewer.

A candidate with a score of 12 should usually be parked unless it becomes more repetitive, measurable, or safer.

## Reviewer questions

Before a pilot decision, answer:

- What data is required, and can it stay fictional or non-sensitive?
- Who reviews every output before use?
- What action is explicitly forbidden without later approval?
- What evidence will prove the pilot helped?
- What would make this `[blocked]`?
