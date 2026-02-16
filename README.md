# AILD â€” AI Landing Page Design Pipeline

## O que Ã© isso

Um sistema de 10 Claude Skills que transforma uma conversa com um cliente em uma landing page completa, profissional, responsiva e otimizada para conversÃ£o â€” sem templates genÃ©ricos, sem Figma, sem developer humano no meio.

O pipeline inteiro roda dentro do Claude. Cada skill Ã© um agente especialista que recebe um input estruturado, executa seu trabalho, e entrega um output que alimenta o prÃ³ximo agente. Do briefing ao HTML final, passando por copy, arquitetura, design, build, review e rebuild.

**10 skills | 36 arquivos | 405KB | ~75 min de execuÃ§Ã£o completa**

---

## Por que existe

Landing pages sÃ£o o gargalo de qualquer funil digital. O processo tradicional envolve: briefing com o cliente (1-2 reuniÃµes), copywriter (3-5 dias), designer (3-5 dias), developer (3-5 dias), revisÃ£o (mais 3-5 dias). Total: 2-4 semanas e R$5-15K por pÃ¡gina.

O AILD comprime isso em ~75 minutos de interaÃ§Ã£o com o Claude, mantendo (e em muitos casos superando) a qualidade do processo tradicional. NÃ£o porque corta corners â€” porque elimina os handoffs, mal-entendidos e retrabalho que consomem 80% do tempo.

A diferenÃ§a fundamental: cada agente do pipeline tem acesso ao contexto COMPLETO do projeto. O copywriter sabe o que a anÃ¡lise competitiva encontrou. O builder sabe exatamente o que o architect especificou. O QA sabe contra o que validar. Nenhum profissional humano em um time fragmentado tem essa visÃ£o integrada.

---

## As Fases

### Phase 0 â€” Intake (4 skills)

**Objetivo:** Extrair TUDO que o pipeline precisa saber sobre a marca, o produto e o mercado.

**Como funciona:**

O `lp-brand-strategist` conduz uma entrevista de ~15 minutos com o cliente, organizada em 5 blocos: identidade, histÃ³ria do fundador, diferenciaÃ§Ã£o, voz da marca e prova social. NÃ£o faz perguntas genÃ©ricas â€” tem "pressure questions" pra quando o cliente dÃ¡ respostas vagas. Se alguÃ©m diz "somos inovadores", o skill empurra: "inovadores comparado a quem? O que vocÃª faz que eles literalmente nÃ£o conseguem?"

O `lp-product-architect` mapeia o produto/serviÃ§o em profundidade. Classifica o tipo de LP (sÃ£o 7: venda de serviÃ§o, venda direta, captura de lead, evento, waitlist, comunidade, portfÃ³lio) e cada tipo dispara perguntas diferentes. O diferencial real estÃ¡ na arquitetura de oferta: o skill desafia garantias fracas, sugere price anchoring, mapeia objeÃ§Ãµes com respostas prontas, e extrai a transformaÃ§Ã£o BEFOREâ†’AFTERâ†’PROOFâ†’MECHANISM.

O `lp-competitive-intel` Ã© o Ãºnico agente 100% automatizado do intake. Recebe os nomes/URLs dos concorrentes (extraÃ­dos nas entrevistas anteriores ou via busca) e scrapa as landing pages deles. Analisa padrÃµes de copy, visual, oferta, e gera "attack angles" â€” nÃ£o apenas "o que eles fazem" mas "como explorar o que eles NÃƒO fazem". Se todos usam glassmorphism, a recomendaÃ§Ã£o Ã© ir pro editorial minimalism.

O `lp-brief-synthesizer` pega os 3 documentos (Brand Brief, Product Brief, Competitive Analysis) e sintetiza o Master Brief. NÃ£o Ã© um merge â€” Ã© uma sÃ­ntese que gera coisas NOVAS: um positioning statement que nÃ£o existe em nenhum input individual, uma messaging hierarchy, 5 candidate headlines, e um GAP audit com 3 nÃ­veis de prioridade (ðŸ”´ blockers, ðŸŸ¡ important, ðŸŸ¢ nice-to-have).

**Output:** Master Brief â€” o documento estratÃ©gico que alimenta todas as fases seguintes.

---

### Phase 1 â€” Strategy & Positioning (3 skills)

**Objetivo:** Transformar o Master Brief em copy real e especificaÃ§Ã£o estrutural completa.

**Como funciona:**

O `lp-copywriter` e o `lp-page-architect` trabalham em PARALELO (economiza metade do tempo vs. sequencial).

O copywriter escreve TODO o texto da pÃ¡gina, seÃ§Ã£o por seÃ§Ã£o. NÃ£o sÃ£o "sugestÃµes de headline" â€” sÃ£o parÃ¡grafos completos, CTAs com microcopy, FAQ com respostas detalhadas, alt text pra imagens. Cada seÃ§Ã£o tem um framework psicolÃ³gico especÃ­fico: PAS (Problem-Agitation-Solution) pra seÃ§Ã£o de problema, BAB (Before-After-Bridge) pra soluÃ§Ã£o, Proof Stack pra credibilidade, Risk Reversal pra closing. SÃ£o 7 frameworks, cada um adaptado ao papel da seÃ§Ã£o. Gera 3 variantes de headline com Ã¢ngulos diferentes (resultado, dor, mecanismo) e 3 variantes de CTA â€” nÃ£o por indecisÃ£o, mas pra teste A/B estratÃ©gico.

O page architect define a estrutura com um modelo de scroll psychology que mapeia o estado mental do visitante em cada % de scroll (0% = "o que Ã© isso?", 40% = "prove", 85% = "qual Ã© a oferta?"). Produz wireframes ASCII pra cada seÃ§Ã£o, CTA map com posiÃ§Ãµes estratÃ©gicas, specs de animaÃ§Ã£o, e comportamento mobile COMPLETO â€” nÃ£o "mobile-friendly" genÃ©rico, mas "no 375px o hero faz isso, a tabela vira cards, o CTA fica full-width".

O `lp-page-spec-assembler` cruza os dois documentos, detecta mismatches (copywriter escreveu 8 FAQs mas architect especificou accordion com 5?), resolve conflitos, e gera o Page Specification â€” o documento Ãºnico e executÃ¡vel que as fases de execuÃ§Ã£o consomem.

**Output:** Page Specification â€” copy verbatim + wireframes + mobile specs + animation specs + form specs + tudo que builder e designer precisam, sem decisÃµes pendentes.

---

### Phase 2 â€” Design System (skill set separado)

**Objetivo:** Transformar a direÃ§Ã£o visual abstrata em CSS concreto.

Transforma "editorial minimalism, bold typography, electric blue accent" em custom properties, component styles, paleta de cores com contraste validado, tipografia com pares de fontes selecionados, e sistema de spacing. Cada cliente recebe um design system ÃšNICO â€” a anÃ¡lise competitiva identificou padrÃµes visuais pra evitar, e o design system quebra esses padrÃµes de propÃ³sito.

**Output:** CSS tokens + component styles prontos pra colar no HTML.

---

### Phase 3 â€” Page Build (2 skills)

**Objetivo:** Gerar HTML funcional e validar contra o spec.

**Como funciona:**

O `lp-page-builder` Ã© o skill mais pesado do pipeline (315L de SKILL.md + 5 reference files com ~2000L de cÃ³digo copy-paste). Gera um arquivo HTML ÃšNICO, self-contained: todo CSS inline, todo JS inline, zero dependÃªncias externas exceto Google Fonts. Vanilla JS only (~5KB total). O builder nÃ£o interpreta, nÃ£o improvisa, nÃ£o "melhora" â€” copia o copy verbatim do spec, implementa os wireframes exatamente como especificados, e aplica o design system via variÃ¡veis CSS.

Os reference files contÃªm padrÃµes prontos pra cada tipo de seÃ§Ã£o (hero split, hero centered, problem narrative, problem cards, proof metrics+cases, features grid, offer card, FAQ accordion, testimonials, comparison table, final CTA), navegaÃ§Ã£o completa (desktop sticky transparentâ†’sÃ³lido + mobile hamburger com overlay + scroll lock + Escape close), 5 padrÃµes de form submission (WhatsApp redirect, API webhook, Calendly embed, mailto, Google Forms), e todas as animaÃ§Ãµes (IntersectionObserver scroll reveal, number counters com easing, FAQ accordion nativo + enhanced).

O `lp-page-qa` roda ~65 checks em 7 categorias: content accuracy, structural compliance, responsive, design system compliance, performance, accessibility, e interactions. Cada check Ã© binÃ¡rio (pass/fail) com 3 nÃ­veis de severidade (ðŸ”´ critical, ðŸŸ¡ warning, ðŸŸ¢ low) e instruÃ§Ãµes de fix ESPECÃFICAS â€” nÃ£o "responsivo quebrado" mas "Hero CTA abaixo do fold em 375px â†’ reduzir padding-top do hero de var(--space-32) para var(--space-20) no breakpoint mobile".

**Output:** HTML production-ready + QA Report. Loop de fix atÃ© QA passar limpo.

---

### Phase 4 â€” Expert Panel (skill set separado)

**Objetivo:** Review multi-perspectiva por especialistas simulados.

Painel de especialistas (CRO, copywriter, UX, brand) avalia a pÃ¡gina construÃ­da contra o Master Brief original. Cada especialista tem lente diferente e gera feedback priorizado.

**Output:** Expert Review Document com recomendaÃ§Ãµes categorizadas.

---

### Phase 5 â€” Rebuild (1 skill)

**Objetivo:** Aplicar o feedback do Expert Panel de forma cirÃºrgica, sem quebrar o que funciona.

**Como funciona:**

O `lp-page-rebuild` nÃ£o Ã© "refaz a pÃ¡gina". Ã‰ um sistema de triage + execuÃ§Ã£o controlada:

1. Categoriza TODO o feedback em 4 buckets: direct edits (aplica), structural changes (aplica com cuidado), conflicts (resolve antes), out of scope (loga e nÃ£o aplica).

2. Resolve conflitos entre experts com framework de prioridade: dados > spec > conversÃ£o > simplicidade > reversibilidade.

3. Cria Change Plan ANTES de tocar em cÃ³digo â€” sequencia por prioridade e dependÃªncia.

4. Aplica uma mudanÃ§a por vez, verificando cascade (responsive, anchors, heading hierarchy) apÃ³s cada edit.

5. Gera Change Log documentando cada mudanÃ§a com before/after, qual expert pediu, e por quÃª.

6. Entrega pro `lp-page-qa` re-run (o skill jÃ¡ existe na Phase 3 â€” reutilizado).

**Output:** HTML v2 + Change Log. Quando QA re-run passa â†’ pÃ¡gina FINAL.

---

## O Resultado Final

Uma landing page que:

- Tem posicionamento estratÃ©gico diferenciado (nÃ£o genÃ©rico)
- Usa as palavras do CLIENTE, nÃ£o jargÃ£o de marketing
- Tem copy escrito contra frameworks de conversÃ£o testados
- Tem estrutura baseada em psicologia de scroll real
- Ã‰ responsiva de verdade (nÃ£o "encolhida", redesenhada pra mobile)
- Atinge targets de performance (FCP <1.5s, LCP <2.5s, <1MB)
- Ã‰ acessÃ­vel (WCAG AA, semÃ¢ntica, keyboard nav, reduced motion)
- Passou por ~65 checks de QA automatizado
- Passou por revisÃ£o de painel de especialistas
- Teve feedback aplicado com tracking de mudanÃ§as

Tudo isso em ~75 minutos, rodando inteiramente dentro do Claude.

---

## Os NÃºmeros

| MÃ©trica | Valor |
|---------|-------|
| Skills totais | 10 |
| Arquivos totais | 36 |
| Tamanho total | 405KB |
| Tempo estimado (full run) | ~75 min |
| Checks de QA | ~65 por execuÃ§Ã£o |
| Frameworks de copy | 7 |
| PadrÃµes de seÃ§Ã£o | 11 |
| PadrÃµes de form | 5 |
| Fases do pipeline | 6 (0, 1, 2, 3, 4, 5) |

---

## InstalaÃ§Ã£o

```bash
# Pipeline completo (exceto Phases 2 e 4 que sÃ£o skill sets separados)
unzip lp-pipeline-FINAL.zip -d ~/.claude/skills/
```

## Uso

```
"Crie uma landing page para [cliente]"
â†’ Phase 0 roda (intake) â†’ Master Brief
â†’ Phase 1 roda (strategy) â†’ Page Specification
â†’ Phase 2 roda (design) â†’ CSS System
â†’ Phase 3 roda (build + QA) â†’ HTML limpo
â†’ Phase 4 roda (review) â†’ Expert feedback
â†’ Phase 5 roda (rebuild + QA) â†’ PÃGINA FINAL âœ…
```