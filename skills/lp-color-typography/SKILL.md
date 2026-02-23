---
name: lp-color-typography
description: "Generate the complete color system and typography for the landing page. Produces CSS tokens, Tailwind config, component styles, and aesthetic classification. First skill invoked in the Design Phase — its outputs feed lp-motion-system, lp-asset-system, and lp-page-builder. Part of the Landing Page Pipeline (Phase 5a)."
---

<HARD-GATE>
Do NOT generate tokens without the Page Specification AND the Master Brief.
The aesthetic classification MUST be completed before generating any color or typography token.
Every color pair (background/foreground) MUST pass WCAG AA contrast (4.5:1 for text, 3:1 for large text).
</HARD-GATE>


# LP Color & Typography System

## Iron Law

**Intention Over Decoration**: Every color choice justifies its existence through hierarchy, emphasis, or brand reinforcement. Every typographic decision serves readability, scanning, or emotional tone. "It looks nice" is not a rationale. "This accent color draws the eye to the CTA because it's the only warm hue in a cool palette" is.

## Skill Type

**Rigid** — Follow the steps in order. The aesthetic classification gates everything else.


## Design Override Protocol

When the Page Specification contains structural or copy decisions that conflict with design excellence, you have **limited authority to request amendments**:

### When to Override
- Typography hierarchy in the spec doesn't support visual scanning (e.g., too many heading levels, no clear H1→H2→Body rhythm)
- Color direction in the spec contradicts the brand positioning (e.g., "premium luxury" but spec suggests bright primary colors)
- Section background rhythm creates visual monotony (e.g., 5 consecutive light sections)
- Copy length makes it impossible to maintain proper visual weight

### How to Override
1. **Document the conflict**: State what the spec says vs. what design quality requires
2. **Propose the minimum change**: Only what's strictly necessary, never a rewrite
3. **Flag for user approval**: Present the override as a recommendation, not a fait accompli
4. **If approved, update the Page Specification** before proceeding

### When NOT to Override
- Copy wording or messaging strategy (that's the copywriter's domain)
- Section order or conversion flow (that's the architect's domain)
- CTA placement or quantity (that's the CRO's domain)
- Anything that "would be nice" but isn't blocking design quality


## Checklist

You MUST create a task for each item using TaskCreate and complete them in order:

1. Read the Page Specification + Master Brief completely
2. Classify the aesthetic (using `references/aesthetic-classifier.md`)
3. Select an aesthetic preset as starting point (using `references/presets/`)
4. Evaluate if any Design Overrides are needed — flag if so
5. Generate the color system with full scales (using `references/color-scales.md`)
6. Select typography pairing with hierarchy (using `references/typography-system.md`)
7. Define spacing, shadow, and radius systems (using `references/spacing-shadow-system.md`)
8. Generate design tokens (CSS variables + Tailwind config)
9. Generate component styles (buttons, cards, inputs, sections)
10. Run contrast validation on all color pairs
11. Deliver the Color & Typography System document

## Process

### Step 1: Classify the Aesthetic

Based on the Master Brief (brand identity, industry, audience, tone), classify into one of the aesthetic categories. This classification gates ALL subsequent decisions.

Use `references/aesthetic-classifier.md` for the full methodology.

| Aesthetic | Characteristics | Example Feel |
|-----------|----------------|--------------|
| **Corporate/Enterprise** | Clean, structured, trustworthy, conservative | SAP, Salesforce |
| **Startup/Tech** | Bold, energetic, modern, gradient-forward | Stripe, Linear |
| **Creative/Agency** | Expressive, dynamic, unconventional | Award-winning agencies |
| **SaaS/Product** | Clean, functional, product-focused | Notion, Figma |
| **Premium/Luxury** | Refined, minimal, high contrast, editorial | Bang & Olufsen |
| **Health/Wellness** | Organic, warm, accessible, soft | Headspace |

### Step 2: Load the Preset

Select the closest aesthetic preset from `references/presets/`. The preset provides a **starting point** — customize from there to match the specific brand.

Available presets:
- `preset-obsidian.md` — Dark premium, editorial (Premium/Corporate)
- `preset-aurora.md` — Gradient-forward, tech (Startup/Tech)
- `preset-monolith.md` — Clean, structured, functional (SaaS/Corporate)
- `preset-warm.md` — Organic, warm, approachable (Health/Wellness/Creative)
- `preset-neon.md` — High energy, dark base + vibrant accents (Creative/Tech)

### Step 3: Generate Color System

Using `references/color-scales.md`, generate a complete color system:

**Required outputs:**
- Primary scale (50-950, 10 steps)
- Secondary scale (50-950, 10 steps)
- Accent scale (50-950, 10 steps)
- Neutral scale (50-950, 10 steps) — NEVER pure gray, always with brand hue
- Semantic colors: `background`, `foreground`, `muted`, `border`, `ring`, `destructive`, `success`
- Dark section variants: `background-dark`, `foreground-light`

**Validation:**
- Every foreground/background pair: ≥4.5:1 contrast ratio (WCAG AA)
- Primary/accent distinction: visually separable (min 30° hue difference or significant lightness gap)
- Neutral scale: carries subtle brand hue (never `hsl(0, 0%, X%)`)

### Step 4: Select Typography

Using `references/typography-system.md`, select and configure fonts:

**Required outputs:**
- Display font (headings): with weight range, recommended weights
- Body font (text): with weight range, recommended weights
- Mono font (code/technical, if applicable)
- Type scale using modular ratio (1.200–1.333 recommended)
- Fluid sizes using `clamp()` for responsive behavior
- Line-height per context: headings (1.1–1.2), body (1.5–1.7), captions (1.4)
- Letter-spacing per context: headings (-0.02em to -0.04em for tight tracking), body (0), small text (+0.02em)

**Font sources (in priority order):**
1. Fontshare (premium free fonts, less overused)
2. Google Fonts (massive library, some overused)
3. System font stack (fallback only)

**Blacklist** (overused pairs — avoid unless brand-mandated):
- Montserrat + Open Sans
- Roboto + Lato
- Poppins + Inter (as pair — individually fine)
- Oswald + anything

### Step 5: Define Spacing, Shadow & Radius

Using `references/spacing-shadow-system.md`:

- 8pt grid spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Shadow scale: 5 levels (xs, sm, md, lg, xl) with values per aesthetic
- Border radius scale: derived from aesthetic (sharp → rounded → pill)
- Section padding scale: responsive per breakpoint

### Step 6: Generate Tokens + Component Styles

Compile all decisions into:

1. **CSS Variables** (`:root` block for `globals.css`)
2. **Tailwind Config** (`tailwind.config.ts` extend block)
3. **Component Styles** (buttons, cards, inputs, sections — Tailwind class strings)

Use `references/design-token-template.md` and `references/component-styles.md` for output format.

## Output Format

Deliver as a single structured markdown document:

```
# Color & Typography System — [Company Name]

## Aesthetic Classification
[Classification + rationale + preset used]

## Design Overrides (if any)
[List of requested changes to Page Specification]

## Color System
[Full palette with all scales, CSS variables]

## Typography
[Font selection, type scale, fluid sizes, spacing rules]

## Spacing & Layout
[Grid system, spacing scale, shadow scale, radius scale]

## Design Tokens
[Complete CSS variables + Tailwind config]

## Component Styles
[Button, card, input, section background class strings]

## Aesthetic Classification Summary
[One-paragraph handoff note for lp-motion-system and lp-asset-system]
```

The **Aesthetic Classification Summary** at the end is critical — it's the handoff to the next two skills. It should include: aesthetic name, mood keywords (3-5), intensity level (subtle/moderate/dramatic), and the dominant color temperature (warm/cool/neutral).

## Validation Checklist

- [ ] Aesthetic classification is documented with rationale
- [ ] Color palette has full scales (50-950), not just 5 colors
- [ ] Neutral colors carry brand hue (no pure gray)
- [ ] All text/background pairs pass WCAG AA (4.5:1)
- [ ] Typography uses fluid `clamp()` for responsive sizing
- [ ] Font pairing is justified and not from the blacklist
- [ ] Spacing follows 8pt grid
- [ ] Shadow scale has 5 levels with actual values
- [ ] CSS variables use HSL format without wrapper
- [ ] Tailwind config is complete and valid
- [ ] Component styles include hover, focus, active states
- [ ] Aesthetic Classification Summary is present for handoff
- [ ] Design Overrides (if any) are documented and flagged

## Integration

**Requires**: Page Specification (from `lp-page-spec-assembler`) + Master Brief (from Phase 0)
**Feeds into**:
- `lp-motion-system` (receives aesthetic classification + color palette)
- `lp-asset-system` (receives aesthetic classification + color palette + typography)
- `lp-page-builder` (receives full token set + component styles)

## References

- `references/aesthetic-classifier.md` — Aesthetic classification methodology
- `references/color-scales.md` — Color scale generation with Radix/Material principles
- `references/typography-system.md` — Typography selection, fluid sizing, hierarchy
- `references/spacing-shadow-system.md` — 8pt grid, shadow scales, radius system
- `references/premium-fonts.md` — Curated font catalog (Fontshare + Google Fonts)
- `references/design-token-template.md` — CSS variables + Tailwind config output format
- `references/component-styles.md` — Component styling patterns by aesthetic
- `references/presets/` — 5 aesthetic presets with real CSS
