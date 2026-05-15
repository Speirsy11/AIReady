# AI Adoption Readiness Kit — Review Worksheet

> Local review worksheet only. This is not approval to publish, push, contact anyone, inspect private systems, process customer/user data, deploy anything, spend money, change accounts/credentials, or create a paid offer.

Use this worksheet to score whether the local package is ready for one later approval-gated next step.

## Review metadata

- Reviewer:
- Date:
- Repo state checked: `git status --short --branch`
- Validation checked: `npm run check`
- Sensitive-pattern grep reviewed: yes / no
- Proposed next step: keep local / private backup / public-safe prep / real-team review / other

## Package readiness score

Score each area 0, 1, or 2.

| Area | 0 | 1 | 2 | Score |
| --- | --- | --- | --- | ---: |
| Purpose clarity | Vague AI adoption framing | Mostly clear | Clear readiness/self-assessment purpose | |
| Safe intake | Needs private data | Some redaction needed | Works with fictional or approved non-sensitive data | |
| Use-case scoring | Hard to interpret | Somewhat useful | Clear value/repetition/safety/review/measurement scoring | |
| Blocker handling | Easy to miss blockers | Some blockers visible | Mandatory blockers override scores | |
| Pilot boundary | Implementation implied | Some approval gates | Draft-only, human-reviewed, stop conditions explicit | |
| Sample usefulness | Too thin | Shows one pattern | Multiple fictional samples show safe and blocked workflows | |
| Externalization safety | Gates unclear | Some gates | Exactly one approval-gated path required | |

Total:

## Interpretation

- **12-14:** strong local package; consider exactly one later approval-gated next step.
- **8-11:** refine locally before any external step.
- **0-7:** park or rethink the kit shape.

Any release blocker below overrides the score.

## Release blockers

Mark `[blocked]` if any are true:

- [ ] Any real company, client, customer, user, account, production, contact, or private-system data appears in files or commit messages.
- [ ] The kit implies permission to process private/customer/user data without approval.
- [ ] The kit implies permission to deploy, automate, contact users/customers, spend money, publish, or push.
- [ ] High scores can bypass mandatory blockers.
- [ ] AI outputs appear usable without human review.
- [ ] Skipped checks can be mistaken for passed checks.
- [ ] The proposed next step includes more than one approval-gated action.

## Evidence notes

### Strongest assets

- `templates/readiness-questionnaire.md`:
- `templates/use-case-scorecard.md`:
- `docs/scoring-rubric.md`:
- `docs/local-demo-script.md`:
- `samples/fictional-trades-readiness-review.md`:
- `docs/externalization-preflight.md`:

### Weakest or unclear assets

- Asset:
- Concern:
- Local fix:

## Decision

Choose one:

- [ ] Keep local and improve further.
- [ ] Park; marginal improvements are now too low-value.
- [ ] Prepare private remote backup request for Charlie to approve later.
- [ ] Prepare public-safe repo prep request for Charlie to approve later.
- [ ] Prepare one specific real-team review request for Charlie to approve later.

## If continuing locally

Next local artifact or edit:

Stop condition for local work:

## If requesting approval later

Do not act yet. Draft only:

- Exact requested action:
- Exact destination/team/workflow, if applicable:
- Exact command/message, if applicable:
- Allowed data boundary:
- Explicit non-goals:
- Rollback/containment:

## Approval reminder

This worksheet cannot approve external action. It only helps decide whether the local package is strong enough to ask Charlie for one explicit approval-gated next step later.
