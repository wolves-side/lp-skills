# Page Blueprint — Grupo PROJECONT

> Estrutura, layout e comportamento da landing page.

## Page Flow

```
HERO → DOR → SERVIÇOS → DIFERENCIAIS → SEGMENTOS → COMO FUNCIONA → FAQ → CTA FINAL → FOOTER
```

Total: 9 seções. Scroll estimado: ~6-7 viewports desktop, ~12-14 mobile.

---

## Seção 1: Hero
- **Layout**: Statement + Stats Bar (Pattern 4 do asset-system)
- **Background**: Dark (navy/dark blue) com gradient sutil
- **Estrutura**:
  - Badge centered above headline
  - H1 centered, max-w-3xl
  - Subtítulo abaixo, max-w-2xl
  - 2 CTAs lado a lado (primário + ghost)
  - Microcopy abaixo dos CTAs
  - Stats bar na base do hero (4 métricas, border-top separator)
- **Animação**: textReveal no H1 → fadeUp no subtítulo → fadeUp nos CTAs → stats counter
- **Mobile**: Stack vertical, stats 2x2 grid

## Seção 2: Dor
- **Layout**: 3 cards em grid (1x3 desktop, 1x1 mobile)
- **Background**: Muted/light
- **Cada card**: Ícone + título + parágrafo
- **Animação**: stagger fadeUp nos 3 cards
- **CTA**: Botão centralizado abaixo dos cards

## Seção 3: Serviços Principais
- **Layout**: Grid 2x2 de cards (1x1 mobile)
- **Background**: White/Background
- **Cada card**: Ícone + título + texto + tag opcional ("Mais procurado")
- **Animação**: stagger fadeUp
- **Comportamento**: Cards com hover state (elevação + border accent)

## Seção 4: Diferenciais
- **Layout**: Alternado — ícone esquerda, texto direita (stack mobile)
- **Background**: Muted/light
- **4 itens** em coluna vertical com separator lines
- **Animação**: fadeUp sequencial

## Seção 5: Segmentos
- **Layout**: Grid 3x2 (2x3 mobile)
- **Background**: Dark section (contraste com anterior)
- **Cada item**: Ícone do segmento + nome + descrição curta (uma linha)
- **Animação**: stagger fadeUp
- **Foreground**: Light text on dark

## Seção 6: Como Funciona
- **Layout**: 3 steps horizontal (vertical mobile)
- **Background**: White/Background
- **Cada step**: Número grande + título + texto
- **Conector**: Linha ou seta entre steps (hidden mobile)
- **Animação**: stagger com counter nos números

## Seção 7: FAQ
- **Layout**: Accordion (expandir/colapsar)
- **Background**: Muted/light
- **6 perguntas** em coluna central, max-w-2xl
- **Animação**: expand/collapse smooth
- **Primeira pergunta**: Aberta por padrão

## Seção 8: CTA Final
- **Layout**: Centered text + 2 CTAs
- **Background**: Dark com gradient accent sutil
- **Animação**: fadeUp no texto, scale no botão primário

## Seção 9: Footer
- **Layout**: 3 colunas (logo/endereço | serviços | contato) → stack mobile
- **Background**: Mais escuro que o CTA section
- **Copyright**: Linha bottom

---

## CTA Map

| Localização | Texto | Ação | Tipo |
|-------------|-------|------|------|
| Hero | Agendar Diagnóstico Gratuito | WhatsApp link | Primary |
| Hero | Conheça nossos serviços | Scroll to #servicos | Ghost/Secondary |
| Seção Dor | Quero meu diagnóstico gratuito → | WhatsApp link | Primary |
| CTA Final | Agendar Diagnóstico Gratuito pelo WhatsApp | WhatsApp link | Primary (large) |
| CTA Final | Ou fale conosco pelo formulário | Scroll to contact/form | Secondary |
| Nav | Fale Conosco | WhatsApp link | Nav CTA |

## Navegação

**Desktop**: Sticky nav, transparent → solid on scroll
- Logo (left) | Serviços | Diferenciais | Segmentos | FAQ | **CTA button** (right)

**Mobile**: Hamburger menu
- Logo (left) | Hamburger (right)
- Full-screen overlay menu on open

## Responsividade

| Elemento | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| Hero H1 | text-5xl | text-4xl | text-3xl |
| Stats bar | 4 em linha | 4 em linha | 2x2 grid |
| Serviços grid | 2x2 | 2x2 | 1x1 stack |
| Segmentos grid | 3x2 | 2x3 | 1x1 stack |
| Como funciona | 3 horizontal | 3 horizontal | 1x1 vertical |
| FAQ max-width | max-w-2xl | max-w-xl | full-width px-6 |
