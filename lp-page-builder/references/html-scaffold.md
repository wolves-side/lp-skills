# HTML Scaffold

Base template for every landing page. Copy this and fill in the sections.

---

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO (from Page Spec → Meta → Identity) -->
  <title>[Page title — 55-60 chars]</title>
  <meta name="description" content="[Meta description — 155-160 chars]">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="[canonical URL]">

  <!-- Open Graph (from Page Spec → Meta → Identity) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="[OG title]">
  <meta property="og:description" content="[OG description]">
  <meta property="og:image" content="[OG image URL]">
  <meta property="og:url" content="[canonical URL]">
  <meta property="og:locale" content="pt_BR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[same as OG title]">
  <meta name="twitter:description" content="[same as OG description]">
  <meta name="twitter:image" content="[same as OG image]">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="[favicon path or inline SVG data URI]">

  <!-- Fonts: Preconnect THEN load -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=[Font1]:wght@[weights]&family=[Font2]:wght@[weights]&display=swap">

  <style>
    /* ============================================
       CSS RESET (minimal, targeted)
       ============================================ */
    *, *::before, *::after { box-sizing: border-box; }
    * { margin: 0; padding: 0; }
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
    input, button, textarea, select { font: inherit; }
    p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }
    a { color: inherit; text-decoration: none; }
    button { cursor: pointer; border: none; background: none; }
    ul, ol { list-style: none; }

    /* ============================================
       DESIGN SYSTEM (paste from Phase 2 output)
       ============================================ */
    :root {
      /* Colors — from Design System */
      --color-bg-primary: ;
      --color-bg-secondary: ;
      --color-bg-dark: ;
      --color-bg-accent: ;
      --color-text-primary: ;
      --color-text-secondary: ;
      --color-text-on-dark: ;
      --color-text-muted: ;
      --color-accent: ;
      --color-accent-hover: ;
      --color-accent-subtle: ;
      --color-border: ;
      --color-success: ;
      --color-error: ;

      /* Typography — from Design System */
      --font-display: ;
      --font-body: ;
      --text-hero: ;
      --text-hero-mobile: ;
      --text-h2: ;
      --text-h2-mobile: ;
      --text-h3: ;
      --text-body: ;
      --text-body-large: ;
      --text-small: ;
      --text-micro: ;

      /* Spacing — from Design System */
      --space-1: 0.25rem;
      --space-2: 0.5rem;
      --space-3: 0.75rem;
      --space-4: 1rem;
      --space-6: 1.5rem;
      --space-8: 2rem;
      --space-12: 3rem;
      --space-16: 4rem;
      --space-20: 5rem;
      --space-24: 6rem;

      /* Layout — from Design System */
      --max-width: 1200px;
      --max-width-narrow: 800px;
      --section-padding: var(--space-24);
      --section-padding-mobile: var(--space-16);

      /* Radius, Shadows — from Design System */
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --radius-full: 9999px;
      --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
      --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
      --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);

      /* Animation — from Design System */
      --transition-fast: 150ms ease;
      --transition-base: 250ms ease;
      --transition-slow: 400ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* ============================================
       GLOBAL STYLES
       ============================================ */
    body {
      font-family: var(--font-body);
      font-size: var(--text-body);
      color: var(--color-text-primary);
      background-color: var(--color-bg-primary);
    }

    h1, h2, h3 {
      font-family: var(--font-display);
      line-height: 1.15;
    }

    h1 { font-size: var(--text-hero); }
    h2 { font-size: var(--text-h2); }
    h3 { font-size: var(--text-h3); }

    .container {
      width: 100%;
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 0 var(--space-6);
    }

    .container--narrow {
      max-width: var(--max-width-narrow);
    }

    /* Section base styles */
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

    /* Skip to content (accessibility) */
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
    }
    .skip-link:focus {
      top: var(--space-4);
    }

    /* ============================================
       COMPONENT STYLES (from Design System)
       ============================================ */

    /* Buttons */
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

    /* Microcopy below CTAs */
    .cta-support {
      font-size: var(--text-small);
      color: var(--color-text-muted);
      margin-top: var(--space-3);
    }
    .section--dark .cta-support {
      color: var(--color-text-on-dark);
      opacity: 0.7;
    }

    /* ============================================
       SCROLL REVEAL ANIMATIONS
       ============================================ */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Stagger children */
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
    .reveal-stagger.visible > * { opacity: 1; transform: translateY(0); }

    /* Respect reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .reveal,
      .reveal-stagger > * {
        opacity: 1;
        transform: none;
        transition: none;
      }
      html { scroll-behavior: auto; }
    }

    /* ============================================
       RESPONSIVE
       ============================================ */
    @media (max-width: 1024px) {
      /* Tablet adjustments */
    }

    @media (max-width: 640px) {
      h1 { font-size: var(--text-hero-mobile); }
      h2 { font-size: var(--text-h2-mobile); }

      .section {
        padding: var(--section-padding-mobile) 0;
      }

      .btn--large {
        width: 100%;
        padding: var(--space-4) var(--space-6);
      }
    }

    /* ============================================
       SECTION-SPECIFIC STYLES
       (add per-section rules here)
       ============================================ */

    /* ============================================
       PRINT STYLES
       ============================================ */
    @media print {
      .nav, .sticky-cta, .skip-link { display: none; }
      .section--dark { background: white; color: black; }
      .btn { border: 1px solid black; }
    }
  </style>
</head>
<body>
  <!-- Skip to content link (accessibility) -->
  <a href="#main" class="skip-link">Pular para o conteúdo</a>

  <!-- Navigation -->
  <header class="nav" role="banner">
    <!-- See nav-implementation.md -->
  </header>

  <!-- Main content -->
  <main id="main">
    <!-- Sections go here. One <section> per Page Spec section. -->
  </main>

  <!-- Footer -->
  <footer class="section section--dark" role="contentinfo">
    <!-- Footer content -->
  </footer>

  <script>
    // ============================================
    // ALL JAVASCRIPT (inline, no dependencies)
    // ============================================

    // See animation-implementation.md for:
    // - Scroll reveal (IntersectionObserver)
    // - Number counters
    // - Nav scroll behavior
    // - FAQ accordion
    // - Smooth anchor scrolling
    // - Form handling
    // - Mobile menu
  </script>

  <!-- Analytics/tracking (from Page Spec → External Integrations) -->
</body>
</html>
```

## Notes

- **Language**: Set `lang` attribute to match the target audience (pt-BR for Brazilian Portuguese)
- **Design System**: Paste ALL custom properties from Phase 2 output into the `:root` block
- **Component styles**: Paste component classes from Phase 2 output into the component section
- **Sections**: Build one `<section>` at a time following section-build-patterns.md
- **Images**: Use placeholder descriptions as alt text; actual images will be added in deployment
- **Font loading**: The `display=swap` parameter prevents invisible text during font load
