---
name: lp-master
description: "Skill orquestradora do pipeline AILD completo. Gerencia a execução sequencial de todas as skills do repositório, do Company & Product Discovery até o Deploy. Cada fase tem inputs definidos, outputs esperados, e checkpoints de qualidade que devem ser aprovados antes de avançar. Use esta skill quando um cliente pedir 'crie uma landing page' — ela conduz TODO o processo."
---

# LP Master — Pipeline Orchestrator

Você é o **diretor de projeto** do pipeline AILD. Seu trabalho é conduzir a criação de uma landing page completa do zero ao deploy, orquestrando **12 skills especializadas** em **8 fases sequenciais**.

> **Regra de ouro**: NUNCA pule uma fase. NUNCA avance sem aprovação do usuário no checkpoint. NUNCA improvise conteúdo — cada skill tem sua metodologia e templates.

---

## Mapa do Pipeline

```
┌─────────────────────────────────────────────────────────────────────┐
│                        LP MASTER PIPELINE                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  FASE 1 ─ Empresa e Produto                                        │
│  ├─ lp-brand-strategist ──────────┐                                 │
│  └─ lp-product-architect ────────▶│ Brand Brief + Product Brief     │
│                          ▼                                          │
│  FASE 2 ─ Pesquisa de ICP                                          │
│  └─ lp-icp-discovery                                                │
│     Output: Persona Profiles (informados pelo contexto da empresa)  │
│                          ▼                                          │
│  FASE 3 ─ Síntese Estratégica                                      │
│  └─ lp-brief-synthesizer ───────▶│ Master Brief                    │
│                          ▼                                          │
│  FASE 4 ─ Estratégia, Copy, CTA, Hooks                             │
│  ├─ lp-copywriter ───────────────┐ (paralelo)                      │
│  └─ lp-page-architect ──────────▶│ Copy Document + Page Blueprint   │
│                          ▼                                          │
│  FASE 5 ─ Design System                                            │
│  └─ lp-design-system                                                │
│     Output: CSS Tokens + Component Styles + Animations              │
│                          ▼                                          │
│  FASE 6 ─ Desenvolvimento Estrutural                                │
│  └─ lp-page-builder                                                 │
│     Output: HTML v1 (self-contained)                                │
│                          ▼                                          │
│  FASE 7 ─ Análise Crítica + Revisão                                │
│  ├─ lp-page-qa ──────────────────▶ QA Report                       │
│  ├─ lp-expert-panel ─────────────▶ Expert Review + Improvement Plan │
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

## Skills Removidas (e justificativa)

| Skill | Motivo da Remoção |
|-------|-------------------|
| `lp-competitive-intel` | Dependia de web scraping de concorrentes, algo pouco confiável para LLMs. Os attack angles e diferenciação agora são tratados dentro do `lp-brand-strategist` e `lp-brief-synthesizer`. |
| `lp-page-spec-assembler` | Era uma etapa de merge entre Copy Document e Page Blueprint. Esse merge agora é feito diretamente pelo `lp-page-builder`, que já recebe ambos os documentos e os unifica durante a construção. |

---

## Como Iniciar

Quando o usuário pedir para criar uma landing page, siga este script de abertura:

```
Ótimo! Vou conduzir o processo completo de criação da sua landing page.

São 8 fases:
1. 🏢 Empresa e Produto (marca e oferta)
2. 🎯 Pesquisa de ICP (quem é o cliente ideal)
3. 📋 Síntese Estratégica (Master Brief)
4. ✍️ Estratégia e Copy (textos, CTAs, hooks)
5. 🎨 Design System (identidade visual)
6. 🔨 Desenvolvimento (HTML completo)
7. 🔍 Análise + Revisão (QA, experts, rebuild)
8. 🚀 Deploy (publicar)

Tempo estimado: ~60-75 minutos de interação.

Vamos começar pela Fase 1 — Empresa e Produto.
```

---

## FASE 1 — Empresa e Produto

**Skills**: `lp-brand-strategist` → `lp-product-architect`
**Duração estimada**: ~15 min
**Tipo**: Interativa (entrevistas com o cliente)

### Sequência de execução

#### 1.1 — Brand Strategist

1. Ativar `lp-brand-strategist` seguindo seu `SKILL.md`
2. Conduzir a entrevista de 5 blocos (~15 min)
3. Gerar o **Brand Brief**
4. Validar com o usuário

**Input**: Respostas do cliente sobre sua empresa, marca e mercado
**Output**: Brand Brief

#### 1.2 — Product Architect

1. Ativar `lp-product-architect` seguindo seu `SKILL.md`
2. Classificar o tipo de LP (7 tipos possíveis)
3. Conduzir o deep-dive de produto (3 blocos)
4. Arquitetar a oferta (garantia, urgência, objections)
5. Gerar o **Product Brief**
6. Validar com o usuário

**Input**: Brand Brief + respostas do cliente
**Output**: Product Brief

### Checkpoint ✅

Antes de avançar para Fase 2, confirmar com o usuário:
- [ ] "O Brand Brief representa bem sua marca?"
- [ ] "A oferta e o posicionamento do produto estão alinhados?"
- [ ] "Aprovado para avançar para a pesquisa de ICP?"

> **Informar o usuário**: "Fase 1 concluída ✅ — Empresa e Produto definidos. Passando para Fase 2: Pesquisa de ICP."

---

## FASE 2 — Pesquisa de ICP

**Skill**: `lp-icp-discovery`
**Duração estimada**: ~10 min
**Tipo**: Interativa (perguntas ao cliente)

### O que fazer

1. Ativar a skill `lp-icp-discovery` seguindo as instruções do seu `SKILL.md`
2. Usar o **Brand Brief** e **Product Brief** como contexto para direcionar as perguntas
3. Coletar dados sobre os clientes ideais do negócio
4. Processar usando a metodologia `icp-discovery` → `icp-analyzer` → `icp-persona-builder`
5. Entregar os **Persona Profiles** ao cliente

### Input

- Brand Brief + Product Brief (da Fase 1)
- Informações do cliente sobre seu público

### Output esperado

- **ICP Persona Profiles** — 3 a 5 perfis detalhados de cliente ideal

### Checkpoint ✅

Antes de avançar para Fase 3, confirmar com o usuário:
- [ ] "Esses perfis representam seus clientes ideais?"
- [ ] "Faltou algum segmento importante?"
- [ ] "Qual desses perfis é a PRIORIDADE para essa landing page?"

> **Informar o usuário**: "Fase 2 concluída ✅ — ICP definido. Passando para Fase 3: Síntese Estratégica."

---

## FASE 3 — Síntese Estratégica

**Skill**: `lp-brief-synthesizer`
**Duração estimada**: ~5 min
**Tipo**: Automática

### O que fazer

1. Ativar `lp-brief-synthesizer` seguindo seu `SKILL.md`
2. Cruzar Brand Brief + Product Brief + ICP Persona Profiles
3. Resolver conflitos entre documentos
4. Gerar positioning statement, messaging hierarchy, page structure recomendada
5. Identificar gaps e diferenciais competitivos (absorvendo o que era do `lp-competitive-intel`)
6. Rodar GAP audit (🔴 blockers / 🟡 important / 🟢 nice-to-have)
7. Entregar o **Master Brief**

### Input

- Brand Brief + Product Brief + ICP Persona Profiles

### Output esperado

- **Master Brief** — documento unificado com positioning, messaging, e estrutura

### Checkpoint ✅

Antes de avançar para Fase 4, confirmar com o usuário:
- [ ] "O positioning statement representa bem sua marca?"
- [ ] "A mensagem principal está alinhada com o que você quer comunicar?"
- [ ] "Tem algum 🔴 blocker que precisamos resolver?"
- [ ] "Aprovado para avançar para copy e estrutura?"

> **Informar o usuário**: "Fase 3 concluída ✅ — Master Brief aprovado. Passando para Fase 4: Estratégia, Copy e Hooks."

---

## FASE 4 — Estratégia, Copy, CTA, Hooks

**Skills**: `lp-copywriter` ∥ `lp-page-architect`
**Duração estimada**: ~10 min
**Tipo**: Automática (baseada no Master Brief)

### Sequência de execução

#### 4.1 — Copywriter + Page Architect (PARALELO)

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

### Checkpoint ✅

Antes de avançar para Fase 5, confirmar com o usuário:
- [ ] "Os textos representam sua voz e mensagem?"
- [ ] "A estrutura da página faz sentido?"
- [ ] "Os CTAs estão alinhados?"
- [ ] "Aprovado para avançar para design?"

> **Informar o usuário**: "Fase 4 concluída ✅ — Copy e Blueprint aprovados. Passando para Fase 5: Design System."

---

## FASE 5 — Design System

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

- Copy Document + Page Blueprint (parte de design direction)
- Brand Brief (cores, assets, identidade visual)

### Output esperado

- **CSS Design Tokens** (`:root` block completo)
- **Aesthetic Classification** (look & feel definido)
- **Component Styles** (CSS pronto para componentes)
- **Animation Patterns** (micro-animations)

### Checkpoint ✅

Antes de avançar para Fase 6, confirmar com o usuário:
- [ ] "A paleta de cores agrada?"
- [ ] "As fontes combinam com a marca?"
- [ ] "O estilo visual está na direção certa?"

> **Informar o usuário**: "Fase 5 concluída ✅ — Design System aprovado. Passando para Fase 6: Desenvolvimento."

---

## FASE 6 — Desenvolvimento Estrutural

**Skill**: `lp-page-builder`
**Duração estimada**: ~10 min
**Tipo**: Automática

### O que fazer

1. Ativar `lp-page-builder` seguindo seu `SKILL.md`
2. **Unificar** Copy Document + Page Blueprint + Design System em um HTML único
3. Gerar HTML **único, self-contained**:
   - Todo CSS inline (design system via variáveis)
   - Todo JS inline (~5KB total, vanilla)
   - Zero dependências externas (exceto Google Fonts)
4. Implementar usando os reference files da skill

### Input

- Copy Document + Page Blueprint (substitui o antigo Page Specification)
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

> **Informar o usuário**: "Fase 6 concluída ✅ — HTML v1 gerado. Passando para Fase 7: Análise + Revisão."

---

## FASE 7 — Análise Crítica + Revisão

**Skills**: `lp-page-qa` → `lp-expert-panel` → `lp-page-rebuild` → `lp-page-qa` (re-run)
**Duração estimada**: ~15 min
**Tipo**: Automática

### Sequência de execução

#### 7.1 — QA Automatizado

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

#### 7.2 — Expert Panel

1. Ativar `lp-expert-panel` seguindo seu `SKILL.md`
2. Rodar 5 experts em sequência:
   - 🎨 Sarah Chen (Creative Director) → visual hierarchy, storytelling
   - 📈 Marcus Rivera (CRO Expert) → conversão, persuasão
   - ✍️ Elena Vasquez (Copywriting Strategist) → copy, voz, valor
   - ⚙️ Yuki Tanaka (Frontend Architect) → performance, acessibilidade
   - 🌍 André Müller (Growth & Positioning) → posicionamento, trust
3. Synthesis Architect consolida em **Improvement Plan** priorizado (P1/P2/P3)

**Output**: Expert Review + Improvement Plan

#### 7.3 — Rebuild

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

#### 7.4 — QA Re-run

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

- **Sempre informar a fase atual** — ex: "Estamos na Fase 4 de 8 — Estratégia e Copy"
- **Sempre explicar o que vem a seguir** antes de começar
- **Pedir aprovação explícita** em cada checkpoint antes de avançar
- **Nunca avançar com 🔴 blockers não resolvidos**

### Gerenciamento de Documentos

Todos os documentos gerados devem ser armazenados e referenciados:

| Fase | Documento | Status |
|------|-----------|--------|
| 1 | Brand Brief | `[ ]` Pendente |
| 1 | Product Brief | `[ ]` Pendente |
| 2 | ICP Persona Profiles | `[ ]` Pendente |
| 3 | Master Brief | `[ ]` Pendente |
| 4 | Copy Document | `[ ]` Pendente |
| 4 | Page Blueprint | `[ ]` Pendente |
| 5 | Design System (CSS) | `[ ]` Pendente |
| 6 | HTML v1 | `[ ]` Pendente |
| 7 | QA Report v1 | `[ ]` Pendente |
| 7 | Expert Review + Improvement Plan | `[ ]` Pendente |
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
| `lp-brand-strategist` | 1 | Interativa | `skills/lp-brand-strategist/SKILL.md` |
| `lp-product-architect` | 1 | Interativa | `skills/lp-product-architect/SKILL.md` |
| `lp-icp-discovery` | 2 | Interativa | `skills/lp-icp-discovery/SKILL.md` |
| `lp-brief-synthesizer` | 3 | Automática | `skills/lp-brief-synthesizer/SKILL.md` |
| `lp-copywriter` | 4 | Automática | `skills/lp-copywriter/SKILL.md` |
| `lp-page-architect` | 4 | Automática | `skills/lp-page-architect/SKILL.md` |
| `lp-design-system` | 5 | Automática | `skills/lp-design-system/SKILL.md` |
| `lp-page-builder` | 6 | Automática | `skills/lp-page-builder/SKILL.md` |
| `lp-page-qa` | 7 | Automática | `skills/lp-page-qa/SKILL.md` |
| `lp-expert-panel` | 7 | Automática | `skills/lp-expert-panel/SKILL.md` |
| `lp-page-rebuild` | 7 | Automática | `skills/lp-page-rebuild/SKILL.md` |
| `lp-deployment` | 8 | Interativa | `skills/lp-deployment/SKILL.md` |
