# Visual Patterns & High-Fidelity Recipes

Este documento contém receitas de design de alta fidelidade inspiradas em **MagicUI, 21st.dev, Wix Studio e Firecrawl**.
O objetivo é fornecer ao `lp-asset-system` instruções claras sobre COMO construir assets complexos.

## 1. Bento Grid Patterns (Estrutura)
*Ideal para: Features, Cases, About Us.*

**Conceito:** Cards modulares com tamanhos variados (1x1, 2x1, 2x2) que formam um grid coeso.
**Implementação:**
- Container: `grid grid-cols-1 md:grid-cols-3 gap-4`
- Spans: `md:col-span-2`, `md:row-span-2`
- Estilo: O "bento" deve ter `bg-muted/50`, `border-white/10`, `rounded-3xl` e `overflow-hidden`.
- Conteúdo: Cada célula deve ter um asset visual rico (imagem bleed, gráfico, ícone 3D).

## 2. Glassmorphism Profundo (Textura)
*Ideal para: Cards flutuantes, Navbar, Modais.*

**Receita CSS (Tailwind):**
```tsx
className="bg-background/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
```
**Camada Extra (Noise):**
Sempre combine vidro com textura de noise (`opacity-5`) para evitar o look "plástico barato".

## 3. Gradient Mesh & Orbs (Background)
*Ideal para: Hero, Call to Action.*

**Conceito:** Não use gradientes lineares simples. Use "Orbs" de cor desfocados.
**Implementação:**
```tsx
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen" />
```

## 4. Marquee Infinito (Prova Social)
*Ideal para: Logos de clientes.*

**Conceito:** Faixa contínua de logos scrolando horizontalmente.
**Implementação:**
- Use `framer-motion` com `animate={{ x: "-100%" }}` e `repeat: Infinity`.
- Adicione máscaras laterais: `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`.

## 5. Beam & Glow Borders (Destaque)
*Ideal para: Feature principal.*

**Conceito:** Uma borda que brilha e percorre o perímetro do card.
**Implementação:**
- Use `magic-ui/border-beam` ou CSS `conic-gradient` em um pseudo-elemento.

## 6. Grid Backgrounds (Tech/SaaS)
*Ideal para: Seções técnicas.*

**Receita SVG:**
- Dot Grid: Pads de 20-40px.
- Grid com Fade: `mask-image: radial-gradient(circle at center, black, transparent 80%)`.
