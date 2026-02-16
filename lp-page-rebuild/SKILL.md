---
name: lp-page-rebuild
description: >
  Apply Expert Panel feedback to a built landing page. Activate after the Expert Panel
  review (Phase 4) delivers prioritized feedback, or when user has specific improvements
  to apply to an existing LP HTML file. Resolves conflicting feedback, applies changes
  systematically, tracks all modifications, and produces an updated HTML file ready for
  final QA. Part of the Landing Page Pipeline (Phase 5 — final).
---

# LP Page Rebuild

## Purpose

Take the Expert Panel's feedback and EXECUTE it on the live HTML.
Not re-debate strategy. Not redesign from scratch.
Surgically apply improvements while protecting what already works.

**Requires**:
1. Built HTML file (from Phase 3, QA-passed)
2. Expert Panel Review (from Phase 4 — prioritized feedback)
3. Page Specification (from Phase 1 — as original intent reference)

## Core Philosophy

**Every change is a controlled edit, not a rewrite.**

Rules:
- Change ONE thing at a time. Test mentally before moving to the next.
- If two experts contradict each other, the DATA wins. If no data, the SPEC wins.
- Every change must have a REASON traceable to a specific expert recommendation.
- If a change would cascade (breaking other sections), flag it before executing.
- The goal is the BEST version of THIS page, not a different page.

## Process

### 1. Triage the Feedback

Read the Expert Panel Review completely. Categorize every piece of feedback:

**Category A: Direct Edits (apply immediately)**
Changes that are self-contained and low-risk:
- Copy tweaks (headline rewording, CTA text change, microcopy update)
- Color/spacing adjustments (CSS variable changes)
- Missing elements (add alt text, add aria label, fix typo)
- Reordering within a section (swap two feature cards)

**Category B: Structural Changes (apply carefully)**
Changes that affect multiple elements or the page flow:
- Section reordering (move testimonials before offer)
- Adding a new section (new comparison block, new proof element)
- Removing a section (experts agree a section is unnecessary)
- Changing a layout pattern (split hero → centered hero)
- CTA strategy changes (add/remove conversion points)

**Category C: Conflicts (resolve before applying)**
Two or more experts disagree:
- CRO wants X, UX expert wants the opposite
- Copywriter suggests a change that contradicts the brand voice
- Design change would break performance targets

**Category D: Out of Scope (log but don't apply)**
Feedback that requires work OUTSIDE this page:
- "You need better testimonials" (content collection, not page change)
- "The logo needs redesign" (brand work, not LP work)
- "Add a chatbot" (integration project, not page edit)
- "Run A/B tests" (post-launch activity)

### 2. Resolve Conflicts (Category C)

For each conflict, apply this resolution framework:

```
CONFLICT RESOLUTION PRIORITY:

1. USER DATA > expert opinion
   If analytics or user testing data exists, it wins.

2. PAGE SPEC > individual expert
   The spec represents the synthesized strategy from Phase 0+1.
   An individual expert's preference doesn't override strategic decisions
   unless they provide compelling reasoning.

3. CONVERSION IMPACT > aesthetic preference
   If one suggestion measurably improves conversion and the other
   is aesthetic, conversion wins.

4. SIMPLER > complex
   If two solutions achieve the same goal, pick the simpler one.
   Less code = fewer bugs = easier maintenance.

5. REVERSIBLE > irreversible
   If unsure, pick the change that's easier to undo.
```

Document each resolution:
```
CONFLICT: [Expert A says X] vs [Expert B says Y]
RESOLUTION: [What we're doing]
REASONING: [Why, referencing priority framework]
```

### 3. Build the Change Plan

Before touching any code, create the ordered change plan.

See `references/change-plan-template.md` for the format.

**Ordering rules:**
1. 🔴 Critical fixes first (broken functionality, missing content)
2. 🟡 High-impact improvements second (copy changes that affect conversion)
3. 🟢 Polish last (spacing tweaks, animation adjustments, minor copy edits)

Within each priority, order by DEPENDENCY:
- CSS variable changes before component changes (variables cascade)
- Structural HTML changes before copy changes (need the container first)
- JS behavior changes last (they depend on HTML structure)

### 4. Apply Changes

Execute the change plan ONE ITEM AT A TIME.

For each change:

**Step A: Locate the target**
Find the exact HTML/CSS/JS that needs modification.
Use section IDs, class names, or content matching.

**Step B: Make the edit**
Apply the minimum change needed. Do NOT refactor surrounding code.
Do NOT "improve" things that weren't in the feedback.

**Step C: Verify no cascade**
After each structural change, mentally verify:
- Does the responsive still work for this section?
- Do anchor links still point to the right place?
- Does the CTA map still have all required conversion points?
- Did I break the heading hierarchy?

**Step D: Log the change**
Record what was changed, why, and which expert recommendation drove it.

### 5. Handle Specific Change Types

#### Copy Changes
- Find the exact text in HTML
- Replace VERBATIM with the new copy from the expert recommendation
- If the new copy is significantly longer/shorter, check if the layout still works
- Update the variant summary if a headline variant was changed

#### CSS Changes
- Prefer changing CSS custom property VALUES over adding new rules
- If adding new rules, place them in the correct section (component, section-specific, responsive)
- If changing spacing/sizing, check mobile breakpoint implications

#### Structural HTML Changes
- When adding a section: follow the existing section pattern (class names, container structure)
- When removing a section: remove the HTML, CSS rules, and any JS targeting that section
- When reordering: cut-paste the entire `<section>` block. Update anchor link order in nav.
- After any structural change: verify heading hierarchy (H1 → H2 → H3, no skips)

#### JavaScript Changes
- When changing animation behavior: verify `prefers-reduced-motion` still works
- When changing form behavior: verify validation, submit action, and success state
- When adding interactions: use the same patterns from `animation-implementation.md`
- NEVER add external libraries. All changes must be vanilla JS.

#### Adding New Content
Sometimes expert feedback requires NEW content that doesn't exist in the spec:
- New testimonial → use the testimonial-card pattern from section-build-patterns
- New FAQ question → add to the accordion following existing pattern
- New metric → add to the metrics grid following existing pattern
- New section → build from scratch using the closest section-build-pattern

### 6. Generate the Change Log

After ALL changes are applied, compile the change log.
See `references/change-log-template.md`.

The change log serves two purposes:
1. **Documentation** — what changed and why (for the client/team)
2. **QA targeting** — tells `lp-page-qa` which areas to pay extra attention to

### 7. Deliver for Final QA

Output:
1. **Updated HTML file** — the rebuilt page
2. **Change Log** — all modifications documented
3. **Re-run instruction** — tell the user to run `lp-page-qa` on the updated file

The QA re-run should focus on:
- All areas that were modified (from the change log)
- Regression checks on areas ADJACENT to modifications
- Full responsive check (structural changes can break mobile)
- Full interaction check (JS changes can break behavior)

## Output

Two deliverables:
1. Updated `.html` file (same filename, versioned: `[company]-landing-page-v2.html`)
2. Change log markdown document

## Edge Cases

### "The experts want a completely different page"
This is NOT a rebuild — it's a new pipeline run. If more than 60% of the page
would change, it's faster and cleaner to re-run Phase 1 → 3 with updated inputs
than to patch the existing page. Tell the user.

### "The expert feedback contradicts the Master Brief"
The Master Brief is the strategic foundation. If an expert suggests something
that contradicts the positioning, voice, or offer architecture:
1. Flag it to the user
2. Ask if the brief should be updated (strategic pivot)
3. Only proceed if the user confirms the direction change

### "Not enough information to implement a suggestion"
If the expert says "make the hero more compelling" without specifics:
1. Log it as Category D (out of scope — too vague to action)
2. Suggest the user clarify with the expert or provide specific direction
3. Do NOT guess at what "more compelling" means

### "The change breaks performance targets"
If adding a new section, images, or animation would push the page over
the performance budget (< 1MB, < 2.5s LCP):
1. Flag the trade-off to the user
2. Suggest optimizations (compress images, defer non-critical JS)
3. Only proceed if the user accepts the performance impact

## Validation Checklist

Before delivering the rebuilt page:
- [ ] All Category A (direct edits) applied
- [ ] All Category B (structural changes) applied with cascade verification
- [ ] All Category C (conflicts) resolved with documented reasoning
- [ ] All Category D (out of scope) logged in change log
- [ ] No changes applied that weren't in the Expert Panel feedback
- [ ] No "bonus" improvements added (scope discipline)
- [ ] Change log is complete (every change has: what, why, which expert)
- [ ] Heading hierarchy still valid (single H1, sequential H2→H3)
- [ ] CTA map still complete (minimum 3 conversion points)
- [ ] File versioned (v2 in filename)
- [ ] Ready for `lp-page-qa` re-run

## Integration

**Input from**:
- Built HTML (Phase 3)
- Expert Panel Review (Phase 4)
- Page Specification (Phase 1 — reference)

**Output to**: `lp-page-qa` (re-run for final validation)

**After QA passes**: The page is DONE. Ready for deployment.

```
Phase 5 output → lp-page-qa re-run → FINAL PAGE ✅
```

## References

- `references/change-plan-template.md` — Ordered change plan format
- `references/change-log-template.md` — Change documentation format
