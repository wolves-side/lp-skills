# Preset: Warm

Organic, warm, approachable. Inspired by Headspace, Calm, and human-centered brands.

## When to Use
- Health/Wellness aesthetic classification
- Human-centered, community-focused brands
- Coaching, education, food, lifestyle
- Brands that want warmth and approachability

## Color Tokens

```css
:root {
  /* Primary — warm terracotta/coral */
  --primary-50:  15 100% 97%;
  --primary-100: 14 95% 92%;
  --primary-200: 13 90% 83%;
  --primary-300: 12 85% 72%;
  --primary-400: 11 78% 60%;
  --primary-500: 10 72% 50%;
  --primary-600: 9 70% 43%;
  --primary-700: 8 65% 36%;
  --primary-800: 7 58% 28%;
  --primary-900: 6 50% 20%;
  --primary-950: 5 45% 12%;

  /* Neutral — warm beige */
  --neutral-50:  30 20% 97%;
  --neutral-100: 28 15% 94%;
  --neutral-200: 26 12% 88%;
  --neutral-300: 24 10% 78%;
  --neutral-400: 22 8% 58%;
  --neutral-500: 20 6% 44%;
  --neutral-600: 18 7% 34%;
  --neutral-700: 16 8% 25%;
  --neutral-800: 14 10% 16%;
  --neutral-900: 12 12% 10%;
  --neutral-950: 10 14% 5%;

  /* Semantic — warm light mode */
  --background:          30 20% 97%;
  --foreground:          12 12% 10%;
  --background-dark:     10 14% 5%;
  --foreground-light:    28 15% 94%;
  --primary:             10 72% 50%;
  --primary-foreground:  0 0% 100%;
  --secondary:           26 12% 88%;
  --secondary-foreground:12 12% 10%;
  --accent:              155 60% 40%;
  --accent-foreground:   0 0% 100%;
  --muted:               28 15% 94%;
  --muted-foreground:    22 8% 58%;
  --border:              26 12% 88%;
  --input:               26 12% 88%;
  --ring:                10 72% 50%;
  --card:                30 25% 99%;
  --card-foreground:     12 12% 10%;

  /* Shadows — soft, warm */
  --shadow-xs: 0 1px 2px 0 rgb(30 20 10 / 0.04);
  --shadow-sm: 0 2px 6px 0 rgb(30 20 10 / 0.06);
  --shadow-md: 0 4px 12px 0 rgb(30 20 10 / 0.08);
  --shadow-lg: 0 8px 24px 0 rgb(30 20 10 / 0.1);
  --shadow-xl: 0 16px 40px 0 rgb(30 20 10 / 0.12);

  /* Radius — very rounded, friendly */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-2xl: 2rem;
}
```

## Typography

- **Display**: Synonym (Fontshare) or Nunito — weights 600, 700
- **Body**: Ranade (Fontshare) or DM Sans — weights 400, 500
- **Scale ratio**: 1.250 (Major Third)
- **Tracking**: Display at -0.02em, slightly tighter than default

## Motion Personality

- Duration: 0.5–0.8s — gentle, natural
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — soft ease-out
- Stagger: 0.12s between items
- Preferred effects: fade up with gentle bounce, no blur
- Intensity: subtle to moderate

## Signature Patterns

- Warm cream/beige backgrounds (never stark white)
- Organic blob shapes in muted tones as background accents
- Rounded everything — buttons as pills, generous card radius
- Illustrations in cohesive style (Storyset reference)
- Generous whitespace — let content breathe
- No tech effects (no grids, no noise, no glass)
