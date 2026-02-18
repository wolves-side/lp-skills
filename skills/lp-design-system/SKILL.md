---
name: lp-design-system
description: >
  Generate a complete visual identity for a landing page project: Tailwind CSS config
  extensions, Shadcn UI theme overrides, and Framer Motion animation variants.
  Outputs directly usable TypeScript/CSS code for the React/Next.js build stack.
  Part of the Landing Page Pipeline (Phase 2).
---

<HARD-GATE>
Do NOT generate design tokens without the Copy Document, Page Blueprint, and Brand Brief
all present. A design system built without content context produces visual choices that
conflict with the page's emotional requirements.
</HARD-GATE>


# LP Design System — Tailwind + Framer Motion

## Iron Law

**Visual Serves Message**: Every design decision must reinforce the positioning statement and appeal to the priority ICP persona. Aesthetic preference without strategic alignment is decoration, not design.

## Skill Type

**Rigid** — Both stages (Design System Architect + Aesthetic Differentiator) are mandatory. Every project must produce a unique combination of palette, typography, and animation patterns.



## Checklist

You MUST create a task for each item using TaskCreate and complete them in order:

1. Receive and review Copy Document, Page Blueprint, AND Brand Brief
2. Stage 1 — Analyze visual assets and brand direction from all inputs
3. Stage 1 — Generate color palette with full scale and semantic names
4. Stage 1 — Define typography scale and generate complete Tailwind config extension
5. Stage 2 — Classify aesthetic (Corporate / Startup / Creative / SaaS / Premium)
6. Stage 2 — Generate component styles CSS for Shadcn UI overrides
7. Stage 2 — Define Framer Motion animation variants matching the aesthetic
8. Verify uniqueness: palette, typography, animations must be distinct from any "default" setup
9. Deliver complete Design System

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

## Red Flags — STOP and Follow the Process

| If you think... | Reality is... |
|----------------|---------------|
| "I'll use the brand's hex colors directly in Tailwind" | Brand colors need LP adaptation for contrast, accessibility, CTA hierarchy. |
| "Generic animation patterns work for any project" | The aesthetic classification determines animation style. Corporate ≠ Creative. |
| "Tailwind's default type scale is fine" | Typography must be project-specific. Defaults signal no brand identity. |
| "Two recent projects had similar aesthetics, I'll reuse" | Every project must produce a unique Design System. Reuse is a quality failure. |

**ALL of these mean: STOP. Return to the relevant stage.**

## User Signals You're Off Track

- "The colors don't feel like our brand" → Palette was built without sufficient Brand Brief analysis. Re-run Stage 1.
- "This looks like a template" → Aesthetic Differentiator not applied. Re-run Stage 2 with more variation.

## Integration

**Next required skill**: After Design System is delivered, invoke `lp-page-builder`.
**Requires first**: Copy Document + Page Blueprint + Brand Brief.
**Feeds into**: `lp-page-builder` (Tailwind config, Framer Motion variants, component styles).

## References

| Reference | Purpose |
|-----------|---------|
| `references/aesthetic-classifier.md` | Classification methodology |
| `references/color-palette-generator.md` | Palette generation from brand inputs |
| `references/typography-pairer.md` | Font selection and pairing |
| `references/design-token-generator.md` | Tailwind config + CSS variable generation |
| `references/animation-library.md` | Framer Motion variant generation |
| `references/component-style-generator.md` | Shadcn/Tailwind component overrides |
