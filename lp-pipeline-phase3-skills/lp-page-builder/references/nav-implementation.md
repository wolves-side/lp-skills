# Navigation Implementation

Complete copy-paste nav implementation with desktop sticky behavior,
mobile hamburger menu, and smooth scroll to anchors.

---

## HTML

```html
<header class="nav" id="nav" role="banner">
  <div class="container nav__inner">
    <!-- Logo -->
    <a href="#hero" class="nav__logo" aria-label="[Company name] — voltar ao topo">
      <!-- Inline SVG logo or text -->
      <span class="nav__logo-text">[Company]</span>
    </a>

    <!-- Desktop links (hidden on mobile) -->
    <nav class="nav__links" aria-label="Navegação principal">
      <a href="#[section1]" class="nav__link">[Link 1]</a>
      <a href="#[section2]" class="nav__link">[Link 2]</a>
      <a href="#[section3]" class="nav__link">[Link 3]</a>
      <a href="#faq" class="nav__link">FAQ</a>
    </nav>

    <!-- CTA (always visible, desktop and mobile) -->
    <a href="#[target]" class="btn btn--primary nav__cta">[CTA text]</a>

    <!-- Hamburger (mobile only) -->
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
```

---

## CSS

```css
/* ============================================
   NAVIGATION — Desktop
   ============================================ */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color var(--transition-base),
              box-shadow var(--transition-base);
}

/* Transparent state (over hero) */
.nav--transparent {
  background-color: transparent;
}

/* Solid state (after scrolling past hero) */
.nav--solid {
  background-color: var(--color-bg-dark);
  box-shadow: var(--shadow-md);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
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
.nav__link:hover { opacity: 1; }

.nav__cta {
  padding: var(--space-2) var(--space-6);
  font-size: var(--text-small);
  flex-shrink: 0;
}

/* Hamburger — hidden on desktop */
.nav__hamburger { display: none; }

/* Mobile overlay — hidden on desktop */
.nav__mobile { display: none; }

/* ============================================
   NAVIGATION — Mobile (≤640px)
   ============================================ */
@media (max-width: 640px) {
  .nav__inner { height: 56px; }
  .nav__links { display: none; }

  .nav__hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    padding: 10px;
    order: 3; /* Logo — CTA — Hamburger */
  }

  .nav__hamburger-line {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--color-text-on-dark);
    transition: transform var(--transition-base), opacity var(--transition-base);
    border-radius: 2px;
  }

  /* Hamburger → X animation */
  .nav__hamburger--open .nav__hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .nav__hamburger--open .nav__hamburger-line:nth-child(2) {
    opacity: 0;
  }
  .nav__hamburger--open .nav__hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .nav__cta {
    order: 2;
    padding: var(--space-2) var(--space-4);
  }

  /* Mobile menu overlay */
  .nav__mobile {
    display: none;
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-bg-dark);
    padding: var(--space-8) var(--space-6);
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
  }

  .nav__mobile--open {
    display: flex;
  }

  .nav__mobile-link {
    display: block;
    padding: var(--space-4) 0;
    font-size: var(--text-h3);
    font-weight: 600;
    color: var(--color-text-on-dark);
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .nav__mobile-footer {
    margin-top: auto;
    padding-top: var(--space-8);
  }
  .nav__mobile-footer .btn { width: 100%; margin-bottom: var(--space-4); }
  .nav__mobile-contact {
    text-align: center;
    font-size: var(--text-small);
    opacity: 0.6;
    color: var(--color-text-on-dark);
  }
}
```

---

## JavaScript

```javascript
// ============================================
// NAVIGATION BEHAVIOR
// ============================================

(function() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('navMobile');
  const hero = document.getElementById('hero');

  // --- Scroll: transparent → solid ---
  function updateNav() {
    if (!hero) return;
    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const scrolled = window.scrollY > heroBottom - 80;
    nav.classList.toggle('nav--solid', scrolled);
    nav.classList.toggle('nav--transparent', !scrolled);
  }

  // Throttle scroll with rAF
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        updateNav();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial state
  updateNav();

  // --- Mobile hamburger toggle ---
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('nav__mobile--open');

      mobileMenu.classList.toggle('nav__mobile--open');
      hamburger.classList.toggle('nav__hamburger--open');
      hamburger.setAttribute('aria-expanded', !isOpen);
      mobileMenu.setAttribute('aria-hidden', isOpen);

      // Lock body scroll when menu is open
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('nav__mobile--open');
        hamburger.classList.remove('nav__hamburger--open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = nav.offsetHeight;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  // --- Escape key closes mobile menu ---
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu &&
        mobileMenu.classList.contains('nav__mobile--open')) {
      hamburger.click();
    }
  });
})();
```

## Notes

- The nav starts as `nav--transparent` (set via JS on load)
- After scrolling past hero, it becomes `nav--solid`
- On mobile, CTA is ALWAYS visible (order: logo, CTA, hamburger)
- Body scroll is locked when mobile menu is open
- Escape key closes mobile menu (accessibility)
- All anchor links subtract nav height for correct scroll position
