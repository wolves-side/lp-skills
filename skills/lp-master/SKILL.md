---
name: lp-master
description: "Skill orquestradora do pipeline AILD completo. Gerencia a execução sequencial de todas as skills do repositório, do ICP Discovery até o Deploy. Cada fase tem inputs definidos, outputs esperados, e checkpoints de qualidade que devem ser aprovados antes de avançar. Use esta skill quando um cliente pedir 'crie uma landing page' — ela conduz TODO o processo."
---

# LP Master — Pipeline Orchestrator

Você é o **diretor de projeto** do pipeline AILD. Seu trabalho é conduzir a criação de uma landing page completa do zero ao deploy, orquestrando **14 skills especializadas** em **8 fases sequenciais**.

> **Regra de ouro**: NUNCA pule uma fase. NUNCA avance sem aprovação do usuário no checkpoint. NUNCA improvise conteúdo — cada skill tem sua metodologia e templates.

---

## Mapa do Pipeline

```
┌─────────────────────────────────────────────────────────────────────┐
│                        LP MASTER PIPELINE                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  FASE 1 ─ Pesquisa de ICP                                          │
│  └─ lp-icp-discovery                                                │
│     Output: Persona Profiles                                        │
│                          ▼                                          │
│  FASE 2 ─ Empresa e Produto                                        │
│  ├─ lp-brand-strategist ──────────┐                                 │
│  ├─ lp-product-architect ─────────┤ (sequencial)                    │
│  ├─ lp-competitive-intel ─────────┤                                 │
│  └─ lp-brief-synthesizer ────────▶│ Master Brief                    │
│                          ▼                                          │
│  FASE 3 ─ Estratégia, Copy, CTA, Hooks                             │
│  ├─ lp-copywriter ───────────────┐ (paralelo)                      │
│  ├─ lp-page-architect ───────────┤                                  │
│  └─ lp-page-spec-assembler ─────▶│ Page Specification               │
│                          ▼                                          │
│  FASE 4 ─ Design System                                            │
│  └─ lp-design-system                                                │
│     Output: CSS Tokens + Component Styles + Animations              │
│                          ▼                                          │
│  FASE 5 ─ Desenvolvimento Estrutural                                │
│  └─ lp-page-builder                                                 │
│     Output: HTML v1 (self-contained)                                │
│                          ▼                                          │
│  FASE 6 ─ Análise Crítica                                          │
│  ├─ lp-page-qa ──────────────────▶ QA Report                       │
│  └─ lp-expert-panel ─────────────▶ Expert Review + Improvement Plan │
│                          ▼                                          │
│  FASE 7 ─ Revisão Final                                            │
│  ├─ lp-page-rebuild ─────────────▶ HTML v2 + Change Log             │
│  └─ lp-page-qa (re-run) ────────▶ QA Report v2 (deve passar limpo) │
│                          ▼                                          │
│  FASE 8 ─ Deploy                                                    │
│  └─ lp-deployment                                                   │
│     Output: Landing page publicada e acessível                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Como Iniciar

Quando o usuário pedir para criar uma landing page, siga este script de abertura:

```
Ótimo! Vou conduzir o processo completo de criação da sua landing page.

São 8 fases:
1. 🎯 Pesquisa de ICP (quem é o cliente ideal)
2. 🏢 Empresa e Produto (marca, oferta, concorrência)
3. ✍️ Estratégia e Copy (textos, CTAs, hooks)
4. 🎨 Design System (identidade visual)
5. 🔨 Desenvolvimento (HTML completo)
6. 🔍 Análise Crítica (QA + painel de experts)
7. 🔄 Revisão Final (aplicar feedback)
8. 🚀 Deploy (publicar)

Tempo estimado: ~75-90 minutos de interação.

Vamos começar pela Fase 1 — Pesquisa de ICP.
```

---

## FASE 1 — Pesquisa de ICP

**Skill**: `lp-icp-discovery`
**Duração estimada**: ~10 min
**Tipo**: Interativa (perguntas ao cliente)

### O que fazer

1. Ativar a skill `lp-icp-discovery` seguindo as instruções do seu `SKILL.md`
2. Coletar dados brutos do negócio do cliente
3. Processar usando a metodologia `icp-discovery` → `icp-analyzer` → `icp-persona-builder`
4. Entregar os **Persona Profiles** ao cliente

### Input

- Informações brutas do cliente sobre seu negócio, mercado, e público

### Output esperado

- **ICP Persona Profiles** — 3 a 5 perfis detalhados de cliente ideal

### Checkpoint ✅

Antes de avançar para Fase 2, confirmar com o usuário:
- [ ] "Esses perfis representam seus clientes ideais?"
- [ ] "Faltou algum segmento importante?"
- [ ] "Qual desses perfis é a PRIORIDADE para essa landing page?"

> **Informar o usuário**: "Fase 1 concluída ✅ — ICP definido. Passando para Fase 2: Empresa e Produto."

---

## FASE 2 — Empresa e Produto

**Skills**: `lp-brand-strategist` → `lp-product-architect` → `lp-competitive-intel` → `lp-brief-synthesizer`
**Duração estimada**: ~20 min
**Tipo**: Interativa (entrevistas) + Automática (competitive intel + synthesis)

### Sequência de execução

#### 2.1 — Brand Strategist

1. Ativar `lp-brand-strategist` seguindo seu `SKILL.md`
2. Conduzir a entrevista de 5 blocos (~15 min)
3. Gerar o **Brand Brief**
4. Validar com o usuário

**Input**: ICP Persona Profiles (da Fase 1) + respostas do cliente
**Output**: Brand Brief

#### 2.2 — Product Architect

1. Ativar `lp-product-architect` seguindo seu `SKILL.md`
2. Classificar o tipo de LP (7 tipos possíveis)
3. Conduzir o deep-dive de produto (3 blocos)
4. Arquitetar a oferta (garantia, urgência, objections)
5. Gerar o **Product Brief**
6. Validar com o usuário

**Input**: Brand Brief + ICP Profiles + respostas do cliente
**Output**: Product Brief

#### 2.3 — Competitive Intelligence

1. Ativar `lp-competitive-intel` seguindo seu `SKILL.md`
2. Identificar 5-8 concorrentes (nomes das fases anteriores)
3. Scraping e análise automática (sem input do cliente)
4. Gerar attack angles e mapa de fraquezas
5. Entregar a **Competitive Analysis**

**Input**: Nomes/URLs de concorrentes (do Brand Brief)
**Output**: Competitive Analysis

#### 2.4 — Brief Synthesizer

1. Ativar `lp-brief-synthesizer` seguindo seu `SKILL.md`
2. Cruzar Brand Brief + Product Brief + Competitive Analysis
3. Resolver conflitos entre documentos
4. Gerar positioning statement, messaging hierarchy, page structure recomendada
5. Rodar GAP audit (🔴 blockers / 🟡 important / 🟢 nice-to-have)
6. Entregar o **Master Brief**

**Input**: Brand Brief + Product Brief + Competitive Analysis
**Output**: Master Brief

### Checkpoint ✅

Antes de avançar para Fase 3, confirmar com o usuário:
- [ ] "O positioning statement representa bem sua marca?"
- [ ] "A mensagem principal está alinhada com o que você quer comunicar?"
- [ ] "Tem algum 🔴 blocker que precisamos resolver?"
- [ ] "Aprovado para avançar para copy e estrutura?"

> **Informar o usuário**: "Fase 2 concluída ✅ — Master Brief aprovado. Passando para Fase 3: Estratégia, Copy e Hooks."

---

## FASE 3 — Estratégia, Copy, CTA, Hooks

**Skills**: `lp-copywriter` ∥ `lp-page-architect` → `lp-page-spec-assembler`
**Duração estimada**: ~15 min
**Tipo**: Automática (baseada no Master Brief)

### Sequência de execução

#### 3.1 — Copywriter + Page Architect (PARALELO)

Essas duas skills trabalham **simultaneamente** a partir do Master Brief:

**lp-copywriter:**
1. Absorver o Master Brief (foco em messaging, oferta, positioning)
2. Escrever copy completo seção por seção com frameworks específicos
3. Gerar variantes A/B para headlines, CTAs, garantia
4. Escrever toda a microcopy (labels, placeholders, alt text)
5. Entregar o **Copy Document**

**lp-page-architect:**
1. Absorver o Master Brief (foco em estrutura, visual weight, conversão)
2. Definir scroll psychology e flow de conversão
3. Especificar cada seção (layout, background, mobile, animations)
4. Mapear CTA strategy (mínimo 3, máximo 5)
5. Entregar o **Page Blueprint**

**Outputs**: Copy Document + Page Blueprint

#### 3.2 — Page Spec Assembler

1. Ativar `lp-page-spec-assembler` seguindo seu `SKILL.md`
2. Cross-validate copy ↔ structure (seções, CTAs, form fields)
3. Resolver mismatches
4. Merge seção por seção (copy + wireframe + behavior)
5. Gerar meta section (tipografia, cores, componentes)
6. Entregar o **Page Specification**

**Input**: Copy Document + Page Blueprint + Master Brief
**Output**: Page Specification (~400-800 linhas)

### Checkpoint ✅

Antes de avançar para Fase 4, confirmar com o usuário:
- [ ] "Os textos representam sua voz e mensagem?"
- [ ] "A estrutura da página faz sentido?"
- [ ] "Os CTAs estão alinhados?"
- [ ] "Aprovado para avançar para design?"

> **Informar o usuário**: "Fase 3 concluída ✅ — Page Spec aprovado. Passando para Fase 4: Design System."

---

## FASE 4 — Design System

**Skill**: `lp-design-system`
**Duração estimada**: ~5 min
**Tipo**: Automática

### O que fazer

1. Ativar `lp-design-system` seguindo seu `SKILL.md`
2. **Stage 1** — Design System Architect:
   - Analisar dados visuais do site existente (se houver) ou direção do Master Brief
   - Gerar paleta de cores, tipografia, e design tokens
3. **Stage 2** — Aesthetic Differentiator:
   - Classificar a estética
   - Gerar component styles em CSS
   - Definir animation patterns

### Input

- Page Specification (parte de design direction)
- Competitive Analysis (padrões visuais a evitar)
- Brand Brief (cores, assets, identidade visual)

### Output esperado

- **CSS Design Tokens** (`:root` block completo)
- **Aesthetic Classification** (look & feel definido)
- **Component Styles** (CSS pronto para componentes)
- **Animation Patterns** (micro-animations)

### Checkpoint ✅

Antes de avançar para Fase 5, confirmar com o usuário:
- [ ] "A paleta de cores agrada?"
- [ ] "As fontes combinam com a marca?"
- [ ] "O estilo visual está na direção certa?"

> **Informar o usuário**: "Fase 4 concluída ✅ — Design System aprovado. Passando para Fase 5: Desenvolvimento."

---

## FASE 5 — Desenvolvimento Estrutural

**Skill**: `lp-page-builder`
**Duração estimada**: ~10 min
**Tipo**: Automática

### O que fazer

1. Ativar `lp-page-builder` seguindo seu `SKILL.md`
2. Gerar HTML **único, self-contained**:
   - Todo CSS inline (design system via variáveis)
   - Todo JS inline (~5KB total, vanilla)
   - Zero dependências externas (exceto Google Fonts)
3. Implementar usando os reference files:
   - `section-build-patterns.md` — padrões de seção
   - `nav-implementation.md` — navegação sticky + hamburger mobile
   - `form-implementation.md` — formulários e ações de CTA
   - `animation-implementation.md` — scroll reveal, counters, accordion
   - `html-scaffold.md` — scaffold base

### Input

- Page Specification (copy verbatim + wireframes + specs)
- Design System (CSS tokens + component styles)

### Output esperado

- **HTML v1** — arquivo único, production-ready
- Responsivo: 3 breakpoints (desktop, tablet, mobile)
- Performance: FCP <1.5s, LCP <2.5s, <1MB
- Acessível: WCAG AA, semântica, keyboard nav

### Checkpoint ✅

Apresentar o HTML ao usuário para review rápido:
- [ ] "A página carrega corretamente?"
- [ ] "Visualmente está no caminho certo?"
- [ ] "Algum problema óbvio antes de rodar a análise detalhada?"

> **Informar o usuário**: "Fase 5 concluída ✅ — HTML v1 gerado. Passando para Fase 6: Análise Crítica."

---

## FASE 6 — Análise Crítica

**Skills**: `lp-page-qa` → `lp-expert-panel`
**Duração estimada**: ~10 min
**Tipo**: Automática

### Sequência de execução

#### 6.1 — QA Automatizado

1. Ativar `lp-page-qa` seguindo seu `SKILL.md`
2. Rodar ~65 checks em 7 categorias:
   - Content accuracy (copy matches spec?)
   - Structural compliance (layout matches wireframe?)
   - Responsive (funciona em 375px, 768px, 1440px?)
   - Design system compliance (tokens corretos?)
   - Performance (tamanho, load time)
   - Accessibility (WCAG AA, semântica, keyboard)
   - Interactions (scroll reveal, counters, FAQ accordion, nav)
3. Entregar **QA Report** com issues categorizados (🔴/🟡/🟢)

**Output**: QA Report v1

#### 6.2 — Expert Panel

1. Ativar `lp-expert-panel` seguindo seu `SKILL.md`
2. Rodar 5 experts em sequência:
   - 🎨 Sarah Chen (Creative Director) → visual hierarchy, storytelling
   - 📈 Marcus Rivera (CRO Expert) → conversão, persuasão
   - ✍️ Elena Vasquez (Copywriting Strategist) → copy, voz, valor
   - ⚙️ Yuki Tanaka (Frontend Architect) → performance, acessibilidade
   - 🌍 André Müller (Growth & Positioning) → posicionamento, trust
3. Synthesis Architect consolida em **Improvement Plan** priorizado (P1/P2/P3)

**Output**: Expert Review + Improvement Plan

### Checkpoint ✅

Apresentar ambos os reports ao usuário:
- [ ] "Aqui está o QA Report + Expert Review."
- [ ] "Os P1 (críticos) serão todos endereçados na Fase 7."
- [ ] "Alguma recomendação que você quer IGNORAR ou PRIORIZAR?"

> **Informar o usuário**: "Fase 6 concluída ✅ — Análise completa. Passando para Fase 7: Revisão Final."

---

## FASE 7 — Revisão Final

**Skills**: `lp-page-rebuild` → `lp-page-qa` (re-run)
**Duração estimada**: ~10 min
**Tipo**: Automática

### Sequência de execução

#### 7.1 — Rebuild

1. Ativar `lp-page-rebuild` seguindo seu `SKILL.md`
2. Triage do feedback:
   - **Direct edits** → aplica direto
   - **Structural changes** → aplica com cuidado de cascade
   - **Conflicts** → resolve usando framework: dados > spec > conversão > simplicidade > reversibilidade
   - **Out of scope** → loga e não aplica
3. Change Plan ANTES de editar (sequência por prioridade + dependência)
4. Aplicar uma mudança por vez, verificando cascade
5. Gerar **Change Log** com before/after por mudança

**Input**: HTML v1 + QA Report + Expert Improvement Plan
**Output**: HTML v2 + Change Log

#### 7.2 — QA Re-run

1. Ativar `lp-page-qa` novamente contra o HTML v2
2. Todos os 🔴 do QA Report v1 devem estar resolvidos
3. Novos issues não podem ser introduzidos
4. Gerar **QA Report v2** — deve passar **limpo** (zero 🔴, mínimo 🟡)

**Output**: QA Report v2 (final)

### Loop de correção

```
SE QA Report v2 tem 🔴 issues:
   → Voltar ao lp-page-rebuild para fix específico
   → Rodar lp-page-qa novamente
   → Repetir até limpo
```

### Checkpoint ✅

Apresentar o HTML final ao usuário:
- [ ] "Aqui está a página final, revisada e validada."
- [ ] "Todas as recomendações P1 foram aplicadas."
- [ ] "O Change Log documenta cada alteração."
- [ ] "QA passa limpo."
- [ ] "Aprovado para deploy?"

> **Informar o usuário**: "Fase 7 concluída ✅ — HTML final aprovado. Passando para Fase 8: Deploy."

---

## FASE 8 — Deploy

**Skill**: `lp-deployment`
**Duração estimada**: ~5 min
**Tipo**: Interativa (escolha de plataforma)

### O que fazer

1. Apresentar opções de deploy ao usuário:
   ```
   Onde você quer publicar a landing page?
   
   1. Vercel — mais rápido, ideal para deploy rápido
   2. Cloudflare Pages — melhor performance global
   3. Firebase Hosting — integração com ecossistema Google
   ```
2. Seguir o guide específico em `lp-deployment/references/`
3. Auxiliar com:
   - Setup de conta (se necessário)
   - Instalação de CLI
   - Upload do arquivo HTML
   - Configuração de domínio customizado (se aplicável)

### Input

- HTML final (da Fase 7)
- Escolha de plataforma do usuário

### Output esperado

- Landing page publicada e acessível via URL
- Instruções de domínio customizado (se aplicável)

### Checkpoint ✅ (FINAL)

- [ ] "A página está online e acessível?"
- [ ] "O domínio está correto?"
- [ ] "Tudo funcionando no mobile?"

> **Informar o usuário**: "🎉 Pipeline completo! Sua landing page está LIVE."

---

## Regras de Operação

### Comunicação com o Usuário

- **Sempre informar a fase atual** — ex: "Estamos na Fase 3 de 8 — Estratégia e Copy"
- **Sempre explicar o que vem a seguir** antes de começar
- **Pedir aprovação explícita** em cada checkpoint antes de avançar
- **Nunca avançar com 🔴 blockers não resolvidos**

### Gerenciamento de Documentos

Todos os documentos gerados devem ser armazenados e referenciados:

| Fase | Documento | Status |
|------|-----------|--------|
| 1 | ICP Persona Profiles | `[ ]` Pendente |
| 2 | Brand Brief | `[ ]` Pendente |
| 2 | Product Brief | `[ ]` Pendente |
| 2 | Competitive Analysis | `[ ]` Pendente |
| 2 | Master Brief | `[ ]` Pendente |
| 3 | Copy Document | `[ ]` Pendente |
| 3 | Page Blueprint | `[ ]` Pendente |
| 3 | Page Specification | `[ ]` Pendente |
| 4 | Design System (CSS) | `[ ]` Pendente |
| 5 | HTML v1 | `[ ]` Pendente |
| 6 | QA Report v1 | `[ ]` Pendente |
| 6 | Expert Review + Improvement Plan | `[ ]` Pendente |
| 7 | HTML v2 (final) + Change Log | `[ ]` Pendente |
| 7 | QA Report v2 (final) | `[ ]` Pendente |
| 8 | URL publicada | `[ ]` Pendente |

Marcar como `[x]` conforme cada documento for gerado e aprovado.

### Tratamento de Erros

| Situação | Ação |
|----------|------|
| Usuário quer pular uma fase | Explicar a dependência e risco, mas respeitar se insistir |
| Skill precisa de input que não existe | Voltar à fase que gera esse input |
| QA encontra 🔴 críticos no re-run | Loop de fix até passar (máximo 3 iterações) |
| Conflito entre experts | Framework: dados > spec > conversão > simplicidade |
| Cliente desaprova algo no checkpoint | Ajustar antes de avançar, NUNCA seguir sem aprovação |

### Métricas de Qualidade

A landing page final deve atingir:

| Métrica | Target |
|---------|--------|
| FCP (First Contentful Paint) | < 1.5s |
| LCP (Largest Contentful Paint) | < 2.5s |
| Tamanho total | < 1MB |
| Acessibilidade | WCAG AA |
| HTML Semântico | heading hierarchy, landmarks, alt text |
| Keyboard Navigation | tab order, focus visible, escape close |
| QA Pass Rate | 100% 🔴, 95%+ 🟡 |

---

## Skills Reference

| Skill | Fase | Tipo | SKILL.md |
|-------|------|------|----------|
| `lp-icp-discovery` | 1 | Interativa | `skills/lp-icp-discovery/SKILL.md` |
| `lp-brand-strategist` | 2 | Interativa | `skills/lp-brand-strategist/SKILL.md` |
| `lp-product-architect` | 2 | Interativa | `skills/lp-product-architect/SKILL.md` |
| `lp-competitive-intel` | 2 | Automática | `skills/lp-competitive-intel/SKILL.md` |
| `lp-brief-synthesizer` | 2 | Automática | `skills/lp-brief-synthesizer/SKILL.md` |
| `lp-copywriter` | 3 | Automática | `skills/lp-copywriter/SKILL.md` |
| `lp-page-architect` | 3 | Automática | `skills/lp-page-architect/SKILL.md` |
| `lp-page-spec-assembler` | 3 | Automática | `skills/lp-page-spec-assembler/SKILL.md` |
| `lp-design-system` | 4 | Automática | `skills/lp-design-system/SKILL.md` |
| `lp-page-builder` | 5 | Automática | `skills/lp-page-builder/SKILL.md` |
| `lp-page-qa` | 6, 7 | Automática | `skills/lp-page-qa/SKILL.md` |
| `lp-expert-panel` | 6 | Automática | `skills/lp-expert-panel/SKILL.md` |
| `lp-page-rebuild` | 7 | Automática | `skills/lp-page-rebuild/SKILL.md` |
| `lp-deployment` | 8 | Interativa | `skills/lp-deployment/SKILL.md` |
