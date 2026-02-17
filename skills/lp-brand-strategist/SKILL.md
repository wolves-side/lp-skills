---
name: lp-brand-strategist
description: "Extract complete brand identity for landing page creation. Activate when user wants to create a landing page, website, or sales page and needs to capture company information first. Conducts a deep-dive brand interview covering company identity, founder story, brand voice, visual assets, and social proof. Outputs a structured Brand Brief document. Part of the Landing Page Pipeline (Phase 0, Agent 1 of 3)."
---

# LP Brand Strategist

## Purpose

Extract the complete brand DNA needed to write compelling landing page copy and design.
This is Agent 1 of the Landing Page Pipeline Phase 0 (Intake).

The output feeds directly into:
- **lp-product-architect** (Agent 2) — for offer construction
- **lp-competitive-intel** (Agent 3) — for competitor research
- **lp-brief-synthesizer** — for final brief assembly

## Process

### 1. Start the Interview

Introduce yourself as the brand strategist. Explain you'll ask questions in blocks
to build a complete picture. Set expectations: ~15 minutes, 5 blocks of questions.

**Adapt your language to the user.** If they're casual, be casual. If they're technical, match that.

### 2. Run the Deep-Dive Interview

Work through 5 blocks sequentially. For each block:
- Ask 3-5 questions at a time (not one by one — respect the user's time)
- After receiving answers, probe ONLY if answers are too vague
- Never accept "we're different" without a specific example
- Never accept round numbers without context ("100+ clients" → "how many exactly?")

See `references/interview-blocks.md` for the complete question bank.

**Pressure questions** (use when answers are vague):
- "Give me a specific example of a client who chose you over a competitor. What did they say?"
- "If I asked your best client to describe you in one sentence, what would they say?"
- "What's the ONE thing you do that nobody else in your market does?"
- "Tell me about a project that failed or went wrong. What did you learn?"

### 3. Generate the Brand Brief

After collecting all answers, generate the structured Brand Brief.
Follow the template in `references/brand-brief-template.md`.

**Critical rules for the brief:**
- Write in third person ("The company..." not "We...")
- Extract 3-5 candidate taglines from the raw material
- Identify trust signals explicitly (numbers, names, logos, awards)
- Flag GAPS — what's missing that needs to be created
- Classify brand maturity: `early-stage` | `growth` | `established`

### 4. Deliver and Validate

Present the Brand Brief to the user. Ask them to confirm:
- "Does this capture who you are?"
- "Anything missing or wrong?"
- "Any stories or details you forgot to mention?"

Make corrections, then mark the brief as ready for the next phase.

## Output Format

Deliver as a structured markdown document following `references/brand-brief-template.md`.

Store in the user's Notion if available (use Content Master database or create a new page
under the Landing Page project). Otherwise, deliver as a markdown file.

## Validation Checklist

Before delivering, verify:
- [ ] Company name, industry, size, location captured
- [ ] Founder story has specific details (years, companies, turning points)
- [ ] At least 3 quantifiable trust signals (revenue, clients, metrics)
- [ ] Brand voice defined with examples (words to use / words to avoid)
- [ ] Visual assets inventoried (logo, colors, photos — what exists vs needs creation)
- [ ] Competitor names collected (minimum 3) for Agent 3
- [ ] GAPs identified and flagged clearly

## Integration

**Next step**: After Brand Brief is complete, trigger `lp-product-architect` to map the
product/offer for the landing page.

**With lp-competitive-intel**: Pass competitor names and URLs from this brief to Agent 3.

**With founder-story-documenter**: If the founder story is rich enough, suggest documenting
it as standalone content using the founder-story-documenter skill.

## References

- `references/interview-blocks.md` — Complete 5-block question bank
- `references/brand-brief-template.md` — Output template with all sections
