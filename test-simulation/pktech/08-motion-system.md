# Motion System — PK Tech AI

> Receives: Aesthetic = Startup/Tech | Intensity = High | Mood = Bold, energetic, modern

## Timing Preset

| Property | Value | Rationale |
|----------|-------|-----------|
| **Easing** | `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutExpo) | Snappy start, smooth deceleration — tech feel |
| **Duration base** | 0.5s | Fast enough to feel responsive, slow enough to be noticed |
| **Duration range** | 0.15s–0.7s | Micro-interactions fast, entrances deliberate |
| **Stagger delay** | 0.08s | Quick cascade for card grids — feels alive |
| **Scroll offset** | 20% viewport | Trigger slightly before fully visible |

## Entry Animations by Section

| Section | Animation | Duration | Delay | Trigger |
|---------|-----------|----------|-------|---------|
| Hero badge | `fadeUp` | 0.4s | 0ms | On mount |
| Hero H1 | `textReveal` (word-by-word) | 0.5s per word | 0.05s stagger | On mount, after badge |
| Hero subtitle | `fadeUp` | 0.5s | 300ms | On mount |
| Hero CTAs | `fadeUp` | 0.5s | 500ms | On mount |
| Hero stats bar | `fadeUp` + `Counter` | 0.5s | 700ms | On mount |
| Dor/Problema | `fadeUp` | 0.6s | 0s | whileInView |
| Serviços cards | `staggerItem` | 0.5s | 0.08s stagger | whileInView |
| Casos de Sucesso cards | `staggerItem` | 0.5s | 0.08s stagger | whileInView |
| Produtos cards | `staggerItem` | 0.5s | 0.1s stagger | whileInView |
| Como Funciona steps | `staggerItem` | 0.5s | 0.1s stagger | whileInView |
| FAQ | `fadeUp` | 0.5s | 0s | whileInView |
| CTA Final | `fadeUp` | 0.6s | 0s | whileInView |
| Footer | `fadeIn` | 0.4s | 0s | whileInView |

## Interaction States

| Element | Hover | Focus | Active | Transition |
|---------|-------|-------|--------|------------|
| Primary CTA | scale(1.03) + shadow increase | ring 2px accent-400 | scale(0.97) | 0.2s ease |
| Secondary CTA | bg white/10, border white/40 | ring 2px white/50 | scale(0.97) | 0.2s ease |
| Service card | translateY(-6px) + shadow-xl + glow | border primary-400 | — | 0.3s ease |
| Case card (dark) | bg white/8, border white/20 | border primary-400 | — | 0.3s ease |
| Product card | scale(1.02) + shadow-lg | border accent-400 | — | 0.3s ease |
| FAQ item | bg neutral-100 | ring 2px | — | 0.2s ease |
| Nav link | text primary-500 | underline | — | 0.15s ease |
| Nav CTA | scale(1.05) + shadow | ring 2px | scale(0.95) | 0.2s ease |

## Choreography Sequences

### Hero Sequence (on mount)
```
0ms    → Badge fades up
200ms  → H1 reveals word-by-word (0.05s stagger between words)
500ms  → Subtitle fades up
700ms  → CTA buttons fade up
900ms  → Microcopy fades in
1100ms → Stats bar fades up, counters start animating
```

### Card Grid Sequence (on viewport enter)
```
0ms    → Section heading fades up
200ms  → First card appears (staggerItem)
280ms  → Second card appears
360ms  → Third card appears
440ms  → Fourth card appears
```

### Steps Sequence (Como Funciona)
```
0ms    → Section heading fades up
200ms  → Step 1 slides in
300ms  → Step 2 slides in
400ms  → Step 3 slides in
500ms  → Step 4 slides in
```

## Scroll Configuration

```typescript
const lenisConfig = {
  duration: 1.0,             // Slightly faster for tech feel
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical' as const,
  gestureDirection: 'vertical' as const,
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
};
```

## Reduced Motion Fallbacks

When `prefers-reduced-motion: reduce` is active:
- All entry animations: instant opacity 1, no transform
- Counter component: sets final value immediately (no counting animation)
- Hover states: still work but without transform (only color/shadow changes)
- Smooth scroll: disabled (native browser scroll)
- Stagger: all items appear simultaneously
- TextReveal: renders as static text

## `animations.ts` Code

```typescript
// lib/animations.ts
import { type Variants } from 'framer-motion';

// --- PK Tech AI timing values ---
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DURATION_BASE = 0.5;
const DURATION_FAST = 0.3;
const DURATION_SLOW = 0.7;
const STAGGER_DELAY = 0.08;

// --- Fade Up (default section entrance) ---
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_BASE, ease: EASE },
  },
};

// --- Fade In (no movement) ---
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION_FAST, ease: 'easeOut' },
  },
};

// --- Scale Up (cards, images) ---
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION_BASE, ease: EASE },
  },
};

// --- Slide from Left ---
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION_BASE, ease: EASE },
  },
};

// --- Slide from Right ---
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION_BASE, ease: EASE },
  },
};

// --- Stagger Container ---
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: 0.1,
    },
  },
};

// --- Stagger Item (use with staggerContainer) ---
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_BASE, ease: EASE },
  },
};

// --- Blur In (premium feel — for hero badge, special elements) ---
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: DURATION_SLOW, ease: 'easeOut' },
  },
};
```

## Builder Implementation Notes

1. **Hero**: Use `TextReveal` for H1 (word-by-word mode). MagneticButton on both CTAs. Counter for stats.
2. **Cards**: Wrap each grid in `StaggerChildren`, each card in `StaggerItem`. Apply `whileHover` directly on the card motion.div.
3. **Como Funciona**: Use `StaggerChildren` with `staggerDelay={0.1}`.
4. **CTA Final**: Use `ScrollReveal` wrapper. MagneticButton on CTA.
5. **Nav**: No entry animation. Scroll-state only (transparent → solid).
6. **Footer**: Use `ScrollReveal` with `fadeIn` variant.
7. **All components**: Import from `@/lib/animations` — do NOT redefine variants inline.
