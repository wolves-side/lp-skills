---
name: lp-asset-system
description: "Curate and specify all visual assets for the landing page: icons, background patterns, hero compositions, decorative effects, and gradient/glass treatments. Third skill in the Design Phase — receives aesthetic classification and color palette from lp-color-typography, timing presets from lp-motion-system. Part of the Landing Page Pipeline (Phase 5c)."
---

<HARD-GATE>
Do NOT specify assets without the Color & Typography System from lp-color-typography.
Every gradient, glow, or colored effect MUST use colors from the established palette.
SVG icons MUST be inline (no font-icon libraries like FontAwesome).
Background effects MUST NOT compete with content — they are ambient layers.
</HARD-GATE>


# LP Asset System

## Iron Law

**Assets Serve Content**: Every visual asset exists to enhance content comprehension or set mood. A gradient blob that distracts from the headline is a bug, not a feature. A background pattern that makes text harder to read is noise, not design.

## Skill Type

**Rigid** — Follow the steps in order. Color palette and aesthetic classification from `lp-color-typography` gate all asset decisions.


## Design Override Protocol

The asset system can request amendments when:
- The spec calls for a visual element that contradicts the established aesthetic (e.g., "add colorful illustrations" for an Obsidian/Premium dark design)
- Background specifications create readability issues with the selected color palette
- Asset density overwhelms the content hierarchy

Same protocol: document, propose minimum change, flag for approval.


## Checklist

1. Receive Color & Typography System + Motion System documents
2. Select icon library and define usage rules
3. Define background strategy (layers per section type)
4. Define hero composition pattern
5. Define gradient and glass treatments
6. Specify decorative effects
7. Deliver the Asset System document

## Process

### Step 1: Select Icon Library

Based on the aesthetic classification, select ONE primary icon library for consistency:

Use `references/icon-guide.md` for the decision matrix.

| Aesthetic | Primary Library | Style | Stroke Width |
|-----------|----------------|-------|-------------|
| Corporate | Lucide | Clean, neutral | 1.5px |
| Startup | Phosphor | Versatile, slightly playful | 1.5px (regular) |
| Creative | Phosphor | Bold or Duotone | Fill or duotone |
| SaaS | Lucide | Minimal, functional | 2px |
| Premium | Heroicons | Refined outline | 1.5px |
| Wellness | Phosphor | Light weight | 1px (thin) |

**Rule**: ONE library per project. Mixing creates visual noise.

### Step 2: Define Background Strategy

For each section type in the Page Specification, define the background layers.

Use `references/background-layers.md` for the layer system.

**Section types and their typical backgrounds:**

| Section Type | Background Layers | Example |
|-------------|------------------|---------|
| **Hero** | 2-3 layers (gradient + pattern + ambient effect) | Dark gradient + dot grid + floating orb |
| **Features** | 0-1 layer (clean or subtle pattern) | White/muted + faint grid |
| **Social Proof** | 0-1 layer (alternate tone) | Muted background for contrast |
| **CTA** | 1-2 layers (dark + gradient) | Dark bg + gradient accent |
| **FAQ** | 0 layers | Clean, readable |
| **Footer** | 1 layer (dark) | Dark background, no effects |

### Step 3: Define Hero Composition

The hero section is 90% of first impressions. Select a pattern from `references/hero-patterns.md`.

### Step 4: Define Gradient & Glass Treatments

Use `references/glass-gradient-library.md` for recipes. All colors MUST come from the palette.

### Step 5: Specify CSS for All Effects

Every decorative effect must be delivered as COPY-PASTE CSS/TSX. The builder should not have to interpret abstract descriptions.

## Output Format

```
# Asset System — [Company Name]

## Icon Library
[Selected library, import method, size rules, color rules]

## Background Specification
[Per section: layers, CSS/TSX code]

## Hero Composition
[Pattern name, layout, CSS/TSX code, asset list]

## Gradient & Glass Treatments
[Recipes with actual CSS values]

## Decorative Effects
[Noise, grid, blob configs — all using palette colors]

## Builder Implementation Notes
[Where each asset goes, z-index stacking, performance notes]
```

## Validation Checklist

- [ ] Single icon library selected with usage rules
- [ ] Every section has defined background (even if "none")
- [ ] Hero composition pattern is selected and specified
- [ ] All gradient/glow colors come from the established palette
- [ ] Background effects don't compete with content readability
- [ ] All decorative CSS is copy-paste ready
- [ ] z-index stacking order is defined
- [ ] No font-icon libraries (all SVG inline)
- [ ] Builder Implementation Notes are present

## Integration

**Requires**: Color & Typography System + Motion System
**Feeds into**: `lp-page-builder` (receives complete asset specification)

## References

- `references/icon-guide.md` — Icon library selection and usage rules
- `references/background-layers.md` — Multi-layer background system
- `references/hero-patterns.md` — Hero section composition patterns
- `references/glass-gradient-library.md` — Glass morphism and gradient recipes
