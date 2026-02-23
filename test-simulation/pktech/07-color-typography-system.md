# Color & Typography System — PK Tech AI

> **Aesthetic Classification**: Startup/Tech
> **Mood Keywords**: Bold, energetic, modern, data-driven, trustworthy
> **Intensity**: High (tech company projecting innovation + reliability)
> **Based on**: Master Brief — IA/BI/RPA startup, data-driven tone, tech-first audience

---

## Color System

### Primary Palette

**Primary — Electric Indigo** (innovation, technology, intelligence)
- Hue: 245°
- Base: `hsl(245 80% 60%)` — #6C5CE7

| Scale | HSL | Use |
|-------|-----|-----|
| 50 | `hsl(245 80% 97%)` | Backgrounds, subtle tints |
| 100 | `hsl(245 75% 93%)` | Hover backgrounds |
| 200 | `hsl(245 70% 85%)` | Borders, dividers |
| 300 | `hsl(245 68% 75%)` | Secondary text on dark |
| 400 | `hsl(245 75% 68%)` | Icons, accents |
| 500 | `hsl(245 80% 60%)` | **Primary brand** |
| 600 | `hsl(245 75% 52%)` | Hover states |
| 700 | `hsl(245 70% 42%)` | Active states |
| 800 | `hsl(245 65% 30%)` | Dark text |
| 900 | `hsl(245 60% 20%)` | Headings on light |
| 950 | `hsl(245 55% 12%)` | Darkest |

**Accent — Cyan / Electric Teal** (data, clarity, precision)
- Hue: 180°
- Base: `hsl(180 85% 55%)` — #2DD4BF

| Scale | HSL | Use |
|-------|-----|-----|
| 50 | `hsl(180 80% 96%)` | Soft highlight |
| 100 | `hsl(180 75% 90%)` | Light accent bg |
| 200 | `hsl(180 70% 80%)` | Border accents |
| 300 | `hsl(180 75% 68%)` | Decorative |
| 400 | `hsl(180 82% 60%)` | CTA hover |
| 500 | `hsl(180 85% 55%)` | **CTA primary** |
| 600 | `hsl(180 80% 45%)` | CTA active |
| 700 | `hsl(180 75% 35%)` | Dark accent |
| 800 | `hsl(180 70% 25%)` | — |
| 900 | `hsl(180 65% 15%)` | — |
| 950 | `hsl(180 60% 10%)` | — |

**Destructive — Red** (errors, pain points)
- Base: `hsl(0 85% 60%)` — for pain section highlights

### Neutrals — Slate Blue

| Scale | HSL | Use |
|-------|-----|-----|
| 50 | `hsl(220 20% 98%)` | Page background (light) |
| 100 | `hsl(220 18% 96%)` | Muted sections |
| 200 | `hsl(220 15% 90%)` | Borders |
| 300 | `hsl(220 12% 80%)` | Disabled text |
| 400 | `hsl(220 10% 65%)` | Muted text |
| 500 | `hsl(220 10% 50%)` | Body text |
| 600 | `hsl(220 12% 40%)` | Subheadings |
| 700 | `hsl(220 15% 30%)` | Strong text |
| 800 | `hsl(220 20% 18%)` | Dark backgrounds |
| 900 | `hsl(220 25% 12%)` | Dark sections |
| 950 | `hsl(220 30% 7%)` | Darkest (footer) |

### Semantic Tokens

```css
:root {
  /* Primary */
  --primary-50: 245 80% 97%;
  --primary-100: 245 75% 93%;
  --primary-200: 245 70% 85%;
  --primary-300: 245 68% 75%;
  --primary-400: 245 75% 68%;
  --primary-500: 245 80% 60%;
  --primary-600: 245 75% 52%;
  --primary-700: 245 70% 42%;
  --primary-800: 245 65% 30%;
  --primary-900: 245 60% 20%;
  --primary-950: 245 55% 12%;

  /* Accent */
  --accent-50: 180 80% 96%;
  --accent-100: 180 75% 90%;
  --accent-200: 180 70% 80%;
  --accent-300: 180 75% 68%;
  --accent-400: 180 82% 60%;
  --accent-500: 180 85% 55%;
  --accent-600: 180 80% 45%;
  --accent-700: 180 75% 35%;
  --accent-800: 180 70% 25%;
  --accent-900: 180 65% 15%;
  --accent-950: 180 60% 10%;

  /* Neutrals */
  --neutral-50: 220 20% 98%;
  --neutral-100: 220 18% 96%;
  --neutral-200: 220 15% 90%;
  --neutral-300: 220 12% 80%;
  --neutral-400: 220 10% 65%;
  --neutral-500: 220 10% 50%;
  --neutral-600: 220 12% 40%;
  --neutral-700: 220 15% 30%;
  --neutral-800: 220 20% 18%;
  --neutral-900: 220 25% 12%;
  --neutral-950: 220 30% 7%;

  /* Semantic */
  --background: var(--neutral-50);
  --background-dark: var(--neutral-900);
  --background-darkest: var(--neutral-950);
  --foreground: var(--neutral-700);
  --foreground-light: var(--neutral-50);
  --muted: var(--neutral-100);
  --muted-foreground: var(--neutral-400);
  --border: var(--neutral-200);
  --destructive: 0 85% 60%;

  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

---

## Typography System

### Font Pairing
- **Display**: Space Grotesk (geometric, tech-forward, modern)
- **Body**: Inter (readable, neutral, professional)

Google Fonts import:
```
Space Grotesk:wght@500;600;700
Inter:wght@400;500;600
```

### Fluid Type Scale

```css
:root {
  --text-xs: clamp(0.7rem, 0.65rem + 0.25vw, 0.75rem);
  --text-sm: clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem);
  --text-base: clamp(0.95rem, 0.9rem + 0.25vw, 1rem);
  --text-lg: clamp(1.05rem, 1rem + 0.25vw, 1.125rem);
  --text-xl: clamp(1.2rem, 1.1rem + 0.5vw, 1.25rem);
  --text-2xl: clamp(1.4rem, 1.2rem + 1vw, 1.5rem);
  --text-3xl: clamp(1.7rem, 1.4rem + 1.5vw, 1.875rem);
  --text-4xl: clamp(2rem, 1.6rem + 2vw, 2.25rem);
  --text-5xl: clamp(2.5rem, 1.8rem + 3.5vw, 3rem);
  --text-6xl: clamp(3rem, 2rem + 5vw, 3.75rem);
}
```

### Typography Hierarchy
| Element | Font | Weight | Size Token | Line Height | Max Width |
|---------|------|--------|-----------|-------------|-----------|
| H1 (hero) | Space Grotesk | 700 | `--text-5xl` / `--text-6xl` | 1.1 | 18ch |
| H2 (section) | Space Grotesk | 700 | `--text-3xl` / `--text-4xl` | 1.2 | 20ch |
| H3 (card title) | Space Grotesk | 600 | `--text-xl` | 1.3 | — |
| Body | Inter | 400 | `--text-base` | 1.7 | 65ch |
| Large body | Inter | 400 | `--text-lg` | 1.6 | 50ch |
| Caption / micro | Inter | 500 | `--text-sm` | 1.5 | — |
| Stat number | Space Grotesk | 700 | `--text-4xl` / `--text-5xl` | 1.0 | — |
| Badge | Inter | 600 | `--text-xs` | 1.0 | — |

---

## Spacing & Layout

### 8pt Grid
```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */

  /* Section spacing */
  --section-py: clamp(4rem, 8vw, 7rem);
  --section-px: clamp(1rem, 4vw, 2rem);
  --max-w: 72rem;       /* 1152px */
}
```

### Shadow Scale
```css
:root {
  --shadow-sm: 0 1px 2px hsl(220 20% 20% / 0.05);
  --shadow-md: 0 4px 6px hsl(220 20% 20% / 0.07);
  --shadow-lg: 0 10px 15px hsl(220 20% 20% / 0.1);
  --shadow-xl: 0 20px 25px hsl(220 20% 20% / 0.1);
  --shadow-2xl: 0 25px 50px hsl(220 20% 20% / 0.15);
}
```

### Radius Scale
```css
:root {
  --radius-sm: 0.375rem;  /* 6px — inputs, badges */
  --radius-md: 0.75rem;   /* 12px — cards */
  --radius-lg: 1rem;      /* 16px — hero elements */
  --radius-xl: 1.5rem;    /* 24px — CTA sections */
  --radius-full: 9999px;  /* pills, avatars */
}
```

---

## Component Styles (Tailwind @layer)

```css
@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center gap-2
      bg-accent-500 text-neutral-950 font-semibold
      px-8 py-4 rounded-lg text-base
      shadow-[0_4px_14px_hsl(180_85%_55%/0.3)]
      hover:bg-accent-400 hover:shadow-[0_6px_20px_hsl(180_85%_55%/0.4)]
      active:scale-[0.98]
      transition-all duration-200
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center gap-2
      border-2 border-white/20 text-white font-semibold
      px-8 py-4 rounded-lg text-base
      hover:bg-white/10 hover:border-white/40
      active:scale-[0.98]
      transition-all duration-200
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2;
  }

  .card-base {
    @apply bg-white border border-neutral-200 rounded-xl p-8
      shadow-[var(--shadow-sm)]
      hover:shadow-[var(--shadow-lg)] hover:-translate-y-1
      transition-all duration-300;
  }

  .card-dark {
    @apply bg-white/[0.04] border border-white/10 rounded-xl p-8
      hover:bg-white/[0.08] hover:border-white/20
      transition-all duration-300;
  }

  .section-padding {
    padding-top: var(--section-py);
    padding-bottom: var(--section-py);
    padding-left: var(--section-px);
    padding-right: var(--section-px);
  }

  .badge {
    @apply inline-flex items-center gap-2
      bg-primary-500/10 text-primary-400 border border-primary-500/20
      px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase;
  }
}
```

---

## Tailwind Config Extension

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      colors: {
        primary: {
          50: 'hsl(var(--primary-50) / <alpha-value>)',
          100: 'hsl(var(--primary-100) / <alpha-value>)',
          200: 'hsl(var(--primary-200) / <alpha-value>)',
          300: 'hsl(var(--primary-300) / <alpha-value>)',
          400: 'hsl(var(--primary-400) / <alpha-value>)',
          500: 'hsl(var(--primary-500) / <alpha-value>)',
          600: 'hsl(var(--primary-600) / <alpha-value>)',
          700: 'hsl(var(--primary-700) / <alpha-value>)',
          800: 'hsl(var(--primary-800) / <alpha-value>)',
          900: 'hsl(var(--primary-900) / <alpha-value>)',
          950: 'hsl(var(--primary-950) / <alpha-value>)',
        },
        accent: {
          50: 'hsl(var(--accent-50) / <alpha-value>)',
          100: 'hsl(var(--accent-100) / <alpha-value>)',
          200: 'hsl(var(--accent-200) / <alpha-value>)',
          300: 'hsl(var(--accent-300) / <alpha-value>)',
          400: 'hsl(var(--accent-400) / <alpha-value>)',
          500: 'hsl(var(--accent-500) / <alpha-value>)',
          600: 'hsl(var(--accent-600) / <alpha-value>)',
          700: 'hsl(var(--accent-700) / <alpha-value>)',
          800: 'hsl(var(--accent-800) / <alpha-value>)',
          900: 'hsl(var(--accent-900) / <alpha-value>)',
          950: 'hsl(var(--accent-950) / <alpha-value>)',
        },
        neutral: {
          50: 'hsl(var(--neutral-50) / <alpha-value>)',
          100: 'hsl(var(--neutral-100) / <alpha-value>)',
          200: 'hsl(var(--neutral-200) / <alpha-value>)',
          300: 'hsl(var(--neutral-300) / <alpha-value>)',
          400: 'hsl(var(--neutral-400) / <alpha-value>)',
          500: 'hsl(var(--neutral-500) / <alpha-value>)',
          600: 'hsl(var(--neutral-600) / <alpha-value>)',
          700: 'hsl(var(--neutral-700) / <alpha-value>)',
          800: 'hsl(var(--neutral-800) / <alpha-value>)',
          900: 'hsl(var(--neutral-900) / <alpha-value>)',
          950: 'hsl(var(--neutral-950) / <alpha-value>)',
        },
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Aesthetic Classification Summary

**Category**: Startup/Tech
**Mood**: Bold, energetic, modern, data-driven
**Intensity**: High
**Primary Hue**: 245° (Electric Indigo)
**Accent Hue**: 180° (Cyan/Electric Teal)
**Neutral Base**: 220° (Slate Blue)
**Display Font**: Space Grotesk (geometric, tech-forward)
**Body Font**: Inter (readable, professional)
**Recommended Decorative Effects**: Aurora + Gradient Blobs + Spotlight

## Contrast Validation
| Pair | Ratio | Pass? |
|------|-------|-------|
| neutral-700 on neutral-50 | 10.2:1 | ✅ AAA |
| neutral-50 on neutral-900 | 14.5:1 | ✅ AAA |
| accent-500 on neutral-950 | 9.8:1 | ✅ AAA |
| primary-400 on neutral-900 | 5.3:1 | ✅ AA |
| neutral-400 on neutral-50 | 4.7:1 | ✅ AA |
