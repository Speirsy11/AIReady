# Fictional AI Adoption Readiness Review — Maple Lane Retail

> Fictional sample only. No real company, customer, employee, vendor, system, credential, location, phone number, order, payment, inventory, or private data is represented.

## Context

Maple Lane Retail is a fictional two-location boutique retailer. The owner wants practical AI help for repetitive internal work without exposing customer records, live stock levels, supplier terms, payment data, or customer-facing communications.

## Candidate workflows

| Workflow | Current pain | Repetition | Human review? | Customer impact? | Decision |
| --- | --- | --- | --- | --- | --- |
| Draft internal product training notes from fictional product blurbs | Staff onboarding notes are inconsistent | High | Yes | Low | Good draft-only pilot candidate |
| Summarize fictional seasonal merchandising ideas | Planning is scattered across notes | Medium | Yes | Low | Good secondary candidate |
| Recommend reorder quantities from live inventory and sales data | Could affect cashflow and stock availability | High | Yes | High | `[blocked]` |
| Draft replies to customer complaints from real order history | Tone and accuracy matter; private order data involved | Medium | Yes | High | `[blocked]` |

## Scorecard

| Candidate use case | Value | Repetition | Data safety | Human review | Measurability | Total | Decision |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Draft internal product training notes | 4 | 4 | 5 | 5 | 4 | 22 | Draft-only pilot candidate |
| Summarize fictional seasonal merchandising ideas | 3 | 3 | 5 | 5 | 3 | 19 | Refine scope |
| Recommend reorder quantities from live inventory and sales data | 5 | 5 | 2 | 4 | 4 | 20 | `[blocked]` due to live inventory/sales data and business-impacting decisions |
| Draft replies to customer complaints from real order history | 4 | 3 | 2 | 4 | 3 | 16 | `[blocked]` due to customer communication and private order data |

## Recommended pilot

Start with draft-only internal product training notes. Use fictional product blurbs or explicitly approved non-sensitive public product descriptions. A human manager reviews every generated note before sharing it internally.

Do not connect point-of-sale tools, ecommerce platforms, inventory systems, email, social inboxes, customer-service tools, payment providers, analytics accounts, supplier portals, or spreadsheets containing real customer/order/vendor data.

## Approval gates

Explicit approval is required before any of these:

- using real customer names, order histories, payment records, loyalty data, addresses, phone numbers, or complaint text;
- connecting POS, ecommerce, inventory, analytics, helpdesk, email, social inbox, supplier, accounting, or payment systems;
- generating customer-facing replies, public product claims, discounts, pricing changes, or stock recommendations from real data;
- changing account settings, credentials, automations, pricing, promotions, order rules, or fulfilment processes;
- using private vendor terms, wholesale prices, invoices, or contracts.

## Evidence to collect

| Evidence | Status | Notes |
| --- | --- | --- |
| Training note clarity | not reviewed | Compare fictional product-note drafts only. |
| Manager edit notes | not reviewed | Human review required before internal use. |
| Staff comprehension checklist | not reviewed | Use fictional scenario questions only. |
| Unsafe suggestion log | not reviewed | Record unsupported claims, missing caveats, or pricing/inventory suggestions. |
| Customer/order-data review | `[blocked]` | No real customer, order, payment, or inventory data approved. |

## Blockers

- Reorder recommendations are `[blocked]` because they need live inventory/sales data and could affect cashflow, availability, or customer experience.
- Complaint replies are `[blocked]` because they require private order history and could create customer-facing commitments.
- No production systems, POS/ecommerce tools, private spreadsheets, vendor portals, customer records, payment data, account access, or credentials should be accessed.

## Go/no-go decision

- Decision: continue only with a draft-only internal product training notes pilot.
- Stop if the pilot needs customer/order/vendor/payment data, live stock levels, account access, automation, public claims, pricing changes, or external communication.
