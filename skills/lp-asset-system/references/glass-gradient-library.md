# Glass & Gradient Library

Ready-to-use glass morphism, gradient, and visual treatment recipes. All colors reference palette tokens.

## Glassmorphism

### Standard Glass Card

```css
.glass-card {
  background: hsl(var(--foreground-light) / 0.05);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid hsl(var(--foreground-light) / 0.1);
  border-radius: var(--radius-xl);
}
```

### Frosted Glass (heavier blur)

```css
.glass-frosted {
  background: hsl(var(--foreground-light) / 0.08);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  border: 1px solid hsl(var(--foreground-light) / 0.12);
  border-radius: var(--radius-xl);
}
```

### Colored Glass

```css
.glass-primary {
  background: hsl(var(--primary) / 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid hsl(var(--primary) / 0.15);
  border-radius: var(--radius-xl);
}
```

### Glass Nav

```css
.glass-nav {
  background: hsl(var(--background) / 0.8);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid hsl(var(--border) / 0.5);
}
```

## Gradients

### Background Gradients

```css
/* Top-to-bottom fade (section transition) */
.gradient-section-fade {
  background: linear-gradient(
    to bottom,
    hsl(var(--background)),
    hsl(var(--muted) / 0.3)
  );
}

/* Radial spotlight (hero focus) */
.gradient-spotlight {
  background: radial-gradient(
    ellipse at top center,
    hsl(var(--primary-50)) 0%,
    hsl(var(--background)) 60%
  );
}

/* Dark section gradient */
.gradient-dark {
  background: linear-gradient(
    135deg,
    hsl(var(--background-dark)),
    hsl(var(--neutral-900))
  );
}
```

### Gradient Text

```css
.gradient-text {
  background: linear-gradient(
    135deg,
    hsl(var(--primary-400)),
    hsl(var(--accent))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtle gradient text (same hue, different lightness) */
.gradient-text-subtle {
  background: linear-gradient(
    135deg,
    hsl(var(--foreground)),
    hsl(var(--muted-foreground))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Gradient Borders

```css
/* Static gradient border */
.gradient-border {
  position: relative;
  border-radius: var(--radius-xl);
  padding: 1px;
  background: linear-gradient(
    135deg,
    hsl(var(--primary-400)),
    hsl(var(--accent)),
    hsl(var(--primary-600))
  );
}
.gradient-border > * {
  border-radius: calc(var(--radius-xl) - 1px);
  background: hsl(var(--background));
}

/* Animated gradient border */
.gradient-border-animated {
  position: relative;
  border-radius: var(--radius-xl);
  padding: 1px;
  background: linear-gradient(
    var(--gradient-angle, 135deg),
    hsl(var(--primary-400)),
    hsl(var(--accent)),
    hsl(var(--primary-600))
  );
  animation: rotate-gradient 4s linear infinite;
}
@keyframes rotate-gradient {
  to { --gradient-angle: 495deg; }
}
@property --gradient-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 135deg;
}
```

## Glow Effects

### Element Glow (hover state)

```css
.glow-primary {
  transition: box-shadow 0.3s ease;
}
.glow-primary:hover {
  box-shadow:
    0 0 20px hsl(var(--primary) / 0.25),
    0 0 60px hsl(var(--primary) / 0.1);
}
```

### Text Glow

```css
.text-glow {
  text-shadow: 0 0 30px hsl(var(--primary) / 0.4);
}
```

### Background Glow (ambient)

```css
.bg-glow {
  position: relative;
}
.bg-glow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  background: radial-gradient(
    circle,
    hsl(var(--primary) / 0.15),
    transparent 70%
  );
  filter: blur(60px);
  pointer-events: none;
}
```

## Image Treatments

### Duotone Filter

```css
.duotone {
  filter: grayscale(100%) contrast(1.2);
  mix-blend-mode: multiply;
}
/* Place on a colored container to get duotone effect */
.duotone-container {
  background: hsl(var(--primary-200));
}
```

### Gradient Overlay on Images

```css
.image-overlay {
  position: relative;
}
.image-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    hsl(var(--background-dark)) 0%,
    hsl(var(--background-dark) / 0.5) 30%,
    transparent 60%
  );
}
```

## Usage Guidelines

1. Glass effects work best on dark backgrounds — on light backgrounds, reduce blur and increase border opacity
2. Gradient text should be used ONCE per page (hero headline). Multiple gradient texts = noise
3. Glow effects are for dark sections only — on light backgrounds they look muddy
4. Animated gradients: max 1 per viewport. Multiple animated elements = visual overload
5. All gradient colors MUST come from the palette. No arbitrary hex values.
