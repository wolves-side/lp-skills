---
name: animation-library
description: Generates Framer Motion variants and GSAP configuration based on the aesthetic classification.
---

# Animation Library

Generate animation variants as **Framer Motion `Variants` objects** + timing configs.

## Output Format

```typescript
// Output: lib/animations.ts
import { type Variants } from 'framer-motion';

// ── Entry Animations ────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// ── Container Orchestration ─────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,  // Adjust per aesthetic
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
```

## Adaptation by Aesthetic

| Property | Corporate | Startup | Creative | Premium | SaaS |
|----------|-----------|---------|----------|---------|------|
| **Duration** | 0.5-0.7s | 0.4-0.6s | 0.6-1.0s | 0.8-1.2s | 0.4-0.5s |
| **Easing** | `[0.22, 1, 0.36, 1]` | `type: 'spring'` | `[0.76, 0, 0.24, 1]` | `[0.16, 1, 0.3, 1]` | `[0.22, 1, 0.36, 1]` |
| **Spring stiffness** | — | 100 | — | — | 150 |
| **Spring damping** | — | 15 | — | — | 20 |
| **Stagger delay** | 0.08s | 0.1s | 0.12s | 0.15s | 0.08s |
| **Y offset** | 20px | 30px | 40px | 20px | 20px |
| **Blur effect?** | No | Optional | Yes | Yes | No |
| **Scale effect?** | No | Yes | Yes | Minimal | No |

## Rules

1. **Output TypeScript** — Must be valid `Variants` type from `framer-motion`.
2. **Include all standard variants** — `fadeUp`, `fadeIn`, `scaleUp`, `staggerContainer`, `staggerItem` minimum.
3. **Match the aesthetic** — Duration and easing should match the brand personality.
4. **Performance** — Use `transform` and `opacity` only. No `width`/`height` animations.
5. **Accessibility** — All animated components must check `prefers-reduced-motion` via the animation wrapper.
