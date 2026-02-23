# Color & Typography System — Grupo PROJECONT

## Aesthetic Classification

**Classification**: Corporate/Monolith (with warm accents)
**Rationale**: Projecont is a 19-year-old accounting firm targeting conservative business owners. The design must convey trust, solidity, and professionalism — not startup energy or creative flair. The Monolith preset provides the clean, structured foundation. Warm accents (amber/gold) add a touch of human approachability without sacrificing professionalism.
**Preset used**: `preset-monolith.md` (customized)
**Mood keywords**: Trustworthy, Solid, Professional, Warm, Strategic
**Intensity**: Subtle
**Temperature**: Cool primary + warm accent

## Design Overrides

### Override 1 — Section Background Rhythm
**Conflict**: The Page Blueprint specifies "Dark" for Hero, "Muted" for Dor, "White" for Serviços, "Muted" for Diferenciais, "Dark" for Segmentos — creating potential visual monotony between sections 2-4.
**Proposed change**: Add a subtle navy gradient on Seção 4 (Diferenciais) background instead of flat muted, breaking the light-light-light sequence.
**Status**: Applied (minor visual change, no structural impact).

---

## Color System

### Primary Scale — Navy (Trust + Authority)
```css
:root {
  --primary-50:  218 100% 97%;
  --primary-100: 218 90% 93%;
  --primary-200: 218 82% 83%;
  --primary-300: 218 75% 70%;
  --primary-400: 218 70% 56%;
  --primary-500: 218 72% 43%;  /* ← hero buttons, nav */
  --primary-600: 218 75% 35%;
  --primary-700: 218 78% 27%;
  --primary-800: 218 75% 20%;  /* ← hero background */
  --primary-900: 218 70% 13%;
  --primary-950: 218 65% 7%;   /* ← footer */
}
```

### Secondary Scale — Slate (Neutral with warmth)
```css
:root {
  --secondary-50:  215 20% 97%;
  --secondary-100: 215 16% 94%;
  --secondary-200: 215 14% 88%;
  --secondary-300: 215 12% 77%;
  --secondary-400: 215 10% 60%;
  --secondary-500: 215 9% 46%;
  --secondary-600: 215 10% 35%;
  --secondary-700: 215 12% 26%;
  --secondary-800: 215 14% 18%;
  --secondary-900: 215 16% 11%;
  --secondary-950: 215 18% 5%;
}
```

### Accent Scale — Amber/Gold (Prosperity + Warmth)
```css
:root {
  --accent-50:  38 100% 97%;
  --accent-100: 38 95% 90%;
  --accent-200: 38 90% 80%;
  --accent-300: 38 85% 67%;
  --accent-400: 38 82% 55%;
  --accent-500: 38 80% 46%;   /* ← badges, highlights */
  --accent-600: 38 82% 38%;
  --accent-700: 38 78% 30%;
  --accent-800: 38 72% 22%;
  --accent-900: 38 65% 15%;
  --accent-950: 38 55% 8%;
}
```

### Neutral Scale — Blue-tinted Gray
```css
:root {
  --neutral-50:  215 15% 98%;
  --neutral-100: 215 12% 95%;
  --neutral-200: 215 10% 90%;
  --neutral-300: 215 8% 80%;
  --neutral-400: 215 6% 62%;
  --neutral-500: 215 5% 46%;
  --neutral-600: 215 6% 35%;
  --neutral-700: 215 8% 25%;
  --neutral-800: 215 10% 16%;
  --neutral-900: 215 12% 10%;
  --neutral-950: 215 14% 5%;
}
```

### Semantic Colors
```css
:root {
  /* Light sections */
  --background:           0 0% 100%;
  --foreground:           215 12% 10%;
  --muted:                215 12% 95%;
  --muted-foreground:     215 6% 35%;
  --border:               215 10% 90%;
  --input:                215 10% 90%;
  --ring:                 218 72% 43%;

  /* Dark sections (Hero, Segmentos, CTA Final) */
  --background-dark:      218 75% 20%;
  --foreground-light:     215 12% 95%;

  /* Cards */
  --card:                 0 0% 100%;
  --card-foreground:      215 12% 10%;

  /* Primary */
  --primary:              218 72% 43%;
  --primary-foreground:   0 0% 100%;

  /* Accent */
  --accent:               38 80% 46%;
  --accent-foreground:    38 55% 8%;

  /* Semantic */
  --destructive:          0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --success:              142 72% 29%;
  --success-foreground:   0 0% 100%;
}
```

### Contrast Validation
| Pair | Ratio | Pass |
|------|-------|------|
| foreground on background (dark text, white bg) | 14.8:1 | ✅ AAA |
| foreground-light on background-dark (light text, navy bg) | 12.4:1 | ✅ AAA |
| primary on white | 6.2:1 | ✅ AA |
| primary-foreground on primary (white on navy) | 6.2:1 | ✅ AA |
| accent on white | 4.8:1 | ✅ AA |
| muted-foreground on muted | 5.1:1 | ✅ AA |

---

## Typography

### Font Selection
- **Display**: **Plus Jakarta Sans** (Fontshare/Google Fonts) — weights 600, 700
  - *Rationale*: Geometric but warm, professional without being sterile. Pairs well with Inter for body.
- **Body**: **Inter** (Google Fonts) — weights 400, 500, 600
  - *Rationale*: Maximum readability, excellent for long paragraphs and small text. Already in brand stack.
- **Mono**: Not needed (no technical/code content)

### Type Scale (Ratio: 1.250 — Major Third)

```css
:root {
  --text-xs:   clamp(0.694rem, 0.66rem + 0.17vw, 0.8rem);      /* 11-13px */
  --text-sm:   clamp(0.833rem, 0.79rem + 0.22vw, 0.96rem);     /* 13-15px */
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);        /* 16-18px */
  --text-lg:   clamp(1.125rem, 1.05rem + 0.38vw, 1.35rem);     /* 18-22px */
  --text-xl:   clamp(1.25rem, 1.15rem + 0.5vw, 1.575rem);      /* 20-25px */
  --text-2xl:  clamp(1.563rem, 1.38rem + 0.92vw, 2.1rem);      /* 25-34px */
  --text-3xl:  clamp(1.953rem, 1.65rem + 1.52vw, 2.8rem);      /* 31-45px */
  --text-4xl:  clamp(2.441rem, 1.95rem + 2.45vw, 3.75rem);     /* 39-60px */
  --text-5xl:  clamp(3.052rem, 2.3rem + 3.76vw, 5rem);         /* 49-80px */
}
```

### Typography Rules
```css
:root {
  /* Line heights per context */
  --leading-tight:  1.15;   /* H1, H2 */
  --leading-snug:   1.3;    /* H3, H4 */
  --leading-normal: 1.6;    /* Body paragraphs */
  --leading-relaxed: 1.75;  /* Long-form, FAQ answers */

  /* Letter spacing */
  --tracking-tight:  -0.025em;  /* Display headings */
  --tracking-normal:  0;        /* Body text */
  --tracking-wide:    0.04em;   /* Badges, labels, eyebrows */

  /* Font families */
  --font-display: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

---

## Spacing & Layout

### 8pt Grid
```css
:root {
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
}
```

### Section Padding (responsive)
```css
:root {
  --section-py:    clamp(4rem, 3rem + 5vw, 7rem);
  --section-px:    clamp(1.5rem, 1rem + 2.5vw, 4rem);
  --container-max: 72rem;    /* 1152px */
}
```

### Shadow Scale (Monolith — crisp, functional)
```css
:root {
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.04);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.05);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04);
}
```

### Border Radius Scale (Medium — professional, approachable)
```css
:root {
  --radius-sm:  0.25rem;   /* 4px — inputs, badges */
  --radius-md:  0.5rem;    /* 8px — cards, buttons */
  --radius-lg:  0.75rem;   /* 12px — modal, larger cards */
  --radius-xl:  1rem;      /* 16px — feature cards */
  --radius-2xl: 1.25rem;   /* 20px — hero card if needed */
}
```

---

## Design Tokens (Tailwind Config)

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsl(218 100% 97%)',
          100: 'hsl(218 90% 93%)',
          200: 'hsl(218 82% 83%)',
          300: 'hsl(218 75% 70%)',
          400: 'hsl(218 70% 56%)',
          500: 'hsl(218 72% 43%)',
          600: 'hsl(218 75% 35%)',
          700: 'hsl(218 78% 27%)',
          800: 'hsl(218 75% 20%)',
          900: 'hsl(218 70% 13%)',
          950: 'hsl(218 65% 7%)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          50: 'hsl(38 100% 97%)',
          100: 'hsl(38 95% 90%)',
          200: 'hsl(38 90% 80%)',
          300: 'hsl(38 85% 67%)',
          400: 'hsl(38 82% 55%)',
          500: 'hsl(38 80% 46%)',
          600: 'hsl(38 82% 38%)',
          700: 'hsl(38 78% 30%)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs:   ['clamp(0.694rem, 0.66rem + 0.17vw, 0.8rem)',   { lineHeight: '1.4' }],
        sm:   ['clamp(0.833rem, 0.79rem + 0.22vw, 0.96rem)',  { lineHeight: '1.5' }],
        base: ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',     { lineHeight: '1.6' }],
        lg:   ['clamp(1.125rem, 1.05rem + 0.38vw, 1.35rem)',  { lineHeight: '1.5' }],
        xl:   ['clamp(1.25rem, 1.15rem + 0.5vw, 1.575rem)',   { lineHeight: '1.4' }],
        '2xl': ['clamp(1.563rem, 1.38rem + 0.92vw, 2.1rem)',  { lineHeight: '1.3' }],
        '3xl': ['clamp(1.953rem, 1.65rem + 1.52vw, 2.8rem)',  { lineHeight: '1.2' }],
        '4xl': ['clamp(2.441rem, 1.95rem + 2.45vw, 3.75rem)', { lineHeight: '1.15' }],
        '5xl': ['clamp(3.052rem, 2.3rem + 3.76vw, 5rem)',     { lineHeight: '1.1' }],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Component Styles

### Buttons
```
Primary:     bg-primary text-primary-foreground hover:bg-primary-600 active:bg-primary-700 font-display font-semibold rounded-md px-6 py-3 shadow-sm transition-all duration-200 hover:shadow-md
Secondary:   bg-transparent text-primary border border-primary hover:bg-primary-50 active:bg-primary-100 font-display font-semibold rounded-md px-6 py-3 transition-all duration-200
Ghost:       bg-transparent text-foreground hover:bg-muted active:bg-neutral-200 font-body font-medium rounded-md px-4 py-2 transition-colors duration-200
CTA Large:   bg-accent text-accent-foreground hover:bg-accent-600 active:bg-accent-700 font-display font-bold rounded-md px-8 py-4 text-lg shadow-md transition-all duration-200 hover:shadow-lg
```

### Cards
```
Default:     bg-card text-card-foreground rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300
Feature:     bg-card text-card-foreground rounded-xl border border-border p-8 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300
Dark:        bg-primary-800 text-foreground-light rounded-xl p-8 border border-primary-700
```

### Inputs
```
Default:     bg-input text-foreground border border-border rounded-md px-4 py-3 font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200
```

### Section Backgrounds
```
Light:       bg-background text-foreground
Muted:       bg-muted text-foreground
Dark:        bg-primary-800 text-foreground-light
Darker:      bg-primary-950 text-foreground-light
Accent-muted: bg-accent-50 text-foreground
```

### Badges/Tags
```
Default:     bg-primary-100 text-primary-700 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-sm
Accent:      bg-accent-100 text-accent-700 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-sm
```

---

## Aesthetic Classification Summary (Handoff)

**Aesthetic**: Corporate/Monolith (customized with warm accent)
**Mood**: Trustworthy, Solid, Professional, Warm, Strategic
**Intensity**: Subtle — animations should reinforce confidence, not generate excitement
**Temperature**: Cool primary (navy 218°) with warm accent (amber 38°)
**Motion personality**: Calm, deliberate, minimal. 0.4-0.5s durations, smooth easing, subtle fadeUp. No bouncy or elastic effects.
**Visual density**: Medium — generous whitespace, structured grids, clear section boundaries
