# Animation Implementation

All JS-powered interactions for the landing page.
Vanilla JS only. No dependencies. Copy-paste ready.

---

## Scroll Reveal (IntersectionObserver)

Reveals elements when they enter the viewport.

```javascript
// ============================================
// SCROLL REVEAL
// ============================================

(function() {
  // Skip all animations if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.15,     // Trigger when 15% visible
    rootMargin: '0px 0px -50px 0px'  // Slight offset from bottom
  });

  // Observe all elements with reveal classes
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(function(el) {
    observer.observe(el);
  });
})();
```

**Required CSS** (already in html-scaffold.md):
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

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
.reveal-stagger.visible > * {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal-stagger > * {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

**Usage in HTML:**
```html
<!-- Single element reveal -->
<h2 class="reveal">Section Title</h2>

<!-- Container whose children stagger in -->
<div class="feature-grid reveal-stagger">
  <div class="feature-card">...</div>  <!-- delay: 0ms -->
  <div class="feature-card">...</div>  <!-- delay: 100ms -->
  <div class="feature-card">...</div>  <!-- delay: 200ms -->
</div>
```

---

## Number Counter Animation

Animates numbers from 0 to target value when they scroll into view.

```javascript
// ============================================
// NUMBER COUNTERS
// ============================================

(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // If reduced motion, just show final numbers immediately
    document.querySelectorAll('[data-target]').forEach(function(el) {
      el.textContent = el.getAttribute('data-target');
    });
    return;
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var duration = 1500; // ms
    var start = 0;
    var startTime = null;
    var isDecimal = target % 1 !== 0;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out cubic for smooth deceleration
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = start + (target - start) * eased;

      if (isDecimal) {
        el.textContent = current.toFixed(1);
      } else {
        el.textContent = Math.floor(current).toLocaleString('pt-BR');
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure final value is exact
        el.textContent = isDecimal
          ? target.toFixed(1)
          : target.toLocaleString('pt-BR');
      }
    }

    requestAnimationFrame(step);
  }

  var counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(function(el) {
    counterObserver.observe(el);
  });
})();
```

**Usage in HTML:**
```html
<div class="metric">
  <span class="metric__number" data-target="23">0</span>
  <span class="metric__suffix">+</span>
  <p class="metric__label">Empresas atendidas</p>
</div>

<div class="metric">
  <span class="metric__number" data-target="500000">0</span>
  <p class="metric__label">Em receita gerada</p>
</div>

<div class="metric">
  <span class="metric__number" data-target="40">0</span>
  <span class="metric__suffix">%</span>
  <p class="metric__label">Redução média de custos</p>
</div>
```

---

## FAQ Accordion

Using native `<details>` element. The CSS handles animation via max-height.
Optional JS for "close others when one opens" behavior.

```javascript
// ============================================
// FAQ ACCORDION (optional: single-open mode)
// ============================================

(function() {
  var faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  // Optional: Close other items when one opens
  faqItems.forEach(function(item) {
    item.addEventListener('toggle', function() {
      if (this.open) {
        faqItems.forEach(function(other) {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
})();
```

**CSS for smooth open/close** (enhanced beyond native `<details>`):
```css
.faq-item__answer {
  padding-bottom: var(--space-6);
  color: var(--color-text-secondary);
  max-width: 65ch;
}
```

**Note:** Native `<details>` doesn't support CSS height transitions natively.
For smooth animation, you can use the following enhanced version instead:

```javascript
// Enhanced accordion with smooth animation
(function() {
  document.querySelectorAll('.faq-item summary').forEach(function(summary) {
    summary.addEventListener('click', function(e) {
      var details = summary.parentNode;
      var answer = details.querySelector('.faq-item__answer');

      if (details.open) {
        // Closing: animate then close
        e.preventDefault();
        answer.style.maxHeight = answer.scrollHeight + 'px';
        requestAnimationFrame(function() {
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';
        });
        setTimeout(function() {
          details.open = false;
          answer.style.maxHeight = '';
          answer.style.opacity = '';
        }, 300);
      } else {
        // Opening: open then animate
        requestAnimationFrame(function() {
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';
          requestAnimationFrame(function() {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = '1';
          });
        });
      }
    });
  });
})();
```

Add this CSS for the animated version:
```css
.faq-item__answer {
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
```

---

## Form Handling

Client-side validation and submission with loading/success/error states.

```javascript
// ============================================
// FORM HANDLING
// ============================================

(function() {
  var form = document.getElementById('contactForm');
  if (!form) return;

  var submitBtn = form.querySelector('button[type="submit"]');
  var originalBtnText = submitBtn ? submitBtn.textContent : '';

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous errors
    form.querySelectorAll('.form-error').forEach(function(err) {
      err.textContent = '';
      err.style.display = 'none';
    });

    // Validate
    var isValid = true;
    var fields = form.querySelectorAll('[required]');

    fields.forEach(function(field) {
      var error = field.parentNode.querySelector('.form-error');
      var value = field.value.trim();

      if (!value) {
        showError(field, error, field.getAttribute('data-error-required') || 'Campo obrigatório');
        isValid = false;
        return;
      }

      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        showError(field, error, field.getAttribute('data-error-invalid') || 'Email inválido');
        isValid = false;
        return;
      }

      if (field.type === 'tel' && !/^[\d\s\(\)\-\+]{8,}$/.test(value)) {
        showError(field, error, field.getAttribute('data-error-invalid') || 'Telefone inválido');
        isValid = false;
        return;
      }

      field.classList.remove('form-field--error');
    });

    if (!isValid) return;

    // Show loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
    }

    // Build form data
    var formData = new FormData(form);

    // OPTION A: Submit to API endpoint
    /*
    fetch('[API_ENDPOINT]', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      if (!response.ok) throw new Error('Submission failed');
      return response.json();
    })
    .then(function(data) {
      showSuccess();
    })
    .catch(function(err) {
      showFormError('Erro ao enviar. Tente novamente.');
      resetButton();
    });
    */

    // OPTION B: WhatsApp redirect
    var name = formData.get('name') || '';
    var email = formData.get('email') || '';
    var phone = formData.get('phone') || '';
    var message = encodeURIComponent(
      'Olá! Meu nome é ' + name +
      '. Email: ' + email +
      '. Tel: ' + phone +
      '. [Add context from LP]'
    );
    var whatsappUrl = 'https://wa.me/[PHONE_NUMBER]?text=' + message;
    window.open(whatsappUrl, '_blank');
    showSuccess();
    resetButton();
  });

  function showError(field, errorEl, message) {
    field.classList.add('form-field--error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'block';
    }
  }

  function showSuccess() {
    form.innerHTML = '<div class="form-success">' +
      '<p class="form-success__title">✅ Enviado com sucesso!</p>' +
      '<p class="form-success__text">[Success message from Page Spec]</p>' +
      '</div>';
  }

  function showFormError(message) {
    var errorDiv = form.querySelector('.form-global-error');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'form-global-error';
      form.prepend(errorDiv);
    }
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
  }

  function resetButton() {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  }
})();
```

**Form HTML pattern:**
```html
<form id="contactForm" novalidate>
  <div class="form-group">
    <label for="name">[Label from Spec]</label>
    <input type="text" id="name" name="name" required
           placeholder="[Placeholder from Spec]"
           data-error-required="[Error msg from Spec]"
           aria-describedby="name-error">
    <span class="form-error" id="name-error" role="alert"></span>
  </div>
  <!-- Repeat for each field -->
  <button type="submit" class="btn btn--primary btn--large">[CTA text]</button>
  <p class="cta-support">[Microcopy]</p>
</form>
```

**Form CSS:**
```css
.form-group { margin-bottom: var(--space-6); }
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
.form-group textarea:focus {
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
```

---

## Complete Script Block

Copy this complete `<script>` block and paste before `</body>`.
Includes ALL interactions in the correct order.

```javascript
<script>
  // 1. Navigation (from nav-implementation.md)
  // [paste nav JS here]

  // 2. Scroll Reveal
  // [paste scroll reveal here]

  // 3. Number Counters
  // [paste counter here]

  // 4. FAQ Accordion
  // [paste accordion here]

  // 5. Form Handling (if applicable)
  // [paste form JS here]
</script>
```

**Order matters:** Nav first (needs to work immediately), then scroll
observers (can initialize after DOM), then form handling.
