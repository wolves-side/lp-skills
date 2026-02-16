# AILD — AI Landing Page Design Pipeline

## O que é isso

Um sistema de **15 skills de IA** que transforma uma conversa com um cliente em uma landing page completa, profissional, responsiva e otimizada para conversão — sem templates genéricos, sem Figma, sem developer humano no meio.

O pipeline é orquestrado por uma **skill master** (`lp-master`) que conduz 8 fases sequenciais, do ICP Discovery ao Deploy. Cada skill é um agente especialista que recebe um input estruturado, executa seu trabalho, e entrega um output que alimenta o próximo agente.

**15 skills | 59 arquivos | 8 fases | ~75 min de execução completa**

---

## Por que existe

Landing pages são o gargalo de qualquer funil digital. O processo tradicional envolve: briefing com o cliente (1-2 reuniões), copywriter (3-5 dias), designer (3-5 dias), developer (3-5 dias), revisão (mais 3-5 dias). Total: 2-4 semanas e R$5-15K por página.

O AILD comprime isso em ~75 minutos de interação, mantendo (e em muitos casos superando) a qualidade do processo tradicional. Não porque corta corners — porque elimina os handoffs, mal-entendidos e retrabalho que consomem 80% do tempo.

A diferença fundamental: cada agente do pipeline tem acesso ao contexto COMPLETO do projeto. O copywriter sabe o que a análise competitiva encontrou. O builder sabe exatamente o que o architect especificou. O QA sabe contra o que validar.

---

## Estrutura do Repositório

```
lp-skill/
├── README.md
├── lp-master/                               ← 🎯 Skill orquestradora
│   └── SKILL.md
│
├── fase-1-pesquisa-icp/
│   └── lp-icp-discovery/                    ← Pesquisa de cliente ideal
│
├── fase-2-empresa-produto/
│   ├── lp-brand-strategist/                 ← Entrevista de marca
│   ├── lp-product-architect/                ← Mapeamento de produto/oferta
│   ├── lp-competitive-intel/                ← Análise de concorrência
│   └── lp-brief-synthesizer/                ← Síntese → Master Brief
│
├── fase-3-estrategia-copy/
│   ├── lp-copywriter/                       ← Copy completo da página
│   ├── lp-page-architect/                   ← Estrutura e wireframes
│   └── lp-page-spec-assembler/              ← Merge → Page Specification
│
├── fase-4-design-system/
│   └── lp-design-system/                    ← Tokens CSS, componentes, animações
│
├── fase-5-desenvolvimento/
│   └── lp-page-builder/                     ← HTML self-contained
│
├── fase-6-analise-critica/
│   ├── lp-page-qa/                          ← ~65 checks automatizados
│   └── lp-expert-panel/                     ← Painel de 5 especialistas
│
├── fase-7-revisao-final/
│   └── lp-page-rebuild/                     ← Aplicação cirúrgica de feedback
│
└── fase-8-deploy/
    └── lp-deployment/                       ← Vercel, Cloudflare, Firebase
```

Cada skill segue o padrão:
```
skill-name/
├── SKILL.md          ← instruções do agente
└── references/       ← templates, checklists, frameworks
    └── *.md
```

---

## As 8 Fases

### Fase 1 — Pesquisa de ICP

**Skill:** `lp-icp-discovery` · **~10 min** · Interativa

Processa informações brutas do negócio e gera 3-5 perfis detalhados de cliente ideal (persona archetypes). Define quem a landing page precisa convencer.

**Output:** ICP Persona Profiles

---

### Fase 2 — Empresa e Produto (4 skills)

**Skills:** `lp-brand-strategist` → `lp-product-architect` → `lp-competitive-intel` → `lp-brief-synthesizer` · **~20 min** · Interativa + Automática

O `lp-brand-strategist` conduz uma entrevista de ~15 minutos em 5 blocos: identidade, história do fundador, diferenciação, voz da marca e prova social. Tem "pressure questions" para respostas vagas.

O `lp-product-architect` mapeia o produto/serviço, classifica o tipo de LP (7 tipos), e arquiteta a oferta: garantia, urgência real, price anchoring, mapa de objeções, e transformação BEFORE→AFTER→PROOF→MECHANISM.

O `lp-competitive-intel` é 100% automatizado — scrapa concorrentes, analisa padrões de copy/visual/oferta, e gera "attack angles" para diferenciação.

O `lp-brief-synthesizer` cruza os 3 documentos e sintetiza o Master Brief com positioning statement, messaging hierarchy, headlines candidatas, e GAP audit (🔴/🟡/🟢).

**Output:** Master Brief — documento estratégico que alimenta todas as fases seguintes.

---

### Fase 3 — Estratégia, Copy, CTA, Hooks (3 skills)

**Skills:** `lp-copywriter` ∥ `lp-page-architect` → `lp-page-spec-assembler` · **~15 min** · Automática

O `lp-copywriter` e o `lp-page-architect` trabalham em **paralelo**:

- **Copywriter**: escreve TODO o texto seção por seção com 7 frameworks psicológicos (PAS, BAB, Proof Stack, Risk Reversal...), gera 3 variantes A/B de headline e CTA, escreve microcopy completa.
- **Page Architect**: define estrutura via scroll psychology, wireframes ASCII, CTA map, specs de animação, e comportamento mobile completo por breakpoint.

O `lp-page-spec-assembler` cruza copy e estrutura, resolve mismatches, e gera o **Page Specification** (~400-800 linhas) — documento executável sem decisões pendentes.

**Output:** Page Specification

---

### Fase 4 — Design System

**Skill:** `lp-design-system` · **~5 min** · Automática

Transforma direção visual abstrata em CSS concreto: paleta de cores com contraste validado, tipografia com pares de fontes selecionados, design tokens, component styles, e animation patterns. Cada cliente recebe um design system ÚNICO — a análise competitiva identificou padrões visuais para evitar.

**Output:** CSS tokens + component styles + animation patterns

---

### Fase 5 — Desenvolvimento Estrutural

**Skill:** `lp-page-builder` · **~10 min** · Automática

Gera um arquivo HTML ÚNICO, self-contained: todo CSS inline, todo JS inline (~5KB), zero dependências externas exceto Google Fonts. Implementa usando padrões prontos para 11 tipos de seção, navegação completa (desktop sticky + mobile hamburger), 5 padrões de form submission, e animações via IntersectionObserver.

**Output:** HTML v1 — production-ready, responsivo, acessível

---

### Fase 6 — Análise Crítica (2 skills)

**Skills:** `lp-page-qa` → `lp-expert-panel` · **~10 min** · Automática

O `lp-page-qa` roda ~65 checks em 7 categorias (content, structure, responsive, design system, performance, accessibility, interactions). Cada check é binário com 3 níveis de severidade e instruções de fix específicas.

O `lp-expert-panel` roda 5 especialistas simulados (CRO, Copy, Creative Direction, Frontend, Growth) que geram feedback priorizado, consolidado em um Improvement Plan (P1/P2/P3).

**Output:** QA Report + Expert Review + Improvement Plan

---

### Fase 7 — Revisão Final

**Skill:** `lp-page-rebuild` + `lp-page-qa` (re-run) · **~10 min** · Automática

O `lp-page-rebuild` faz triage do feedback (direct edits, structural changes, conflicts, out of scope), cria Change Plan antes de editar, aplica uma mudança por vez verificando cascade, e gera Change Log. O `lp-page-qa` roda novamente — deve passar limpo.

**Output:** HTML v2 (final) + Change Log + QA Report v2

---

### Fase 8 — Deploy

**Skill:** `lp-deployment` · **~5 min** · Interativa

Guides step-by-step para publicar em Vercel, Cloudflare Pages, ou Firebase Hosting.

**Output:** Landing page publicada e acessível

---

## O Resultado Final

Uma landing page que:

- Tem posicionamento estratégico diferenciado (não genérico)
- Usa as palavras do CLIENTE, não jargão de marketing
- Tem copy escrito contra frameworks de conversão testados
- Tem estrutura baseada em psicologia de scroll real
- É responsiva de verdade (não "encolhida", redesenhada pra mobile)
- Atinge targets de performance (FCP <1.5s, LCP <2.5s, <1MB)
- É acessível (WCAG AA, semântica, keyboard nav, reduced motion)
- Passou por ~65 checks de QA automatizado
- Passou por revisão de painel de 5 especialistas
- Teve feedback aplicado com tracking de mudanças

Tudo isso em ~75 minutos.

---

## Os Números

| Métrica | Valor |
|---------|-------|
| Skills totais | 15 (14 + 1 master) |
| Arquivos .md totais | 59 |
| Fases do pipeline | 8 |
| Checks de QA | ~65 por execução |
| Frameworks de copy | 7 |
| Padrões de seção | 11 |
| Padrões de form | 5 |
| Experts no painel | 5 |
| Tempo estimado (full run) | ~75 min |

---

## Uso

```
"Crie uma landing page para [cliente]"

→ Fase 1: Pesquisa de ICP          → Persona Profiles
→ Fase 2: Empresa e Produto        → Master Brief
→ Fase 3: Estratégia, Copy, Hooks  → Page Specification
→ Fase 4: Design System            → CSS Tokens + Styles
→ Fase 5: Desenvolvimento          → HTML v1
→ Fase 6: Análise Crítica          → QA Report + Expert Review
→ Fase 7: Revisão Final            → HTML v2 (final) ✅
→ Fase 8: Deploy                   → PÁGINA LIVE 🚀
```

O `lp-master/SKILL.md` orquestra todo o fluxo com checkpoints de aprovação entre cada fase.