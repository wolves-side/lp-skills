# Color Scales

Generate complete color scales (50–950) using tonal logic from Material Design and Radix Colors.

## Core Rules

1. **Never use pure gray.** All neutrals carry a subtle brand hue (2-8% saturation).
   - ❌ `hsl(0, 0%, 50%)` → ✅ `hsl(220, 5%, 50%)`
2. **Scales are functional, not decorative.** Each step has a purpose:
   - 50: Background tint
   - 100: Hover background
   - 200: Active background, subtle border
   - 300: Border, disabled text
   - 400: Placeholder text
   - 500: Icon default
   - 600: Body text on light
   - 700: Heading text on light
   - 800: High-emphasis text
   - 900: Near-black, dark backgrounds
   - 950: True dark background
3. **Contrast pairs must be defined**, not assumed:
   - Light mode: 700/800 text on 50/100 background (≥4.5:1)
   - Dark mode: 100/200 text on 900/950 background (≥4.5:1)

## Generation Method

### Step 1: Define the base hue

From the brand's primary color, extract the HSL hue. This is the anchor.

### Step 2: Build the primary scale

Start from the base hue. Vary ONLY lightness and saturation:

```css
/* Example: Blue primary (hue: 220) */
--primary-50:  220 100% 97%;   /* Almost white with blue tint */
--primary-100: 220  95% 93%;
--primary-200: 220  90% 85%;
--primary-300: 220  85% 74%;
--primary-400: 220  80% 63%;
--primary-500: 220  75% 50%;   /* Base — this is "the" brand color */
--primary-600: 220  70% 42%;
--primary-700: 220  65% 35%;
--primary-800: 220  60% 28%;
--primary-900: 220  55% 18%;
--primary-950: 220  50% 10%;
```

**Key insight from Radix:** Saturation decreases slightly as you go darker. This prevents neon artifacts in dark shades.

### Step 3: Build the neutral scale

Same hue as primary, but drastically reduced saturation (3-8%):

```css
/* Neutral with blue hue (h: 220, s: 3-8%) */
--neutral-50:  220 8% 98%;
--neutral-100: 220 7% 95%;
--neutral-200: 220 6% 90%;
--neutral-300: 220 6% 82%;
--neutral-400: 220 5% 64%;
--neutral-500: 220 4% 46%;
--neutral-600: 220 5% 34%;
--neutral-700: 220 5% 25%;
--neutral-800: 220 6% 15%;
--neutral-900: 220 7% 9%;
--neutral-950: 220 8% 4%;
```

### Step 4: Build accent and secondary scales

- **Accent**: Minimum 30° hue rotation from primary, or significant lightness contrast
- **Secondary**: Analogous hue (±15-30° from primary) OR complementary (±150-180°)

### Step 5: Map to semantic tokens

```css
:root {
  /* Semantic mappings — light mode */
  --background:            var(--neutral-50);
  --foreground:            var(--neutral-900);
  --background-dark:       var(--neutral-950);
  --foreground-light:      var(--neutral-100);

  --primary:               var(--primary-500);
  --primary-foreground:    var(--primary-50);
  --secondary:             var(--secondary-100);
  --secondary-foreground:  var(--secondary-900);
  --accent:                var(--accent-500);
  --accent-foreground:     var(--accent-50);
  --muted:                 var(--neutral-100);
  --muted-foreground:      var(--neutral-500);
  --destructive:           0 84% 60%;
  --destructive-foreground: 0 0% 98%;

  --border:                var(--neutral-200);
  --input:                 var(--neutral-200);
  --ring:                  var(--primary-400);
  --card:                  var(--neutral-50);
  --card-foreground:       var(--neutral-900);
}
```

## Dark Section Strategy

For dark sections (hero, proof, CTA), don't invert — use the dark end of the neutral scale:

```css
/* Dark section pattern */
.section-dark {
  background: hsl(var(--neutral-950));
  color: hsl(var(--neutral-100));
}
.section-dark .text-muted {
  color: hsl(var(--neutral-400));
}
.section-dark .border {
  border-color: hsl(var(--neutral-800));
}
```

## Contrast Validation

For every pairing, calculate: `(L1 + 0.05) / (L2 + 0.05)` where L1 > L2.

| Pairing | Minimum Ratio | Use Case |
|---------|--------------|----------|
| Body text / background | 4.5:1 | WCAG AA normal text |
| Heading / background | 3:1 | WCAG AA large text |
| Muted text / background | 3:1 | Captions, labels |
| Button text / button bg | 4.5:1 | CTA readability |
| Link text / background | 4.5:1 | Inline links |

## Reference Approach: Stripe-style Gradient Usage

Stripe uses gradients as **hierarchy tools**, not decoration:
- Hero gradient: primary-400 → primary-600 (draws attention)
- Section gradient: neutral-50 → neutral-100 (creates depth without distraction)
- Card gradient: subtle, 2-3° hue shift within the same scale step

Key: the gradient isn't "pretty" — it creates visual separation and directs the eye.
