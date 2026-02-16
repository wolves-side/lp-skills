# QA Quick Checklist

One-page reference for fast audits. Each item is binary: ✅ or ❌.
Use the full QA process for detailed findings. Use this for quick re-checks.

---

## 🔴 CRITICAL (Blocks delivery)

### Content
- [ ] Hero H1 matches spec (recommended variant)
- [ ] Every section has its headline from the spec
- [ ] All CTA buttons have correct text
- [ ] FAQ: all questions AND answers present
- [ ] No placeholder text anywhere ("[TODO]", "Lorem", etc.)

### Structure
- [ ] All sections from spec are present
- [ ] Sections in correct order
- [ ] Minimum 3 CTAs on page (hero, offer, closing)
- [ ] Sticky nav CTA present

### Responsive
- [ ] Hero CTA visible without scrolling on 375px
- [ ] No horizontal scroll at 375px

### Performance
- [ ] No external JS libraries loaded
- [ ] All CSS inline (no external stylesheets except fonts)

### Accessibility
- [ ] Form fields have linked labels
- [ ] Single H1 on page (hero only)

### Interactions
- [ ] Anchor links scroll to correct sections
- [ ] Form submit triggers correct action

---

## 🟡 WARNING (Fix before Expert Panel)

### Content
- [ ] All body paragraphs match spec verbatim
- [ ] Microcopy below CTAs matches spec
- [ ] Footer has all specified elements

### Structure
- [ ] Layout patterns match wireframes
- [ ] Dark/light background rhythm correct
- [ ] Form has all fields in correct order

### Responsive
- [ ] Nav: hamburger visible, CTA visible on mobile
- [ ] Mobile menu opens and closes
- [ ] Touch targets ≥ 44px
- [ ] CTA buttons full-width on mobile

### Design System
- [ ] No hardcoded colors (search: #, rgb(, hsl( outside :root)
- [ ] H2 for section headers, H3 for sub-items
- [ ] No skipped heading levels

### Performance
- [ ] Images below fold have loading="lazy"
- [ ] Images have width/height attributes
- [ ] Fonts: preconnect + display=swap
- [ ] Animations use only transform/opacity

### Accessibility
- [ ] Skip-to-content link present
- [ ] lang attribute on <html>
- [ ] Semantic elements (header, main, footer, section, nav)
- [ ] Images have meaningful alt text
- [ ] prefers-reduced-motion disables animations
- [ ] Focus styles visible on interactive elements
- [ ] Hamburger: aria-expanded + aria-controls

### Interactions
- [ ] Nav transparent→solid on scroll
- [ ] Mobile menu close on link click
- [ ] Mobile menu close on Escape
- [ ] Body scroll locked when menu open
- [ ] FAQ accordion functional
- [ ] Number counters animate on scroll
- [ ] Scroll reveals trigger correctly
- [ ] Form validation shows inline errors
- [ ] CTA hover states work

---

## 🟢 LOW (Nice to have)

- [ ] Print styles present
- [ ] No unused CSS blocks
- [ ] Scroll progress indicator (if specified)
- [ ] Active nav link highlighting
- [ ] Back-to-top button (if specified)
- [ ] Cookie consent (if required)

---

## Quick Count

Total checks: ~65
CRITICAL: ~15 | WARNING: ~35 | LOW: ~6

Passing threshold: ALL 🔴 = ✅, ALL 🟡 = ✅
