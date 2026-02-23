# Animation Patterns (Motion System)

Receitas de animação baseadas em **Motion.dev, Animate UI e MagicUI**.

## 1. Text Reveal (Typography)
*Ideal para: H1, H2.*

**Padrão:** Palavras ou caracteres sobem mascarados (`y: 100%` -> `y: 0`).
**Config:**
- Stagger: 0.02s (chars) ou 0.1s (words).
- Easing: `[0.25, 1, 0.5, 1]` (Material Emphasized).

## 2. Scroll Triggered Reveal (Sections)
*Ideal para: Cards, Imagens.*

**Padrão:** Elementos entram suavemente conforme o scroll.
**Config:**
- `initial={{ opacity: 0, y: 20 }}`
- `whileInView={{ opacity: 1, y: 0 }}`
- `viewport={{ once: true, margin: "-100px" }}`

## 3. Number Ticker (Data)
*Ideal para: Estatísticas.*

**Padrão:** Números rolam verticalmente como um odômetro ou incrementam.
**Uso:** `framer-motion` `useSpring` ligando 0 ao valor final.

## 4. Hover Spotlight (Interação)
*Ideal para: Grid de Cards.*

**Padrão:** O mouse revela um "spotlight" radial que segue o cursor sobre o card.
**Implementação:**
- Rastrear mouse X/Y no container pai.
- Aplicar `background: radial-gradient` nas bordas dos cards filhos.

## 5. Infinite Parallax (Background)
*Ideal para: Floating Elements.*

**Padrão:** Elementos flutuam em velocidades diferentes conforme o scroll (GSAP ScrollTrigger ou Motion useScroll).
