# Asset System — Grupo PROJECONT

> Receives: Aesthetic = Corporate/Monolith | Colors = Navy + Amber | Motion = Subtle fadeUp

## Icon System

### Library Selection
**Library**: Lucide React (MIT license, consistent 24px grid, 1.5px stroke, perfect for Monolith aesthetic)

**Fallback**: Phosphor Icons (if Lucide doesn't have a specific icon)

### Icon Size Scale
| Context | Size | Tailwind |
|---------|------|----------|
| Inline text | 16px | `w-4 h-4` |
| Button prepend | 20px | `w-5 h-5` |
| Card icon | 24px | `w-6 h-6` |
| Feature icon (small) | 32px | `w-8 h-8` |
| Feature icon (large) | 40px | `w-10 h-10` |
| Section hero icon | 48px | `w-12 h-12` |

### Icon Color Rules
- On light backgrounds: `text-primary-500` or `text-primary-600`
- On dark backgrounds: `text-accent-400` or `text-foreground-light`
- Inside accent containers: `text-accent-700`
- Decorative/muted: `text-muted-foreground`

### Icon Map

| Context | Icon (Lucide) | Notes |
|---------|---------------|-------|
| Planejamento Tributário | `Calculator` | Service card |
| Constituição de Holdings | `Shield` | Protection metaphor |
| BPO Financeiro | `BarChart3` | Financial management |
| Contabilidade | `FileText` | Document-centric |
| Restaurantes | `UtensilsCrossed` | Segment |
| Concessionárias | `Car` | Segment |
| Médicos | `Stethoscope` | Segment |
| Comércio | `ShoppingBag` | Segment |
| Indústrias | `Factory` | Segment |
| Prestadores de Serviço | `Briefcase` | Segment |
| Anos de mercado (stat) | `Award` | Trust signal |
| Segmentos (stat) | `Layers` | Diversity |
| Especialistas (stat) | `Users` | Team |
| Sede própria (stat) | `Building2` | Stability |
| WhatsApp CTA | `MessageCircle` | Action |
| Telefone | `Phone` | Contact |
| Checkmark (microcopy) | `Check` | Confirmation |
| FAQ expand | `Plus` → `X` | Toggle |
| Menu hamburger | `Menu` → `X` | Mobile nav |
| Arrow (CTA) | `ArrowRight` | Direction |

---

## Background Layers

### Section Background Map

| Section | Background | Layers |
|---------|-----------|--------|
| **Hero** | Dark (navy gradient) | Base: `linear-gradient(135deg, hsl(218 75% 18%), hsl(218 75% 22%))` + Overlay: dot grid at 4% opacity |
| **Dor** | Muted (light gray) | Base: `hsl(var(--muted))` — flat, no pattern |
| **Serviços** | White | Base: `hsl(var(--background))` — clean |
| **Diferenciais** | Subtle gradient | Base: `linear-gradient(180deg, hsl(var(--muted)), hsl(218 15% 94%))` |
| **Segmentos** | Dark navy | Base: `hsl(218 75% 20%)` + Overlay: subtle radial gradient center glow at 3% opacity |
| **Como Funciona** | White | Base: `hsl(var(--background))` |
| **FAQ** | Muted | Base: `hsl(var(--muted))` |
| **CTA Final** | Dark gradient | Base: `linear-gradient(135deg, hsl(218 75% 17%), hsl(218 68% 22%))` + Accent: subtle amber glow at bottom-right, 5% opacity |
| **Footer** | Darkest | Base: `hsl(218 65% 7%)` |

### Dot Grid Pattern (Hero)
```css
.hero-pattern {
  background-image: radial-gradient(circle, hsl(215 12% 95% / 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

---

## Hero Composition

### Pattern: Statement + Stats Bar (Pattern 4)

```
┌──────────────────────────────────────────────────────┐
│                     [Dark Navy BG]                    │
│                                                       │
│            "19 anos de expertise..." badge             │
│                                                       │
│          Sua empresa paga mais imposto do              │
│          que deveria. Vamos provar em 30 min.          │
│                                                       │
│        Subtítulo de suporte em 2 linhas max            │
│                                                       │
│     [■ CTA Primário]    [□ CTA Secundário]            │
│        ✓ Gratuito · ✓ Sem compromisso · ✓ 30min       │
│                                                       │
│ ─────────────────────────────────────────────────────  │
│   19+        │    6         │   15+       │  Sede     │
│  Anos de     │ Segmentos   │ Especialis- │ própria   │
│  mercado     │ atendidos   │   tas       │ Manaus    │
└──────────────────────────────────────────────────────┘
```

### Layout CSS (Hero)
```css
.hero {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--section-py) var(--section-px);
  background: linear-gradient(135deg, hsl(218 75% 18%), hsl(218 75% 22%));
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, hsl(215 12% 95% / 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

.hero-content {
  max-width: 48rem;
  z-index: 1;
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
  border-top: 1px solid hsl(215 12% 95% / 0.15);
  padding-top: var(--space-8);
  margin-top: var(--space-12);
  width: 100%;
  max-width: 56rem;
}

@media (max-width: 640px) {
  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
}
```

---

## Glass & Gradient Treatments

### Primary CTA Gradient (Amber)
```css
.btn-cta-gradient {
  background: linear-gradient(135deg, hsl(38 80% 46%), hsl(38 82% 40%));
  color: hsl(38 55% 8%);
  box-shadow: 0 4px 14px 0 hsl(38 80% 46% / 0.25);
}
.btn-cta-gradient:hover {
  background: linear-gradient(135deg, hsl(38 82% 40%), hsl(38 85% 35%));
  box-shadow: 0 6px 20px 0 hsl(38 80% 46% / 0.35);
}
```

### Card Hover Glow (Service Cards)
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
    hsl(218 72% 43% / 0.06),
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
  background: hsl(0 0% 100% / 0.85);
  backdrop-filter: blur(12px) saturate(1.2);
  -webkit-backdrop-filter: blur(12px) saturate(1.2);
  border-bottom: 1px solid hsl(var(--border) / 0.5);
}
```

### Dark Section Accent Glow
```css
.dark-section-glow {
  position: relative;
}
.dark-section-glow::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 10%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, hsl(38 80% 46% / 0.05), transparent 70%);
  pointer-events: none;
}
```

---

## Asset Checklist

- [x] Icon library selected: Lucide React
- [x] Icon map complete for all sections (20 icons)
- [x] Icon sizes defined per context
- [x] Icon colors defined for light/dark backgrounds
- [x] Background layers specified per section (9 sections)
- [x] Hero composition wireframed with measurements
- [x] Hero CSS written with responsive fallback
- [x] Dot grid pattern defined for hero overlay
- [x] Glass/gradient treatments: CTA gradient, card glow, nav backdrop, dark section glow
- [x] All backgrounds pass readability test (no contrast issues with text)
- [x] No external image dependencies (everything is CSS-generated)
