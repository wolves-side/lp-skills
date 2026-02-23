# Interaction States

Complete specification for hover, focus, active, and disabled states on all interactive elements.

## Universal Rules

1. **Every interactive element MUST have**: hover + focus-visible + active states
2. **Touch targets**: Minimum 44×44px (WCAG 2.5.5)
3. **Transition properties**: Always explicit — `transition-colors`, `transition-all`, etc. (never `transition: all`)
4. **Duration**: Interaction transitions are 0.15–0.3s (NEVER the same as entry animations)
5. **Focus-visible only**: Use `focus-visible:` not `focus:` — prevents focus ring on click

## Element State Matrix

### Primary CTA Button

```css
.btn-primary {
  /* Base */
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}
.btn-primary:hover {
  background: hsl(var(--primary-600));
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
.btn-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}
.btn-primary:active {
  transform: scale(0.98) translateY(0);
  box-shadow: var(--shadow-sm);
}
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

### Secondary CTA Button

```css
.btn-secondary {
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  border: 1px solid hsl(var(--border));
  transition: all 0.2s;
}
.btn-secondary:hover {
  background: hsl(var(--secondary) / 0.8);
  border-color: hsl(var(--border) / 0.6);
}
.btn-secondary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}
.btn-secondary:active {
  transform: scale(0.98);
}
```

### Interactive Card

```css
.card-interactive {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.card-interactive:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: hsl(var(--primary) / 0.2);
}
.card-interactive:focus-within {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}
```

### Form Input

```css
.input {
  border: 1px solid hsl(var(--border));
  transition: all 0.2s;
}
.input:hover {
  border-color: hsl(var(--border) / 0.7);
}
.input:focus {
  outline: none;
  border-color: hsl(var(--primary));
  box-shadow: 0 0 0 3px hsl(var(--primary) / 0.1);
}
.input.error {
  border-color: hsl(var(--destructive));
  box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.1);
}
.input.success {
  border-color: hsl(var(--success, 142 72% 42%));
}
```

### Navigation Link

```css
.nav-link {
  color: hsl(var(--muted-foreground));
  transition: color 0.2s;
  position: relative;
}
.nav-link:hover {
  color: hsl(var(--foreground));
}
.nav-link:focus-visible {
  outline: none;
  color: hsl(var(--foreground));
  text-decoration: underline;
  text-underline-offset: 4px;
}
/* Active indicator (current page) */
.nav-link.active {
  color: hsl(var(--foreground));
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: hsl(var(--primary));
  border-radius: 1px;
}
```

### Inline Link

```css
.text-link {
  color: hsl(var(--primary));
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: hsl(var(--primary) / 0.3);
  transition: text-decoration-color 0.2s;
}
.text-link:hover {
  text-decoration-color: hsl(var(--primary));
}
.text-link:focus-visible {
  outline: none;
  background: hsl(var(--primary) / 0.1);
  border-radius: 2px;
  padding: 0 2px;
  margin: 0 -2px;
}
```

## Feedback States

### Loading

```css
/* Skeleton pulse for loading content */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.skeleton {
  background: hsl(var(--muted));
  border-radius: var(--radius-md);
  animation: pulse 2s ease-in-out infinite;
}

/* Button loading state */
.btn-loading {
  pointer-events: none;
  opacity: 0.7;
  /* Show spinner, hide text */
}
```

### Success / Error

```css
/* Success feedback */
.feedback-success {
  color: hsl(142 72% 42%);
  animation: fadeUp 0.3s ease-out;
}

/* Error feedback — subtle shake */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}
.feedback-error {
  animation: shake 0.3s ease-in-out;
}
```

## Reduced Motion Adaptations

When `prefers-reduced-motion: reduce` is active:

| Normal Behavior | Reduced Motion Alternative |
|----------------|--------------------------|
| Scale + translate hover | Color change only |
| Card lift on hover | Border highlight only |
| Spring animations | Instant state change |
| Text reveal word-by-word | Instant full reveal |
| Stagger sequences | All visible immediately |
| Parallax scroll | Static positioning |
| Animated counters | Show final number |

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  /* Keep color transitions for hover states */
  .btn-primary:hover,
  .nav-link:hover {
    transition: color 0.15s, background-color 0.15s;
  }
}
```
