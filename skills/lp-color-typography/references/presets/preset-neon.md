# Preset: Neon

High energy, dark base + vibrant accents. Inspired by gaming, nightlife, and bold creative brands.

## When to Use
- Creative/Agency aesthetic with high energy
- Gaming, entertainment, events, nightlife
- Brands that want to be loud, bold, and memorable
- Projects where subtlety is not the goal

## Color Tokens

```css
:root {
  /* Primary — electric cyan */
  --primary-50:  185 100% 96%;
  --primary-100: 185 95% 90%;
  --primary-200: 185 90% 78%;
  --primary-300: 185 85% 65%;
  --primary-400: 185 82% 55%;
  --primary-500: 185 80% 45%;
  --primary-600: 185 75% 38%;
  --primary-700: 185 70% 30%;
  --primary-800: 185 65% 22%;
  --primary-900: 185 60% 15%;
  --primary-950: 185 55% 8%;

  /* Neutral — cool dark */
  --neutral-50:  200 8% 96%;
  --neutral-100: 200 7% 90%;
  --neutral-200: 200 6% 82%;
  --neutral-300: 200 5% 68%;
  --neutral-400: 200 4% 50%;
  --neutral-500: 200 4% 38%;
  --neutral-600: 200 5% 28%;
  --neutral-700: 200 7% 18%;
  --neutral-800: 200 10% 10%;
  --neutral-900: 200 14% 6%;
  --neutral-950: 200 18% 3%;

  /* Semantic — dark base */
  --background:          200 14% 6%;
  --foreground:          200 8% 96%;
  --background-dark:     200 18% 3%;
  --foreground-light:    200 7% 90%;
  --primary:             185 80% 45%;
  --primary-foreground:  200 14% 6%;
  --secondary:           200 10% 10%;
  --secondary-foreground:200 8% 96%;
  --accent:              330 85% 55%;
  --accent-foreground:   0 0% 100%;
  --muted:               200 7% 18%;
  --muted-foreground:    200 4% 50%;
  --border:              200 7% 18%;
  --input:               200 10% 10%;
  --ring:                185 80% 45%;
  --card:                200 10% 10%;
  --card-foreground:     200 8% 96%;

  /* Shadows — colored, glowing */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-sm: 0 2px 8px 0 rgb(0 0 0 / 0.35);
  --shadow-md: 0 4px 16px 0 rgb(0 0 0 / 0.4);
  --shadow-lg: 0 8px 32px 0 rgb(0 0 0 / 0.45);
  --shadow-xl: 0 16px 48px 0 rgb(0 0 0 / 0.5);
  /* Glow shadows */
  --shadow-glow-primary: 0 0 20px hsl(185 80% 45% / 0.3), 0 0 60px hsl(185 80% 45% / 0.1);
  --shadow-glow-accent:  0 0 20px hsl(330 85% 55% / 0.3), 0 0 60px hsl(330 85% 55% / 0.1);

  /* Radius — medium */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
}
```

## Typography

- **Display**: Clash Display (Fontshare) or Space Grotesk — weights 600, 700
- **Body**: Switzer (Fontshare) or DM Sans — weights 400, 500
- **Scale ratio**: 1.333 (Perfect Fourth) — bold hierarchy
- **Tracking**: Display at -0.04em (tight), uppercase accents at +0.1em

## Motion Personality

- Duration: 0.6–1.0s for entries, 0.15–0.3s for interactions
- Easing: `cubic-bezier(0.76, 0, 0.24, 1)` — dramatic snap
- Stagger: 0.12s between items
- Preferred effects: scale up with glow, text reveal, blur in
- Intensity: dramatic

## Signature Patterns

- Dark backgrounds with neon accent glows
- Glow shadows on hover (`shadow-glow-primary`)
- Gradient borders animated
- Noise texture at higher opacity (0.04–0.06)
- CTA buttons with glow effect on hover
- Bold gradient text headlines

### Glow Recipes

```css
/* Button glow on hover */
.btn-glow:hover {
  box-shadow: var(--shadow-glow-primary);
  transition: box-shadow 0.3s ease;
}

/* Text glow */
.text-glow {
  text-shadow: 0 0 20px hsl(185 80% 45% / 0.5);
}

/* Border glow */
.border-glow {
  box-shadow: inset 0 0 0 1px hsl(185 80% 45% / 0.3),
              0 0 15px hsl(185 80% 45% / 0.1);
}
```
