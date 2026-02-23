# Preset: Aurora

Gradient-forward, tech-first. Inspired by Stripe, Linear, and modern SaaS.

## When to Use
- Startup/Tech aesthetic classification
- Gradient-forward brands
- Innovation, fintech, developer tools
- Brands that want energy and modernity

## Color Tokens

```css
:root {
  /* Primary — vibrant blue */
  --primary-50:  217 100% 97%;
  --primary-100: 214 95% 93%;
  --primary-200: 213 92% 84%;
  --primary-300: 212 90% 72%;
  --primary-400: 213 88% 61%;
  --primary-500: 217 85% 50%;
  --primary-600: 221 78% 43%;
  --primary-700: 224 72% 36%;
  --primary-800: 226 65% 28%;
  --primary-900: 228 58% 20%;
  --primary-950: 230 52% 12%;

  /* Neutral — cool tinted */
  --neutral-50:  220 7% 97%;
  --neutral-100: 218 6% 94%;
  --neutral-200: 216 6% 88%;
  --neutral-300: 214 5% 76%;
  --neutral-400: 212 5% 58%;
  --neutral-500: 210 4% 44%;
  --neutral-600: 212 5% 34%;
  --neutral-700: 214 6% 24%;
  --neutral-800: 216 7% 14%;
  --neutral-900: 218 9% 8%;
  --neutral-950: 220 12% 4%;

  /* Semantic — light mode base */
  --background:          220 7% 97%;
  --foreground:          218 9% 8%;
  --background-dark:     220 12% 4%;
  --foreground-light:    218 6% 94%;
  --primary:             217 85% 50%;
  --primary-foreground:  0 0% 100%;
  --secondary:           216 6% 88%;
  --secondary-foreground:218 9% 8%;
  --accent:              280 68% 55%;
  --accent-foreground:   0 0% 100%;
  --muted:               216 6% 88%;
  --muted-foreground:    212 5% 58%;
  --border:              216 6% 88%;
  --input:               216 6% 88%;
  --ring:                217 85% 50%;
  --card:                0 0% 100%;
  --card-foreground:     218 9% 8%;

  /* Shadows — colored accent */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 2px 4px 0 rgb(0 0 0 / 0.06), 0 0 0 1px rgb(0 0 0 / 0.03);
  --shadow-md: 0 4px 12px 0 rgb(0 0 0 / 0.08);
  --shadow-lg: 0 8px 24px 0 rgb(0 0 0 / 0.1), 0 0 0 1px rgb(0 0 0 / 0.03);
  --shadow-xl: 0 16px 40px 0 rgb(0 0 0 / 0.12);
  --shadow-primary: 0 8px 24px 0 hsl(217 85% 50% / 0.2);

  /* Radius — rounded */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
}
```

## Typography

- **Display**: Cabinet Grotesk (Fontshare) or Outfit — weights 600, 800
- **Body**: Inter or DM Sans — weights 400, 500
- **Scale ratio**: 1.250 (Major Third) — balanced
- **Tracking**: Display at -0.03em

## Motion Personality

- Duration: 0.4–0.6s
- Easing: `type: 'spring', stiffness: 100, damping: 15` — bouncy, energetic
- Stagger: 0.1s between items
- Preferred effects: fade up, scale up, spring
- Intensity: moderate to dramatic

## Signature Patterns

- Gradient mesh backgrounds (3-4 colors, animated rotation)
- Aurora light effects in hero sections
- Colored shadows on hover (`shadow-primary`)
- Gradient text on hero headlines
- Card hover with lift + colored shadow

### Gradient Recipes

```css
/* Hero gradient mesh */
.gradient-aurora {
  background: linear-gradient(135deg,
    hsl(217 85% 50% / 0.15) 0%,
    hsl(280 68% 55% / 0.1) 50%,
    hsl(170 75% 45% / 0.08) 100%
  );
}

/* Gradient text */
.text-gradient {
  background: linear-gradient(135deg, hsl(var(--primary-400)), hsl(var(--accent)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```
