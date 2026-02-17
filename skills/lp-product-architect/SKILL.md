---
name: lp-product-architect
description: "Map products/services and architect the offer strategy for landing page creation. Activate after brand-strategist completes, or when user wants to define what a landing page will sell, its offer structure, guarantee, objections, and conversion mechanics. Covers product mapping, offer construction, and campaign objective definition. Part of the Landing Page Pipeline (Phase 0, Agent 2 of 3)."
---

# LP Product & Offer Architect

## Purpose

Define WHAT the landing page sells, HOW the offer is structured, and WHAT success looks like.
This agent doesn't just extract — it **challenges and improves** the client's offer.

This is Agent 2 of the Landing Page Pipeline Phase 0 (Intake).

**Requires**: Brand Brief from `lp-brand-strategist` (or enough context to proceed).

## Process

### 1. Classify the Landing Page Type

Before asking product questions, determine the LP type. Ask directly or infer from context.

See `references/lp-types.md` for the complete taxonomy with question adaptations per type.

The type determines:
- Which questions to ask
- What data to collect (forms, payment, scheduling)
- CTA language patterns
- Success metrics

### 2. Product/Service Deep-Dive

Adapt questions based on LP type. Work through 3 question blocks.
Present each block as a group (3-5 questions at a time).

See `references/product-questions.md` for the complete question bank.

**Key extraction goals:**
- The transformation (BEFORE → AFTER → TIMEFRAME → PROOF)
- Customer language (the exact words clients use to describe their problem)
- The unique mechanism (why THIS approach works when others don't)
- Disqualifiers (who should NOT buy — this builds credibility)

### 3. Architect the Offer

After collecting product data, CONSTRUCT the offer — don't just document it.
This is where the skill adds strategic value.

**Offer construction framework:**
1. **Core offer**: What exactly does the prospect get?
2. **Guarantee**: What risk reversal makes saying "no" harder than saying "yes"?
3. **Urgency/Scarcity**: What's REAL (not fake countdowns)?
4. **Price anchoring**: What's the comparison that makes the price feel small?
5. **Objection map**: Top 5 reasons people DON'T buy — with pre-written answers
6. **Bonus stack**: What extras increase perceived value? (if applicable)

See `references/offer-frameworks.md` for construction patterns by LP type.

**Challenge the client:**
- If the guarantee is weak → suggest a stronger one with reasoning
- If there's no urgency → help find REAL urgency (capacity limits, seasonal demand, etc.)
- If the price has no anchor → calculate one ("Enterprise alternative costs $X, you're offering $Y")
- If objections aren't mapped → walk through common objections for their industry

### 4. Define Campaign Mechanics

Map the technical conversion flow:

```
Visitor arrives → [CTA action] → [Data captured] → [Where it goes] → [What happens next]
```

Specifics to capture:
- Data fields to collect (name, email, WhatsApp, company, etc.)
- Destination system (CRM, Google Sheets, WhatsApp, Calendly, etc.)
- Follow-up SLA (how fast do they respond after someone converts?)
- Post-conversion page/message (thank you page, WhatsApp redirect, etc.)
- Tracking/attribution (UTM params, pixel, analytics?)

### 5. Generate the Product Brief

Compile everything into the structured Product Brief.
Follow template in `references/product-brief-template.md`.

## Output Format

Deliver as structured markdown following `references/product-brief-template.md`.

Store alongside the Brand Brief (same Notion page or as companion file).

## Validation Checklist

Before delivering, verify:
- [ ] LP type classified with clear primary objective
- [ ] Product/service described in customer language (not jargon)
- [ ] BEFORE → AFTER transformation articulated with specifics
- [ ] Unique mechanism identified (why this approach works)
- [ ] Offer includes guarantee or risk reversal
- [ ] Top 5 objections mapped with pre-written responses
- [ ] Price anchoring defined (comparison point established)
- [ ] Data capture fields specified with destination system
- [ ] Post-conversion flow documented (what happens after CTA click)
- [ ] Success metric defined with target number

## Integration

**Input from**: `lp-brand-strategist` Brand Brief (competitor names, positioning, voice)

**Output to**: `lp-brief-synthesizer` (combines Brand + Product + Competitive into master brief)

**With lp-competitive-intel**: Competitor pricing and offer analysis informs anchoring strategy.

## References

- `references/lp-types.md` — Landing page type taxonomy with adaptations
- `references/product-questions.md` — 3-block product deep-dive question bank
- `references/offer-frameworks.md` — Offer construction patterns per LP type
- `references/product-brief-template.md` — Output template
