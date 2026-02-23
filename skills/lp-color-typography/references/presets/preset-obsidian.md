# Preset: Obsidian

Dark premium, editorial. Inspired by Linear, Vercel, and luxury brands.

## When to Use
- Premium/Luxury aesthetic classification
- Dark-first brands
- Developer tools, high-end SaaS
- Brands that want authority and sophistication

## Color Tokens

```css
:root {
  /* Primary — cool indigo */
  --primary-50:  230 100% 97%;
  --primary-100: 230 95% 93%;
  --primary-200: 232 90% 85%;
  --primary-300: 234 85% 74%;
  --primary-400: 236 80% 63%;
  --primary-500: 238 75% 50%;
  --primary-600: 240 70% 42%;
  --primary-700: 242 65% 35%;
  --primary-800: 244 60% 28%;
  --primary-900: 246 55% 18%;
  --primary-950: 248 50% 10%;

  /* Neutral — warm charcoal (NOT pure gray) */
  --neutral-50:  240 6% 97%;
  --neutral-100: 240 5% 93%;
  --neutral-200: 236 5% 85%;
  --neutral-300: 234 4% 72%;
  --neutral-400: 232 4% 53%;
  --neutral-500: 230 4% 40%;
  --neutral-600: 228 5% 30%;
  --neutral-700: 226 6% 20%;
  --neutral-800: 224 8% 12%;
  --neutral-900: 222 10% 7%;
  --neutral-950: 220 14% 4%;

  /* Semantic */
  --background:          222 10% 7%;
  --foreground:          240 6% 97%;
  --background-dark:     220 14% 4%;
  --foreground-light:    240 5% 93%;
  --primary:             238 75% 50%;
  --primary-foreground:  230 100% 97%;
  --secondary:           224 8% 12%;
  --secondary-foreground:240 5% 93%;
  --accent:              280 70% 55%;
  --accent-foreground:   280 100% 97%;
  --muted:               226 6% 20%;
  --muted-foreground:    232 4% 53%;
  --border:              226 6% 20%;
  --input:               224 8% 12%;
  --ring:                238 75% 50%;
  --card:                224 8% 12%;
  --card-foreground:     240 6% 97%;

  /* Shadows — low opacity, diffused */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.2);
  --shadow-sm: 0 2px 8px 0 rgb(0 0 0 / 0.25);
  --shadow-md: 0 4px 16px 0 rgb(0 0 0 / 0.3);
  --shadow-lg: 0 8px 32px 0 rgb(0 0 0 / 0.35);
  --shadow-xl: 0 16px 48px 0 rgb(0 0 0 / 0.4);

  /* Radius — sharp */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
}
```

## Typography

- **Display**: Satoshi (Fontshare) or Space Grotesk — weights 500, 700
- **Body**: Inter or General Sans — weights 400, 500
- **Scale ratio**: 1.333 (Perfect Fourth) — dramatic hierarchy
- **Tracking**: Display headings at -0.04em, body at 0

## Motion Personality

- Duration: 0.8–1.2s for entries
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` — elegant deceleration
- Stagger: 0.15s between items
- Preferred effects: fade + blur in, subtle scale
- Intensity: dramatic

## Signature Patterns

- Noise texture at 0.02–0.04 opacity over dark backgrounds
- Gradient orbs as ambient light (never centered, always partially off-screen)
- Hairline borders (1px, 8-12% opacity white)
- Glass cards: `bg-white/5 backdrop-blur-xl border border-white/10`
