# Hero Patterns

4 hero section composition patterns. Select based on the page's conversion strategy and available assets.

## Pattern 1: Statement + Ambient

**Best for**: Premium, Corporate, any brand with strong copy but no product screenshot.

```
┌──────────────────────────────────────────┐
│           [Badge / eyebrow]              │
│                                          │
│       HEADLINE — LARGE, CENTERED         │
│                                          │
│    Supporting text — 1-2 lines max       │
│                                          │
│      [Primary CTA]  [Secondary CTA]     │
│                                          │
│         [Social proof bar]               │
│                                          │
│ ○ ambient gradient orb (off-center)      │
│              · · · dot grid · · ·        │
└──────────────────────────────────────────┘
```

**Layout**: Centered text, max-w-3xl, generous vertical padding.
**Background**: Dark with gradient orb + dot grid (or light with subtle gradient).
**Motion**: textReveal on headline → fadeUp on sub + CTA, gradient orb slowly rotates.

### Key CSS

```tsx
<section className="relative min-h-screen flex items-center justify-center bg-[hsl(var(--background-dark))] overflow-hidden">
  {/* Ambient gradient */}
  <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
    style={{ background: 'radial-gradient(circle, hsl(var(--primary-400)), transparent 70%)' }} />

  <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
    <Badge>Eyebrow text</Badge>
    <h1 className="font-display text-[var(--text-display)] font-bold leading-display tracking-display mt-6">
      Headline Here
    </h1>
    <p className="text-[var(--text-lg)] text-[hsl(var(--muted-foreground))] mt-6 max-w-xl mx-auto leading-body">
      Supporting paragraph text.
    </p>
    <div className="flex gap-4 justify-center mt-10">
      <Button>Primary CTA</Button>
      <Button variant="secondary">Secondary CTA</Button>
    </div>
  </div>
</section>
```

---

## Pattern 2: Statement + Product Demo

**Best for**: SaaS, Startup, any product with a compelling UI to show.

```
┌──────────────────────────────────────────┐
│         [Badge / eyebrow]                │
│                                          │
│     HEADLINE — CENTERED OR LEFT          │
│     Supporting text — 1-2 lines          │
│                                          │
│    [Primary CTA]  [Secondary CTA]        │
│                                          │
│ ┌──────────────────────────────────────┐ │
│ │                                      │ │
│ │         Product Screenshot           │ │
│ │         or App UI Demo               │ │
│ │         (with shadow + border)       │ │
│ │                                      │ │
│ └──────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

**Layout**: Text centered above, product image below with shadow.
**Background**: Light or dark, product image is the visual anchor.
**Motion**: Text fades up → image scales up from 0.95 with delay.

### Key CSS

```tsx
<section className="relative pt-32 pb-16 bg-[hsl(var(--background))] overflow-hidden">
  <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
    {/* Text block */}
    <h1 className="font-display text-[var(--text-5xl)] font-bold leading-display tracking-display">
      Headline
    </h1>
    <p className="text-[var(--text-lg)] text-[hsl(var(--muted-foreground))] mt-6 max-w-2xl mx-auto">
      Supporting text.
    </p>
    <div className="flex gap-4 justify-center mt-8">
      <Button>Get Started</Button>
    </div>
  </div>

  {/* Product image */}
  <div className="relative z-10 max-w-5xl mx-auto mt-16 px-6">
    <div className="rounded-xl border border-[hsl(var(--border))] shadow-xl overflow-hidden">
      <img src="/hero-product.png" alt="Product demo" className="w-full" />
    </div>
  </div>
</section>
```

---

## Pattern 3: Split (Text + Visual)

**Best for**: Creative, Corporate with product or illustration.

```
┌──────────────────────────────────────────┐
│                    │                     │
│    [Badge]         │                     │
│                    │    ┌───────────┐    │
│    HEADLINE        │    │           │    │
│    LEFT-ALIGNED    │    │  Visual   │    │
│                    │    │  Asset    │    │
│    Supporting      │    │           │    │
│    text            │    └───────────┘    │
│                    │                     │
│    [CTA] [CTA]     │                     │
│                    │                     │
└──────────────────────────────────────────┘
```

**Layout**: 50/50 or 55/45 split. Text left, visual right.
**Background**: Usually light. Visual can be screenshot, illustration, or 3D render.
**Motion**: Text slides from left, visual slides from right or scales up.

### Key CSS

```tsx
<section className="relative min-h-screen flex items-center bg-[hsl(var(--background))]">
  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
    {/* Text side */}
    <div>
      <Badge>Eyebrow</Badge>
      <h1 className="font-display text-[var(--text-5xl)] font-bold leading-display tracking-display mt-6">
        Headline
      </h1>
      <p className="text-[var(--text-lg)] text-[hsl(var(--muted-foreground))] mt-6 max-w-lg leading-body">
        Supporting text.
      </p>
      <div className="flex gap-4 mt-10">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>

    {/* Visual side */}
    <div className="relative">
      <div className="rounded-xl shadow-xl overflow-hidden">
        <img src="/hero-visual.png" alt="Visual" className="w-full" />
      </div>
    </div>
  </div>
</section>
```

---

## Pattern 4: Statement + Stats Bar

**Best for**: Corporate, Enterprise, brands with strong social proof numbers.

```
┌──────────────────────────────────────────┐
│         [Badge / eyebrow]                │
│                                          │
│     HEADLINE — LARGE, CENTERED           │
│     Supporting text                      │
│                                          │
│    [Primary CTA]  [Secondary CTA]        │
│                                          │
│ ─────────────────────────────────────── │
│  500K+        98.5%       24/7       #1  │
│  Users      Uptime     Support    Rated  │
│ ─────────────────────────────────────── │
└──────────────────────────────────────────┘
```

**Layout**: Centered text, CTA, then a stats bar at the bottom of hero.
**Background**: Dark or accent gradient.
**Motion**: Text sequence → CTA → stats counter animation.

### Stats Bar CSS

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-[hsl(var(--border)/0.2)]">
  {stats.map((stat) => (
    <div key={stat.label} className="text-center">
      <div className="font-display text-[var(--text-4xl)] font-bold">
        <Counter target={stat.value} suffix={stat.suffix} />
      </div>
      <div className="text-[var(--text-sm)] text-[hsl(var(--muted-foreground))] mt-2">
        {stat.label}
      </div>
    </div>
  ))}
</div>
```

## Selection Guide

| Context | Recommended Pattern |
|---------|-------------------|
| No product screenshot available | Pattern 1 (Statement + Ambient) |
| Strong product UI to show | Pattern 2 (Statement + Demo) |
| Illustration or lifestyle image | Pattern 3 (Split) |
| Strong social proof numbers | Pattern 4 (Statement + Stats) |
| DevTools / API product | Pattern 2 with code snippet as "demo" |
| B2B Enterprise | Pattern 1 or 4 (authority, no flashy visuals) |
