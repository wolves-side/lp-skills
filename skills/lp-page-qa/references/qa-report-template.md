# QA Report Template

Replace all `[brackets]` with findings.

---

```markdown
# 🔍 QA REPORT
## [Company Name] — Landing Page Build
> Audited: [date] | Version: [build version]
> Page Spec: v[X] | HTML file: [filename]
> Auditor: LP Page QA (automated)

---

## SUMMARY

| Category | Checks | 🟢 Pass | 🟡 Warning | 🔴 Critical |
|----------|--------|---------|-----------|------------|
| Content Accuracy | [N] | [N] | [N] | [N] |
| Structural Compliance | [N] | [N] | [N] | [N] |
| Responsive | [N] | [N] | [N] | [N] |
| Design System | [N] | [N] | [N] | [N] |
| Performance | [N] | [N] | [N] | [N] |
| Accessibility | [N] | [N] | [N] | [N] |
| Interactions | [N] | [N] | [N] | [N] |
| **TOTAL** | **[N]** | **[N]** | **[N]** | **[N]** |

### Verdict

**[🟢 PASS — Ready for Expert Panel / 🟡 CONDITIONAL — Fix warnings first / 🔴 FAIL — Fix critical issues]**

[1-2 sentence summary of overall quality and main issues]

---

## FIX PRIORITY

Fix in this order. Critical issues block delivery.

### 🔴 CRITICAL (Must fix before any review)

| # | Category | Issue | Fix |
|---|----------|-------|-----|
| 1 | [category] | [specific issue] | [specific fix instruction with selector/line reference] |
| 2 | [category] | [issue] | [fix] |

### 🟡 WARNING (Fix before Expert Panel)

| # | Category | Issue | Fix |
|---|----------|-------|-----|
| 1 | [category] | [issue] | [fix] |
| 2 | [category] | [issue] | [fix] |

### 🟢 LOW (Nice to have)

| # | Category | Issue | Fix |
|---|----------|-------|-----|
| 1 | [category] | [issue] | [fix] |

---

## DETAILED FINDINGS

### 1. Content Accuracy

| Check | Status | Notes |
|-------|--------|-------|
| Hero H1 matches spec | [🟢/🟡/🔴] | [Details or "OK"] |
| Hero H2 matches spec | [status] | [notes] |
| Hero CTA text matches | [status] | [notes] |
| Hero microcopy matches | [status] | [notes] |
| Problem section copy | [status] | [notes] |
| Solution section copy | [status] | [notes] |
| [Continue for ALL sections...] | | |
| FAQ Q1 present and matches | [status] | [notes] |
| FAQ Q2 present and matches | [status] | [notes] |
| [Continue for ALL FAQs...] | | |
| Footer elements complete | [status] | [notes] |
| No placeholder text found | [status] | [notes] |
| No typos detected | [status] | [notes] |

### 2. Structural Compliance

| Check | Status | Notes |
|-------|--------|-------|
| Section count matches spec ([N] expected) | [status] | [notes] |
| Sections in correct order | [status] | [notes] |
| Hero layout matches wireframe | [status] | [notes] |
| [Section N] layout matches | [status] | [notes] |
| Dark/light rhythm correct | [status] | [notes] |
| CTA: Hero present | [status] | [notes] |
| CTA: Sticky nav present | [status] | [notes] |
| CTA: Mid-page present | [status] | [notes] |
| CTA: Offer present | [status] | [notes] |
| CTA: Final present | [status] | [notes] |
| Nav links complete | [status] | [notes] |
| Anchor IDs match | [status] | [notes] |
| Form fields match spec | [status] | [notes] |

### 3. Responsive (375px)

| Check | Status | Notes |
|-------|--------|-------|
| Hero CTA above fold | [status] | [notes] |
| No horizontal scrollbar | [status] | [notes] |
| Hamburger visible | [status] | [notes] |
| Nav CTA visible alongside hamburger | [status] | [notes] |
| Mobile menu functional | [status] | [notes] |
| Body text ≥ 16px | [status] | [notes] |
| Touch targets ≥ 44px | [status] | [notes] |
| CTA buttons full-width | [status] | [notes] |
| Content padding ≥ 20px | [status] | [notes] |
| [Section N] mobile adaptation | [status] | [notes] |

### 4. Design System Compliance

| Check | Status | Notes |
|-------|--------|-------|
| No hardcoded colors | [status] | [Locations if found] |
| No hardcoded font-sizes | [status] | [notes] |
| No hardcoded spacing | [status] | [notes] |
| Single H1 (hero only) | [status] | [notes] |
| H2 for all sections | [status] | [notes] |
| No skipped heading levels | [status] | [notes] |
| Button component classes used | [status] | [notes] |
| Section background classes used | [status] | [notes] |
| Font display=swap | [status] | [notes] |

### 5. Performance

| Check | Status | Notes |
|-------|--------|-------|
| All CSS inline | [status] | [notes] |
| All JS inline | [status] | [notes] |
| No JS libraries | [status] | [notes] |
| Images: lazy loading below fold | [status] | [notes] |
| Images: width/height attributes | [status] | [notes] |
| Fonts: preconnect hints | [status] | [notes] |
| Fonts: display=swap | [status] | [notes] |
| Animations: GPU-only properties | [status] | [notes] |
| Scroll listeners throttled | [status] | [notes] |
| Estimated total JS size | [status] | [estimated KB] |

### 6. Accessibility

| Check | Status | Notes |
|-------|--------|-------|
| Skip-to-content link | [status] | [notes] |
| lang attribute on html | [status] | [notes] |
| Semantic header/main/footer | [status] | [notes] |
| Semantic sections | [status] | [notes] |
| Semantic nav | [status] | [notes] |
| Images: meaningful alt text | [status] | [notes] |
| Decorative: aria-hidden | [status] | [notes] |
| Focus styles visible | [status] | [notes] |
| Form labels linked | [status] | [notes] |
| Form errors: role=alert | [status] | [notes] |
| Form errors: aria-describedby | [status] | [notes] |
| aria-required on required fields | [status] | [notes] |
| Hamburger: aria-expanded | [status] | [notes] |
| Mobile menu: aria-hidden | [status] | [notes] |
| prefers-reduced-motion | [status] | [notes] |
| Keyboard nav: all CTAs reachable | [status] | [notes] |

### 7. Interactions

| Check | Status | Notes |
|-------|--------|-------|
| Anchor links scroll correctly | [status] | [notes] |
| Nav offset accounts for height | [status] | [notes] |
| Nav state change on scroll | [status] | [notes] |
| Mobile menu open/close | [status] | [notes] |
| Mobile menu close on link click | [status] | [notes] |
| Mobile menu close on Escape | [status] | [notes] |
| Body scroll lock when menu open | [status] | [notes] |
| FAQ accordion functional | [status] | [notes] |
| FAQ first item open default | [status] | [notes] |
| Number counters animate | [status] | [notes] |
| Scroll reveals trigger | [status] | [notes] |
| Form validation: empty fields | [status] | [notes] |
| Form validation: invalid input | [status] | [notes] |
| Form submit action works | [status] | [notes] |
| CTA hover states | [status] | [notes] |

---

## RE-AUDIT INSTRUCTIONS

After fixes are applied:
1. Run this QA skill again against the updated HTML
2. Verify all 🔴 CRITICAL items now pass
3. Verify all 🟡 WARNING items now pass
4. When ALL checks pass → ready for Phase 4 (Expert Panel)
```
