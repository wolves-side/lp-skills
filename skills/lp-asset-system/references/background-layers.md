# Background Layers

Multi-layer background system for creating depth and visual interest.

## Layer Architecture

Backgrounds are composed of stacked layers. Each layer serves a specific purpose:

```
z-index stacking (bottom to top):
┌─────────────────────────────────┐
│ Content (z-10+)                 │  ← Always on top
├─────────────────────────────────┤
│ Noise texture (z-1, opacity 2-5%)│  ← Subtle grain
├─────────────────────────────────┤
│ Gradient / Aurora (z-0)         │  ← Ambient color
├─────────────────────────────────┤
│ Pattern (grid/dots) (z-0)       │  ← Structure/texture
├─────────────────────────────────┤
│ Base color (z-0)                │  ← Foundation
└─────────────────────────────────┘
```

**Rule: maximum 3 layers per section.** More creates visual mud.

## Section Background Recipes

### Hero (Dark) — "Statement + Depth"

```tsx
<section className="relative min-h-screen bg-[hsl(var(--background-dark))] overflow-hidden">
  {/* Layer 1: Gradient orbs */}
  <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
    style={{ background: 'radial-gradient(circle, hsl(var(--primary-400)), transparent 70%)' }}
  />
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
    style={{ background: 'radial-gradient(circle, hsl(var(--accent)), transparent 70%)' }}
  />

  {/* Layer 2: Dot grid (fading from center) */}
  <div className="absolute inset-0 opacity-[0.07]"
    style={{
      backgroundImage: 'radial-gradient(circle, hsl(var(--foreground-light)) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
    }}
  />

  {/* Layer 3: Noise texture */}
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
    <svg className="w-full h-full"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noise)"/></svg>
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6">{/* hero content */}</div>
</section>
```

### Hero (Light) — "Clean + Gradient"

```tsx
<section className="relative min-h-screen bg-[hsl(var(--background))] overflow-hidden">
  {/* Layer 1: Subtle gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary-50))] via-transparent to-transparent opacity-60" />

  {/* Layer 2: Grid lines (very subtle) */}
  <div className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: '48px 48px',
      maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 60%)',
    }}
  />

  <div className="relative z-10 container mx-auto px-6">{/* content */}</div>
</section>
```

### Features / Content — "Alternating Clean"

```tsx
{/* Light section */}
<section className="relative bg-[hsl(var(--background))] py-section lg:py-section-lg">
  <div className="container mx-auto px-6">{/* content */}</div>
</section>

{/* Muted section (alternating) */}
<section className="relative bg-[hsl(var(--muted))] py-section lg:py-section-lg">
  <div className="container mx-auto px-6">{/* content */}</div>
</section>
```

### CTA Section — "Dark + Accent"

```tsx
<section className="relative bg-[hsl(var(--background-dark))] py-section lg:py-section-lg overflow-hidden">
  {/* Single gradient accent */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-15 blur-3xl"
    style={{ background: 'radial-gradient(circle, hsl(var(--primary-400)), transparent 70%)' }}
  />
  <div className="relative z-10 container mx-auto px-6 text-center">
    {/* CTA content */}
  </div>
</section>
```

## Background by Aesthetic

| Aesthetic | Hero Bg | Content Bg | CTA Bg | Effects |
|-----------|---------|-----------|--------|---------|
| **Corporate** | Light + grid lines | White/muted alternating | Dark + subtle gradient | Grid, noise |
| **Startup** | Dark + aurora/orbs | Light + gradient accents | Dark + orb | Aurora, orbs, gradient text |
| **Creative** | Dark + bold gradient | Mixed dark/light | Dark + dramatic gradient | Bold blobs, animated gradients |
| **SaaS** | Light + dots | White/muted, minimal | Dark + dots | Subtle dots only |
| **Premium** | Dark + noise + minimal orb | Dark/light contrast | Dark + hairline glow | Noise, hairline borders |
| **Wellness** | Warm cream + organic blob | Warm cream variations | Warm dark + soft glow | Organic shapes, no sharp patterns |

## Performance Rules

1. Use CSS-only backgrounds when possible (gradients, patterns via `background-image`)
2. SVG noise filter is more performant than image noise
3. Animated blobs: use `transform` only, not `background-position`
4. Mask image for fading: `mask-image` is GPU-composited
5. No background images > 100KB without lazy loading
6. `pointer-events-none` on ALL decorative layers
