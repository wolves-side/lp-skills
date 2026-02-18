---
name: component-style-generator
description: Generates Tailwind CSS class patterns and Shadcn UI theme overrides for core components.
---

# Component Style Generator

Generate component styling as **Tailwind class strings** for the React/Next.js stack.

## Output Format

### Button Variants

```typescript
// Tailwind class definitions for Button component
const buttonVariants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-semibold shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.98]',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg px-6 py-3 font-medium border border-border transition-colors',
  ghost: 'hover:bg-accent hover:text-accent-foreground rounded-lg px-6 py-3 transition-colors',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-6 py-3 font-semibold transition-all',
};
```

### Card Variants

```typescript
const cardVariants = {
  default: 'bg-card text-card-foreground rounded-xl p-8 border border-border shadow-sm',
  elevated: 'bg-card text-card-foreground rounded-xl p-8 shadow-lg',
  glass: 'bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10',
  interactive: 'bg-card text-card-foreground rounded-xl p-8 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200',
};
```

### Input Styles

```typescript
const inputStyles = {
  default: 'w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors',
  error: 'border-destructive focus:ring-destructive/50',
  label: 'block text-sm font-medium mb-2',
};
```

### Section Backgrounds

```typescript
const sectionBg = {
  light: 'bg-background text-foreground',
  dark: 'bg-background-dark text-foreground-light',
  muted: 'bg-secondary text-foreground',
  accent: 'bg-primary/5 text-foreground',
};
```

## Adaptation by Aesthetic

| Aesthetic | Radius | Shadow Intensity | Border Style | Hover Effect |
|-----------|--------|-----------------|-------------|-------------|
| Corporate | `rounded-lg` (8px) | Medium (`shadow-md`) | Subtle borders | Lift (`-translate-y-1`) |
| Startup | `rounded-xl` (12px) | Strong (`shadow-lg`) | Minimal | Scale + shadow |
| Creative | `rounded-2xl` (16px) | Dramatic (`shadow-xl`) | Bold accents | Transform + glow |
| SaaS | `rounded-lg` (8px) | Light (`shadow-sm`) | Clean borders | Subtle lift |
| Premium | `rounded-sm` (4px) | Minimal | Fine hairline | Opacity transition |

## Rules

1. **Use only design tokens** — All colors via Tailwind semantic classes (`bg-primary`, not `bg-blue-500`).
2. **Include interaction states** — Every interactive component needs `hover:`, `focus:`, `active:` states.
3. **Touch targets** — All clickable elements min 44x44px (`min-h-[44px]`).
4. **Focus visible** — Use `focus-visible:ring-2 focus-visible:ring-ring` for keyboard navigation.
