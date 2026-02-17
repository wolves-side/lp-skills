# JS Modules

Complete templates for all 6 JavaScript modules.
Each is a self-contained IIFE — no dependencies, no imports, no globals.

**All files use `defer` in the HTML, so they execute after DOM is ready.**

---

## nav.js

Navigation: transparent→solid on scroll, mobile hamburger, body scroll lock, Escape key.

```javascript
/* ================================================
   nav.js — Navigation behavior
   ================================================ */

(function () {
  var nav = document.getElementById('nav');
  var hamburger = document.getElementById('navHamburger');
  var mobileMenu = document.getElementById('navMobile');
  var hero = document.getElementById('hero');

  if (!nav) return;

  // --- Scroll state: transparent → solid ---
  function updateNavState() {
    if (!hero) {
      nav.classList.add('nav--solid');
      return;
    }
    var heroBottom = hero.offsetTop + hero.offsetHeight;
    var scrolled = window.scrollY > heroBottom - 80;
    nav.classList.toggle('nav--solid', scrolled);
    nav.classList.toggle('nav--transparent', !scrolled);
  }

  // Throttle scroll events with requestAnimationFrame
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateNavState();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Set initial state
  updateNavState();

  // --- Mobile hamburger toggle ---
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('nav__mobile--open');

      mobileMenu.classList.toggle('nav__mobile--open');
      hamburger.classList.toggle('nav__hamburger--open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.setAttribute('aria-hidden', String(isOpen));

      // Lock body scroll when menu is open
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close menu when clicking a nav link
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
  }

  // --- Close mobile menu (reusable) ---
  function closeMenu() {
    if (!hamburger || !mobileMenu) return;
    mobileMenu.classList.remove('nav__mobile--open');
    hamburger.classList.remove('nav__hamburger--open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // --- Escape key closes mobile menu ---
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu &&
        mobileMenu.classList.contains('nav__mobile--open')) {
      closeMenu();
      hamburger.focus(); // Return focus to trigger
    }
  });
})();
```

---

## scroll-reveal.js

Reveals elements with `.reveal` or `.reveal-stagger` when they enter the viewport.

```javascript
/* ================================================
   scroll-reveal.js — IntersectionObserver animations
   ================================================ */

(function () {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Make everything visible immediately
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
    observer.observe(el);
  });
})();
```

---

## counters.js

Animates numbers from 0 to `data-target` value when they scroll into view.

```javascript
/* ================================================
   counters.js — Animated number counters
   ================================================ */

(function () {
  var counterElements = document.querySelectorAll('[data-target]');
  if (!counterElements.length) return;

  // If reduced motion, show final numbers immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counterElements.forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-target'));
      var isDecimal = target % 1 !== 0;
      el.textContent = isDecimal
        ? target.toFixed(1)
        : target.toLocaleString('pt-BR');
    });
    return;
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var duration = 1500;
    var startTime = null;
    var isDecimal = target % 1 !== 0;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = target * eased;

      if (isDecimal) {
        el.textContent = current.toFixed(1);
      } else {
        el.textContent = Math.floor(current).toLocaleString('pt-BR');
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = isDecimal
          ? target.toFixed(1)
          : target.toLocaleString('pt-BR');
      }
    }

    requestAnimationFrame(step);
  }

  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(function (el) {
    counterObserver.observe(el);
  });
})();
```

---

## accordion.js

Enhanced FAQ accordion using native `<details>` with optional single-open mode
and smooth animation.

```javascript
/* ================================================
   accordion.js — FAQ accordion behavior
   ================================================ */

(function () {
  var faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  // --- Single-open mode: close others when one opens ---
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (this.open) {
        faqItems.forEach(function (other) {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });

  // --- Smooth animation (optional enhancement) ---
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  faqItems.forEach(function (details) {
    var summary = details.querySelector('summary');
    var answer = details.querySelector('.faq-item__answer');
    if (!summary || !answer) return;

    summary.addEventListener('click', function (e) {
      if (details.open) {
        // Closing: animate height then close
        e.preventDefault();
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';

        requestAnimationFrame(function () {
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';
        });

        setTimeout(function () {
          details.open = false;
          answer.style.maxHeight = '';
          answer.style.opacity = '';
        }, 300);
      } else {
        // Opening: set to 0 then animate to full height
        requestAnimationFrame(function () {
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';

          requestAnimationFrame(function () {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = '1';
          });
        });

        // Clean up after animation
        setTimeout(function () {
          answer.style.maxHeight = '';
          answer.style.opacity = '';
        }, 350);
      }
    });
  });
})();
```

---

## form-handler.js

Client-side validation + submission. Configure the submission pattern
at the top of the file (WhatsApp, API, Calendly, etc.).

```javascript
/* ================================================
   form-handler.js — Validation + submission
   ================================================ */

(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  var submitBtn = form.querySelector('button[type="submit"]');
  var originalBtnText = submitBtn ? submitBtn.textContent : '';

  // ============================================
  // CONFIGURATION — Edit per project
  // ============================================

  var CONFIG = {
    // Submission mode: 'whatsapp' | 'api' | 'calendly' | 'mailto' | 'google-form'
    mode: 'whatsapp',

    // WhatsApp settings
    whatsapp: {
      number: '55XXXXXXXXXXX',  // Country code + DDD + number
      messageTemplate: function (data) {
        return '🚀 Nova solicitação via Landing Page\n\n' +
          '👤 Nome: ' + (data.name || '') + '\n' +
          '📧 Email: ' + (data.email || '') + '\n' +
          '📱 Tel: ' + (data.phone || '') + '\n' +
          '🏢 Empresa: ' + (data.company || '') + '\n\n' +
          '[Custom context message]';
      }
    },

    // API settings
    api: {
      endpoint: '',  // e.g., 'https://n8n.example.com/webhook/xxxxx'
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    },

    // Success message
    success: {
      title: '✅ Enviado com sucesso!',
      text: '[Success message from Page Spec]'
    }
  };

  // ============================================
  // HONEYPOT — Bot detection
  // ============================================

  // Hidden field in HTML: <input type="text" name="website" tabindex="-1">
  // Bots fill it, humans don't.

  // ============================================
  // VALIDATION
  // ============================================

  function validateForm() {
    var isValid = true;

    // Clear previous errors
    form.querySelectorAll('.form-error').forEach(function (err) {
      err.textContent = '';
      err.style.display = 'none';
    });

    form.querySelectorAll('.form-field--error').forEach(function (field) {
      field.classList.remove('form-field--error');
    });

    // Validate required fields
    var fields = form.querySelectorAll('[required]');

    fields.forEach(function (field) {
      var error = field.parentNode.querySelector('.form-error');
      var value = field.value.trim();

      if (!value) {
        showFieldError(field, error,
          field.getAttribute('data-error-required') || 'Campo obrigatório');
        isValid = false;
        return;
      }

      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        showFieldError(field, error,
          field.getAttribute('data-error-invalid') || 'Email inválido');
        isValid = false;
        return;
      }

      if (field.type === 'tel' && !/^[\d\s\(\)\-\+]{8,}$/.test(value)) {
        showFieldError(field, error,
          field.getAttribute('data-error-invalid') || 'Telefone inválido');
        isValid = false;
        return;
      }
    });

    return isValid;
  }

  function showFieldError(field, errorEl, message) {
    field.classList.add('form-field--error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'block';
    }
  }

  // ============================================
  // SUBMISSION HANDLERS
  // ============================================

  function submitToWhatsApp(formData) {
    var data = Object.fromEntries(formData);
    var message = encodeURIComponent(CONFIG.whatsapp.messageTemplate(data));
    var url = 'https://wa.me/' + CONFIG.whatsapp.number + '?text=' + message;
    window.open(url, '_blank');
    return Promise.resolve();
  }

  function submitToAPI(formData) {
    var data = Object.fromEntries(formData);
    data.source = 'landing-page';
    data.page = window.location.href;
    data.timestamp = new Date().toISOString();

    return fetch(CONFIG.api.endpoint, {
      method: CONFIG.api.method,
      headers: CONFIG.api.headers,
      body: JSON.stringify(data)
    }).then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.json();
    });
  }

  function submitToMailto(formData) {
    var data = Object.fromEntries(formData);
    var subject = encodeURIComponent('[Subject from Spec]');
    var body = encodeURIComponent(
      'Nome: ' + (data.name || '') + '\n' +
      'Email: ' + (data.email || '') + '\n' +
      'Tel: ' + (data.phone || '') + '\n\n'
    );
    window.location.href = 'mailto:[target-email]?subject=' + subject + '&body=' + body;
    return Promise.resolve();
  }

  // ============================================
  // UI STATE
  // ============================================

  function setLoading(loading) {
    if (!submitBtn) return;
    submitBtn.disabled = loading;
    submitBtn.textContent = loading ? 'Enviando...' : originalBtnText;
  }

  function showSuccess() {
    form.innerHTML =
      '<div class="form-success">' +
      '<p class="form-success__title">' + CONFIG.success.title + '</p>' +
      '<p class="form-success__text">' + CONFIG.success.text + '</p>' +
      '</div>';
  }

  function showGlobalError(message) {
    var errorDiv = form.querySelector('.form-global-error');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'form-global-error';
      form.prepend(errorDiv);
    }
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
  }

  // ============================================
  // FORM SUBMIT
  // ============================================

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm()) {
      // Focus first error field
      var firstError = form.querySelector('.form-field--error');
      if (firstError) firstError.focus();
      return;
    }

    var formData = new FormData(form);

    // Honeypot check
    if (formData.get('website')) {
      showSuccess(); // Fake success for bots
      return;
    }

    setLoading(true);

    // Route to correct handler
    var submitFn;
    switch (CONFIG.mode) {
      case 'whatsapp': submitFn = submitToWhatsApp; break;
      case 'api':      submitFn = submitToAPI; break;
      case 'mailto':   submitFn = submitToMailto; break;
      default:         submitFn = submitToWhatsApp;
    }

    submitFn(formData)
      .then(function () {
        showSuccess();
      })
      .catch(function (err) {
        showGlobalError('Erro ao enviar. Tente novamente.');
        setLoading(false);
      });
  });
})();
```

---

## smooth-scroll.js

Smooth scrolling for all anchor links, with nav height offset compensation.

```javascript
/* ================================================
   smooth-scroll.js — Anchor link navigation
   ================================================ */

(function () {
  var nav = document.getElementById('nav');

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#main') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      var navHeight = nav ? nav.offsetHeight : 0;
      var targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without jumping
      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    });
  });
})();
```

---

## Performance Rules (All Modules)

1. **No dependencies.** Vanilla JS only. Zero `import`, zero `require`.
2. **IIFE wrapping.** Every file: `(function () { ... })();`
3. **No global leaks.** All variables are `var` inside the IIFE.
4. **Reduced motion.** Check `prefers-reduced-motion` in animation-related modules.
5. **Throttle scroll.** Use `requestAnimationFrame` for scroll listeners.
6. **GPU-only animations.** Only `transform` and `opacity`.
7. **Fail silently.** If a DOM element doesn't exist, return early. Don't throw.
8. **`defer` attribute.** All scripts load with `defer` in HTML — DOM is ready when they execute.
