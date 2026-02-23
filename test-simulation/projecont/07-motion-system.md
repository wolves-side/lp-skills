# Motion System — Grupo PROJECONT

## Timing Preset
**Aesthetic**: Corporate/Monolith
**Duration**: `0.6s` (Base)
**Easing**: `[0.22, 1, 0.36, 1]` (easeOutExpo - solid, confident, non-bouncy)
**Stagger**: `0.1s` (Methodical rhythm)

## Entry Animations by Section (High-Fidelity)

| Section | Animation Type | Trigger | Notes |
|---------|----------------|---------|-------|
| **Hero** | `textReveal` (Headline) + `fadeUp` (Content) | Load | Letters/Words reveal upwards masking. Stats use `NumberTicker`. |
| **Dor** | `fadeUp` (Text) | `whileInView` | Subtle entrance. |
| **Serviços** | `staggerContainer` + `scaleUp` | `whileInView` | Cards scale up slightly (95% -> 100%). Hover states trigger `Spotlight`. |
| **Diferenciais** | `fadeUp` | `whileInView` | Standard methodical entrance. |
| **Segmentos** | `fadeUp` + `staggerItem` | `whileInView` | Sequential grid load. |
| **Como Funciona**| `fadeUp` | `whileInView` | Steps animate in order. |
| **FAQ** | `fadeUp` | `whileInView` | Accordions enter grouped. |
| **CTA Final** | `blurIn` | `whileInView` | Premium feel: text blurs in as it scales slightly. |
| **Footer** | `fadeIn` | `whileInView` | Instant appearance, no distraction. |

## Interaction States

| Element | Hover | Focus | Active | Transition |
|---------|-------|-------|--------|------------|
| **Primary CTA** | Scale 1.02, Shadow increase, Glow intensify | Ring 2px | Scale 0.98 | duration-300 |
| **Service Card** | Lift (-4px Y), `Spotlight` radial gradient | Border highlight | — | duration-300 |
| **Nav Link** | Color change (Primary) | Underline | — | duration-200 |
| **Pill/Badge** | Background shift | — | — | duration-200 |
| **FAQ Accordion** | Text color shift | Ring | — | duration-200 |

## Choreography Sequences

**Hero Sequence:**
1. Background and Grid Pattern fade in (0ms)
2. `textReveal` for Headline (100ms)
3. Subheadline `fadeUp` (300ms)
4. Primary and Secondary CTAs `fadeUp` (400ms)
5. `NumberTicker` on Stats Bar starts counting (600ms)

**Service Grid Sequence:**
Cards load visually via `staggerContainer` (delay 0.1s per card).

## Scroll Configuration
```typescript
const lenisConfig = {
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
};
```

## Reduced Motion Fallbacks
When `prefers-reduced-motion: reduce` is detected:
- All `textReveal`, `scaleUp`, and `blurIn` map to instant `opacity: 1` changes.
- `NumberTicker` jumps directly to the final value.
- Hover states (Spotlight, Glow) are disabled, keeping only safe background color changes.

## `animations.ts` Code

```typescript
import { type Variants } from 'framer-motion';

// --- Project-specific timing values from Motion System ---
const EASE = [0.22, 1, 0.36, 1] as const; // Corporate easeOutExpo
const DURATION_BASE = 0.6; 
const STAGGER_DELAY = 0.1; 

// --- Reveal (Text/Headlines) ---
export const textReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATION_BASE, ease: [...EASE] },
  },
};

// --- Fade Up (default section entrance) ---
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: DURATION_BASE, ease: [...EASE] },
  },
};

// --- Fade In (no movement) ---
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION_BASE, ease: [...EASE] },
  },
};

// --- Scale Up (cards, images) ---
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION_BASE, ease: [...EASE] },
  },
};

// --- Slide variants ---
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: DURATION_BASE, ease: [...EASE] },
  }
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: DURATION_BASE, ease: [...EASE] },
  }
};

// --- Stagger Container ---
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER_DELAY, delayChildren: 0.1 } },
};

// --- Stagger Item ---
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: Math.max(0.4, DURATION_BASE - 0.2), ease: [...EASE] },
  },
};

// --- Blur In (premium feel) ---
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
  visible: {
    opacity: 1, filter: "blur(0px)", scale: 1,
    transition: { duration: DURATION_BASE + 0.2, ease: [...EASE] },
  },
};
```

## Builder Implementation Notes
1. Write `animations.ts` exactly as specified above.
2. Use `<ScrollReveal>` for generic section entrances using `fadeUp`.
3. Wrap Grid and List containers in `<StaggerChildren>` and wrap each child in `<StaggerItem>`.
4. Implement a `<Counter>` or `<NumberTicker>` component for the stats in the Hero section.
