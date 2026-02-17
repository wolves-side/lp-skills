---
name: lp-page-builder
description: >
  Build a complete, production-ready landing page as a MULTI-FILE project. Activate when the
  Page Specification (Phase 1) and Design System (Phase 2) are complete. Generates a modular
  project with separate HTML, CSS (7 files), and JS (6 modules), all production-ready.
  Outputs a clean project folder plus an optional single-file bundle for deployment.
  Part of the Landing Page Pipeline (Phase 3, Step 1 of 2).
---

# LP Page Builder — Multi-File Architecture

## Purpose

Transform the Page Specification + Design System into a WORKING landing page
delivered as a **modular, maintainable project** — not a monolithic HTML file.

Every file has a single responsibility. CSS is layered. JS is modular.
HTML is clean and semantic. Easy to read, easy to adjust, easy to scale.

**Requires**:
1. Page Specification from `lp-page-spec-assembler` (Phase 1)
2. Design System from Phase 2 (CSS custom properties + component styles)

## Core Philosophy

**The spec is the contract. The builder is the executor. The architecture enables iteration.**

Rules:
- Every piece of copy from the Page Spec goes into the HTML VERBATIM. No rewording.
- Every structural decision from the wireframes gets implemented. No improvising layouts.
- Every responsive behavior from the mobile specs gets coded. No "it'll probably work."
- The Design System's CSS variables are the ONLY source of visual decisions.
- **Each file has ONE job.** CSS doesn't live in HTML. JS doesn't live in CSS.
- If something is ambiguous in the spec, flag it — don't guess.

## Output: Project Structure

```
[company-slug]-lp/
│
├── index.html                    ← Clean semantic HTML (no inline styles/scripts)
│
├── css/
│   ├── 01-reset.css              ← Minimal CSS reset
│   ├── 02-design-system.css      ← All :root variables from Phase 2
│   ├── 03-base.css               ← Global typography, body, container, section
│   ├── 04-components.css         ← Buttons, cards, forms, badges, offer-card
│   ├── 05-sections.css           ← Section-specific layout rules (hero, proof, etc.)
│   ├── 06-animations.css         ← Keyframes, reveal classes, reduced-motion
│   └── 07-responsive.css         ← ALL media queries consolidated
│
├── js/
│   ├── nav.js                    ← Sticky nav + hamburger + scroll state
│   ├── scroll-reveal.js          ← IntersectionObserver scroll animations
│   ├── counters.js               ← Number counter animations
│   ├── accordion.js              ← FAQ accordion behavior
│   ├── form-handler.js           ← Validation + submission (WhatsApp/API/etc.)
│   └── smooth-scroll.js          ← Anchor link smooth scrolling
│
└── assets/
    └── .gitkeep                  ← Placeholder for images/icons
```

**Total: 1 HTML + 7 CSS + 6 JS = 14 files, each with a single clear purpose.**

See `references/project-structure.md` for detailed file responsibilities.

## Build Order

Follow this exact sequence. Each step builds on the previous.

### Step 1: Read All Inputs

Read BOTH documents completely before writing ANY code:

**From Page Specification:**
- Meta → SEO tags (title, description, OG)
- Meta → External integrations (analytics, WhatsApp, Calendly)
- Meta → Performance targets (acceptance criteria)
- Meta → Accessibility requirements
- Each section spec (copy + wireframe + behavior + mobile)
- Form specification (if applicable)
- A/B variant summary (implement the "Recommended" variant)

**From Design System:**
- All CSS custom properties (colors, type, spacing, etc.)
- Component base styles (buttons, cards, nav, etc.)
- Font declarations and Google Fonts import URL
- Animation tokens

### Step 2: Create CSS Layer (7 files)

Build CSS files in order. Each file imports nothing — they're loaded via
`<link>` tags in the HTML in numbered order, creating natural cascade.

| File | Contents | Source |
|------|----------|--------|
| `01-reset.css` | Box-sizing, margin reset, img/input normalization | Template (copy from reference) |
| `02-design-system.css` | `:root` with ALL custom properties from Phase 2 | Phase 2 Design System output |
| `03-base.css` | body, h1-h3, `.container`, `.section`, `.skip-link` | Template + Design System |
| `04-components.css` | `.btn`, `.cta-support`, form styles, cards, nav, offer-card | Phase 2 components + references |
| `05-sections.css` | Hero, problem, solution, proof, features, FAQ, testimonials, footer | Section wireframes from Phase 1 |
| `06-animations.css` | `.reveal`, `.reveal-stagger`, `@keyframes`, reduced-motion | Template (copy from reference) |
| `07-responsive.css` | ALL `@media` queries for tablet (1024px) and mobile (640px) | Mobile specs from Phase 1 |

**Critical CSS rule:** `05-sections.css` is the ONLY file that should vary
significantly between projects. Files 01-04 and 06 are mostly template-based.

See `references/css-architecture.md` for complete file templates.

### Step 3: Create HTML (index.html)

Clean, semantic HTML. Zero inline styles. Zero inline scripts.
All CSS loaded via `<link>`, all JS loaded via `<script defer>`.

**Document structure:**
```html
<!DOCTYPE html>
<html lang="[from spec]">
<head>
  <!-- Meta, SEO, OG tags -->
  <!-- Preconnect: fonts -->
  <!-- Google Fonts -->
  <!-- CSS files in order -->
  <link rel="stylesheet" href="css/01-reset.css">
  <link rel="stylesheet" href="css/02-design-system.css">
  <link rel="stylesheet" href="css/03-base.css">
  <link rel="stylesheet" href="css/04-components.css">
  <link rel="stylesheet" href="css/05-sections.css">
  <link rel="stylesheet" href="css/06-animations.css">
  <link rel="stylesheet" href="css/07-responsive.css">
</head>
<body>
  <a href="#main" class="skip-link">Pular para o conteúdo</a>
  <header class="nav" id="nav">...</header>
  <main id="main">
    <section id="hero">...</section>
    <!-- All sections from Page Spec -->
  </main>
  <footer>...</footer>

  <!-- JS modules: defer loading, correct order -->
  <script defer src="js/nav.js"></script>
  <script defer src="js/scroll-reveal.js"></script>
  <script defer src="js/counters.js"></script>
  <script defer src="js/accordion.js"></script>
  <script defer src="js/form-handler.js"></script>
  <script defer src="js/smooth-scroll.js"></script>
  <!-- Analytics -->
</body>
</html>
```

See `references/html-scaffold.md` for the complete starter template.

### Step 4: Build Sections (inside index.html + 05-sections.css)

For EACH section in the Page Specification, implement:

**A. HTML structure** (in `index.html`)
- Semantic elements: `<section>`, `<article>`, `<figure>`, `<nav>`
- H1 for hero ONLY. H2 for section headers. H3 for sub-items.
- `id` attributes for anchor navigation
- `class` attributes referencing 04-components.css and 05-sections.css
- ARIA labels where specified
- Copy VERBATIM from the Page Spec — no rewording

**B. Section layout CSS** (in `05-sections.css`)
- Match the ASCII wireframe using CSS Grid or Flexbox
- Follow layout pattern: Split, Centered, Grid, Cards, etc.
- Use design system variables for all values
- NO media queries here — they go in `07-responsive.css`

**C. Responsive rules** (in `07-responsive.css`)
- Implement EVERY mobile adaptation from section spec
- Follow breakpoints from design system
- Group by breakpoint, then by section within each breakpoint

**D. Animation classes** (in `index.html` markup)
- Add `.reveal` or `.reveal-stagger` classes as specified
- Add `data-target` attributes for number counters
- JS files handle the behavior automatically

See `references/section-build-patterns.md` for patterns per section type.

### Step 5: Implement Navigation

Navigation touches multiple files:

| Concern | File |
|---------|------|
| HTML structure | `index.html` (header) |
| Desktop + base styles | `04-components.css` (.nav-*) |
| Mobile nav styles | `07-responsive.css` |
| Scroll behavior + hamburger | `js/nav.js` |

See `references/nav-implementation.md` for complete cross-file patterns.

### Step 6: Implement Forms (if applicable)

| Concern | File |
|---------|------|
| HTML structure | `index.html` (form) |
| Form field + error styles | `04-components.css` (.form-*) |
| Mobile form styles | `07-responsive.css` |
| Validation + submission | `js/form-handler.js` |

See `references/form-implementation.md` for patterns by submission type.

### Step 7: Implement JS Modules (6 files)

Each JS file is an IIFE (Immediately Invoked Function Expression).
No dependencies between modules. Each is self-contained.

| Module | Responsibility | Key APIs |
|--------|---------------|----------|
| `nav.js` | Sticky state, hamburger, body scroll lock, Escape key | scroll event, classList |
| `scroll-reveal.js` | Fade-in on scroll, stagger children | IntersectionObserver |
| `counters.js` | Animate numbers from 0 to target | IntersectionObserver, rAF |
| `accordion.js` | FAQ open/close, optional single-open mode | details/summary toggle |
| `form-handler.js` | Validation, error display, submit action | FormData, fetch |
| `smooth-scroll.js` | Anchor links with nav offset compensation | scrollTo, preventDefault |

**Performance rules for ALL JS:**
- Vanilla JS only. Zero dependencies. Zero libraries.
- Each file wrapped in `(function() { ... })();`
- All check `prefers-reduced-motion` where applicable
- Scroll listeners throttled with `requestAnimationFrame`
- ONLY animate `transform` and `opacity`

See `references/js-modules.md` for complete module templates.

### Step 8: Add Analytics & Integrations

From the External Integrations table in the Page Spec:

- Google Analytics / GTM → `<script>` before `</body>` (after JS modules)
- Facebook Pixel → `<script>` in `<head>`
- WhatsApp CTA → configured in `js/form-handler.js`
- Calendly → inline embed or popup (link in HTML, script before `</body>`)

### Step 9: Self-Review Before Handoff

Run through ALL checks BEFORE delivering:

**Content:** Every headline, paragraph, CTA, microcopy verbatim from spec.
No placeholders. No typos.

**Structure:** All sections present and in order. All CTAs implemented.
Nav links correct. Form fields match spec.

**CSS Architecture:** No inline styles in HTML. No hardcoded values outside
`02-design-system.css`. Variables used everywhere. No CSS in JS files.

**JS Architecture:** No inline scripts in HTML. Each module is self-contained.
No global variable leaks. All IIFEs.

**Responsive:** Hero CTA above fold on 375px. No horizontal scroll.
Touch targets ≥ 44px. All mobile adaptations from spec implemented.

**Performance:** `defer` on all scripts. `loading="lazy"` below fold.
`display=swap` on fonts. Preconnect hints present.

**Accessibility:** Skip link, lang attribute, semantic elements, ARIA states,
`prefers-reduced-motion`, form labels linked, focus styles visible.

### Step 10: Optional — Single-File Bundle

If the client needs a single deployable HTML file (for quick hosting, email,
or platforms that require it), generate a bundled version:

See `references/build-assembly.md` for the bundling process.

## Delivery

The builder delivers:

1. **Project folder** with all 14 files (primary deliverable)
2. **Bundled HTML** (optional, if requested) — single file with everything inlined
3. **Build notes** — any ambiguities found in the spec, decisions made

## Integration

**Input from**:
- Page Specification (`lp-page-spec-assembler`, Phase 1)
- Design System (Phase 2)

**Output to**: `lp-page-qa` (validates the built page against the spec)

## References

- `references/project-structure.md` — File responsibilities and naming conventions
- `references/html-scaffold.md` — Complete HTML template with all meta, links, scripts
- `references/css-architecture.md` — All 7 CSS files with complete templates
- `references/js-modules.md` — All 6 JS modules with complete templates
- `references/section-build-patterns.md` — HTML + CSS per section type (multi-file)
- `references/nav-implementation.md` — Navigation across HTML/CSS/JS files
- `references/form-implementation.md` — Form patterns by submission type
- `references/animation-implementation.md` — Animation CSS + JS patterns
- `references/build-assembly.md` — How to bundle into single-file for deployment
