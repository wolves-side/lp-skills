# Motion System — Grupo PROJECONT

> Receives: Aesthetic Classification = Corporate/Monolith (subtle, trustworthy, deliberate)

## Aesthetic-Matched Timing Preset

Based on the Monolith classification, motion is **calm and deliberate**. No bouncy springs, no elastic effects. Everything reinforces confidence and professionalism.

### Base Timing Config
```typescript
const motionPreset = {
  // Base durations
  duration: {
    instant:  0.15,   // micro-interactions (hover, focus)
    fast:     0.25,   // button state changes
    normal:   0.4,    // section reveals, card transitions
    slow:     0.6,    // hero content entrance
    crawl:    0.8,    // stats counter animation
  },

  // Easing curves (no bounce/elastic for Corporate)
  easing: {
    default:  'cubic-bezier(0.22, 1, 0.36, 1)',    // smooth deceleration
    in:       'cubic-bezier(0.55, 0, 1, 0.45)',     // ease-in
    out:      'cubic-bezier(0, 0.55, 0.45, 1)',     // ease-out
    inOut:    'cubic-bezier(0.65, 0, 0.35, 1)',     // ease-in-out
  },

  // Stagger delays
  stagger: {
    fast:     0.06,   // tight lists, badges
    normal:   0.1,    // card grids, feature lists
    slow:     0.15,   // hero sequence, step-by-step
  },

  // Scroll trigger
  scrollTrigger: {
    threshold: 0.15,   // trigger at 15% visibility
    rootMargin: '-50px',
  },
}
```

---

## Entrance Animations per Section

### Seção 1: Hero
```
Sequence (stagger: 0.15s):
1. Badge — fadeUp (offset: 15px, duration: 0.4s, delay: 0.2s)
2. H1 — fadeUp (offset: 20px, duration: 0.5s)
3. Subtitle — fadeUp (offset: 15px, duration: 0.4s)
4. CTAs — fadeUp (offset: 10px, duration: 0.4s)
5. Microcopy — fadeIn (duration: 0.3s)
6. Stats bar — slideUp from bottom (offset: 30px, duration: 0.5s)
   └── Each stat number — countUp (duration: 0.8s, easing: out)
```

### Seção 2: Dor (Pain Points)
```
Trigger: scroll (threshold: 0.15)
1. H2 — fadeUp (offset: 15px, duration: 0.4s)
2. 3 Pain cards — stagger fadeUp (offset: 20px, stagger: 0.1s, duration: 0.4s)
3. CTA button — fadeUp (offset: 10px, duration: 0.3s, delay: 0.3s after cards)
```

### Seção 3: Serviços
```
Trigger: scroll
1. H2 + subtitle — fadeUp (stagger: 0.1s)
2. 4 Service cards — stagger fadeUp (stagger: 0.1s, duration: 0.4s)
   └── Each card: icon scales from 0.8 → 1.0 (duration: 0.3s)
```

### Seção 4: Diferenciais
```
Trigger: scroll
1. H2 — fadeUp
2. 4 Items — stagger fadeUp (stagger: 0.12s)
   └── Each: icon fadeIn simultaneous with text fadeUp
```

### Seção 5: Segmentos
```
Trigger: scroll
1. H2 + subtitle — fadeUp
2. 6 Segment items — stagger fadeUp (stagger: 0.08s) — fast since there are 6
```

### Seção 6: Como Funciona
```
Trigger: scroll
1. H2 — fadeUp
2. Step numbers — countUp (01, 02, 03)
3. Steps — stagger fadeUp (stagger: 0.15s)
4. Connector lines — drawIn from left to right (SVG stroke-dashoffset, duration: 0.6s)
```

### Seção 7: FAQ
```
Trigger: scroll
1. H2 — fadeUp
2. FAQ items — stagger fadeUp (stagger: 0.08s)
3. Expand/collapse — height transition (duration: 0.3s, easing: inOut)
   └── Content inside: fadeIn (duration: 0.2s, delay: 0.1s)
```

### Seção 8: CTA Final
```
Trigger: scroll
1. H2 — fadeUp (duration: 0.4s)
2. Text — fadeUp (delay: 0.1s)
3. CTA buttons — fadeUp + subtle scale pulse (1.0 → 1.02 → 1.0, duration: 2s, infinite, subtle)
```

---

## Interaction States

### Buttons
```css
/* Primary Button */
.btn-primary {
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
.btn-primary:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

/* Ghost/Secondary Button */
.btn-ghost {
  transition: background-color 0.2s ease, border-color 0.2s ease;
}
.btn-ghost:hover {
  background-color: hsl(var(--primary-50));
  border-color: hsl(var(--primary-400));
}
```

### Cards
```css
.card {
  transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}
.card:hover {
  box-shadow: var(--shadow-lg);
  border-color: hsl(var(--primary-200));
  transform: translateY(-2px);
}
```

### Navigation
```css
.nav {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.nav.scrolled {
  background-color: hsl(var(--background) / 0.95);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-sm);
}
```

### FAQ Accordion
```css
.faq-content {
  overflow: hidden;
  transition: height 0.3s cubic-bezier(0.65, 0, 0.35, 1);
}
.faq-icon {
  transition: transform 0.3s ease;
}
.faq-item[open] .faq-icon {
  transform: rotate(45deg);
}
```

---

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Keep essential state indicators */
  .btn-primary:hover { box-shadow: var(--shadow-md); }
  .card:hover { border-color: hsl(var(--primary-200)); }
  .nav.scrolled { background-color: hsl(var(--background) / 0.95); }
}
```

---

## Motion Handoff Summary

**For lp-asset-system and lp-page-builder**:
- All entrance animations are **fadeUp** with 15-20px offset maximum
- Stagger sequences: 0.06-0.15s depending on item count
- No parallax, no horizontal slides, no elastic/bouncy effects
- Scroll trigger at 15% visibility with -50px root margin
- Counter animations on stats (0.8s duration)
- FAQ accordion: height transition 0.3s
- Hover states: subtle translateY(-1px to -2px) + shadow elevation
- Nav: transparent → solid with backdrop-filter blur on scroll
