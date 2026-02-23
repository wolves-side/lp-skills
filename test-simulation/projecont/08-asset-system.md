# Asset System — Grupo PROJECONT

## Icon Library
**Selected**: Lucide React
**Rules**: `1.5px` stroke width. `text-primary` for light backgrounds, `text-accent` for dark.

## Background Specification & High-Fidelity Patterns
We will apply high-fidelity patterns from `visual-patterns.md`:
1. **Glassmorphism Profundo**: Used extensively on `Serviços` and `Diferenciais` cards.
2. **Gradient Mesh & Orbs**: Ambient glow behind the Hero, Serviços, and CTA Final layers.
3. **Grid Backgrounds**: Dark tech grid overlay for the Hero to symbolize data/accounting precision.
4. **Bento Grid Layout**: Simulated in the layout of the `Segmentos` section.

## Decorative Component Map

```tsx
// --- Hero Section ---
<section id="hero" className="relative min-h-screen bg-gradient-to-br from-[hsl(218_75%_18%)] to-[hsl(218_75%_22%)] overflow-hidden">
  {/* Base grid texture */}
  <GridPattern variant="dots" size={32} color="hsl(215 12% 95%)" opacity={0.06} className="z-[1]" />
  
  {/* Ambient Mesh Orbs */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen z-[2]" />
  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen z-[2]" />
  
  <NoiseTexture opacity={0.03} className="z-[3]" />
  <div className="relative z-10">{/* content */}</div>
</section>

// --- Dor Section ---
<section id="dor" className="relative bg-muted py-24 overflow-hidden">
  {/* Clean, no heavy distraction, just subtle noise */}
  <NoiseTexture opacity={0.02} className="z-[1]" />
  <div className="relative z-10">{/* content */}</div>
</section>

// --- Serviços Section (Glassmorphism) ---
<section id="servicos" className="relative bg-background py-24 overflow-hidden">
  {/* Ambient Glow blobs that will show through the Glass cards */}
  <GradientBlob className="top-1/4 -left-32" colors={['hsl(218 72% 43%)', 'transparent']} size="lg" opacity={0.1} zIndex={1} />
  <GradientBlob className="bottom-1/4 -right-32" colors={['hsl(38 80% 46%)', 'transparent']} size="lg" opacity={0.05} zIndex={1} />
  
  <div className="relative z-10">
    {/* Content: Cards use bg-background/60 backdrop-blur-md border-white/10 hover:border-secondary/50 */}
  </div>
</section>

// --- Diferenciais Section ---
<section id="diferenciais" className="relative bg-muted/40 py-24 overflow-hidden">
  <GridPattern variant="grid" size={48} color="hsl(218 70% 13%)" opacity={0.03} className="z-[1]" />
  <div className="relative z-10">{/* content */}</div>
</section>

// --- Segmentos Section (Bento Grid Style) ---
<section id="segmentos" className="relative bg-primary-900 py-24 overflow-hidden text-foreground-light">
  <GridPattern variant="dots" size={24} color="hsl(38 100% 97%)" opacity={0.03} className="z-[1]" />
  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 to-transparent z-[2]" />
  <div className="relative z-10">{/* content */}</div>
</section>

// --- Como Funciona & FAQ Section ---
<section className="relative bg-background py-24 overflow-hidden">
  {/* Minimalist */}
  <NoiseTexture opacity={0.01} className="z-[1]" />
  <div className="relative z-10">{/* content */}</div>
</section>

// --- CTA Final Section ---
<section id="cta" className="relative bg-gradient-to-br from-[hsl(218_75%_13%)] to-[hsl(218_75%_20%)] py-32 overflow-hidden text-primary-50">
  <Aurora color="hsl(38 80% 46%)" opacity={0.15} className="z-[1]" />
  <NoiseTexture opacity={0.04} className="z-[2]" />
  <div className="relative z-10">{/* content */}</div>
</section>
```

## Gradient & Glass Treatments
**Glass Card Recipe**:
`className="bg-card/70 backdrop-blur-lg border border-primary/10 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300"`

**CTA Button Gradient Recipe**:
`className="bg-gradient-to-r from-accent to-accent-600 text-accent-foreground hover:shadow-[0_0_20px_hsl(var(--accent)/0.4)] hover:-translate-y-1 transition-all"`

## Builder Implementation Notes
- The Builder MUST inject `GridPattern`, `NoiseTexture`, `GradientBlob`, and `Aurora` exactly as specified in the component map into the sections.
- Ensure that `z-index` stacking prevents decorative elements from blocking clicks on the content (`pointer-events-none` on standard decors, or `relative z-10` on content wrappers).
