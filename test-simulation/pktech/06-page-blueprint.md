# Page Blueprint — PK Tech AI

## Estrutura da Página

### Seção 1: Hero (above the fold)
- **Layout**: Centered (texto centralizado)
- **Padrão**: Statement + Stats Bar
- **Altura**: min-height 90vh
- **Conteúdo**: Badge → H1 → Subtítulo → 2 CTAs lado a lado → Microcopy checklist → Stats bar com 4 métricas
- **Background**: Dark (gradient tech), com efeitos decorativos
- **Mobile**: Stack vertical, stats em 2x2 grid

### Seção 2: Problema/Dor
- **Layout**: Text-only com destaque
- **Altura**: Auto (conteúdo determina)
- **Conteúdo**: H2 → 2 parágrafos de dor → Transição em destaque
- **Background**: Muted/light
- **Mobile**: Full-width text

### Seção 3: Serviços (4 Pilares)
- **Layout**: Grid 2x2 (desktop) → Stack (mobile)
- **Conteúdo**: H2 → 4 cards com ícone + título + descrição + métrica destacada
- **Background**: White
- **Interação**: Cards com hover lift + glow

### Seção 4: Casos de Sucesso
- **Layout**: Grid 2x2 (desktop) → Stack (mobile)
- **Conteúdo**: H2 → 4 cards com segmento badge + desafio + resultado + métrica em destaque
- **Background**: Dark
- **Interação**: Cards com borda sutil hover

### Seção 5: Produtos Próprios
- **Layout**: Grid 3 colunas → Stack (mobile)
- **Conteúdo**: H2 → 3 cards (SART, Wasedata, Rhapsod.ai) com categoria + nome + descrição
- **Background**: Muted/light
- **Interação**: Card hover com scale

### Seção 6: Como Funciona
- **Layout**: Horizontal stepper (desktop) → Vertical (mobile)
- **Conteúdo**: H2 → 4 steps com número + título + descrição
- **Background**: White
- **Interação**: Steps revelam em stagger

### Seção 7: FAQ
- **Layout**: Accordion centralizado, max-width 3xl
- **Conteúdo**: H2 → 5 perguntas/respostas em accordion
- **Background**: Muted/light
- **Interação**: Expand/collapse com animação

### Seção 8: CTA Final
- **Layout**: Centered, max-width 3xl
- **Conteúdo**: H2 → Subtítulo → CTA grande → Microcopy
- **Background**: Dark gradient com accent glow
- **Interação**: MagneticButton no CTA

### Seção 9: Footer
- **Layout**: Grid 3 colunas → Stack (mobile)
- **Conteúdo**: Logo + tagline | Serviços (links) | Contato + social
- **Background**: Darkest

## Navegação
- Sticky navbar com scroll-state (transparente → solid)
- Links: Soluções, Casos, Produtos, Como Funciona, FAQ
- CTA no nav: "Diagnóstico Gratuito"
- Mobile: Hamburger → overlay menu full-screen
