---
name: lp-design-system
description: >
  Generate a complete visual identity for a landing page project: Tailwind CSS config
  extensions, Shadcn UI theme overrides, and Framer Motion animation variants.
  Outputs directly usable TypeScript/CSS code for the React/Next.js build stack.
  Part of the Landing Page Pipeline (Phase 2).
---

# LP Design System — Tailwind + Framer Motion

## Purpose

Transform brand inputs (logo, colors, tone, audience) into a **complete design system**
that plugs directly into the Next.js stack. Every output is code — no abstract guidelines.

**Requires**: Brand inputs from Phase 1 (Page Specification)

**Outputs to**: `lp-page-builder` (Phase 3)

## What This Skill Produces

| Output | Format | Used In |
|--------|--------|---------|
| Color palette (semantic) | HSL values → `globals.css` `:root` | Tailwind via CSS variables |
| Typography selections | Font names → `lib/fonts.ts` | `next/font/google` |
| Tailwind config extensions | TypeScript → `tailwind.config.ts` | Component styling |
| Framer Motion variants | TypeScript → `lib/animations.ts` | Animation behavior |
| Aesthetic classification | Category string | Decorative effect selection |
| Component style overrides | Tailwind classes → Shadcn theme | Button, card, input styles |

## Execution Order

### Step 1: Classify the Aesthetic

Based on brand inputs (industry, audience, tone), classify into one of:

| Aesthetic | Characteristics | Example Brands |
|-----------|----------------|----------------|
| **Corporate/Enterprise** | Clean, structured, trustworthy, conservative color | SAP, Salesforce |
| **Startup/Tech** | Modern, bold, energetic, vibrant accent colors | Vercel, Linear |
| **Creative/Agency** | Expressive, artistic, unconventional, rich textures | Buck, Pentagram |
| **SaaS/Product** | Functional, friendly, accessible, product-focused | Notion, Figma |
| **Premium/Luxury** | Elegant, minimal, dark backgrounds, serif fonts | Apple, Rolex |
| **Health/Wellness** | Calming, organic, soft palette, rounded shapes | Headspace, Calm |
| **Finance/Legal** | Authoritative, traditional, serif accents, muted | Goldman Sachs |

**This classification determines**: font pairings, animation speed, decorative effects, color temperature.

See `references/aesthetic-classifier.md` for classification methodology.

### Step 2: Generate Color Palette

Output HSL values (WITHOUT `hsl()` wrapper) for Shadcn CSS variables:

```css
/* Output format: app/globals.css :root */
:root {
  --background: 210 40% 98%;
  --foreground: 222 47% 11%;
  --background-dark: 222 47% 11%;
  --foreground-light: 210 40% 98%;
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222 47% 11%;
  --accent: 262 83% 58%;
  --accent-foreground: 210 40% 98%;
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;
  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 221 83% 53%;
  --radius: 0.5rem;
}
```

See `references/color-palette-generator.md` for generation methodology.

### Step 3: Select Typography

Output `next/font/google` declarations:

```typescript
// Output format: lib/fonts.ts
import { Space_Grotesk, DM_Sans } from 'next/font/google';

export const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const fontBody = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
```

See `references/typography-pairer.md` for font pairing methodology.

### Step 4: Generate Tailwind Config Extensions

Output the `extend` block for `tailwind.config.ts`:

```typescript
// Output format: tailwind.config.ts extend block
extend: {
  fontFamily: {
    body: ['var(--font-body)', 'system-ui', 'sans-serif'],
    display: ['var(--font-display)', 'system-ui', 'sans-serif'],
  },
  // ... all extensions from design tokens
}
```

See `references/design-token-generator.md` for complete token mapping.

### Step 5: Generate Framer Motion Variants

Output animation variants that match the aesthetic:

```typescript
// Output format: lib/animations.ts
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
// ... more variants
```

| Aesthetic | Duration | Easing | Stagger |
|-----------|----------|--------|---------|
| Corporate | 0.5-0.7s | Smooth ease-out | 0.08s |
| Startup | 0.4-0.6s | Bouncy spring | 0.1s |
| Creative | 0.6-1.0s | Dramatic cubic-bezier | 0.12s |
| Premium | 0.8-1.2s | Slow, elegant ease | 0.15s |
| SaaS | 0.4-0.5s | Snappy ease-out | 0.08s |

See `references/animation-library.md` for variant generation.

### Step 6: Generate Component Style Overrides

Output Tailwind class strings for Shadcn component customization:

```typescript
// Output: styling guidelines for page builder
const buttonStyles = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-semibold transition-colors',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg px-6 py-3 font-medium transition-colors',
  ghost: 'hover:bg-accent hover:text-accent-foreground rounded-lg px-6 py-3 transition-colors',
};
```

See `references/component-style-generator.md` for generation patterns.

## Output Format

The Design System delivers ONE consolidated document containing:

1. **Aesthetic Classification** → `"startup/tech"` (string)
2. **Color CSS Variables** → Copy-paste into `globals.css :root`
3. **Font Declarations** → Copy-paste into `lib/fonts.ts`
4. **Tailwind Config Extensions** → Merge into `tailwind.config.ts extend`
5. **Framer Motion Variants** → Copy-paste into `lib/animations.ts`
6. **Component Overrides** → Reference during component building

## Integration

**Input from**: Page Specification (brand section, tone, audience)

**Output to**: `lp-page-builder` → consumes all outputs during Step 3 (Configure Design System)

## References

| Reference | Purpose |
|-----------|---------|
| `references/aesthetic-classifier.md` | Classification methodology |
| `references/color-palette-generator.md` | Palette generation from brand inputs |
| `references/typography-pairer.md` | Font selection and pairing |
| `references/design-token-generator.md` | Tailwind config + CSS variable generation |
| `references/animation-library.md` | Framer Motion variant generation |
| `references/component-style-generator.md` | Shadcn/Tailwind component overrides |
