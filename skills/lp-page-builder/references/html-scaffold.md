# HTML Scaffold

Complete `index.html` template. Zero inline styles. Zero inline scripts.
Copy this, fill in sections from the Page Spec.

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

  <!-- Tracking scripts that MUST be in <head> (e.g., Facebook Pixel) -->
  <!-- [paste head-required tracking here] -->

  <!-- CSS: Loaded in cascade order -->
  <link rel="stylesheet" href="css/01-reset.css">
  <link rel="stylesheet" href="css/02-design-system.css">
  <link rel="stylesheet" href="css/03-base.css">
  <link rel="stylesheet" href="css/04-components.css">
  <link rel="stylesheet" href="css/05-sections.css">
  <link rel="stylesheet" href="css/06-animations.css">
  <link rel="stylesheet" href="css/07-responsive.css">
</head>

<body>
  <!-- Skip to content (accessibility) -->
  <a href="#main" class="skip-link">Pular para o conteúdo</a>

  <!-- ============================================
       NAVIGATION
       ============================================ -->
  <header class="nav" id="nav" role="banner">
    <div class="container nav__inner">
      <!-- Logo -->
      <a href="#hero" class="nav__logo" aria-label="[Company name] — voltar ao topo">
        <span class="nav__logo-text">[Company]</span>
      </a>

      <!-- Desktop links -->
      <nav class="nav__links" aria-label="Navegação principal">
        <a href="#[section1]" class="nav__link">[Link 1]</a>
        <a href="#[section2]" class="nav__link">[Link 2]</a>
        <a href="#[section3]" class="nav__link">[Link 3]</a>
        <a href="#faq" class="nav__link">FAQ</a>
      </nav>

      <!-- CTA (always visible) -->
      <a href="#[target]" class="btn btn--primary nav__cta">[CTA text]</a>

      <!-- Hamburger (mobile only, hidden on desktop via CSS) -->
      <button class="nav__hamburger" id="navHamburger"
              aria-label="Abrir menu" aria-expanded="false" aria-controls="navMobile">
        <span class="nav__hamburger-line"></span>
        <span class="nav__hamburger-line"></span>
        <span class="nav__hamburger-line"></span>
      </button>
    </div>

    <!-- Mobile menu overlay -->
    <div class="nav__mobile" id="navMobile" aria-hidden="true">
      <nav aria-label="Menu mobile">
        <a href="#[section1]" class="nav__mobile-link">[Link 1]</a>
        <a href="#[section2]" class="nav__mobile-link">[Link 2]</a>
        <a href="#[section3]" class="nav__mobile-link">[Link 3]</a>
        <a href="#faq" class="nav__mobile-link">FAQ</a>
      </nav>
      <div class="nav__mobile-footer">
        <a href="#[target]" class="btn btn--primary btn--large">[CTA text]</a>
        <p class="nav__mobile-contact">[Contact info: email, WhatsApp]</p>
      </div>
    </div>
  </header>

  <!-- ============================================
       MAIN CONTENT
       ============================================ -->
  <main id="main">

    <!-- HERO -->
    <section id="hero" class="section section--dark hero">
      <!-- See section-build-patterns.md for hero variants -->
    </section>

    <!-- SECTION 2: [Name from spec] -->
    <section id="[id]" class="section section--[tone]">
      <!-- Build from Page Spec section -->
    </section>

    <!-- Repeat for each section in the Page Spec -->

  </main>

  <!-- ============================================
       FOOTER
       ============================================ -->
  <footer class="footer section section--dark" role="contentinfo">
    <div class="container">
      <!-- Footer content from Page Spec -->
    </div>
  </footer>

  <!-- ============================================
       JAVASCRIPT: Deferred, modular
       ============================================ -->
  <script defer src="js/nav.js"></script>
  <script defer src="js/scroll-reveal.js"></script>
  <script defer src="js/counters.js"></script>
  <script defer src="js/accordion.js"></script>
  <script defer src="js/form-handler.js"></script>
  <script defer src="js/smooth-scroll.js"></script>

  <!-- Analytics / Tracking (from Page Spec → External Integrations) -->
  <!-- Google Analytics / GTM -->
  <!-- [paste body-end tracking here] -->
</body>
</html>
```

---

## Notes

- **Language**: Set `lang` attribute to match target audience
- **CSS order**: The numbered CSS files MUST load in order (01 → 07)
- **JS defer**: All scripts use `defer` — they load in parallel but execute in order after DOM parse
- **No inline anything**: Zero `style=""`, zero `onclick=""`, zero `<style>` or `<script>` blocks
- **Sections**: Build one `<section>` at a time from the Page Spec, see `section-build-patterns.md`
- **Images**: Use descriptive alt text; actual images added during deployment
- **Font loading**: `display=swap` prevents invisible text during font load
