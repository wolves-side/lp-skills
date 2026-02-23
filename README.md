# AILD — AI Landing Page Design Pipeline

## O que é isso

Um sistema de **15 skills de IA** que transforma uma conversa com um cliente em uma landing page completa, profissional, responsiva e otimizada para conversão — sem templates genéricos, sem Figma, sem developer humano no meio.

O pipeline é orquestrado por uma **skill master** (`lp-master`) que conduz 8 fases sequenciais, do ICP Discovery ao Deploy. Cada skill é um agente especialista que recebe um input estruturado, executa seu trabalho, e entrega um output que alimenta o próximo agente.

**15 skills | 76 arquivos | 8 fases | ~75 min de execução completa**

---

## Por que existe

Landing pages são o gargalo de qualquer funil digital. O processo tradicional envolve: briefing com o cliente (1-2 reuniões), copywriter (3-5 dias), designer (3-5 dias), developer (3-5 dias), revisão (mais 3-5 dias). Total: 2-4 semanas e R$5-15K por página.

O AILD comprime isso em ~75 minutos de interação, mantendo (e em muitos casos superando) a qualidade do processo tradicional. Não porque corta corners — porque elimina os handoffs, mal-entendidos e retrabalho que consomem 80% do tempo.

A diferença fundamental: cada agente do pipeline tem acesso ao contexto COMPLETO do projeto. O copywriter sabe o que a análise competitiva encontrou. O builder sabe exatamente o que o architect especificou. O QA sabe contra o que validar.

---

## Estrutura do Repositório

```
lp-skills/
├── .claude-plugin/
│   ├── plugin.json                          ← Metadados do plugin
│   └── marketplace.json                     ← Registro do marketplace
├── hooks/
│   ├── hooks.json                           ← Hooks de sessão
│   └── session-start.sh                     ← Injeta contexto do pipeline
├── commands/
│   └── create-lp.md                         ← Atalho /create-lp
├── skills/
│   ├── lp-master/                           ← 🎯 Skill orquestradora
│   ├── lp-icp-discovery/                    ← Pesquisa de cliente ideal
│   ├── lp-brand-strategist/                 ← Entrevista de marca
│   ├── lp-product-architect/                ← Mapeamento de produto/oferta
│   ├── lp-brief-synthesizer/                ← Síntese → Master Brief
│   ├── lp-copywriter/                       ← Copy completo da página
│   ├── lp-page-architect/                   ← Estrutura e wireframes
│   ├── lp-color-typography/                 ← Cores, tipografia, tokens CSS
│   ├── lp-motion-system/                    ← Animações, interações, choreography
│   ├── lp-asset-system/                     ← Ícones, backgrounds, gradientes
│   ├── lp-page-builder/                     ← Projeto Next.js completo
│   ├── lp-page-qa/                          ← ~65 checks automatizados
│   ├── lp-expert-panel/                     ← Painel de 6 especialistas
│   ├── lp-page-rebuild/                     ← Aplicação cirúrgica de feedback
│   └── lp-deployment/                       ← Vercel, Cloudflare, Firebase
├── README.md
└── .gitignore
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

### Fase 2 — Empresa e Produto (3 skills)

**Skills:** `lp-brand-strategist` → `lp-product-architect` → `lp-brief-synthesizer` · **~20 min** · Interativa + Automática

O `lp-brand-strategist` conduz uma entrevista de ~15 minutos em 5 blocos: identidade, história do fundador, diferenciação, voz da marca e prova social. Tem "pressure questions" para respostas vagas.

O `lp-product-architect` mapeia o produto/serviço, classifica o tipo de LP (7 tipos), e arquiteta a oferta: garantia, urgência real, price anchoring, mapa de objeções, e transformação BEFORE→AFTER→PROOF→MECHANISM.

O `lp-brief-synthesizer` cruza os documentos e sintetiza o Master Brief com positioning statement, messaging hierarchy, headlines candidatas, e GAP audit (🔴/🟡/🟢).

**Output:** Master Brief — documento estratégico que alimenta todas as fases seguintes.

---

### Fase 3 — Estratégia, Copy, CTA, Hooks (2 skills)

**Skills:** `lp-copywriter` ∥ `lp-page-architect` · **~15 min** · Automática

O `lp-copywriter` e o `lp-page-architect` trabalham em **paralelo**:

- **Copywriter**: escreve TODO o texto seção por seção com 7 frameworks psicológicos (PAS, BAB, Proof Stack, Risk Reversal...), gera 3 variantes A/B de headline e CTA, escreve microcopy completa.
- **Page Architect**: define estrutura via scroll psychology, wireframes ASCII, CTA map, specs de animação, e comportamento mobile completo por breakpoint.

**Output:** Copy Document + Page Blueprint

---

### Fase 4 — Design Phase (3 skills)

**Skills:** `lp-color-typography` → `lp-motion-system` → `lp-asset-system` · **~8-10 min** · Automática (sequencial)

Três skills especializados executam em sequência, cada um alimentando o próximo:

- **Color & Typography** (`lp-color-typography`): Classifica a estética, gera paleta completa com escalas 50-950, seleciona tipografia com `clamp()` fluido, define spacing/shadows/radius, e entrega CSS tokens + Tailwind config + component styles. Inclui 5 presets estéticos com CSS real (Obsidian, Aurora, Monolith, Warm, Neon).
- **Motion System** (`lp-motion-system`): Carrega timing preset baseado na classificação estética, define animações de entrada por seção, estados de interação (hover, focus, active), coreografia (stagger sequences), e fallbacks de reduced-motion.
- **Asset System** (`lp-asset-system`): Seleciona biblioteca de ícones, define backgrounds multi-layer por seção, composição do hero, e tratamentos de gradiente/glass — tudo como CSS copy-paste.

As skills de design têm **autoridade limitada** para solicitar alterações no Page Specification quando estritamente necessário (Design Override Protocol).

**Output:** Color & Typography System + Motion System + Asset System

---

### Fase 5 — Desenvolvimento Estrutural

**Skill:** `lp-page-builder` · **~10 min** · Automática

Gera um arquivo HTML ÚNICO, self-contained: todo CSS inline, todo JS inline (~5KB), zero dependências externas exceto Google Fonts. Implementa usando padrões prontos para 11 tipos de seção, navegação completa (desktop sticky + mobile hamburger), 5 padrões de form submission, e animações via IntersectionObserver.

**Output:** HTML v1 — production-ready, responsivo, acessível

---

### Fase 6 — Análise Crítica (2 skills)

**Skills:** `lp-page-qa` → `lp-expert-panel` · **~10 min** · Automática

O `lp-page-qa` roda ~65 checks em 7 categorias (content, structure, responsive, design system, performance, accessibility, interactions). Cada check é binário com 3 níveis de severidade e instruções de fix específicas.

O `lp-expert-panel` roda 6 especialistas simulados (CRO, Copy, Creative Direction, Frontend, Growth, Design Refinement) que geram feedback priorizado, consolidado em um Improvement Plan (P1/P2/P3).

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