# AI Use-Case Scorecard

> Draft scoring tool only. Scores do not approve implementation, deployment, private-data processing, or external action.

Score each candidate from 1 (weak/risky) to 5 (strong/safe). See `docs/scoring-rubric.md` for scoring definitions, threshold interpretation, and blocker overrides.

| Candidate use case | Value | Repetition | Data safety | Human review | Measurability | Total | Decision |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Example: draft internal SOP summary | 4 | 4 | 5 | 5 | 4 | 22 | Draft-only pilot candidate |

## Decision guide

- 21-25: candidate for draft-only local pilot if approval gates are clear.
- 16-20: refine scope before pilot.
- 10-15: likely low-value or risky; park it.
- Below 10: stop.

## Mandatory blockers

Regardless of score, mark `[blocked]` if the use case requires:

- secrets, credentials, tokens, or account changes;
- production system access;
- customer-impacting automation;
- regulated or private customer data without approval;
- external contact, publishing, or spend;
- live security testing or scanning.
