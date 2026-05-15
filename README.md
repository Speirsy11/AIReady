# AI Adoption Readiness Kit

A local-first self-assessment kit for small teams deciding whether they are ready to adopt AI tools safely and usefully.

This repository is a **local starter artifact only**. It is not published, not pushed, not a SaaS product, and not permission to inspect private systems, process customer data, contact anyone, deploy anything, spend money, or change accounts/credentials.

## Why this exists

Many teams want to "use AI" before they know which workflows are safe, valuable, measurable, and reviewable. This kit turns AI adoption into a short readiness review: current workflows, data sensitivity, approval gates, candidate use cases, and a go/no-go decision.

## Included files

- `templates/readiness-questionnaire.md` — safe intake questions for workflow, data, risk, and success criteria.
- `templates/use-case-scorecard.md` — score candidate AI use cases before piloting.
- `templates/pilot-plan.md` — draft-only local pilot plan with approval gates.
- `samples/fictional-readiness-review.md` — fictional example review for a small service business.
- `samples/fictional-trades-readiness-review.md` — fictional trades-business review with blocked customer/scheduling workflows.
- `docs/service-note.md` — local product/service positioning note for later validation.
- `docs/review-packet.md` — local review order and go/no-go criteria.
- `docs/scoring-rubric.md` — compact scoring guide from intake to pilot/blocked decision.
- `docs/local-demo-script.md` — fictional 5-minute walkthrough from questionnaire to scorecard to pilot or blocked decision.
- `docs/public-repo-metadata-draft.md` — public-safe title, description, keywords, sample policy, and release checklist draft.
- `docs/review-worksheet.md` — local worksheet for scoring package readiness before any approval-gated next step.
- `docs/externalization-preflight.md` — local preflight for backup, public-safe prep, or real-team review.
- `scripts/validate.js` — validates required files and guardrail language.

## Safe workflow

1. Fill in the readiness questionnaire with fictional or explicitly approved data only.
2. Score candidate use cases before choosing a pilot.
3. Draft a pilot plan that stays local and approval-gated.
4. Record skipped checks as `not reviewed` or `[blocked]` rather than treating them as safe.
5. Run `npm run check` before review.

## Guardrails

- Do not include secrets, tokens, credentials, private customer data, production URLs, account IDs, or regulated data.
- Do not deploy, publish, push, spend, contact users, change credentials, or inspect private systems without explicit approval.
- Treat AI recommendations as draft work until reviewed by a human.
- Prefer low-risk internal workflows before customer-impacting or production workflows.

## Later revenue shape

After local review, this could become a small AI adoption readiness workshop, self-assessment template, or paid workflow audit entry point for small teams. Any public repo, outreach, payment setup, real-client use, private-system inspection, or deployment requires Charlie's explicit approval first.
