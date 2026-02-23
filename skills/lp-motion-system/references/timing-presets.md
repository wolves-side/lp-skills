# Timing Presets

Complete timing configuration per aesthetic classification. Load the matching preset based on the Aesthetic Classification Summary from `lp-color-typography`.

## Preset Table

| Property | Corporate | Startup | Creative | SaaS | Premium | Wellness |
|----------|-----------|---------|----------|------|---------|----------|
| **Entry duration** | 0.5–0.7s | 0.4–0.6s | 0.6–1.0s | 0.4–0.5s | 0.8–1.2s | 0.5–0.8s |
| **Interaction duration** | 0.2s | 0.15s | 0.3s | 0.15s | 0.3s | 0.2s |
| **Easing** | smooth-decel | spring-bounce | dramatic-snap | standard-ease | smooth-decel | gentle-ease |
| **Spring stiffness** | — | 100 | — | 200 | — | — |
| **Spring damping** | — | 15 | — | 20 | — | — |
| **Stagger delay** | 0.08s | 0.1s | 0.12s | 0.08s | 0.15s | 0.12s |
| **Y offset (fadeUp)** | 20px | 30px | 40px | 20px | 20px | 25px |
| **Scale start** | 0.98 | 0.95 | 0.92 | 0.98 | 0.97 | 0.96 |
| **Blur amount** | 0 | 5px | 10px | 0 | 10px | 0 |
| **Scroll smooth** | 1.2s | 1.0s | 1.4s | 1.0s | 1.6s | 1.2s |
| **Hero delay range** | 0–400ms | 0–500ms | 0–700ms | 0–400ms | 0–800ms | 0–500ms |

## Detailed Preset Configs

### Corporate

```typescript
const corporateMotion = {
  entry: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
    yOffset: 20,
    once: true,
  },
  interaction: {
    duration: 0.2,
    hover: { scale: 1.02, y: -2 },
    active: { scale: 0.98 },
  },
  stagger: {
    delay: 0.08,
    childDelay: 0.1,
  },
  hero: {
    headline: { delay: 0, animation: 'fadeUp' },
    subheadline: { delay: 0.2, animation: 'fadeUp' },
    cta: { delay: 0.35, animation: 'fadeUp' },
    image: { delay: 0.15, animation: 'fadeIn' },
  },
  scroll: {
    duration: 1.2,
    smooth: true,
    smoothTouch: false,
  },
};
```

### Startup / Tech

```typescript
const startupMotion = {
  entry: {
    duration: 0.5,
    type: 'spring',
    stiffness: 100,
    damping: 15,
    yOffset: 30,
    once: true,
  },
  interaction: {
    duration: 0.15,
    hover: { scale: 1.03, y: -4, shadow: 'lg' },
    active: { scale: 0.97 },
  },
  stagger: {
    delay: 0.1,
    childDelay: 0.1,
  },
  hero: {
    headline: { delay: 0, animation: 'textReveal' },
    subheadline: { delay: 0.25, animation: 'fadeUp' },
    cta: { delay: 0.45, animation: 'scaleUp' },
    image: { delay: 0.2, animation: 'scaleUp' },
    badge: { delay: 0, animation: 'fadeIn' },
  },
  scroll: {
    duration: 1.0,
    smooth: true,
    smoothTouch: false,
  },
};
```

### Premium / Luxury

```typescript
const premiumMotion = {
  entry: {
    duration: 1.0,
    ease: [0.16, 1, 0.3, 1],
    yOffset: 20,
    blurAmount: 10,
    once: true,
  },
  interaction: {
    duration: 0.3,
    hover: { opacity: 0.8 }, // Subtle, not aggressive
    active: { scale: 0.99 },
  },
  stagger: {
    delay: 0.15,
    childDelay: 0.15,
  },
  hero: {
    headline: { delay: 0, animation: 'blurIn' },
    subheadline: { delay: 0.4, animation: 'fadeUp' },
    cta: { delay: 0.6, animation: 'fadeIn' },
    image: { delay: 0.3, animation: 'fadeIn' },
  },
  scroll: {
    duration: 1.6,
    smooth: true,
    smoothTouch: false,
  },
};
```

### Creative / Agency

```typescript
const creativeMotion = {
  entry: {
    duration: 0.8,
    ease: [0.76, 0, 0.24, 1],
    yOffset: 40,
    blurAmount: 10,
    once: true,
  },
  interaction: {
    duration: 0.3,
    hover: { scale: 1.05, y: -6, rotate: 0.5 },
    active: { scale: 0.96 },
  },
  stagger: {
    delay: 0.12,
    childDelay: 0.12,
  },
  hero: {
    headline: { delay: 0, animation: 'textReveal' },
    subheadline: { delay: 0.3, animation: 'fadeUp' },
    cta: { delay: 0.55, animation: 'scaleUp' },
    image: { delay: 0.2, animation: 'scaleUp' },
  },
  scroll: {
    duration: 1.4,
    smooth: true,
    smoothTouch: false,
  },
};
```

## How to Use

1. Identify the aesthetic from `lp-color-typography`'s Aesthetic Classification Summary
2. Load the matching preset above
3. Customize ONLY if the brand requires deviation (document the reason)
4. Output the timing values in the Motion System document for the builder
