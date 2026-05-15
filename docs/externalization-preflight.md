# AI Adoption Readiness Kit — Externalization Preflight

> Local preflight only. This is not approval to create a remote, push, publish, post, contact anyone, spend money, deploy anything, inspect private systems, process customer data, or change accounts/credentials.

Use this before any future private backup, public-safe repo prep, or real-team review.

## Current status

- Repository: local/private only.
- Remote: no remote configured or pushed.
- Data: fictional sample only.
- Systems: no private systems inspected.
- External actions: no public page, package publish, outreach, payment setup, deployment, private-system access, customer/user contact, or spend.

## File inventory

### Core docs

- `README.md` — kit overview, safe workflow, guardrails, and later revenue shape.
- `docs/review-packet.md` — local review order and go/no-go criteria.
- `docs/scoring-rubric.md` — local scoring thresholds and blocker overrides.
- `docs/service-note.md` — internal product/service positioning note.
- `docs/externalization-preflight.md` — this local approval and safety preflight.

### Templates

- `templates/readiness-questionnaire.md` — safe intake for workflow candidates, data sensitivity, approval gates, success criteria, and stop conditions.
- `templates/use-case-scorecard.md` — candidate scoring with mandatory blockers.
- `templates/pilot-plan.md` — draft-only local pilot plan with approval gates and evidence collection.

### Fictional samples

- `samples/fictional-readiness-review.md` — fictional AI adoption review for a small service business.
- `samples/fictional-trades-readiness-review.md` — fictional trades-business review with blocked customer/scheduling workflows.

## Sensitive-data check

Before any externalization, inspect for:

- secrets, tokens, credentials, private keys, account IDs, production URLs, private hostnames, or regulated data;
- real customer/user data, real client names, real financial/health/legal records, or private business data;
- wording that implies permission to inspect private systems, process customer data, deploy, publish, contact users, spend money, or change credentials.

Suggested local checks:

```bash
cd /Users/charliespeirs/Developer/ai-adoption-readiness-kit
npm run check
git status --short --branch
git grep -nE "(api[_-]?key|secret|token|password|passwd|bearer|sk-[A-Za-z0-9]|AKIA|private key|BEGIN .*PRIVATE|production URL|account ID|customer data|regulated data|@|\+44)" -- . ':!docs/externalization-preflight.md'
```

Expected matches are guardrail/denylist language only. Any real secret, contact detail, private system detail, customer/user data, account ID, production URL, or regulated data blocks externalization.

## Approval gates by path

### Path A — keep local

No external approval needed. Continue improving templates, fictional samples, validation, and local review docs.

### Path B — private remote backup

Requires Charlie approval for repository host, visibility, exact remote URL, and exact push command. The backup must not enable public discovery, issues, Pages, packages, releases, actions, outreach, or payment flows.

### Path C — public-safe repo prep

Local prep can draft public README wording, metadata, license options, and examples. Public push, publishing, package release, GitHub Pages, social posts, and community sharing all require separate explicit approval.

### Path D — real-team or real-workflow review

Requires Charlie approval for the exact team/workflow, data boundary, allowed files/systems, allowed commands, and forbidden actions. No customer data, private-system inspection, external messages, deployment, spend, account changes, or credential access without separate approval.

## Release blockers

Block externalization if any are true:

- Non-fictional company, client, customer, workflow, system, or account details appear in docs or samples.
- Any real secret, credential, token, account ID, private URL, regulated data, or customer/user data appears.
- The docs imply AI outputs may be used without human review.
- The docs imply permission to inspect private systems, process customer data, deploy, publish, contact users, spend money, or change credentials without explicit approval.
- Skipped checks can be hidden instead of marked `not reviewed` or `[blocked]`.

## Current recommendation

Keep this local and consider adding a local demo script before any external step. Do not create a remote, publish, contact anyone, or use real team data without explicit approval.
