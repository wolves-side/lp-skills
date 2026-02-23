# Asset System — PK Tech AI

> Receives: Aesthetic = Startup/Tech | Colors = Indigo (245°) + Cyan (180°) | Motion = Snappy fadeUp (0.5s)

## Icon System

### Library Selection
**Library**: Lucide React (MIT license, consistent 24px grid, 1.5px stroke)

### Icon Size Scale
| Context | Size | Tailwind |
|---------|------|----------|
| Inline text | 16px | `w-4 h-4` |
| Button prepend | 20px | `w-5 h-5` |
| Card icon | 24px | `w-6 h-6` |
| Feature icon | 40px | `w-10 h-10` |
| Section hero icon | 48px | `w-12 h-12` |

### Icon Color Rules
- On light backgrounds: `text-primary-500`
- On dark backgrounds: `text-accent-400`
- Inside accent containers: `text-accent-700`
- Decorative/muted: `text-neutral-400`

### Icon Map

| Context | Icon (Lucide) | Size | Notes |
|---------|---------------|------|-------|
| Automação RPA | `Bot` | w-10 h-10 | Service card |
| Desenvolvimento | `Code2` | w-10 h-10 | Service card |
| Inteligência Artificial | `Brain` | w-10 h-10 | Service card |
| Business Intelligence | `BarChart3` | w-10 h-10 | Service card |
| Economia (stat) | `TrendingUp` | w-5 h-5 | Stats bar |
| Produtividade (stat) | `Zap` | w-5 h-5 | Stats bar |
| Tempo (stat) | `Clock` | w-5 h-5 | Stats bar |
| Produtos (stat) | `Package` | w-5 h-5 | Stats bar |
| SART | `ScanLine` | w-8 h-8 | Product card |
| Wasedata | `Wallet` | w-8 h-8 | Product card |
| Rhapsod.ai | `Sparkles` | w-8 h-8 | Product card |
| Diagnóstico (step 1) | `Search` | w-8 h-8 | How it works |
| Proposta (step 2) | `FileText` | w-8 h-8 | How it works |
| Implementação (step 3) | `Rocket` | w-8 h-8 | How it works |
| Resultados (step 4) | `Target` | w-8 h-8 | How it works |
| WhatsApp CTA | `MessageCircle` | w-5 h-5 | Button icon |
| Checkmark | `Check` | w-4 h-4 | Microcopy |
| FAQ expand | `Plus` → `X` | w-5 h-5 | Toggle |
| Menu | `Menu` → `X` | w-6 h-6 | Mobile nav |
| Arrow CTA | `ArrowRight` | w-5 h-5 | Button icon |

---

## Background Specification

| Section | Background | Layers |
|---------|-----------|--------|
| **Hero** | Dark (deep indigo gradient) | Base: `bg-gradient-to-br from-[hsl(220_30%_7%)] via-[hsl(245_25%_12%)] to-[hsl(220_30%_7%)]` + Aurora + Noise |
| **Dor/Problema** | Muted | Base: `bg-neutral-100` — flat, clean |
| **Serviços** | White | Base: `bg-neutral-50` — with subtle grid pattern |
| **Casos de Sucesso** | Dark | Base: `bg-neutral-900` + subtle gradient blob |
| **Produtos** | Muted gradient | Base: `bg-gradient-to-b from-neutral-100 to-neutral-50` |
| **Como Funciona** | White | Base: `bg-neutral-50` |
| **FAQ** | Muted | Base: `bg-neutral-100` |
| **CTA Final** | Dark gradient | Base: `bg-gradient-to-br from-[hsl(245_25%_12%)] to-[hsl(220_30%_7%)]` + Gradient blob accent |
| **Footer** | Darkest | Base: `bg-neutral-950` |

---

## Hero Composition

### Pattern: Statement + Stats Bar (Centered)

```
┌──────────────────────────────────────────────────────┐
│                   [Dark Gradient BG]                  │
│                   [Aurora Effect]                      │
│                                                       │
│           [Badge] Consultoria em BI, IA e Automação   │
│                                                       │
│       Sua empresa ainda toma decisões no escuro?      │
│             Nós acendemos a luz.                      │
│                                                       │
│         Subtítulo em 2 linhas máx.                    │
│                                                       │
│     [■ CTA Primário]    [□ CTA Secundário]           │
│     ✓ 30 min · ✓ 100% gratuito · ✓ Sem compromisso  │
│                                                       │
│ ────────────────────────────────────────────────────  │
│  R$ 150k/mês  │  900%    │  95%      │  3            │
│  economia     │ produtiv. │ redução   │ produtos     │
└──────────────────────────────────────────────────────┘
```

---

## Gradient & Glass Treatments

### Primary CTA Gradient (Cyan)
```css
.btn-cta-gradient {
  background: linear-gradient(135deg, hsl(180 85% 55%), hsl(180 80% 45%));
  color: hsl(180 60% 10%);
  box-shadow: 0 4px 14px 0 hsl(180 85% 55% / 0.3);
}
.btn-cta-gradient:hover {
  background: linear-gradient(135deg, hsl(180 82% 60%), hsl(180 85% 55%));
  box-shadow: 0 6px 20px 0 hsl(180 85% 55% / 0.4);
}
```

### Service Card Hover Glow
```css
.service-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(
    600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    hsl(245 80% 60% / 0.08),
    transparent 40%
  );
}
.service-card:hover::after {
  opacity: 1;
}
```

### Nav Backdrop (on scroll)
```css
.nav-scrolled {
  background: hsl(220 30% 7% / 0.9);
  backdrop-filter: blur(16px) saturate(1.3);
  -webkit-backdrop-filter: blur(16px) saturate(1.3);
  border-bottom: 1px solid hsl(220 15% 90% / 0.08);
}
```

### Dark Section Accent Glow
```css
.dark-section-glow::after {
  content: '';
  position: absolute;
  bottom: -100px;
  right: 5%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, hsl(180 85% 55% / 0.06), transparent 70%);
  pointer-events: none;
}
```

---

## Decorative Component Map

### Hero Section
```tsx
{/* Section: Hero */}
<section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[hsl(220_30%_7%)] via-[hsl(245_25%_12%)] to-[hsl(220_30%_7%)] overflow-hidden">
  {/* Decorative Layer 1: Aurora gradient */}
  <Aurora colors={['hsl(245, 80%, 60%)', 'hsl(180, 85%, 55%)', 'hsl(245, 70%, 42%)', 'hsl(180, 75%, 35%)']} />
  {/* Decorative Layer 2: Noise texture */}
  <NoiseTexture opacity={0.03} />
  {/* Content — z-10 */}
  <div className="relative z-10 container mx-auto px-6 text-center">
    {/* hero content */}
  </div>
</section>
```

### Serviços Section
```tsx
{/* Section: Serviços */}
<section className="relative section-padding bg-neutral-50 overflow-hidden">
  {/* Decorative Layer 1: Dot grid */}
  <GridPattern variant="dots" size={32} color="hsl(245, 80%, 60%)" opacity={0.04} />
  {/* Content — z-10 */}
  <div className="relative z-10 container mx-auto px-6">
    {/* service cards */}
  </div>
</section>
```

### Casos de Sucesso Section
```tsx
{/* Section: Casos de Sucesso */}
<section className="relative section-padding bg-neutral-900 text-neutral-50 overflow-hidden">
  {/* Decorative Layer 1: Gradient blob (bottom right) */}
  <GradientBlob
    className="-bottom-40 -right-20"
    colors={['hsl(245, 80%, 60%)', 'hsl(180, 85%, 55%)', 'hsl(245, 70%, 42%)']}
    size="lg"
  />
  {/* Content — z-10 */}
  <div className="relative z-10 container mx-auto px-6">
    {/* case cards */}
  </div>
</section>
```

### CTA Final Section
```tsx
{/* Section: CTA Final */}
<section className="relative section-padding bg-gradient-to-br from-[hsl(245_25%_12%)] to-[hsl(220_30%_7%)] text-neutral-50 overflow-hidden">
  {/* Decorative Layer 1: Gradient blob (top left, accent color) */}
  <GradientBlob
    className="-top-60 -left-40"
    colors={['hsl(180, 85%, 55%)', 'hsl(245, 80%, 60%)', 'hsl(180, 75%, 35%)']}
    size="xl"
  />
  {/* Decorative Layer 2: Noise */}
  <NoiseTexture opacity={0.02} />
  {/* Content — z-10 */}
  <div className="relative z-10 container mx-auto px-6 max-w-3xl text-center">
    {/* CTA content */}
  </div>
</section>
```

### All Other Sections (Dor, Produtos, Como Funciona, FAQ, Footer)
```tsx
{/* These sections use flat backgrounds with no decorative components */}
{/* Dor: bg-neutral-100 */}
{/* Produtos: bg-gradient-to-b from-neutral-100 to-neutral-50 */}
{/* Como Funciona: bg-neutral-50 */}
{/* FAQ: bg-neutral-100 */}
{/* Footer: bg-neutral-950 text-neutral-50 */}
```

---

## Builder Implementation Notes

1. **z-index stacking**: Decorative components render at z-[1], content at z-10
2. **Aurora**: Use Framer Motion for the gradient animation, NOT CSS keyframes (server component conflict)
3. **GradientBlob**: Position with absolute + negative offsets to bleed off the section edge
4. **NoiseTexture**: Apply to all dark sections at 0.02-0.03 opacity for subtle grain
5. **GridPattern**: Use dots variant on light sections at 0.04 opacity max
6. **Performance**: All decorative components use `pointer-events-none` and `will-change-transform`
7. **Overflow**: Every section with decorative effects MUST have `overflow-hidden`

## Asset Checklist

- [x] Icon library selected: Lucide React
- [x] Icon map complete for all sections (20 icons)
- [x] Icon sizes defined per context
- [x] Icon colors defined for light/dark backgrounds
- [x] Background layers specified per section (9 sections)
- [x] Hero composition wireframed with measurements
- [x] Glass/gradient treatments: CTA gradient, card glow, nav backdrop, dark section glow
- [x] **Decorative Component Map with JSX for 4 sections** ✅ (Hero, Serviços, Casos, CTA Final)
- [x] z-index stacking defined (effects < content)
- [x] All backgrounds pass readability test
- [x] No external image dependencies
