---
name: lp-page-architect
description: "Design the structural blueprint for a landing page. Activate after or alongside the LP copywriter, or when user needs to define page structure, section layout, content blocks, CTA placement strategy, scroll psychology, and responsive behavior. Takes the Master Brief and produces a detailed Page Blueprint with section-level specifications. Part of the Landing Page Pipeline (Phase 1, Agent 2 of 2)."
---

<HARD-GATE>
Do NOT make structural decisions without reading the complete Master Brief with focus on:
recommended page structure, priority ICP persona, and competitive positioning. Structure
exists to serve conversion, not aesthetic preferences or default templates.
</HARD-GATE>


# LP Page Architect

## Iron Law

**Conversion First**: Every structural decision requires a conversion rationale. "It looks good" is not a rationale. "It places the primary CTA above the fold for the priority persona" is.

## Skill Type

**Rigid** — Scroll psychology, CTA strategy (min 3, max 5), and mobile-first specifications are mandatory for every section.



## Checklist

You MUST create a task for each item using TaskCreate and complete them in order:

1. Read Master Brief — focus on recommended page structure, priority ICP, competitive positioning
2. Map scroll psychology: what state does the user arrive in? What state do they need for the CTA?
3. Specify each section: layout pattern, background treatment, mobile behavior, animation style
4. Map CTA strategy: minimum 3, maximum 5 CTAs with explicit placement rationale for each
5. Validate mobile-first: every section works on 375px without horizontal scroll
6. Deliver Page Blueprint

## Purpose

Define the STRUCTURE and BEHAVIOR of every section on the landing page.
Not the visual design (that's Phase 2). Not the code (that's Phase 3).
This is the **architectural blueprint** — what goes where, how it flows,
and why each decision optimizes for conversion.

This is Agent 2 of the Landing Page Pipeline Phase 1 (Strategy & Positioning).

**Requires**: Master Brief from Phase 0. Works in parallel with `lp-copywriter`.

## Core Philosophy

**Structure IS conversion strategy.**

Every structural decision is a psychological decision:
- Section ORDER affects persuasion flow (problem before solution, proof before price)
- VISUAL WEIGHT signals importance (hero > features > footer)
- WHITESPACE controls reading speed (more space = slower reading = more absorption)
- CTA FREQUENCY determines conversion opportunities (too few = missed chances, too many = desperation)
- RESPONSIVE BEHAVIOR determines mobile conversion (60%+ traffic is mobile)

## Process

### 1. Absorb the Master Brief

Read the COMPLETE Master Brief. Focus on:
- **Part F** — Recommended Page Structure (starting point, not final)
- **Part I** — Design Direction Brief (visual constraints and competitive differentiation)
- **Part C** — The Offer (determines offer block complexity)
- **Part G** — Conversion Mechanics (determines form and CTA behavior)

### 2. Validate and Refine Page Structure

The Master Brief suggests a section order. Validate it against:

**Conversion psychology flow:**
```
ATTENTION (Hero) → PROBLEM (Pain) → DESIRE (Solution + Proof) →
ACTION (Offer + CTA) → TRUST (FAQ + Footer)
```

See `references/section-psychology.md` for the complete scroll psychology model.

**Refinement questions:**
- Does this LP type need all 11 sections? (Lead capture LPs may need only 5-6)
- Is the proof section positioned BEFORE the offer? (Critical for B2B)
- Is there a CTA above the fold AND after the offer? (minimum 2 CTAs)
- Does the FAQ come BEFORE or AFTER the offer? (Test: before for B2B, after for B2C)

### 3. Spec Each Section

For every section, define:

```
SECTION [N]: [Name]
├── Layout: [Full-width / Contained / Split / Grid / Cards]
├── Background: [Light / Dark / Accent / Image]
├── Content blocks:
│   ├── [Block 1: type, position, approximate size]
│   ├── [Block 2: type, position]
│   └── [Block N: type, position]
├── Visual weight: [High / Medium / Low]
├── CTA present: [Yes — type and position / No]
├── Animation: [Scroll reveal / Counter / None / Subtle]
├── Mobile behavior: [Stack / Reorder / Hide element / Accordion]
└── Conversion role: [Hook / Agitate / Prove / Convert / Reassure]
```

See `references/section-spec-patterns.md` for common layout patterns per section type.

### 4. Define CTA Strategy

Map all conversion points across the page:

```
CTA MAP:
├── Primary CTA (hero): [Text, Style: filled button, Color: accent]
├── Sticky CTA (nav): [Text, Appears: after scroll past hero]
├── Mid-page CTA (after proof): [Text, Style: filled button]
├── Offer CTA (offer block): [Text, Style: large filled button, Most prominent]
├── Final CTA (closing): [Text, Style: filled button]
└── Exit intent (optional): [Text, Trigger: mouse leaving viewport]
```

**Rules:**
- Minimum 3 CTAs on any LP (hero, mid-page, closing)
- Maximum 5 CTAs (more = desperation)
- All CTAs should use the SAME text (consistency) or escalating commitment
- Sticky nav CTA appears only after hero scrolls out of view

### 5. Define Responsive Strategy

Specify mobile behavior for each section:

See `references/responsive-patterns.md` for standard mobile adaptation patterns.

**Critical mobile rules:**
- Hero CTA must be visible without scrolling on mobile
- No horizontal scrolling ever
- Touch targets minimum 44x44px
- Forms should be single-column
- Long comparison tables become stacked cards
- Testimonials become horizontal swipe carousel

### 6. Add Conversion Micro-Interactions

Define small behavioral elements that boost conversion:

| Element | Where | Behavior |
|---------|-------|----------|
| Number counters | Metrics bar | Animate from 0 on scroll into view |
| Progress indicator | Long pages | Subtle scroll progress bar |
| Social proof ticker | Hero or floating | "X people viewed this today" (if real data) |
| Scroll hint | Hero | Subtle down arrow or "Scroll to learn more" |
| Back-to-top | After 3 scrolls | Floating button appears |
| Trust badges | Near CTAs | Security/guarantee icons near form/button |

### 7. Generate the Page Blueprint

Compile into the structured document.
Follow template in `references/page-blueprint-template.md`.

## Output Format

Deliver as structured markdown following `references/page-blueprint-template.md`.

## Validation Checklist

Before delivering, verify:
- [ ] Every section has layout, background, content blocks, and mobile behavior defined
- [ ] CTA map includes minimum 3 conversion points
- [ ] Conversion psychology flow is logical (attention → problem → desire → action → trust)
- [ ] Mobile behavior specified for every section
- [ ] Visual weight hierarchy makes sense (hero > offer > proof > features > footer)
- [ ] Dark/light section alternation creates visual rhythm
- [ ] No section has more than 3 content blocks (simplicity)
- [ ] Sticky nav behavior defined
- [ ] Form fields match Master Brief Part G
- [ ] Page structure adapts to LP type (not all types need all 11 sections)

## Integration

**Input from**: Master Brief (Phase 0)

**Parallel with**: `lp-copywriter` (Agent 1 can work simultaneously)

**Output to**: `lp-page-spec-assembler` (combines structure + copy into final spec)

**Key for Phase 2**: The visual weight and background specifications inform the
Design System Generator's color and typography decisions.

## Red Flags — STOP and Follow the Process

| If you think... | Reality is... |
|----------------|---------------|
| "Full-width hero because it looks premium" | Structure follows conversion logic from the brief, not aesthetic defaults. |
| "CTA at the end is standard" | Minimum 3 CTAs required. Map placement with explicit rationale. |
| "Mobile is just stacking the desktop layout" | Mobile has distinct UX requirements. Specify per section. |
| "The structure is obvious for this product type" | Even obvious structures need documentation. The builder has zero context. |

**ALL of these mean: STOP. Complete the current specification fully.**

## User Signals You're Off Track

- "The structure doesn't make sense for our product" → You applied a template. Re-read brief, rethink flow.
- "Why is the CTA there?" → Your placement lacks documented rationale. Re-justify or reposition.

## Integration

**Next required skill**: Deliver Page Blueprint (lp-master orchestrates next step).
**Parallel with**: `lp-copywriter` — both run simultaneously from the Master Brief.
**Feeds into**: `lp-page-builder` (structural contract).

## References

- `references/section-psychology.md` — Scroll psychology and conversion flow model
- `references/section-spec-patterns.md` — Common layout patterns per section type
- `references/responsive-patterns.md` — Mobile adaptation patterns
- `references/page-blueprint-template.md` — Output template
