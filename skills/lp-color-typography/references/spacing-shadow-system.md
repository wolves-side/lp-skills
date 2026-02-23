# Spacing, Shadow & Radius System

Consistent spatial rhythm using the 8pt grid, plus shadow and radius scales per aesthetic.

## 8pt Grid Spacing Scale

All spacing derives from a base unit of 4px (0.25rem). The primary scale uses 8pt multiples:

```css
:root {
  --space-0:   0;
  --space-px:  1px;
  --space-0.5: 0.125rem;  /* 2px  — hairline gaps */
  --space-1:   0.25rem;   /* 4px  — tight internal */
  --space-1.5: 0.375rem;  /* 6px  */
  --space-2:   0.5rem;    /* 8px  — icon gaps, small padding */
  --space-3:   0.75rem;   /* 12px — component internal padding */
  --space-4:   1rem;      /* 16px — standard padding */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px — card padding, input height */
  --space-8:   2rem;      /* 32px — section internal gap */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px — between content blocks */
  --space-16:  4rem;      /* 64px — section padding (mobile) */
  --space-20:  5rem;      /* 80px — section padding (tablet) */
  --space-24:  6rem;      /* 96px — section padding (desktop) */
  --space-32:  8rem;      /* 128px — hero padding */
}
```

### Section Padding (responsive)

```css
.section-padding {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}
@media (min-width: 768px) {
  .section-padding {
    padding-top: var(--space-20);
    padding-bottom: var(--space-20);
  }
}
@media (min-width: 1024px) {
  .section-padding {
    padding-top: var(--space-24);
    padding-bottom: var(--space-24);
  }
}
```

### Optical Alignment Note

Mathematical alignment ≠ optical alignment. Common adjustments:
- Text next to icons: the icon should be 1-2px higher than mathematically centered
- Buttons with text: bottom padding should be 1px less than top padding (text sits slightly high)
- Cards in a grid: if cards have different content heights, use min-height not equal height

## Shadow Scale

5 levels, each with a specific use case. Values change by aesthetic.

### Default (SaaS / Corporate)

```css
:root {
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

### Premium / Luxury (softer, more diffused)

```css
:root {
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.03);
  --shadow-sm: 0 2px 8px 0 rgb(0 0 0 / 0.04);
  --shadow-md: 0 4px 16px 0 rgb(0 0 0 / 0.06);
  --shadow-lg: 0 8px 32px 0 rgb(0 0 0 / 0.08);
  --shadow-xl: 0 16px 48px 0 rgb(0 0 0 / 0.1);
}
```

### Startup / Creative (more pronounced, colored)

```css
:root {
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.06);
  --shadow-sm: 0 2px 4px 0 rgb(0 0 0 / 0.08), 0 0 0 1px rgb(0 0 0 / 0.04);
  --shadow-md: 0 4px 12px 0 rgb(0 0 0 / 0.1);
  --shadow-lg: 0 8px 24px 0 rgb(0 0 0 / 0.12), 0 0 0 1px rgb(0 0 0 / 0.04);
  --shadow-xl: 0 16px 40px 0 rgb(0 0 0 / 0.14);
  /* Optional: colored shadow for primary cards */
  --shadow-primary: 0 8px 24px 0 hsl(var(--primary) / 0.2);
}
```

### Shadow Usage Guide

| Level | Use Case |
|-------|----------|
| xs | Subtle elevation (inputs, pills) |
| sm | Cards at rest, dropdowns |
| md | Cards on hover, popovers |
| lg | Modals, floating elements |
| xl | Hero cards, featured content |

## Border Radius Scale

Radius defines visual personality — from sharp/authoritative to rounded/friendly.

```css
:root {
  --radius-none: 0;
  --radius-sm:   0.25rem;  /* 4px */
  --radius-md:   0.5rem;   /* 8px */
  --radius-lg:   0.75rem;  /* 12px */
  --radius-xl:   1rem;     /* 16px */
  --radius-2xl:  1.5rem;   /* 24px */
  --radius-full: 9999px;   /* pill */
}
```

### Radius by Aesthetic

| Aesthetic | Buttons | Cards | Inputs | Images |
|-----------|---------|-------|--------|--------|
| Corporate | `--radius-md` | `--radius-lg` | `--radius-md` | `--radius-lg` |
| Startup | `--radius-lg` | `--radius-xl` | `--radius-lg` | `--radius-xl` |
| Creative | `--radius-xl` | `--radius-2xl` | `--radius-lg` | `--radius-2xl` |
| SaaS | `--radius-md` | `--radius-lg` | `--radius-md` | `--radius-lg` |
| Premium | `--radius-sm` | `--radius-md` | `--radius-sm` | `--radius-sm` |
| Wellness | `--radius-xl` | `--radius-2xl` | `--radius-xl` | `--radius-full` |

### Consistency Rule

Pick ONE radius per component type and use it everywhere. A page with buttons using 4px, 8px, 12px, and 16px radius looks chaotic. Reduce to 2 radius values max per project.
