---
name: lp-brief-synthesizer
description: >
  Synthesize Brand Brief, Product Brief, and Competitive Analysis into a unified Landing Page
  Master Brief. Activate after all Phase 0 agents complete (brand-strategist, product-architect,
  competitive-intel), or when user has existing brand/product documents to combine into an LP brief.
  Resolves conflicts between documents, identifies remaining gaps, and produces the single source
  of truth for all downstream LP phases (copy, design, build, review).
  Part of the Landing Page Pipeline (Phase 0, final synthesis).
---

# LP Brief Synthesizer

## Purpose

Combine three Phase 0 documents into ONE master brief that serves as the single source
of truth for all downstream phases. No phase after this should need to ask the client
additional questions.

**Inputs (all required):**
1. Brand Brief (from `lp-brand-strategist`)
2. Product Brief (from `lp-product-architect`)
3. Competitive Analysis (from `lp-competitive-intel`)

## Process

### 1. Collect the Three Documents

Locate the Brand Brief, Product Brief, and Competitive Analysis.
Sources (check in order):
- Notion pages under the LP project
- Files in current conversation context
- Ask user to provide them

All three must be present. If one is missing, tell the user which agent
needs to run first and stop.

### 2. Cross-Reference and Resolve Conflicts

Check for inconsistencies between documents:

| Conflict Type | Resolution |
|---------------|-----------|
| Different company stats (revenue, clients) | Use Brand Brief numbers (closer to source) |
| Competing positioning angles | Use Competitive Analysis attack angles (data-driven) |
| Tone mismatch between brand voice and offer | Brand voice wins for tone; offer architect wins for structure |
| Pricing inconsistencies | Use Product Brief (most recent client input) |
| Overlapping competitor insights | Merge and deduplicate |

Flag any unresolvable conflicts for the user to decide.

### 3. Synthesize Strategic Direction

This is where the skill adds value beyond just concatenating documents.
Generate NEW insights by combining the three inputs:

**Positioning statement** (NEW — not in any single document):
```
For [ideal client from Brand Brief]
who [problem from Product Brief],
[company name] is the [category from Brand Brief]
that [unique mechanism from Product Brief]
unlike [competitors from Competitive Analysis]
because [differentiator synthesized from all three].
```

**Messaging hierarchy** (prioritized by competitive analysis):
1. Primary message: [The ONE thing to communicate above all]
2. Supporting message 1: [Reinforces primary]
3. Supporting message 2: [Addresses top objection]
4. Supporting message 3: [Builds trust/proof]

**Recommended page sections** (ordered by conversion psychology):
```
1. Hero: [headline approach based on attack angle + brand voice]
2. Problem agitation: [from product brief BEFORE state]
3. Solution reveal: [unique mechanism]
4. Social proof: [type recommended based on what's available + competitive gaps]
5. How it works: [process/features from product brief]
6. Case study/Results: [best proof from brand brief]
7. Offer: [from product brief offer architecture]
8. Objection handling: [FAQ from objection map]
9. Final CTA: [from product brief + competitive CTA analysis]
10. Trust footer: [founder story, tech stack, guarantee]
```

### 4. Run the GAP Audit

Merge GAPs from all three documents. Add new gaps discovered during synthesis.

Classify each gap:

| Priority | Definition | Action |
|----------|-----------|--------|
| 🔴 **Blocker** | Cannot build LP without this | Must resolve before Phase 1 |
| 🟡 **Important** | LP will be weaker without this | Resolve during Phase 1-2 |
| 🟢 **Nice-to-have** | Would improve but not critical | Can add in Phase 5 iteration |

### 5. Generate the Master Brief

Follow template in `references/master-brief-template.md`.

This document must be SELF-CONTAINED — anyone reading it should be able to:
- Write all the copy for the LP
- Design the visual system
- Build the page structure
- Know what success looks like

### 6. Deliver and Get Approval

Present the Master Brief to the user. Highlight:
- The synthesized positioning statement
- Recommended page structure
- Any 🔴 blockers that need resolution
- Anything that surprised or conflicts

Get explicit approval before passing to Phase 1.

## Output Format

Deliver as structured markdown following `references/master-brief-template.md`.

Store as the canonical LP planning document (Notion page or markdown file).

## Validation Checklist

Before delivering, verify:
- [ ] All three source documents referenced and incorporated
- [ ] No contradictions between sections (conflicts resolved)
- [ ] Positioning statement synthesized (not copied from one document)
- [ ] Messaging hierarchy defined (primary + 3 supporting messages)
- [ ] Page section order recommended with rationale
- [ ] GAP audit complete with priorities assigned
- [ ] No 🔴 blockers without a resolution plan
- [ ] Document is self-contained (no external references needed for Phase 1)

## Integration

**This is the FINAL output of Phase 0.**

Feeds directly into:
- **Phase 1** — Strategy & Positioning (messaging architecture, wireframe)
- **Phase 2** — Design System Generation (visual direction from competitive gaps)
- **Phase 3** — Page Generation (all content and structure)
- **Phase 4** — Expert Panel Review (benchmark against brief)

## References

- `references/master-brief-template.md` — Final output template
