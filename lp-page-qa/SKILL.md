---
name: lp-page-qa
description: >
  Validate a built landing page HTML against the Page Specification. Activate after the
  page builder delivers the HTML file, or when user needs to audit an LP for content
  accuracy, structural compliance, responsive behavior, performance, and accessibility.
  Produces a QA Report with pass/fail/warning per check and specific fix instructions.
  Part of the Landing Page Pipeline (Phase 3, Step 2 of 2).
---

# LP Page QA

## Purpose

Systematically verify that the built HTML page faithfully implements the
Page Specification. Every check is binary: PASS or FAIL, with specific
remediation instructions for failures.

This is NOT a subjective review. That's Phase 4 (Expert Panel).
This is mechanical validation: is the spec implemented correctly?

**Requires**:
1. Built HTML file from `lp-page-builder`
2. Page Specification from Phase 1 (the benchmark)

## Core Philosophy

**Trust nothing. Verify everything.**

The builder might have:
- Missed a piece of copy
- Used wrong CTA text in one location
- Broken mobile layout on one section
- Forgotten an aria-label
- Left a placeholder image alt text
- Hardcoded a color instead of using a variable

Catch it ALL before the Expert Panel wastes time on implementation bugs.

## Process

### 1. Content Accuracy Audit

Read the Page Specification and the HTML side by side.
Check EVERY text element.

```
CONTENT CHECKS:
For each section in the Page Spec:
  □ H2 headline matches verbatim
  □ Body copy matches verbatim (paragraph by paragraph)
  □ CTA text matches (if section has CTA)
  □ Microcopy matches (support text below CTAs)
  □ No placeholder text remains ("[TODO]", "Lorem ipsum", "[Company]")
  □ No typos introduced during implementation

Special checks:
  □ Hero H1 matches the RECOMMENDED variant
  □ FAQ questions AND answers all present
  □ Footer elements all present (founder bio, contact, legal)
  □ Navigation link labels match
  □ Form field labels and placeholders match
  □ Error messages match spec
  □ Success message matches spec
```

**Severity:** Content mismatches are 🔴 CRITICAL — wrong copy is wrong messaging.

### 2. Structural Compliance Audit

Verify the page structure matches the blueprint.

```
STRUCTURE CHECKS:
  □ All sections present (count matches Page Spec)
  □ Sections in correct order
  □ Layout pattern matches wireframe for each section
  □ Background rhythm matches (dark/light/accent sequence)
  □ CTA map fully implemented:
    □ Hero CTA present
    □ Sticky nav CTA present
    □ Mid-page CTA present (if specified)
    □ Offer CTA present
    □ Final CTA present
  □ Navigation contains all specified links
  □ Section IDs match anchor link targets
  □ Form has all specified fields in correct order
```

**Severity:** Missing sections are 🔴 CRITICAL. Minor layout differences are 🟡 WARNING.

### 3. Responsive Audit

Check mobile behavior for EACH section against the Page Spec mobile specs.

```
RESPONSIVE CHECKS (test at 375px width):
  □ Hero CTA is visible without scrolling
  □ No horizontal scrollbar at any content point
  □ Navigation: hamburger visible, desktop links hidden
  □ Navigation: CTA button stays visible alongside hamburger
  □ Mobile menu opens and closes correctly
  □ Text is readable (body ≥ 16px, headlines ≥ 24px)
  □ Touch targets ≥ 44x44px (all buttons, links, form fields)
  □ Images don't overflow container
  □ Tables converted to stacked cards (if applicable)
  □ CTA buttons are full-width on mobile
  □ Form is single-column on mobile
  □ Content padding ≥ 20px on sides (no edge-to-edge text)

For each section:
  □ Mobile adaptation matches the spec
    (e.g., "hide hero visual", "stack cards", "accordion for FAQs")
```

**How to check:** Read the HTML/CSS and trace the responsive media queries.
If computer tools are available, render at 375px and inspect.

**Severity:** CTA not visible above fold is 🔴 CRITICAL. Minor spacing issues are 🟢 LOW.

### 4. Design System Compliance Audit

Verify the HTML uses design system variables, not hardcoded values.

```
DESIGN SYSTEM CHECKS:
  □ No hardcoded color values in section/component styles
    (search for hex #, rgb(, hsl( outside of :root)
  □ No hardcoded font-size values (all use var(--text-*))
  □ No hardcoded spacing values (all use var(--space-*))
  □ Typography hierarchy correct:
    □ Only ONE H1 on the page (hero)
    □ All section headers are H2
    □ Sub-items are H3
    □ No skipped heading levels (no H1 → H3)
  □ Buttons use .btn component classes (not inline styles)
  □ Section backgrounds use .section--dark / --light / --accent classes
  □ Font loading uses display=swap
```

**Severity:** Hardcoded colors are 🟡 WARNING (maintenance issue).
Heading hierarchy errors are 🟡 WARNING (SEO + accessibility).

### 5. Performance Audit

Check against the targets in the Page Spec.

```
PERFORMANCE CHECKS:
  □ All CSS is inline (no external stylesheet links except fonts)
  □ All JS is inline (no external script imports except analytics)
  □ No JS libraries/frameworks loaded (vanilla JS only)
  □ Images below the fold have loading="lazy"
  □ Images have explicit width and height attributes (prevents CLS)
  □ Google Fonts loaded with display=swap
  □ Preconnect hints present for fonts.googleapis.com and fonts.gstatic.com
  □ No unused CSS (major blocks of dead code)
  □ Total JS is < 5KB (estimate by reading)
  □ Animations use only transform and opacity (GPU-accelerated)
  □ No backdrop-filter on page load (only on scroll interaction)
  □ Scroll listeners throttled with requestAnimationFrame
```

**If computer tools available, also run:**
- File size check (total HTML < 100KB without images)
- HTML validation (no unclosed tags, no duplicate IDs)

**Severity:** Missing lazy loading is 🟡 WARNING. JS library import is 🔴 CRITICAL.

### 6. Accessibility Audit

```
ACCESSIBILITY CHECKS:
  □ Skip-to-content link present and functional
  □ Language attribute on <html> (lang="pt-BR" or appropriate)
  □ Semantic elements used:
    □ <header> for navigation
    □ <main> wrapping content
    □ <footer> for footer
    □ <section> for each section
    □ <nav> for navigation
    □ <article> for self-contained content (case studies)
  □ All images have meaningful alt text (not "[image]" or "photo")
  □ Decorative elements have aria-hidden="true"
  □ Interactive elements have focus styles (:focus-visible)
  □ Form fields have linked labels (for/id match)
  □ Form errors use role="alert"
  □ Form errors linked with aria-describedby
  □ Required fields have aria-required="true"
  □ Hamburger menu has aria-expanded and aria-controls
  □ Mobile menu has aria-hidden when closed
  □ Color contrast: text on backgrounds meets WCAG AA (4.5:1)
  □ prefers-reduced-motion media query disables all animations
  □ Keyboard navigation: all CTAs and form fields reachable via Tab
  □ No autoplaying media with sound
```

**Severity:** Missing alt text is 🟡 WARNING. Missing skip link is 🟡 WARNING.
Missing form labels is 🔴 CRITICAL (legal compliance in some markets).

### 7. Interaction Audit

Test all interactive elements:

```
INTERACTION CHECKS:
  □ All anchor links scroll to correct sections
  □ Nav offset: scroll position accounts for sticky nav height
  □ Nav state changes on scroll (transparent → solid)
  □ Mobile menu opens on hamburger click
  □ Mobile menu closes on link click
  □ Mobile menu closes on Escape key
  □ Body scroll locked when mobile menu open
  □ FAQ accordions open and close
  □ FAQ first item is open by default (if specified)
  □ Number counters animate on scroll into view
  □ Scroll reveal animations trigger correctly
  □ Form validation shows errors on empty required fields
  □ Form validation shows errors on invalid email/phone
  □ Form submit triggers correct action (WhatsApp/API/redirect)
  □ CTA hover states work (color change, slight lift)
```

**Severity:** Broken anchor links are 🔴 CRITICAL. Missing hover state is 🟢 LOW.

### 8. Generate QA Report

Compile all findings into the report format.
Follow template in `references/qa-report-template.md`.

## Output Format

Structured markdown QA report with:
- Summary (total checks, pass count, fail count, warning count)
- Per-category findings
- Each finding: check name, status (🟢/🟡/🔴), issue description, fix instructions
- Fix priority order

## Validation Checklist (meta)

Before delivering the QA report:
- [ ] Every check category has been audited
- [ ] Every failure has specific fix instructions (not just "fix it")
- [ ] Fix instructions reference specific line numbers or selectors when possible
- [ ] Priority order is clear (fix 🔴 CRITICAL first, then 🟡, then 🟢)
- [ ] Report distinguishes between spec violations and improvement suggestions

## Integration

**Input from**: Built HTML (`lp-page-builder`), Page Specification (Phase 1)

**Output to**: Builder (fixes), then Phase 4 (Expert Panel reviews the fixed page)

**Loop**: Builder fixes all 🔴 CRITICAL and 🟡 WARNING items → QA re-runs → repeat until clean.

## References

- `references/qa-report-template.md` — QA report output format
- `references/qa-checklist-compact.md` — Quick-reference checklist for fast audits
