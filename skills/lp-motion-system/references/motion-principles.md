# Motion Principles

Animation theory adapted for landing page UI. Based on Disney's 12 principles + Material Motion + real-world benchmark analysis.

## The 5 Principles That Matter for Landing Pages

### 1. Choreography (Sequencing)

When multiple elements enter the viewport, they animate in a **logical sequence**, not simultaneously.

**Reading order rule**: Elements animate in the order the user reads them — top to bottom, headline before body, body before CTA.

```
Hero sequence example:
┌──────────────────────────┐
│  Badge          ← 0ms   │
│  Headline       ← 200ms │
│  Subheadline    ← 350ms │
│  CTA buttons    ← 500ms │
│  Social proof   ← 650ms │
│  Hero image     ← 300ms (parallel with text, from right) │
└──────────────────────────┘
```

**Feature grid sequence:**
```
Items stagger left-to-right, top-to-bottom:
[1] → [2] → [3]
[4] → [5] → [6]
Delay between items: 0.08–0.15s
```

**Anti-pattern**: Everything fading in at once. This is the single most common "AI-generated" tell.

### 2. Anticipation (Prepare → Act)

Before an important action, give a micro-hint:
- Button hover: scale to 1.02 BEFORE the click (indicates clickability)
- Card hover: subtle lift BEFORE revealing additional info
- Modal open: background dims BEFORE modal slides in

### 3. Follow-Through (Overshoot + Settle)

Spring-based animations naturally overshoot and settle. This feels organic:

```
Spring easing vs. linear:
Linear:    ────────────── (robotic)
Spring:    ──────⌒──── (natural, overshoots then settles)
```

Best implementations:
- `type: 'spring', stiffness: 100, damping: 15` — bouncy (Startup)
- `type: 'spring', stiffness: 200, damping: 20` — snappy (SaaS)
- No spring for Premium/Corporate — use ease-out curves instead

### 4. Hierarchy Through Motion

More important elements get MORE animation (longer duration, more distance, or more complex movement). Less important elements get LESS:

| Element Importance | Animation | Duration | Distance |
|-------------------|-----------|----------|----------|
| **Hero headline** | textReveal or blurIn | 0.8–1.0s | N/A |
| **Section heading** | fadeUp | 0.5–0.7s | 30px |
| **Body text** | fadeUp | 0.4–0.5s | 20px |
| **Cards** | fadeUp + stagger | 0.5s | 20px |
| **Background elements** | fadeIn (no movement) | 0.3s | 0 |
| **Nav** | No animation | — | — |

### 5. Meaningful Transitions (State Changes)

When something changes state, the animation communicates WHAT changed:
- Adding an item → slides in from the direction it was added
- Removing an item → fades out (gentle departure)
- Error state → subtle shake (something is wrong)
- Success state → checkmark scale-up (completion)
- Loading → skeleton pulse (work in progress)

## What NOT to Animate

- Navigation (users expect it to be instant)
- Text content that's already visible (don't re-animate on scroll back)
- Footer (it's scannable content, not a drama moment)
- Form fields (animate feedback, not the field itself)
- Anything that blocks interaction (animation must never prevent clicking)

## Duration Guidelines

| Interaction Type | Duration | Rationale |
|-----------------|----------|-----------|
| **Micro-interaction** (hover, click feedback) | 0.1–0.2s | Must feel instant |
| **Small state change** (toggle, expand) | 0.2–0.3s | Quick acknowledgment |
| **Content entry** (scroll reveal) | 0.4–0.7s | Noticeable but not slow |
| **Complex entrance** (hero, multi-element) | 0.6–1.2s | Cinematic, sets mood |
| **Background ambient** (blobs, gradients) | 15–25s | Subtle, never-ending |

## Easing Reference

| Name | Value | Feel | Use For |
|------|-------|------|---------|
| **Smooth decel** | `cubic-bezier(0.22, 1, 0.36, 1)` | Elegant arrival | Default entry |
| **Dramatic snap** | `cubic-bezier(0.76, 0, 0.24, 1)` | Quick + decisive | Creative, bold |
| **Gentle ease** | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Soft, natural | Wellness, warm |
| **Standard ease** | `cubic-bezier(0.4, 0, 0.2, 1)` | Neutral, functional | SaaS, corporate |
| **Bounce spring** | `type: 'spring', stiffness: 100, damping: 15` | Playful energy | Startup, tech |
| **Snappy spring** | `type: 'spring', stiffness: 200, damping: 20` | Responsive, quick | UI interactions |
