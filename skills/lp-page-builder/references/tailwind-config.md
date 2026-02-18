# Tailwind Config

Maps the Design System output (Phase 2) to `tailwind.config.ts`.

---

## tailwind.config.ts — Template

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px', // Max content width
      },
    },
    extend: {
      // ── COLORS ──────────────────────────────────
      // Map from Design System color palette
      colors: {
        // Shadcn UI semantic colors (HSL values)
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
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      // ── TYPOGRAPHY ──────────────────────────────
      // Map from Design System font selections
      fontFamily: {
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },

      // ── BORDER RADIUS ───────────────────────────
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // ── ANIMATIONS ──────────────────────────────
      // Extended animations for decorative effects
      keyframes: {
        'aurora': {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(3deg) scale(1.05)' },
          '50%': { transform: 'rotate(-2deg) scale(1.02)' },
          '75%': { transform: 'rotate(1deg) scale(0.98)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'aurora': 'aurora 15s ease infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },

      // ── SPACING ─────────────────────────────────
      // Section padding rhythm
      spacing: {
        'section': '5rem',          // py-section = 80px
        'section-md': '7rem',       // py-section-md = 112px
        'section-lg': '8rem',       // py-section-lg = 128px
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

---

## How to Map Design System Tokens

### Colors

Design System outputs a palette with semantic names. Map them to Shadcn CSS variables:

```css
/* In app/globals.css :root */
--background: 210 40% 98%;           /* ds.colors.background */
--foreground: 222 47% 11%;           /* ds.colors.text.primary */
--background-dark: 222 47% 11%;     /* ds.colors.surface.dark */
--foreground-light: 210 40% 98%;    /* ds.colors.text.inverse */
--primary: 221 83% 53%;             /* ds.colors.primary */
--primary-foreground: 210 40% 98%;  /* ds.colors.primary.contrast */
--secondary: 210 40% 96%;           /* ds.colors.surface.light */
--secondary-foreground: 222 47% 11%;/* ds.colors.text.primary */
--accent: 262 83% 58%;              /* ds.colors.accent */
--accent-foreground: 210 40% 98%;   /* ds.colors.accent.contrast */
--muted: 210 40% 96%;               /* ds.colors.surface.muted */
--muted-foreground: 215 16% 47%;    /* ds.colors.text.muted */
--destructive: 0 84% 60%;           /* ds.colors.error */
```

> HSL format WITHOUT `hsl()` wrapper — Tailwind wraps them with opacity support.

### Typography

Design System specifies font families → use in `lib/fonts.ts`:

```typescript
// Example: if DS specifies "Space Grotesk" display + "DM Sans" body
import { Space_Grotesk, DM_Sans } from 'next/font/google';

export const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const fontBody = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
```

### Animations

Design System outputs animation characteristics → map to Framer Motion variants in `lib/animations.ts`:

| DS Property | Framer Motion Mapping |
|------------|----------------------|
| `timing.easeOut` | `ease: [0.22, 1, 0.36, 1]` |
| `timing.spring` | `type: 'spring', stiffness: 100, damping: 15` |
| `timing.duration.fast` | `duration: 0.3` |
| `timing.duration.normal` | `duration: 0.6` |
| `timing.duration.slow` | `duration: 1.0` |
| `stagger.delay` | `staggerChildren: 0.1` |
