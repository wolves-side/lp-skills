# Change Log Template

Document AFTER all changes are applied.
This is the permanent record of what changed between v1 and v2.

---

```markdown
# 📝 CHANGE LOG
## [Company Name] — Landing Page Rebuild
> Date: [date]
> Previous: [filename]-v1.html
> Updated: [filename]-v2.html
> Expert Panel Review: v[X]
> Total changes applied: [N]

---

## SUMMARY

| Metric | Value |
|--------|-------|
| Changes applied | [N] |
| Copy changes | [N] |
| CSS changes | [N] |
| HTML structural changes | [N] |
| JS behavior changes | [N] |
| Conflicts resolved | [N] |
| Items deferred (out of scope) | [N] |

### What Improved
[2-3 sentence summary of the most impactful changes.
 Focus on conversion impact, not technical details.]

### What Didn't Change
[1-2 sentences on what was preserved.
 Helps the client/team understand the scope was controlled.]

---

## CHANGES APPLIED

### Change 1: [Short descriptive title]
- **Priority:** [🔴 Critical / 🟡 High-impact / 🟢 Polish]
- **Type:** [Copy / CSS / HTML / JS]
- **Expert:** [Which expert recommended this]
- **Section:** [Which section was affected]
- **What changed:**
  - Before: `[old content or behavior]`
  - After: `[new content or behavior]`
- **Why:** [Expert's reasoning, in 1 sentence]
- **Cascade impact:** [None / Updated responsive / Updated anchors / etc.]

### Change 2: [Title]
- **Priority:** [level]
- **Type:** [type]
- **Expert:** [expert]
- **Section:** [section]
- **What changed:**
  - Before: `[old]`
  - After: `[new]`
- **Why:** [reason]
- **Cascade impact:** [impact]

[Continue for ALL changes]

---

## CONFLICTS RESOLVED

### Conflict 1: [Title]
- **Expert A said:** [recommendation]
- **Expert B said:** [recommendation]
- **We chose:** [resolution]
- **Because:** [reasoning from priority framework]

[Continue for all conflicts]

---

## DEFERRED ITEMS

Items logged from Expert Panel but NOT applied:

| # | Expert | Recommendation | Reason Deferred | Action Needed |
|---|--------|---------------|-----------------|---------------|
| 1 | [expert] | [what they said] | [why not applied] | [what would need to happen] |
| 2 | [expert] | [what they said] | [reason] | [action] |

---

## QA FOCUS AREAS

Based on changes made, the QA re-run should focus on:

| Area | Changes Made | What to Verify |
|------|-------------|---------------|
| [Section/area] | [Changes #N, #N] | [Specific checks] |
| [Section/area] | [Changes #N] | [Specific checks] |
| Mobile | [Any structural/CSS changes] | Full responsive check at 375px |
| Interactions | [Any JS changes] | All interactive elements functional |
| Content | [Any copy changes] | Text matches new approved copy |

---

## VERSION COMPARISON

| Element | v1 | v2 | Changed? |
|---------|----|----|----------|
| Hero H1 | "[old]" | "[new]" | [✅/—] |
| Hero H2 | "[old]" | "[new or same]" | [✅/—] |
| Primary CTA | "[old]" | "[new or same]" | [✅/—] |
| Section count | [N] | [N] | [✅/—] |
| Section order | [list] | [list] | [✅/—] |
| [Other key elements] | | | |

---

## SIGN-OFF

- [ ] All planned changes from Change Plan applied
- [ ] Change log complete (every change documented)
- [ ] No unplanned changes made (scope discipline)
- [ ] Ready for `lp-page-qa` re-run
- [ ] HTML file versioned as v2

**Next step:** Run `lp-page-qa` on [filename]-v2.html
When QA passes → page is FINAL and ready for deployment.
```
