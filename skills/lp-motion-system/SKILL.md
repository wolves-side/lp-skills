---
name: lp-motion-system
description: "Define the complete animation and interaction system for the landing page. Produces timing presets, animation patterns, interaction states, and choreography rules. Second skill in the Design Phase — receives aesthetic classification from lp-color-typography. Part of the Landing Page Pipeline (Phase 5b)."
---

<HARD-GATE>
Do NOT define animations without the Aesthetic Classification Summary from lp-color-typography.
Motion must ALWAYS respect prefers-reduced-motion. No exceptions.
Every animation must use transform and opacity only — no width/height/margin animations.
</HARD-GATE>


# LP Motion System

## Iron Law

**Motion Serves Meaning**: Every animation must communicate something — hierarchy, state change, direction, or feedback. An element that fades in because "it looks cool" is decoration. An element that fades in to draw attention to the CTA after the headline is read is communication.

## Skill Type

**Rigid** — Follow the steps in order. The aesthetic classification from `lp-color-typography` gates timing decisions.


## Design Override Protocol

The motion system inherits override authority from `lp-color-typography`. Additional motion-specific overrides:

### When to Override
- Page Specification assigns "no animation" to a section that opens the page (hero needs motion to feel alive)
- Section has staggered content (feature grid, testimonials) but spec doesn't mention stagger timing
- CTA lacks hover/focus feedback in the spec (every CTA needs interaction states)

### How to Override
Same protocol as `lp-color-typography`: document conflict, propose minimum change, flag for approval.


## Checklist

1. Receive the Aesthetic Classification Summary from `lp-color-typography`
2. Load the timing preset matching the aesthetic
3. Define entry animations (scroll-triggered)
4. Define interaction states (hover, focus, active)
5. Define choreography rules (stagger sequences)
6. Define scroll behavior (Lenis smooth scroll config)
7. Define reduced-motion fallbacks
8. Deliver the Motion System document

## Process

### Step 1: Load Timing Preset

From the Aesthetic Classification Summary, extract:
- **Aesthetic name** → determines duration and easing
- **Intensity level** → determines animation magnitude
- **Motion personality** → determines overall feel

Use `references/timing-presets.md` for the complete preset table.

### Step 2: Define Entry Animations

For each section type in the Page Specification, assign an animation pattern.

Use `references/motion-principles.md` for the principles that guide selection.

**Standard animation toolkit:**

| Animation | Use For | Viewport Trigger |
|-----------|---------|-----------------|
| `fadeUp` | Default for most content | `whileInView, once: true` |
| `fadeIn` | Background elements, images | `whileInView, once: true` |
| `scaleUp` | Cards, images, featured content | `whileInView, once: true` |
| `slideLeft` / `slideRight` | Split layouts, side content | `whileInView, once: true` |
| `blurIn` | Premium/editorial headline reveals | `whileInView, once: true` |
| `textReveal` | Hero headlines, section headings | `whileInView, once: true` |

### Step 3: Define Interaction States

Every interactive element MUST have defined states. Use `references/interaction-states.md`.

| Element | Hover | Focus | Active | Disabled |
|---------|-------|-------|--------|----------|
| Primary CTA | Scale 1.02 + shadow increase | Ring 2px | Scale 0.98 | Opacity 0.5 |
| Secondary CTA | Background shift | Ring 2px | Scale 0.98 | Opacity 0.5 |
| Card | Lift (-4px Y) + shadow increase | Border highlight | — | — |
| Link | Color change + underline | Underline + ring | — | — |
| Nav item | Color change | Underline | — | — |
| Input | Border color change | Ring + border | — | Reduced opacity |

### Step 4: Define Choreography

When multiple elements appear together, they need coordinated timing:

**Stagger rules:**
- Feature grid: stagger 0.08–0.15s between items
- Stat counters: stagger 0.1s, start counting when container is visible
- Hero: headline first (0ms) → subheadline (200ms) → CTA (400ms) → secondary elements (600ms)
- Navigation: appear immediately (no animation) — users expect instant nav
- Footer: subtle fade only, no dramatic entrance

**Choreography principle**: Elements animate in reading order (top-to-bottom, left-to-right). Never animate the CTA before the headline that contextualizes it.

### Step 5: Scroll Configuration

Define Lenis smooth scroll parameters:

```typescript
const lenisConfig = {
  duration: 1.2,        // Scroll duration in seconds
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease-out expo
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,    // Native scroll on mobile for performance
  touchMultiplier: 2,
};
```

### Step 6: Reduced Motion Fallbacks

**MANDATORY** — Every animated element needs a reduced-motion version:

```typescript
// Wrapper pattern for all motion components
const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// If reduced motion: elements appear instantly, no animation
// Interactions (hover, focus) still work but without transform animations
```

## Output Format

```
# Motion System — [Company Name]

## Timing Preset
[Aesthetic, durations, easing functions, stagger values]

## Entry Animations by Section
[Table: section → animation type → duration → delay → trigger]

## Interaction States
[Table: element → hover → focus → active → transition]

## Choreography Sequences
[Hero sequence, feature grid sequence, etc.]

## Scroll Configuration
[Lenis config, scroll-trigger breakpoints]

## Reduced Motion Fallbacks
[What changes when prefers-reduced-motion is active]

## Builder Implementation Notes
[Specific instructions for lp-page-builder on how to implement these patterns]
```

## Validation Checklist

- [ ] Timing preset matches the aesthetic classification
- [ ] Every section has an assigned entry animation
- [ ] Every interactive element has hover, focus, active states
- [ ] Stagger sequences follow reading order
- [ ] Hero choreography sequence is defined (headline → subheadline → CTA)
- [ ] Lenis scroll config is specified
- [ ] All animations use transform/opacity only (no layout properties)
- [ ] Reduced motion fallbacks are defined for every animation
- [ ] Duration ranges are within the aesthetic's personality (not too fast/slow)
- [ ] Builder Implementation Notes section is present

## Integration

**Requires**: Aesthetic Classification Summary from `lp-color-typography`
**Feeds into**:
- `lp-asset-system` (receives timing presets for animated assets)
- `lp-page-builder` (receives complete motion specification)

## References

- `references/motion-principles.md` — Animation theory adapted for UI
- `references/timing-presets.md` — Complete timing config per aesthetic
- `references/interaction-states.md` — Hover, focus, active state patterns
