# Fictional AI Adoption Readiness Review — Northstar Bookkeeping Studio

> Fictional sample only. No real company, customer, system, credential, or private data is represented.

## Context

Northstar Bookkeeping Studio is a fictional three-person bookkeeping service. They want to use AI but are unsure where to start safely.

## Candidate workflows

| Workflow | Current pain | Repetition | Human review? | Customer impact? | Decision |
| --- | --- | --- | --- | --- | --- |
| Draft internal SOP summaries | Documentation is scattered | High | Yes | Low | Good draft-only candidate |
| Categorize customer transactions | Could expose private financial data | High | Yes | High | `[blocked]` |
| Draft client email replies | Tone consistency issue | Medium | Yes | Medium | Later, approval-gated |

## Scorecard

| Candidate use case | Value | Repetition | Data safety | Human review | Measurability | Total | Decision |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Draft internal SOP summaries | 4 | 4 | 5 | 5 | 4 | 22 | Draft-only pilot candidate |
| Categorize customer transactions | 5 | 5 | 1 | 4 | 4 | 19 | `[blocked]` due to private financial data |
| Draft client email replies | 3 | 3 | 3 | 5 | 3 | 17 | Refine later |

## Recommended pilot

Start with draft-only internal SOP summaries using fictional or approved non-sensitive notes. Keep human review mandatory. Do not process client records, connect accounting tools, send emails, or automate any workflow.

## Blockers

- Customer transaction categorization requires private financial data and must stay `[blocked]`.
- Client email drafts could affect customer communication and need explicit approval before real use.
- No production systems, accounts, credentials, or customer data should be accessed.
