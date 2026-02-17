# Section Build Patterns

HTML patterns for each standard section type.
Each section involves 3 files:

| What | Where |
|------|-------|
| HTML structure + copy | `index.html` |
| Layout rules (grid, flex) | `css/05-sections.css` |
| Mobile adaptations | `css/07-responsive.css` |

Component styles (cards, buttons, metrics) are already in `css/04-components.css`.
Animation classes (`.reveal`, `.reveal-stagger`) are in `css/06-animations.css`.

**Workflow:** Copy the HTML pattern into `index.html`, add section-specific CSS
to `05-sections.css`, add mobile overrides to `07-responsive.css`.

---

## Hero — Split Layout

**index.html:**
```html
<section id="hero" class="section section--dark hero">
  <div class="container hero__grid">
    <div class="hero__content">
      <h1 class="hero__title">[H1 from Page Spec — recommended variant]</h1>
      <p class="hero__subtitle">[H2 from Page Spec]</p>
      <div class="hero__cta">
        <a href="#[offer or form]" class="btn btn--primary btn--large">[CTA text]</a>
        <p class="cta-support">[Microcopy]</p>
      </div>
    </div>
    <div class="hero__visual">
      <img src="assets/[image]" alt="[descriptive alt text]"
           width="[w]" height="[h]" loading="eager">
    </div>
  </div>
  <div class="container hero__trust">
    <p class="hero__trust-label">[e.g., "Empresas que já confiam"]</p>
    <div class="hero__logos">
      <!-- Logo images or text -->
    </div>
  </div>
</section>
```

CSS rules are in `css/05-sections.css` (hero block) and `css/07-responsive.css` (mobile).

## Hero — Centered Layout

**index.html:**
```html
<section id="hero" class="section section--dark hero hero--centered">
  <div class="container container--narrow">
    <h1 class="hero__title">[H1]</h1>
    <p class="hero__subtitle">[H2]</p>
    <div class="hero__cta">
      <a href="#[target]" class="btn btn--primary btn--large">[CTA text]</a>
      <p class="cta-support">[Microcopy]</p>
    </div>
  </div>
  <div class="container hero__trust">
    <div class="hero__logos">
      <!-- logos -->
    </div>
  </div>
</section>
```

---

## Problem — Narrative

**index.html:**
```html
<section id="problem" class="section section--light">
  <div class="container container--narrow reveal">
    <h2>[Section headline]</h2>
    <div class="problem__body">
      <p>[Paragraph 1 — customer language]</p>
      <p>[Paragraph 2 — agitate consequences]</p>
      <p class="problem__transition">[Transition to solution]</p>
    </div>
  </div>
</section>
```

## Problem — Pain Point Cards

**index.html:**
```html
<section id="problem" class="section section--light">
  <div class="container">
    <h2 class="reveal">[Section headline]</h2>
    <div class="pain-cards reveal-stagger">
      <div class="pain-card">
        <span class="pain-card__icon" aria-hidden="true">❌</span>
        <h3>[Pain point title]</h3>
        <p>[Detail]</p>
      </div>
      <!-- Repeat 3-4 cards -->
    </div>
  </div>
</section>
```

---

## Solution Reveal

**index.html:**
```html
<section id="solution" class="section section--light">
  <div class="container container--narrow reveal">
    <h2>[Section headline]</h2>
    <div class="solution__body">
      <p>[Before → After → Bridge copy]</p>
      <p>[Mechanism explanation]</p>
      <p>[Timeframe promise]</p>
    </div>
  </div>
</section>
```

---

## Social Proof — Metrics + Cases

**index.html:**
```html
<section id="proof" class="section section--dark">
  <div class="container">
    <div class="metrics reveal-stagger">
      <div class="metric">
        <span class="metric__number" data-target="[number]">0</span>
        <span class="metric__suffix">[+ or %]</span>
        <p class="metric__label">[Label]</p>
      </div>
      <!-- Repeat 3-4 metrics -->
    </div>

    <div class="cases reveal-stagger">
      <article class="case-card">
        <h3>[Result-focused title]</h3>
        <p><strong>Desafio:</strong> [1 sentence]</p>
        <p><strong>Resultado:</strong> [1 sentence with numbers]</p>
        <p class="case-card__timeline">[Timeline]</p>
      </article>
      <!-- Repeat -->
    </div>

    <div class="reveal" style="text-align: center; margin-top: 3rem;">
      <a href="#[target]" class="btn btn--primary">[CTA text]</a>
    </div>
  </div>
</section>
```

JS: `counters.js` automatically handles `[data-target]` elements.

---

## Features — Card Grid

**index.html:**
```html
<section id="features" class="section section--light">
  <div class="container">
    <h2 class="reveal">[Section headline]</h2>
    <div class="feature-grid reveal-stagger">
      <div class="feature-card">
        <div class="feature-card__icon" aria-hidden="true">[icon/emoji]</div>
        <h3>[Outcome headline]</h3>
        <p>[Benefit + feature description]</p>
      </div>
      <!-- Repeat 3-6 cards -->
    </div>
  </div>
</section>
```

---

## Offer Block — Centered Card

**index.html:**
```html
<section id="offer" class="section section--dark">
  <div class="container" style="max-width: 700px;">
    <div class="offer-card reveal">
      <h2>[Offer headline]</h2>
      <ul class="offer-card__list" role="list">
        <li>✅ [What they get — item 1]</li>
        <li>✅ [Item 2]</li>
        <li>✅ [Item 3]</li>
      </ul>
      <div class="offer-card__price">
        [Price or value statement]
      </div>
      <a href="#[target]" class="btn btn--primary btn--large">[CTA text]</a>
      <p class="cta-support">[Microcopy]</p>
      <div class="offer-card__guarantee">
        🔒 [Guarantee statement]
      </div>
    </div>
  </div>
</section>
```

---

## FAQ — Accordion

**index.html:**
```html
<section id="faq" class="section section--light">
  <div class="container container--narrow">
    <h2 class="reveal">[Section headline]</h2>
    <div class="faq-list reveal" role="list">
      <details class="faq-item" open>
        <summary class="faq-item__question">[Question 1]</summary>
        <div class="faq-item__answer">
          <p>[Answer 1]</p>
        </div>
      </details>
      <details class="faq-item">
        <summary class="faq-item__question">[Question 2]</summary>
        <div class="faq-item__answer">
          <p>[Answer 2]</p>
        </div>
      </details>
      <!-- Repeat for all FAQ items -->
    </div>
  </div>
</section>
```

JS: `accordion.js` automatically enhances all `.faq-item` elements.

---

## Testimonials — Cards

**index.html:**
```html
<section id="testimonials" class="section section--secondary">
  <div class="container">
    <h2 class="reveal">[Section headline]</h2>
    <div class="testimonial-grid reveal-stagger">
      <blockquote class="testimonial-card">
        <p class="testimonial-card__quote">"[Quote text]"</p>
        <footer class="testimonial-card__author">
          <strong>[Name]</strong>
          <span>[Title], [Company]</span>
        </footer>
      </blockquote>
      <!-- Repeat -->
    </div>
  </div>
</section>
```

---

## Comparison — Table

**index.html:**
```html
<section id="comparison" class="section section--light">
  <div class="container">
    <h2 class="reveal">[Section headline]</h2>

    <!-- Desktop: Table -->
    <div class="comparison-table-wrapper reveal">
      <table class="comparison-table" role="table">
        <thead>
          <tr>
            <th scope="col">Característica</th>
            <th scope="col" class="comparison-table__highlight">[Company]</th>
            <th scope="col">[Alternative 1]</th>
            <th scope="col">[Alternative 2]</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[Feature]</td>
            <td class="comparison-table__highlight">✅</td>
            <td>❌</td>
            <td>❌</td>
          </tr>
          <!-- Repeat rows -->
        </tbody>
      </table>
    </div>

    <!-- Mobile: Stacked cards (visible ≤640px) -->
    <div class="comparison-cards reveal-stagger">
      <!-- Card-based version of the same data -->
    </div>
  </div>
</section>
```

Visibility controlled in `css/07-responsive.css`.

---

## Final CTA

**index.html:**
```html
<section id="cta-final" class="section section--dark">
  <div class="container container--narrow reveal" style="text-align: center;">
    <h2>[Transformation restated]</h2>
    <p class="final-cta__body">[1-2 closing sentences]</p>
    <a href="#[target]" class="btn btn--primary btn--large">[CTA text]</a>
    <p class="cta-support">[Final microcopy]</p>
  </div>
</section>
```

---

## Form Section

**index.html:**
```html
<section id="contact" class="section section--secondary">
  <div class="container container--narrow">
    <h2 class="reveal">[Section headline]</h2>
    <p class="reveal">[Supporting copy]</p>

    <form id="contactForm" class="reveal" novalidate>
      <!-- Honeypot -->
      <div style="position: absolute; left: -9999px;" aria-hidden="true">
        <input type="text" name="website" tabindex="-1" autocomplete="off">
      </div>

      <div class="form-group">
        <label for="name">[Label from Spec]</label>
        <input type="text" id="name" name="name" required
               placeholder="[Placeholder from Spec]"
               data-error-required="[Error msg from Spec]"
               aria-describedby="name-error"
               aria-required="true">
        <span class="form-error" id="name-error" role="alert"></span>
      </div>

      <div class="form-group">
        <label for="email">[Label]</label>
        <input type="email" id="email" name="email" required
               placeholder="[Placeholder]"
               data-error-required="[Error msg]"
               data-error-invalid="[Invalid email msg]"
               aria-describedby="email-error"
               aria-required="true">
        <span class="form-error" id="email-error" role="alert"></span>
      </div>

      <div class="form-group">
        <label for="phone">[Label]</label>
        <input type="tel" id="phone" name="phone" required
               placeholder="[Placeholder]"
               data-error-required="[Error msg]"
               data-error-invalid="[Invalid phone msg]"
               aria-describedby="phone-error"
               aria-required="true">
        <span class="form-error" id="phone-error" role="alert"></span>
      </div>

      <!-- Add more fields as needed (max 4-5 total) -->

      <button type="submit" class="btn btn--primary btn--large">[CTA text]</button>
      <p class="cta-support">[Microcopy]</p>
    </form>
  </div>
</section>
```

JS: `form-handler.js` automatically handles validation and submission.

---

## Quick Reference: Which File Gets What

| Element | `index.html` | `05-sections.css` | `07-responsive.css` |
|---------|:---:|:---:|:---:|
| Section HTML + copy | ✅ | — | — |
| Grid/flex layout | — | ✅ | — |
| Mobile stacking | — | — | ✅ |
| `.reveal` / `.reveal-stagger` class | ✅ | — | — |
| `data-target` attribute | ✅ | — | — |
| Component styling (.btn, .card) | — | `04-components.css` | — |
| Background tone (.section--dark) | ✅ | — | — |
