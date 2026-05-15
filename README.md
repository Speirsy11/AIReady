# AIReady

**AIReady helps a team decide whether it is ready to adopt AI tools safely.**

It is a local self-assessment kit: ask readiness questions, score AI use cases, spot blocked workflows, and draft a small pilot plan.

## Who it is for

Small teams, agencies, or internal departments that want to use AI but are not sure which workflows are safe, useful, or measurable.

## How to use it

1. Start with `templates/readiness-questionnaire.md`
2. Score ideas with `templates/use-case-scorecard.md`
3. Compare examples in `samples/`
4. Draft a pilot with `templates/pilot-plan.md`
5. Run checks:

```bash
npm run check
```

## What it helps you answer

- Which workflows are good AI candidates?
- Which workflows are too risky right now?
- What data is sensitive?
- Where is human review required?
- What would a safe pilot look like?

## Example use case

A small team says, “We want to use AI in our operations.” AIReady helps them separate safe internal drafting tasks from blocked customer, compliance, production, or private-data workflows.

## Safety rule

Do not include secrets, customer data, production URLs, account IDs, or regulated data. Treat AI recommendations as draft work until reviewed by a human. This is a local starter artifact only and does not give permission to inspect private systems or contact anyone.
