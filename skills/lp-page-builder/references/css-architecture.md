# CSS Architecture

Complete templates for all 7 CSS files. Copy each into its own file,
then customize per project.

**Load order matters.** Files are numbered to enforce correct cascade.
No file imports another. They're linked in the HTML in order.

---

## 01-reset.css

Minimal, targeted reset. Consistent starting point across browsers.
**This file NEVER changes between projects.**

```css
/* ================================================
   01-reset.css — Browser normalization
   ================================================ */

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  min-height: 100vh;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

ul, ol {
  list-style: none;
}

table {
  border-collapse: collapse;
}
```

---

## 02-design-system.css

ALL CSS custom properties from Phase 2. This is the single source of truth
for visual decisions. **Every project gets unique values here.**

```css
/* ================================================
   02-design-system.css — Design tokens (Phase 2)
   ================================================ */

:root {
  /* ---- Colors ---- */
  --color-bg-primary:      ;  /* Main background (white/off-white) */
  --color-bg-secondary:    ;  /* Alternating sections */
  --color-bg-dark:         ;  /* Dark sections (hero, proof, CTA) */
  --color-bg-accent:       ;  /* Accent background (subtle tint) */

  --color-text-primary:    ;  /* Main body text */
  --color-text-secondary:  ;  /* Secondary/muted text */
  --color-text-on-dark:    ;  /* Text on dark backgrounds */
  --color-text-muted:      ;  /* Microcopy, captions */

  --color-accent:          ;  /* Primary brand / CTA color */
  --color-accent-hover:    ;  /* CTA hover state */
  --color-accent-subtle:   ;  /* Accent background tint */

  --color-border:          ;  /* Borders, dividers */
  --color-success:         ;  /* Form success */
  --color-error:           ;  /* Form errors */

  /* ---- Typography ---- */
  --font-display:          ;  /* Headlines */
  --font-body:             ;  /* Body text */

  --text-hero:             ;  /* Hero H1 (desktop) */
  --text-hero-mobile:      ;  /* Hero H1 (mobile) */
  --text-h2:               ;  /* Section headlines (desktop) */
  --text-h2-mobile:        ;  /* Section headlines (mobile) */
  --text-h3:               ;  /* Sub-headlines */
  --text-body:             ;  /* Body paragraphs */
  --text-body-large:       ;  /* Lead paragraphs, hero subtitle */
  --text-small:            ;  /* Captions, labels */
  --text-micro:            ;  /* Fine print */

  /* ---- Spacing Scale ---- */
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */

  /* ---- Layout ---- */
  --max-width:             1200px;
  --max-width-narrow:      800px;
  --section-padding:       var(--space-24);
  --section-padding-mobile: var(--space-16);
  --nav-height:            64px;
  --nav-height-mobile:     56px;

  /* ---- Border Radius ---- */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;

  /* ---- Shadows ---- */
  --shadow-sm:  0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md:  0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg:  0 10px 25px rgba(0, 0, 0, 0.1);
  --shadow-xl:  0 20px 50px rgba(0, 0, 0, 0.15);

  /* ---- Transitions ---- */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 03-base.css

Global styles that apply sitewide. Uses variables from 02.
**Rarely changes between projects** (values come from design system).

```css
/* ================================================
   03-base.css — Global styles
   ================================================ */

/* ---- Body ---- */
body {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
}

/* ---- Typography ---- */
h1, h2, h3 {
  font-family: var(--font-display);
  line-height: 1.15;
  font-weight: 700;
}

h1 { font-size: var(--text-hero); }
h2 { font-size: var(--text-h2); }
h3 { font-size: var(--text-h3); }

/* ---- Layout containers ---- */
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.container--narrow {
  max-width: var(--max-width-narrow);
}

/* ---- Section base styles ---- */
.section {
  padding: var(--section-padding) 0;
}

.section--dark {
  background-color: var(--color-bg-dark);
  color: var(--color-text-on-dark);
}

.section--light {
  background-color: var(--color-bg-primary);
}

.section--secondary {
  background-color: var(--color-bg-secondary);
}

.section--accent {
  background-color: var(--color-bg-accent);
}

/* ---- Accessibility: Skip link ---- */
.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  padding: var(--space-3) var(--space-6);
  background: var(--color-accent);
  color: white;
  z-index: 9999;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--text-small);
}

.skip-link:focus {
  top: var(--space-4);
}

/* ---- Print styles ---- */
@media print {
  .nav, .sticky-cta, .skip-link { display: none; }
  .section--dark { background: white; color: black; }
  .btn { border: 1px solid black; }
}
```

---

## 04-components.css

Reusable UI components. Add or remove components per project.
**Buttons, nav, and CTA support are always needed.**

```css
/* ================================================
   04-components.css — Reusable UI components
   ================================================ */

/* ---- Buttons ---- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-8);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-body);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  text-align: center;
  line-height: 1.2;
}

.btn--primary {
  background-color: var(--color-accent);
  color: white;
}
.btn--primary:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
.btn--primary:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 2px;
}
.btn--primary:active {
  transform: translateY(0);
}

.btn--secondary {
  background-color: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
}
.btn--secondary:hover {
  background-color: var(--color-accent-subtle);
}

.btn--large {
  padding: var(--space-6) var(--space-12);
  font-size: var(--text-body-large);
}

/* ---- CTA Microcopy ---- */
.cta-support {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  margin-top: var(--space-3);
}
.section--dark .cta-support {
  color: var(--color-text-on-dark);
  opacity: 0.7;
}

/* ---- Navigation ---- */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color var(--transition-base),
              box-shadow var(--transition-base);
}

.nav--transparent {
  background-color: transparent;
}

.nav--solid {
  background-color: var(--color-bg-dark);
  box-shadow: var(--shadow-md);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
  gap: var(--space-6);
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-text-on-dark);
  flex-shrink: 0;
}

.nav__links {
  display: flex;
  gap: var(--space-6);
  align-items: center;
}

.nav__link {
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-text-on-dark);
  opacity: 0.8;
  transition: opacity var(--transition-fast);
  white-space: nowrap;
}
.nav__link:hover {
  opacity: 1;
}

.nav__cta {
  padding: var(--space-2) var(--space-6);
  font-size: var(--text-small);
  flex-shrink: 0;
}

.nav__hamburger {
  display: none; /* Shown in 07-responsive.css */
}

.nav__mobile {
  display: none; /* Shown in 07-responsive.css */
}

.nav__hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text-on-dark);
  transition: transform var(--transition-base), opacity var(--transition-base);
  border-radius: 2px;
}

.nav__hamburger--open .nav__hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.nav__hamburger--open .nav__hamburger-line:nth-child(2) {
  opacity: 0;
}
.nav__hamburger--open .nav__hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav__mobile-link {
  display: block;
  padding: var(--space-4) 0;
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--color-text-on-dark);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav__mobile-footer {
  margin-top: auto;
  padding-top: var(--space-8);
}

.nav__mobile-contact {
  text-align: center;
  font-size: var(--text-small);
  opacity: 0.6;
  color: var(--color-text-on-dark);
}

/* ---- Metrics ---- */
.metric {
  text-align: center;
}

.metric__number {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
}

.metric__suffix {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--color-accent);
}

.metric__label {
  font-size: var(--text-small);
  opacity: 0.7;
  margin-top: var(--space-2);
}

/* ---- Pain Point Card ---- */
.pain-card {
  padding: var(--space-8);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-error);
}

.pain-card__icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: var(--space-4);
}

.pain-card h3 {
  margin-bottom: var(--space-3);
}

/* ---- Feature Card ---- */
.feature-card {
  padding: var(--space-8);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.feature-card__icon {
  font-size: 2rem;
  margin-bottom: var(--space-4);
}

.feature-card h3 {
  margin-bottom: var(--space-3);
}

/* ---- Case Study Card ---- */
.case-card {
  padding: var(--space-8);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.case-card h3 {
  margin-bottom: var(--space-4);
  color: var(--color-accent);
}

.case-card p {
  margin-bottom: var(--space-3);
}

.case-card__timeline {
  font-size: var(--text-small);
  opacity: 0.6;
  margin-top: var(--space-4);
}

/* ---- Testimonial Card ---- */
.testimonial-card {
  padding: var(--space-8);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-accent);
}

.testimonial-card__quote {
  font-size: var(--text-body-large);
  font-style: italic;
  margin-bottom: var(--space-6);
  line-height: 1.6;
}

.testimonial-card__author strong {
  display: block;
}

.testimonial-card__author span {
  font-size: var(--text-small);
  color: var(--color-text-muted);
}

/* ---- Offer Card ---- */
.offer-card {
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  padding: var(--space-16) var(--space-12);
  text-align: center;
}

.offer-card h2 {
  margin-bottom: var(--space-8);
}

.offer-card__list {
  text-align: left;
  max-width: 400px;
  margin: 0 auto var(--space-8);
}

.offer-card__list li {
  padding: var(--space-3) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: var(--text-body-large);
}

.offer-card__price {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 700;
  margin-bottom: var(--space-8);
  color: var(--color-accent);
}

.offer-card__guarantee {
  margin-top: var(--space-8);
  padding: var(--space-4) var(--space-6);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  font-size: var(--text-small);
}

/* ---- FAQ ---- */
.faq-item {
  border-bottom: 1px solid var(--color-border);
}

.faq-item__question {
  padding: var(--space-6) 0;
  font-size: var(--text-body-large);
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-item__question::after {
  content: '+';
  font-size: 1.5rem;
  font-weight: 300;
  transition: transform var(--transition-base);
  flex-shrink: 0;
  margin-left: var(--space-4);
}

.faq-item[open] .faq-item__question::after {
  transform: rotate(45deg);
}

.faq-item__question::-webkit-details-marker {
  display: none;
}

.faq-item__answer {
  padding-bottom: var(--space-6);
  color: var(--color-text-secondary);
  max-width: 65ch;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

/* ---- Form ---- */
.form-group {
  margin-bottom: var(--space-6);
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: var(--space-2);
  font-size: var(--text-small);
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--text-body);
  background: var(--color-bg-primary);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--color-accent-subtle);
}

.form-field--error {
  border-color: var(--color-error) !important;
}

.form-error {
  display: none;
  color: var(--color-error);
  font-size: var(--text-small);
  margin-top: var(--space-2);
}

.form-success {
  text-align: center;
  padding: var(--space-12) 0;
}

.form-success__title {
  font-size: var(--text-h3);
  font-weight: 700;
  margin-bottom: var(--space-4);
}

.form-global-error {
  background: rgba(255, 59, 48, 0.1);
  border: 1px solid var(--color-error);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-6);
  color: var(--color-error);
  font-size: var(--text-small);
}

/* ---- Comparison Table ---- */
.comparison-table-wrapper {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  text-align: center;
}

.comparison-table th,
.comparison-table td {
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border);
}

.comparison-table th {
  font-weight: 600;
}

.comparison-table td:first-child,
.comparison-table th:first-child {
  text-align: left;
}

.comparison-table__highlight {
  background: var(--color-accent-subtle);
  font-weight: 600;
}
```

---

## 05-sections.css

Section-specific layout rules. **This file varies the most between projects.**
Contains grid/flex layouts for each section from the Page Spec.
NO media queries here — they all go in `07-responsive.css`.

```css
/* ================================================
   05-sections.css — Section layouts
   ================================================
   Each section gets its own block.
   Only layout concerns (grid, flex, spacing).
   Component styles are in 04-components.css.
   Responsive overrides are in 07-responsive.css.
   ================================================ */

/* ---- Hero (Split Layout) ---- */
.hero {
  padding-top: calc(var(--nav-height) + var(--space-16));
  padding-bottom: var(--space-16);
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero__grid {
  display: grid;
  grid-template-columns: 55% 45%;
  gap: var(--space-12);
  align-items: center;
}

.hero__title {
  margin-bottom: var(--space-6);
  max-width: 18ch;
}

.hero__subtitle {
  font-size: var(--text-body-large);
  opacity: 0.85;
  margin-bottom: var(--space-8);
  max-width: 45ch;
}

.hero__trust {
  margin-top: var(--space-16);
  padding-top: var(--space-8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.hero__trust-label {
  font-size: var(--text-small);
  opacity: 0.6;
  margin-bottom: var(--space-4);
}

.hero__logos {
  display: flex;
  gap: var(--space-8);
  align-items: center;
  flex-wrap: wrap;
}

.hero__logos img {
  height: 32px;
  width: auto;
  opacity: 0.7;
  filter: brightness(0) invert(1);
}

/* ---- Hero (Centered variant) ---- */
.hero--centered {
  text-align: center;
}

.hero--centered .hero__title {
  max-width: 20ch;
  margin-left: auto;
  margin-right: auto;
}

.hero--centered .hero__subtitle {
  max-width: 50ch;
  margin-left: auto;
  margin-right: auto;
}

.hero--centered .hero__logos {
  justify-content: center;
}

/* ---- Problem Section ---- */
#problem h2 {
  margin-bottom: var(--space-8);
}

.problem__body p {
  margin-bottom: var(--space-6);
  max-width: 65ch;
}

.problem__body p:last-child {
  margin-bottom: 0;
}

.problem__transition {
  font-size: var(--text-body-large);
  font-weight: 600;
  color: var(--color-accent);
}

.pain-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-12);
}

/* ---- Solution Section ---- */
.solution__body p {
  margin-bottom: var(--space-6);
  max-width: 65ch;
}

/* ---- Proof / Metrics Section ---- */
.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-8);
  text-align: center;
  margin-bottom: var(--space-16);
}

.cases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

/* ---- Features Section ---- */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-12);
}

/* ---- Testimonials Section ---- */
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-12);
}

/* ---- FAQ Section ---- */
.faq-list {
  margin-top: var(--space-12);
}

/* ---- Final CTA Section ---- */
.final-cta__body {
  font-size: var(--text-body-large);
  margin: var(--space-6) auto var(--space-8);
  max-width: 50ch;
  opacity: 0.85;
}

/* ---- Footer ---- */
.footer {
  padding: var(--space-16) 0 var(--space-8);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-12);
}

.footer__bottom {
  padding-top: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: var(--text-small);
  opacity: 0.6;
}
```

---

## 06-animations.css

Animation classes and keyframes.
**This file rarely changes between projects.**

```css
/* ================================================
   06-animations.css — Scroll reveal + keyframes
   ================================================ */

/* ---- Scroll Reveal ---- */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ---- Stagger Children ---- */
.reveal-stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal-stagger.visible > *:nth-child(1) { transition-delay: 0ms; }
.reveal-stagger.visible > *:nth-child(2) { transition-delay: 100ms; }
.reveal-stagger.visible > *:nth-child(3) { transition-delay: 200ms; }
.reveal-stagger.visible > *:nth-child(4) { transition-delay: 300ms; }
.reveal-stagger.visible > *:nth-child(5) { transition-delay: 400ms; }
.reveal-stagger.visible > *:nth-child(6) { transition-delay: 500ms; }
.reveal-stagger.visible > *:nth-child(7) { transition-delay: 600ms; }
.reveal-stagger.visible > *:nth-child(8) { transition-delay: 700ms; }

.reveal-stagger.visible > * {
  opacity: 1;
  transform: translateY(0);
}

/* ---- Reduced Motion ---- */
@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal-stagger > * {
    opacity: 1;
    transform: none;
    transition: none;
  }

  html {
    scroll-behavior: auto;
  }
}
```

---

## 07-responsive.css

ALL media queries. Organized by breakpoint, then by component/section.
**This is the ONLY file with `@media` rules.**

```css
/* ================================================
   07-responsive.css — All breakpoints
   ================================================
   Single file for ALL responsive behavior.
   Makes mobile debugging trivial.
   ================================================ */

/* ================================================
   TABLET (≤ 1024px)
   ================================================ */
@media (max-width: 1024px) {
  /* -- Layout -- */
  .hero__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }

  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* ================================================
   MOBILE (≤ 640px)
   ================================================ */
@media (max-width: 640px) {

  /* -- Typography -- */
  h1 { font-size: var(--text-hero-mobile); }
  h2 { font-size: var(--text-h2-mobile); }

  /* -- Sections -- */
  .section {
    padding: var(--section-padding-mobile) 0;
  }

  /* -- Buttons -- */
  .btn--large {
    width: 100%;
    padding: var(--space-4) var(--space-6);
  }

  /* -- Navigation -- */
  .nav__inner {
    height: var(--nav-height-mobile);
  }

  .nav__links {
    display: none;
  }

  .nav__hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    padding: 10px;
    order: 3;
  }

  .nav__cta {
    order: 2;
    padding: var(--space-2) var(--space-4);
  }

  .nav__mobile {
    position: fixed;
    top: var(--nav-height-mobile);
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-bg-dark);
    padding: var(--space-8) var(--space-6);
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    /* display controlled by JS: .nav__mobile--open */
  }

  .nav__mobile--open {
    display: flex;
  }

  .nav__mobile-footer .btn {
    width: 100%;
    margin-bottom: var(--space-4);
  }

  /* -- Hero -- */
  .hero {
    min-height: auto;
    padding-top: calc(var(--nav-height-mobile) + var(--space-12));
    padding-bottom: var(--space-12);
  }

  .hero__grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__visual {
    display: none; /* or order: -1 to show above */
  }

  .hero__title {
    max-width: 100%;
  }

  .hero__subtitle {
    max-width: 100%;
  }

  .hero__cta .btn {
    width: 100%;
  }

  .hero__logos {
    justify-content: center;
  }

  /* -- Grids → Stack -- */
  .pain-cards,
  .feature-grid,
  .cases,
  .testimonial-grid,
  .metrics {
    grid-template-columns: 1fr;
  }

  /* -- Offer Card -- */
  .offer-card {
    padding: var(--space-8) var(--space-6);
  }

  .offer-card .btn--large {
    width: 100%;
  }

  /* -- Comparison Table -- */
  .comparison-table-wrapper {
    display: none;
  }

  .comparison-cards {
    display: block;
  }

  /* -- Final CTA -- */
  #cta-final .btn--large {
    width: 100%;
  }

  /* -- Footer -- */
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

/* ================================================
   DESKTOP-ONLY (≥ 641px)
   ================================================ */
@media (min-width: 641px) {
  .comparison-cards {
    display: none;
  }
}
```

---

## Key Principle: Separation of Concerns

| Concern | File |
|---------|------|
| "What values define the brand?" | `02-design-system.css` |
| "How do base elements look?" | `03-base.css` |
| "How do reusable components look?" | `04-components.css` |
| "How are sections laid out?" | `05-sections.css` |
| "How do things animate?" | `06-animations.css` |
| "How does it adapt to screens?" | `07-responsive.css` |

If a designer says "change the accent color" → edit ONE line in `02-design-system.css`.
If a developer says "the FAQ layout is wrong" → go straight to `05-sections.css`.
If a QA says "mobile nav is broken" → go straight to `07-responsive.css`.
