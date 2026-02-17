# Project Structure

Detailed specification of every file in the output project.

---

## Directory Layout

```
[company-slug]-lp/
│
├── index.html                    ← Single HTML file, zero inline styles/scripts
│
├── css/
│   ├── 01-reset.css              ← 30 lines  — CSS reset, box-sizing, normalization
│   ├── 02-design-system.css      ← 60 lines  — :root custom properties (Phase 2)
│   ├── 03-base.css               ← 80 lines  — Body, headings, container, section, skip-link
│   ├── 04-components.css         ← 200 lines — Buttons, nav, cards, forms, badges, offer
│   ├── 05-sections.css           ← 300 lines — Per-section layouts (hero, problem, etc.)
│   ├── 06-animations.css         ← 60 lines  — Reveal, stagger, keyframes, reduced-motion
│   └── 07-responsive.css         ← 200 lines — ALL media queries (1024px + 640px)
│
├── js/
│   ├── nav.js                    ← Nav scroll state, hamburger, escape key, body lock
│   ├── scroll-reveal.js          ← IntersectionObserver for .reveal / .reveal-stagger
│   ├── counters.js               ← Animated number counters [data-target]
│   ├── accordion.js              ← FAQ <details> enhanced accordion
│   ├── form-handler.js           ← Validation + submission (WhatsApp/API/etc.)
│   └── smooth-scroll.js          ← Anchor links with nav offset compensation
│
└── assets/
    └── .gitkeep                  ← Placeholder directory for images, icons, logos
```

---

## File Responsibilities (Single Responsibility Principle)

### CSS Files — Loaded in Order (Cascade Matters)

| # | File | Responsibility | Changes Between Projects |
|---|------|---------------|------------------------|
| 01 | `reset.css` | Normalize browser defaults. Box-sizing. Image/input resets. | Never |
| 02 | `design-system.css` | ALL CSS custom properties from Phase 2 Design System. | Always (every project has unique tokens) |
| 03 | `base.css` | Body font, heading styles, `.container`, `.section` variants, `.skip-link` | Rarely (uses variables from 02) |
| 04 | `components.css` | Reusable UI: `.btn`, `.nav`, `.form-*`, `.card`, `.metric`, `.offer-card`, `.testimonial-card`, `.cta-support` | Sometimes (add/remove components per project) |
| 05 | `sections.css` | Layout rules per section: `.hero__grid`, `.pain-cards`, `.feature-grid`, etc. | Always (every LP has different sections) |
| 06 | `animations.css` | `.reveal`, `.reveal-stagger`, `@keyframes`, `prefers-reduced-motion` reset | Rarely |
| 07 | `responsive.css` | ALL `@media` queries for 1024px and 640px breakpoints | Always (mobile adaptations per project) |

**Why numbered?** CSS cascade depends on load order. Numbering ensures
correct specificity regardless of server configuration or build tool.

**Rule:** NO media queries in files 01-06. ALL responsive rules go in `07-responsive.css`.
This makes mobile debugging trivial — one file to check.

### JS Files — Loaded with `defer` (Order Doesn't Matter)

| File | Responsibility | Required? |
|------|---------------|-----------|
| `nav.js` | Sticky nav scroll state, mobile hamburger, body scroll lock, Escape key | Always |
| `scroll-reveal.js` | IntersectionObserver for `.reveal` and `.reveal-stagger` elements | Always |
| `counters.js` | Animate `[data-target]` numbers from 0 to target on scroll | If metrics section exists |
| `accordion.js` | Enhanced FAQ accordion with smooth animation | If FAQ section exists |
| `form-handler.js` | Client-side validation + submission handler | If form exists |
| `smooth-scroll.js` | Smooth scroll for `a[href^="#"]` with nav offset | Always |

**Rule:** Each JS file is wrapped in an IIFE: `(function() { ... })();`
No global variables. No dependencies between files. No imports/exports.

### HTML (index.html)

Single HTML file. Contains:
- All `<meta>` tags (SEO, OG, viewport)
- `<link>` tags for all 7 CSS files
- Semantic HTML structure (`<header>`, `<main>`, `<section>`, `<footer>`)
- All page copy VERBATIM from the Page Spec
- `<script defer>` tags for all JS modules
- Analytics/tracking scripts (last, before `</body>`)

Does NOT contain:
- Any `<style>` tags (all CSS is external)
- Any inline `style=""` attributes
- Any `<script>` blocks with code (all JS is external)
- Any `onclick` handlers (all event listeners in JS files)

---

## Naming Conventions

### CSS Classes: BEM-inspired

```
.block                    → .hero, .nav, .offer-card
.block__element           → .hero__title, .nav__link, .offer-card__price
.block--modifier          → .section--dark, .btn--primary, .btn--large
```

### Section IDs: kebab-case

```
id="hero"
id="problem"
id="solution"
id="proof"
id="features"
id="offer"
id="faq"
id="testimonials"
id="cta-final"
```

### JS DOM References: getElementById

```javascript
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');
const contactForm = document.getElementById('contactForm');
```

---

## File Size Targets

| File Type | Target | Max |
|-----------|--------|-----|
| index.html | < 15 KB | 25 KB |
| Total CSS (all 7 files) | < 15 KB | 25 KB |
| Total JS (all 6 files) | < 8 KB | 12 KB |
| **Total project** | **< 38 KB** | **62 KB** |

These exclude images and external fonts. The project should be deployable
on any static hosting with zero build step.
