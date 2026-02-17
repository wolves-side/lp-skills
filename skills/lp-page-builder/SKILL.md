---
name: lp-page-builder
description: "Build a complete, production-ready landing page as a single HTML file. Activate when the Page Specification (Phase 1) and Design System (Phase 2) are complete, or when user has a spec and design tokens ready for implementation. Generates semantic HTML, responsive CSS, scroll animations, form handling, and all copy verbatim from the spec. Outputs a self-contained HTML file ready for deployment. Part of the Landing Page Pipeline (Phase 3, Step 1 of 2)."
---

# LP Page Builder

## Purpose

Transform the Page Specification + Design System into a WORKING landing page.
Not a wireframe. Not a prototype. A **production-ready, deployable HTML file.**

Single file. All CSS inline. All JS inline. Zero external dependencies except
Google Fonts. Drop it on any hosting and it works.

**Requires**:
1. Page Specification from `lp-page-spec-assembler` (Phase 1)
2. Design System from Phase 2 (CSS custom properties + component styles)

## Core Philosophy

**The spec is the contract. The builder is the executor.**

Rules:
- Every piece of copy from the Page Spec goes into the HTML VERBATIM. No rewording.
- Every structural decision from the wireframes gets implemented. No improvising layouts.
- Every responsive behavior from the mobile specs gets coded. No "it'll probably work."
- The Design System's CSS variables are the ONLY source of visual decisions.
- If something is ambiguous in the spec, flag it — don't guess.

## Process

### 1. Read the Inputs

Read BOTH documents completely before writing any code:

**From Page Specification:**
- Meta → SEO tags (title, description, OG)
- Meta → External integrations (analytics, WhatsApp, Calendly)
- Meta → Performance targets (these are acceptance criteria)
- Meta → Accessibility requirements
- Each section spec (copy + wireframe + behavior + mobile)
- Form specification (if applicable)
- A/B variant summary (implement the "Recommended" variant)

**From Design System:**
- All CSS custom properties (colors, type, spacing, etc.)
- Component base styles (buttons, cards, nav, etc.)
- Font declarations and Google Fonts import URL
- Animation tokens

### 2. Scaffold the HTML

Start with the base structure. See `references/html-scaffold.md` for the
complete starter template with all required meta tags, font loading strategy,
and performance optimizations.

**Document structure:**
```
<!DOCTYPE html>
<html lang="[from spec]">
<head>
  <!-- Meta, SEO, OG tags from Page Spec -->
  <!-- Preconnect to Google Fonts -->
  <!-- Font loading with display=swap -->
  <!-- Critical CSS (design system + above-fold styles) -->
</head>
<body>
  <header> <!-- Sticky navigation --> </header>
  <main>
    <section id="hero"> ... </section>
    <section id="[name]"> ... </section>
    <!-- All sections from Page Spec in order -->
  </main>
  <footer> ... </footer>
  <!-- Non-critical JS: animations, form handling, interactions -->
</body>
</html>
```

### 3. Build Section by Section

For EACH section in the Page Specification, implement in order:

**Step A: Semantic HTML structure**
- Use correct semantic elements (section, article, aside, figure, nav)
- H1 for hero ONLY. H2 for all section headers. H3 for sub-items.
- Add `id` attributes for anchor navigation
- Add ARIA labels where specified

**Step B: Apply copy verbatim**
- Copy EVERY text element from the Page Spec exactly
- Headlines, body paragraphs, CTA text, microcopy — ALL of it
- Do NOT rephrase, shorten, or "improve" any copy
- Use the RECOMMENDED variant (not alternatives) unless told otherwise

**Step C: Implement layout from wireframe**
- Match the ASCII wireframe structure using CSS Grid or Flexbox
- Follow the layout pattern specified (Split, Centered, Grid, Cards, etc.)
- Apply the background tone (map to design system dark/light/accent variables)

**Step D: Code responsive behavior**
- Implement EVERY mobile adaptation from the section spec
- Follow breakpoints from the design system
- Test mental model: "On a 375px screen, does this section work?"

**Step E: Add interactions**
- Implement animations from the behavior spec
- Use IntersectionObserver for scroll-triggered animations
- Use CSS transitions for hover/focus states
- Respect `prefers-reduced-motion`

See `references/section-build-patterns.md` for implementation patterns
for each standard section type.

### 4. Implement Navigation

The nav is critical and has complex behavior:

```
DESKTOP:
- Fixed position, full width
- Transparent background over hero
- Solid background (with subtle shadow) after scrolling past hero
- Logo left, links center-right, CTA button far right
- Links scroll smoothly to section anchors
- Active link highlights based on scroll position (optional)

MOBILE:
- Fixed position, full width
- Logo left, CTA button center-right, hamburger far right
- CTA stays visible even when menu is closed (CRITICAL)
- Hamburger opens full-screen overlay or slide-in panel
- Menu contains all nav links + contact info
- Body scroll locked when menu is open
```

See `references/nav-implementation.md` for complete JS + CSS.

### 5. Implement Forms (if applicable)

From the Form Specification in the Page Spec:

- Build form with correct field types, labels, placeholders
- Client-side validation (required fields, email format, phone format)
- Show inline error messages (from the Page Spec microcopy)
- Loading state on submit (button text changes or spinner)
- Success state (redirect, message, or WhatsApp open)
- Accessible: labels linked to inputs, error messages linked with aria-describedby

See `references/form-implementation.md` for complete form patterns.

### 6. Implement Scroll Animations

Standard animation set (from Page Spec micro-interactions):

| Animation | Implementation |
|-----------|---------------|
| Scroll reveal (fade up) | IntersectionObserver + CSS transform |
| Number counter | IntersectionObserver + JS requestAnimationFrame |
| Nav background change | Scroll event listener (throttled) |
| FAQ accordion | CSS max-height transition + JS toggle |
| CTA hover | CSS :hover transition |
| Stagger children | CSS animation-delay increments |

**Performance rules:**
- ONLY animate `transform` and `opacity` (GPU-composited)
- Use `will-change` sparingly (only on elements about to animate)
- Throttle scroll listeners to 1 tick per rAF
- Wrap ALL animations in `prefers-reduced-motion` check

See `references/animation-implementation.md` for copy-paste JS patterns.

### 7. Optimize for Performance

Before finalizing, apply these optimizations:

| Optimization | How |
|-------------|-----|
| Critical CSS | Inline ALL CSS in `<style>` (single-file approach handles this) |
| Font loading | `font-display: swap` + preconnect to fonts.googleapis.com |
| Image lazy loading | `loading="lazy"` on all images below the fold |
| Image sizing | Explicit `width` and `height` on all `<img>` to prevent CLS |
| Minimal JS | No libraries. Vanilla JS only. Keep under 5KB total. |
| Minification | Not needed for the delivered file — builder can do in deployment |

### 8. Add Analytics & Integrations

From the External Integrations table in the Page Spec:

- Google Analytics / GTM → Script tag before `</body>`
- Facebook Pixel → Script tag in `<head>` (required for page view tracking)
- WhatsApp CTA → `href="https://wa.me/[number]?text=[encoded message]"`
- Calendly → Inline embed or popup link
- Other tracking → As specified

### 9. Final Assembly

The complete single-file HTML should follow this internal order:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- 1. Charset + viewport -->
  <!-- 2. SEO meta tags -->
  <!-- 3. OG tags -->
  <!-- 4. Preconnect: fonts -->
  <!-- 5. Google Fonts link -->
  <!-- 6. Tracking scripts (that must be in head) -->
  <style>
    /* 7. CSS Reset (minimal) */
    /* 8. Design System custom properties */
    /* 9. Base/global styles */
    /* 10. Component styles */
    /* 11. Section-specific styles */
    /* 12. Responsive overrides */
    /* 13. Animation keyframes */
    /* 14. Utility classes */
    /* 15. Print styles (optional) */
  </style>
</head>
<body>
  <!-- 16. Navigation (header) -->
  <main>
    <!-- 17-N. All sections in order -->
  </main>
  <!-- N+1. Footer -->
  <script>
    // N+2. Navigation behavior (scroll, mobile menu)
    // N+3. Scroll animations (IntersectionObserver)
    // N+4. Number counters
    // N+5. FAQ accordion
    // N+6. Form handling (if applicable)
    // N+7. Smooth scroll for anchor links
  </script>
  <!-- N+8. Analytics/tracking scripts -->
</body>
</html>
```

### 10. Self-Review Before Handoff

Run through these checks BEFORE delivering:

**Content check:**
- [ ] Every headline from the Page Spec is present and verbatim
- [ ] Every body paragraph is present and verbatim
- [ ] Every CTA has correct text AND microcopy
- [ ] FAQ has all questions and answers
- [ ] Footer has all specified elements
- [ ] No placeholder text remains ("Lorem ipsum", "[TODO]", etc.)

**Structure check:**
- [ ] Sections are in the correct order from the Page Spec
- [ ] Layouts match the wireframes
- [ ] CTA map is fully implemented (hero, mid-page, offer, closing + sticky)
- [ ] Navigation links point to correct section anchors

**Visual check:**
- [ ] Design system variables are used consistently (no hardcoded colors/sizes)
- [ ] Dark/light section rhythm matches the spec
- [ ] Visual weight hierarchy feels correct (hero > offer > proof)
- [ ] Component styles match the design system

**Responsive check:**
- [ ] Hero CTA is above the fold on 375px mobile
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets are ≥44x44px
- [ ] Tables convert to cards/stacks on mobile
- [ ] Navigation hamburger works, CTA stays visible

**Performance check:**
- [ ] No external CSS files (all inline)
- [ ] No JS libraries (vanilla only)
- [ ] Images have lazy loading below fold
- [ ] Images have explicit width/height
- [ ] Fonts use display=swap

**Accessibility check:**
- [ ] Semantic HTML elements used correctly
- [ ] Single H1 (hero), H2s for sections, H3s for sub-items
- [ ] All images have meaningful alt text
- [ ] Form fields have linked labels
- [ ] Focus styles visible on all interactive elements
- [ ] Skip-to-content link present
- [ ] prefers-reduced-motion disables animations

## Output

A single `.html` file ready for deployment.

Filename: `[company-slug]-landing-page.html`

## Integration

**Input from**:
- Page Specification (`lp-page-spec-assembler`, Phase 1)
- Design System (Phase 2)

**Output to**: `lp-page-qa` (validates the built page against the spec)

## References

- `references/html-scaffold.md` — Base HTML template with meta, fonts, performance setup
- `references/section-build-patterns.md` — HTML/CSS patterns for each section type
- `references/nav-implementation.md` — Complete navigation JS + CSS
- `references/form-implementation.md` — Form validation and submission patterns
- `references/animation-implementation.md` — Scroll animations, counters, accordions
