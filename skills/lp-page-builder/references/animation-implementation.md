# Animation Implementation

All animations for the landing page, split across CSS and JS files.

---

## File Map

| Animation | CSS File | JS File |
|-----------|----------|---------|
| Scroll reveal (fade up) | `06-animations.css` | `js/scroll-reveal.js` |
| Stagger children | `06-animations.css` | `js/scroll-reveal.js` |
| Number counter | — | `js/counters.js` |
| Nav background change | `04-components.css` | `js/nav.js` |
| FAQ accordion | `04-components.css` | `js/accordion.js` |
| CTA hover | `04-components.css` | — (pure CSS) |
| Reduced motion reset | `06-animations.css` | Each JS module checks individually |

---

## How It Works

### Scroll Reveal

1. Add `.reveal` class to any element in `index.html`
2. CSS in `06-animations.css` starts element at `opacity: 0; transform: translateY(24px)`
3. JS in `scroll-reveal.js` observes element with IntersectionObserver
4. When 15% visible, JS adds `.visible` class
5. CSS transitions to `opacity: 1; transform: translateY(0)`

### Stagger Children

1. Add `.reveal-stagger` class to a CONTAINER in `index.html`
2. CSS in `06-animations.css` hides all direct children with transform
3. JS in `scroll-reveal.js` observes the container
4. When visible, adds `.visible` to container
5. CSS applies increasing `transition-delay` to each child (100ms intervals)

### Number Counters

1. Add `data-target="[number]"` attribute to a `<span>` in `index.html`
2. Set initial text content to `0`
3. JS in `counters.js` observes with IntersectionObserver
4. When 50% visible, animates from 0 to target using `requestAnimationFrame`
5. Uses ease-out cubic for smooth deceleration
6. Formats with `toLocaleString('pt-BR')` for Brazilian number format

---

## Usage in HTML

```html
<!-- Single element reveal -->
<h2 class="reveal">Section Title</h2>

<!-- Container whose children stagger in -->
<div class="feature-grid reveal-stagger">
  <div class="feature-card">...</div>  <!-- delay: 0ms -->
  <div class="feature-card">...</div>  <!-- delay: 100ms -->
  <div class="feature-card">...</div>  <!-- delay: 200ms -->
</div>

<!-- Number counter -->
<span class="metric__number" data-target="500000">0</span>
```

---

## Performance Rules

| Rule | Why |
|------|-----|
| ONLY animate `transform` and `opacity` | GPU-composited, no layout recalculation |
| Use `will-change` sparingly | Only on elements about to animate |
| Throttle scroll listeners with rAF | Prevent jank from excessive callbacks |
| Wrap in `prefers-reduced-motion` check | Accessibility requirement |
| One-shot animations (unobserve after) | Don't re-trigger, save resources |
| `{ passive: true }` on scroll listeners | Allows browser to optimize scroll |

---

## Reduced Motion

Both CSS and JS handle reduced motion:

**CSS** (`06-animations.css`):
```css
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal-stagger > * {
    opacity: 1;
    transform: none;
    transition: none;
  }
  html { scroll-behavior: auto; }
}
```

**JS** (each module):
```javascript
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Show final state immediately, skip animation
  return;
}
```

Both are needed: CSS handles the visual reset, JS prevents observer setup
and counter animations from running unnecessarily.
