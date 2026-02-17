---
name: lp-page-spec-assembler
description: "Assemble Copy Document and Page Blueprint into a unified Page Specification. Activate after both lp-copywriter and lp-page-architect complete, or when user has copy and structure documents ready for final assembly. Cross-validates copy against structure, ensures every section has both content and specs, resolves mismatches, and produces the single document that Phase 2 (Design System) and Phase 3 (Page Builder) execute. Part of the Landing Page Pipeline (Phase 1, final assembly)."
---

# LP Page Spec Assembler

## Purpose

Merge the Copy Document (what to SAY) with the Page Blueprint (how to STRUCTURE)
into ONE executable specification. After this document, Phase 2 creates the visual
design and Phase 3 builds the actual page — neither should need to make content
or structural decisions.

**Inputs:**
1. Copy Document (from `lp-copywriter`)
2. Page Blueprint (from `lp-page-architect`)
3. Master Brief (from Phase 0 — for cross-reference)

## Process

### 1. Cross-Validate Copy ↔ Structure

Check for mismatches between the two documents:

| Check | What to Verify |
|-------|---------------|
| Section count | Same number of sections in both documents |
| Section names | Names match between copy and blueprint |
| CTA consistency | CTA text in copy matches CTA positions in blueprint |
| Content fit | Copy word count fits the visual weight assigned in blueprint |
| Form fields | Form labels in copy match field specs in blueprint |
| Proof assets | Testimonials/cases in copy match proof pattern in blueprint |
| Missing copy | Every content block in blueprint has corresponding copy |
| Missing structure | Every copy section has a corresponding structural spec |

Flag any mismatches. Resolve by:
- Adding missing copy (generate it using the copywriter's frameworks)
- Adjusting structure (adapt layout to fit the copy that exists)
- Asking the user if the conflict requires a strategic decision

### 2. Merge Section by Section

For each section, create a UNIFIED specification:

```
═══════════════════════════════════════════════
SECTION [N]: [NAME]
═══════════════════════════════════════════════

ROLE: [Conversion role from blueprint]
LAYOUT: [Pattern from blueprint]
BACKGROUND: [Tone from blueprint]
VISUAL WEIGHT: [Level from blueprint]

── CONTENT ──────────────────────────────────
H2: "[Headline from copy document]"
BODY: "[Full body copy from copy document]"
CTA: "[CTA text]" | Style: [from blueprint]
MICROCOPY: "[Support text from copy document]"

── STRUCTURE ────────────────────────────────
[ASCII wireframe from blueprint showing where
 each content block goes]

── BEHAVIOR ─────────────────────────────────
Animation: [from blueprint]
Mobile: [from blueprint]

── NOTES FOR DESIGNER ───────────────────────
[Visual weight guidance, dark/light direction,
 emphasis hierarchy within section]

── NOTES FOR BUILDER ────────────────────────
[Technical requirements, integrations,
 special components needed]
═══════════════════════════════════════════════
```

### 3. Generate the Meta Section

Add page-level specifications that span all sections:

- **Typography hierarchy** (preliminary — Phase 2 will finalize fonts):
  - H1: largest, hero only
  - H2: section headers, uniform size
  - H3: sub-items, feature titles
  - Body: readable, minimum 16px
  - Small: microcopy, labels, captions

- **Color direction** (preliminary — Phase 2 will generate the system):
  - From Master Brief Part I (Design Direction Brief)
  - Dark/light rhythm from blueprint
  - Accent color usage (CTAs, highlights, links)

- **Component inventory** — list of unique UI components needed:
  - Buttons (primary, secondary, ghost)
  - Cards (feature cards, case study cards, testimonial cards)
  - Forms (if applicable)
  - Accordion (FAQ)
  - Navigation (desktop + mobile)
  - Metrics counter
  - Logo bar
  - Footer

### 4. Run the Final Quality Audit

Before delivering, verify the COMPLETE spec answers these questions:

**For the Designer (Phase 2):**
- ✅ Do I know the visual direction (tone, feel, competitive differentiation)?
- ✅ Do I know how many unique components to design?
- ✅ Do I know the dark/light rhythm for sections?
- ✅ Do I know the typography hierarchy?
- ✅ Do I have the brand assets inventory (what exists vs needs creation)?

**For the Builder (Phase 3):**
- ✅ Do I have EVERY piece of text needed (no placeholder copy)?
- ✅ Do I know the layout of every section (wireframes)?
- ✅ Do I know mobile behavior for every section?
- ✅ Do I know the animation specifications?
- ✅ Do I know form behavior (submit, success, error)?
- ✅ Do I know performance targets?
- ✅ Do I know accessibility requirements?
- ✅ Do I know what external services to integrate?

**For the Expert Panel (Phase 4):**
- ✅ Is the Master Brief included as the benchmark for review?
- ✅ Are A/B variants documented for the panel to evaluate?

If ANY answer is "no", fill the gap before delivering.

### 5. Deliver the Page Specification

Compile using `references/page-spec-template.md`.

This is the FINAL deliverable of Phase 1.
Everything from here is execution (design → build → review → iterate).

## Output Format

Deliver as structured markdown following `references/page-spec-template.md`.

This document will likely be 400-800 lines. That's OK — it's the comprehensive
spec that two entire phases (2 and 3) depend on.

## Validation Checklist

- [ ] All sections from blueprint have matching copy
- [ ] All copy sections have matching structural specs
- [ ] CTA text is consistent across all instances
- [ ] No placeholder text remains (everything is production-ready)
- [ ] Mobile behavior documented for every section
- [ ] Component inventory is complete
- [ ] Design direction brief is included (from Master Brief)
- [ ] Performance and accessibility requirements are stated
- [ ] A/B variants are documented in the variant summary
- [ ] External integrations are listed with specs
- [ ] The document is self-contained for Phase 2 and Phase 3

## Integration

**This is the FINAL output of Phase 1.**

Feeds directly into:
- **Phase 2** — Design System Generation (uses design direction + component inventory)
- **Phase 3** — Page Generation (uses copy + wireframes + specs)
- **Phase 4** — Expert Panel Review (uses this as the benchmark)

## References

- `references/page-spec-template.md` — Final output template
