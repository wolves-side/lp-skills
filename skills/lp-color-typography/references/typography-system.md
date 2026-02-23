# Typography System

Complete typography specification: font selection, modular scale, fluid sizing, and fine-tuning.

## Font Selection

### Priority Sources

1. **Fontshare** (fontshare.com) — Premium free, less overused, professional quality
2. **Google Fonts** — Massive catalog, some overused but reliable

### Curated Pairings by Aesthetic

| Aesthetic | Display (Headings) | Body (Text) | Why |
|-----------|-------------------|-------------|-----|
| **Corporate** | Outfit, Plus Jakarta Sans | Inter, Source Sans 3 | Clean, trustworthy, excellent readability |
| **Startup/Tech** | Cabinet Grotesk (FS), Satoshi (FS) | Inter, General Sans (FS) | Modern geometric, tech-forward without being cold |
| **Creative** | Clash Display (FS), Space Grotesk | Switzer (FS), DM Sans | Bold personality, tight tracking looks intentional |
| **SaaS/Product** | Geist, Inter | Inter, Geist Mono | Functional, developer-friendly, high density |
| **Premium** | Playfair Display, Cormorant | Source Serif 4, Literata | Editorial sophistication, contrast between serif display + body |
| **Health/Wellness** | Nunito, Quicksand | DM Sans, Lato | Rounded letterforms, warmth without childishness |

*(FS) = Fontshare*

### Blacklisted Pairs (avoid unless brand-mandated)

- Montserrat + Open Sans — ubiquitous "free template" feel
- Roboto + Lato — Google default feel
- Poppins + Inter as a pair — overused in SaaS
- Oswald + anything — screams "stock template"
- Raleway in any context — readability issues at body size

## Modular Scale

Use a modular ratio to generate consistent size steps. Recommended ratios:

| Ratio | Name | Feel | Best For |
|-------|------|------|----------|
| 1.200 | Minor Third | Compact, functional | SaaS, data-dense |
| 1.250 | Major Third | Balanced, classic | Corporate, general |
| 1.333 | Perfect Fourth | Dramatic, editorial | Premium, creative |

### Scale Generation

From a base of 16px (1rem) with ratio 1.250:

```
Step -2: 10.24px → 0.64rem  (caption, fine print)
Step -1: 12.80px → 0.80rem  (small, label)
Step  0: 16.00px → 1.00rem  (body — BASE)
Step +1: 20.00px → 1.25rem  (h5, large body)
Step +2: 25.00px → 1.563rem (h4, section subtitle)
Step +3: 31.25px → 1.953rem (h3, card title)
Step +4: 39.06px → 2.441rem (h2, section heading)
Step +5: 48.83px → 3.052rem (h1, hero heading)
Step +6: 61.04px → 3.815rem (display, hero primary — desktop only)
```

## Fluid Typography with `clamp()`

**Critical**: Never use fixed `px` or `rem` for headings. Use `clamp()` for smooth scaling:

```css
/* Formula: clamp(min, preferred, max) */
/* preferred uses viewport width: min + (max - min) * ((100vw - minViewport) / (maxViewport - minViewport)) */

:root {
  --text-xs:      clamp(0.625rem, 0.6rem + 0.1vw, 0.75rem);
  --text-sm:      clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);
  --text-base:    clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem);
  --text-lg:      clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);
  --text-xl:      clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);
  --text-2xl:     clamp(1.5rem, 1.2rem + 0.8vw, 2rem);
  --text-3xl:     clamp(1.875rem, 1.4rem + 1.2vw, 2.5rem);
  --text-4xl:     clamp(2.25rem, 1.6rem + 1.8vw, 3.25rem);
  --text-5xl:     clamp(2.75rem, 1.8rem + 2.5vw, 4rem);
  --text-display: clamp(3rem, 2rem + 3vw, 5rem);
}
```

### Why `clamp()` Matters

Fixed sizes create breakpoint jumps:
```
❌ h1 { font-size: 48px; }  /* mobile: too big */
   @media (max-width: 768px) { h1 { font-size: 32px; } }  /* jarring jump at 768px */

✅ h1 { font-size: clamp(2rem, 1.5rem + 2vw, 3.5rem); }  /* smooth scaling always */
```

## Line Height Rules

| Context | Line Height | Why |
|---------|------------|-----|
| Display / Hero H1 | 1.05 – 1.15 | Tight = impactful, headlines don't need breathing room |
| Section Headings H2 | 1.15 – 1.25 | Slightly more relaxed than H1 |
| Card Titles H3/H4 | 1.2 – 1.3 | Readable while remaining compact |
| Body text | 1.5 – 1.7 | Optimal reading comfort per typographic research |
| Small / Caption | 1.4 – 1.5 | Tighter than body but still scannable |

## Letter Spacing (Tracking)

| Context | Tracking | Why |
|---------|---------|-----|
| Display heading (≥48px) | -0.03em to -0.05em | Large text needs negative tracking to look optically correct |
| Section heading (24-48px) | -0.02em to -0.03em | Moderate tightening |
| Body text (14-18px) | 0 (normal) | Don't touch body tracking |
| All caps text | +0.05em to +0.1em | Uppercase REQUIRES extra tracking for readability |
| Small/caption (≤13px) | +0.01em to +0.03em | Small text needs loosening |

## Font Weight Strategy

Don't use all weights. For most projects, you need exactly:

| Weight | Use | Example |
|--------|-----|---------|
| 400 (Regular) | Body text, descriptions | "Our platform helps teams..." |
| 500 (Medium) | UI elements, labels, nav links | "Features", "Pricing" |
| 600 (Semibold) | Subheadings, card titles, emphasis | "Built for Scale" |
| 700 (Bold) | Section headings, important stats | "500,000+ Users" |
| 800 (Extrabold) | Hero headline only | "Transform Your Business" |

**Rule**: Maximum 3 weights per font in production. More = larger file + visual noise.

## CSS Output Template

```css
/* Font imports — adjust URLs based on selected fonts */
:root {
  --font-display: 'Cabinet Grotesk', system-ui, sans-serif;
  --font-body: 'General Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* Type scale — fluid */
:root {
  --text-xs:      clamp(0.625rem, 0.6rem + 0.1vw, 0.75rem);
  --text-sm:      clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);
  --text-base:    clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem);
  --text-lg:      clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);
  --text-xl:      clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);
  --text-2xl:     clamp(1.5rem, 1.2rem + 0.8vw, 2rem);
  --text-3xl:     clamp(1.875rem, 1.4rem + 1.2vw, 2.5rem);
  --text-4xl:     clamp(2.25rem, 1.6rem + 1.8vw, 3.25rem);
  --text-5xl:     clamp(2.75rem, 1.8rem + 2.5vw, 4rem);
  --text-display: clamp(3rem, 2rem + 3vw, 5rem);
}

/* Line heights */
.leading-display { line-height: 1.1; }
.leading-heading { line-height: 1.2; }
.leading-card    { line-height: 1.3; }
.leading-body    { line-height: 1.6; }
.leading-caption { line-height: 1.4; }

/* Letter spacing */
.tracking-display { letter-spacing: -0.04em; }
.tracking-heading { letter-spacing: -0.02em; }
.tracking-body    { letter-spacing: 0; }
.tracking-caps    { letter-spacing: 0.08em; }
.tracking-small   { letter-spacing: 0.02em; }
```
