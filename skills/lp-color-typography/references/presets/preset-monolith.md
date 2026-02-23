# Preset: Monolith

Clean, structured, functional. Inspired by Notion, Figma, and enterprise SaaS.

## When to Use
- SaaS/Product or Corporate aesthetic
- Product-led brands, B2B platforms
- Functional, documentation-heavy, feature-focused
- Brands that want clarity and professionalism

## Color Tokens

```css
:root {
  /* Primary — slate blue */
  --primary-50:  210 100% 97%;
  --primary-100: 210 90% 93%;
  --primary-200: 210 85% 85%;
  --primary-300: 210 78% 72%;
  --primary-400: 210 72% 58%;
  --primary-500: 210 68% 46%;
  --primary-600: 210 70% 38%;
  --primary-700: 210 72% 30%;
  --primary-800: 210 68% 22%;
  --primary-900: 210 60% 15%;
  --primary-950: 210 55% 8%;

  /* Neutral — blue-tinted gray */
  --neutral-50:  210 10% 98%;
  --neutral-100: 210 8% 95%;
  --neutral-200: 210 7% 90%;
  --neutral-300: 210 6% 80%;
  --neutral-400: 210 5% 60%;
  --neutral-500: 210 4% 46%;
  --neutral-600: 210 5% 35%;
  --neutral-700: 210 6% 25%;
  --neutral-800: 210 8% 15%;
  --neutral-900: 210 10% 9%;
  --neutral-950: 210 12% 4%;

  /* Semantic — clean light mode */
  --background:          0 0% 100%;
  --foreground:          210 10% 9%;
  --background-dark:     210 12% 4%;
  --foreground-light:    210 8% 95%;
  --primary:             210 68% 46%;
  --primary-foreground:  0 0% 100%;
  --secondary:           210 7% 90%;
  --secondary-foreground:210 10% 9%;
  --accent:              210 68% 46%;
  --accent-foreground:   0 0% 100%;
  --muted:               210 8% 95%;
  --muted-foreground:    210 5% 60%;
  --border:              210 7% 90%;
  --input:               210 7% 90%;
  --ring:                210 68% 46%;
  --card:                0 0% 100%;
  --card-foreground:     210 10% 9%;

  /* Shadows — crisp, functional */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.04);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04);

  /* Radius — medium */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.25rem;
}
```

## Typography

- **Display**: Plus Jakarta Sans or Outfit — weights 600, 700
- **Body**: Inter or Source Sans 3 — weights 400, 500
- **Scale ratio**: 1.200 (Minor Third) — compact, functional
- **Tracking**: Display at -0.02em

## Motion Personality

- Duration: 0.4–0.5s — quick and clean
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` — smooth deceleration
- Stagger: 0.08s between items
- Preferred effects: fade up (subtle, 20px offset max)
- Intensity: subtle

## Signature Patterns

- Clean white backgrounds with subtle gray section alternation
- Dot grid patterns at very low opacity (0.05–0.08)
- Border-defined cards (no shadow or minimal shadow)
- Monochromatic palette, accent color only on CTAs and links
- No decorative blobs or gradients — content speaks
