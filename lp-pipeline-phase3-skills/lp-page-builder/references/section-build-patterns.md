# Section Build Patterns

HTML + CSS patterns for each standard section. Copy the pattern, fill in copy from Page Spec,
adjust CSS classes to match the wireframe.

---

## Hero — Split Layout

```html
<section id="hero" class="section section--dark hero">
  <div class="container hero__grid">
    <div class="hero__content">
      <h1 class="hero__title">[H1 from Copy Document — recommended variant]</h1>
      <p class="hero__subtitle">[H2 from Copy Document]</p>
      <div class="hero__cta">
        <a href="#[offer-section or form]" class="btn btn--primary btn--large">[CTA text]</a>
        <p class="cta-support">[Microcopy]</p>
      </div>
    </div>
    <div class="hero__visual">
      <!-- Screenshot, illustration, or video embed -->
      <img src="[image]" alt="[descriptive alt text]" width="[w]" height="[h]" loading="eager">
    </div>
  </div>
  <!-- Trust anchor below hero content -->
  <div class="container hero__trust">
    <p class="hero__trust-label">[e.g., "Trusted by"]</p>
    <div class="hero__logos">
      <!-- Logo images or company names -->
    </div>
  </div>
</section>
```

```css
.hero {
  padding: var(--space-32) 0 var(--space-16);
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
  max-width: 18ch; /* Force tight headlines */
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
  border-top: 1px solid rgba(255,255,255,0.1);
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
  filter: brightness(0) invert(1); /* White logos on dark bg */
}

@media (max-width: 640px) {
  .hero { min-height: auto; padding: var(--space-24) 0 var(--space-12); }
  .hero__grid { grid-template-columns: 1fr; text-align: center; }
  .hero__visual { display: none; /* or order: -1 to show above */ }
  .hero__title { max-width: 100%; }
  .hero__subtitle { max-width: 100%; }
  .hero__cta .btn { width: 100%; }
  .hero__logos { justify-content: center; }
}
```

## Hero — Centered Layout

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

```css
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
```

---

## Problem Agitation — Narrative

```html
<section id="problem" class="section section--light">
  <div class="container container--narrow reveal">
    <h2>[Section headline]</h2>
    <div class="problem__body">
      <p>[Paragraph 1 — open with customer language]</p>
      <p>[Paragraph 2 — agitate consequences]</p>
      <p class="problem__transition">[Transition sentence — bridge to solution]</p>
    </div>
  </div>
</section>
```

```css
#problem h2 { margin-bottom: var(--space-8); }
.problem__body p { margin-bottom: var(--space-6); max-width: 65ch; }
.problem__body p:last-child { margin-bottom: 0; }
.problem__transition {
  font-size: var(--text-body-large);
  font-weight: 600;
  color: var(--color-accent);
}
```

## Problem — Pain Point Cards

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
      <!-- Repeat for each pain point (3-4 max) -->
    </div>
  </div>
</section>
```

```css
.pain-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-12);
}
.pain-card {
  padding: var(--space-8);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-error);
}
.pain-card__icon { font-size: 1.5rem; display: block; margin-bottom: var(--space-4); }
.pain-card h3 { margin-bottom: var(--space-3); }
```

---

## Solution Reveal

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

```html
<section id="proof" class="section section--dark">
  <div class="container">
    <div class="metrics reveal-stagger">
      <div class="metric">
        <span class="metric__number" data-target="[number]">0</span>
        <span class="metric__suffix">[suffix like + or %]</span>
        <p class="metric__label">[Label]</p>
      </div>
      <!-- Repeat for each metric (3-4) -->
    </div>

    <div class="cases reveal-stagger">
      <article class="case-card">
        <h3>[Result-focused title]</h3>
        <p><strong>Desafio:</strong> [1 sentence]</p>
        <p><strong>Resultado:</strong> [1 sentence with numbers]</p>
        <p class="case-card__timeline">[Timeline]</p>
      </article>
      <!-- Repeat for each case -->
    </div>

    <div class="reveal" style="text-align: center; margin-top: var(--space-12);">
      <a href="#[target]" class="btn btn--primary">[CTA text]</a>
    </div>
  </div>
</section>
```

```css
.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-8);
  text-align: center;
  margin-bottom: var(--space-16);
}
.metric__number {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: var(--color-accent);
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
.cases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}
.case-card {
  padding: var(--space-8);
  background: rgba(255,255,255,0.05);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.1);
}
.case-card h3 { margin-bottom: var(--space-4); color: var(--color-accent); }
.case-card p { margin-bottom: var(--space-3); }
.case-card__timeline {
  font-size: var(--text-small);
  opacity: 0.6;
  margin-top: var(--space-4);
}
```

---

## Features — Card Grid

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
      <!-- Repeat for each feature (3-6) -->
    </div>
  </div>
</section>
```

```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-12);
}
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
.feature-card h3 { margin-bottom: var(--space-3); }
```

---

## Offer Block — Centered Card

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
        [Price or value statement with anchoring]
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

```css
.offer-card {
  background: rgba(255,255,255,0.03);
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-xl);
  padding: var(--space-16) var(--space-12);
  text-align: center;
}
.offer-card h2 { margin-bottom: var(--space-8); }
.offer-card__list {
  text-align: left;
  max-width: 400px;
  margin: 0 auto var(--space-8);
}
.offer-card__list li {
  padding: var(--space-3) 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
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
  background: rgba(255,255,255,0.05);
  border-radius: var(--radius-md);
  font-size: var(--text-small);
}

@media (max-width: 640px) {
  .offer-card { padding: var(--space-8) var(--space-6); }
  .offer-card .btn--large { width: 100%; }
}
```

---

## FAQ — Accordion

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

```css
.faq-list { margin-top: var(--space-12); }
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
.faq-item__question::-webkit-details-marker { display: none; }
.faq-item__answer {
  padding-bottom: var(--space-6);
  color: var(--color-text-secondary);
  max-width: 65ch;
}
```

---

## Testimonials — Cards

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

```css
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-12);
}
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
.testimonial-card__author strong { display: block; }
.testimonial-card__author span {
  font-size: var(--text-small);
  color: var(--color-text-muted);
}
```

---

## Final CTA

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

```css
.final-cta__body {
  font-size: var(--text-body-large);
  margin: var(--space-6) auto var(--space-8);
  max-width: 50ch;
  opacity: 0.85;
}

@media (max-width: 640px) {
  #cta-final .btn--large { width: 100%; }
}
```

---

## Comparison — Table

```html
<section id="comparison" class="section section--light">
  <div class="container">
    <h2 class="reveal">[Section headline]</h2>
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
    <!-- Mobile: stacked cards (hidden on desktop) -->
    <div class="comparison-cards reveal-stagger">
      <!-- Generated via JS or shown/hidden with CSS -->
    </div>
  </div>
</section>
```

```css
.comparison-table-wrapper { overflow-x: auto; margin-top: var(--space-12); }
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}
.comparison-table th,
.comparison-table td {
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-border);
}
.comparison-table th { font-weight: 600; }
.comparison-table td:first-child,
.comparison-table th:first-child { text-align: left; }
.comparison-table__highlight {
  background: var(--color-accent-subtle);
  font-weight: 600;
}

@media (max-width: 640px) {
  .comparison-table-wrapper { display: none; }
  .comparison-cards { display: block; }
}
@media (min-width: 641px) {
  .comparison-cards { display: none; }
}
```
