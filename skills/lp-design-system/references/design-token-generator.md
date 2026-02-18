---
name: design-token-generator
description: Generates tailwind.config.ts extensions and CSS variables for the React/Next.js stack from brand inputs.
---

# Design Token Generator

Generate design tokens as **Tailwind config extensions** + **Shadcn CSS variables**.

## Output Format

### 1. CSS Variables (→ `app/globals.css`)

```css
:root {
  /* Shadcn semantic colors — HSL values WITHOUT hsl() wrapper */
  --background: [H] [S]% [L]%;
  --foreground: [H] [S]% [L]%;
  --background-dark: [H] [S]% [L]%;
  --foreground-light: [H] [S]% [L]%;

  --primary: [H] [S]% [L]%;
  --primary-foreground: [H] [S]% [L]%;
  --secondary: [H] [S]% [L]%;
  --secondary-foreground: [H] [S]% [L]%;
  --accent: [H] [S]% [L]%;
  --accent-foreground: [H] [S]% [L]%;
  --muted: [H] [S]% [L]%;
  --muted-foreground: [H] [S]% [L]%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;

  --border: [H] [S]% [L]%;
  --input: [H] [S]% [L]%;
  --ring: [H] [S]% [L]%;
  --radius: 0.5rem;
}
```

### 2. Tailwind Config (→ `tailwind.config.ts` extend)

```typescript
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
    body: ['var(--font-body)', 'system-ui', 'sans-serif'],
    display: ['var(--font-display)', 'system-ui', 'sans-serif'],
  },
  borderRadius: {
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)',
  },
  spacing: {
    section: '5rem',
    'section-md': '7rem',
    'section-lg': '8rem',
  },
}
```

## Rules

1. **HSL format without wrapper** — Tailwind adds opacity support via `hsl(var(--color) / <alpha>)`.
2. **Semantic naming** — Use Shadcn's semantic names, not arbitrary utility names.
3. **Contrast ratios** — Primary/foreground pairs must meet WCAG AA (4.5:1 for text).
4. **Radius consistency** — Use the `--radius` variable. Shadcn components derive `md` and `sm` from it.
5. **Dark sections** — Use `background-dark` / `foreground-light` for dark sections (hero, proof, CTA).
