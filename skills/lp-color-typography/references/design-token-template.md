# Design Token Template

Complete output format for CSS variables and Tailwind config. Fill in the `[PLACEHOLDER]` values.

## 1. CSS Variables → `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ── Color Scales ────────────────────────────── */

    /* Primary */
    --primary-50:  [H] [S]% [L]%;
    --primary-100: [H] [S]% [L]%;
    --primary-200: [H] [S]% [L]%;
    --primary-300: [H] [S]% [L]%;
    --primary-400: [H] [S]% [L]%;
    --primary-500: [H] [S]% [L]%;
    --primary-600: [H] [S]% [L]%;
    --primary-700: [H] [S]% [L]%;
    --primary-800: [H] [S]% [L]%;
    --primary-900: [H] [S]% [L]%;
    --primary-950: [H] [S]% [L]%;

    /* Neutral (NEVER pure gray — carries brand hue) */
    --neutral-50:  [H] [S]% [L]%;
    --neutral-100: [H] [S]% [L]%;
    --neutral-200: [H] [S]% [L]%;
    --neutral-300: [H] [S]% [L]%;
    --neutral-400: [H] [S]% [L]%;
    --neutral-500: [H] [S]% [L]%;
    --neutral-600: [H] [S]% [L]%;
    --neutral-700: [H] [S]% [L]%;
    --neutral-800: [H] [S]% [L]%;
    --neutral-900: [H] [S]% [L]%;
    --neutral-950: [H] [S]% [L]%;

    /* ── Semantic Tokens (Shadcn-compatible) ──────── */
    --background:           [H] [S]% [L]%;
    --foreground:           [H] [S]% [L]%;
    --background-dark:      [H] [S]% [L]%;
    --foreground-light:     [H] [S]% [L]%;

    --primary:              [H] [S]% [L]%;
    --primary-foreground:   [H] [S]% [L]%;
    --secondary:            [H] [S]% [L]%;
    --secondary-foreground: [H] [S]% [L]%;
    --accent:               [H] [S]% [L]%;
    --accent-foreground:    [H] [S]% [L]%;
    --muted:                [H] [S]% [L]%;
    --muted-foreground:     [H] [S]% [L]%;
    --destructive:          0 84% 60%;
    --destructive-foreground: 0 0% 98%;

    --border:               [H] [S]% [L]%;
    --input:                [H] [S]% [L]%;
    --ring:                 [H] [S]% [L]%;
    --card:                 [H] [S]% [L]%;
    --card-foreground:      [H] [S]% [L]%;

    /* ── Typography ──────────────────────────────── */
    --font-display: '[Display Font]', system-ui, sans-serif;
    --font-body: '[Body Font]', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;

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

    /* ── Spacing ─────────────────────────────────── */
    --space-section:    4rem;
    --space-section-md: 5rem;
    --space-section-lg: 6rem;

    /* ── Shadows ─────────────────────────────────── */
    --shadow-xs: [shadow values];
    --shadow-sm: [shadow values];
    --shadow-md: [shadow values];
    --shadow-lg: [shadow values];
    --shadow-xl: [shadow values];

    /* ── Radius ──────────────────────────────────── */
    --radius-sm:  [value];
    --radius-md:  [value];
    --radius-lg:  [value];
    --radius-xl:  [value];
    --radius-2xl: [value];
    --radius-full: 9999px;
  }
}
```

## 2. Tailwind Config → `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'hsl(var(--background))',
          dark: 'hsl(var(--background-dark))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          light: 'hsl(var(--foreground-light))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
          950: 'hsl(var(--primary-950))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      spacing: {
        section: 'var(--space-section)',
        'section-md': 'var(--space-section-md)',
        'section-lg': 'var(--space-section-lg)',
      },
    },
  },
  plugins: [],
};

export default config;
```
