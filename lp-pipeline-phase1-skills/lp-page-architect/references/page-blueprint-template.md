# Page Blueprint Template

Replace all `[brackets]` with specifications.

---

```markdown
# 📐 PAGE BLUEPRINT
## [Company Name] — [Product/Service Name]
> Generated: [date] | Version: 1.0
> Source: Master Brief v[X] | LP Type: [type]
> Estimated sections: [N] | Estimated scroll depth: [short/medium/long]

---

## 1. Page Overview

### Structure Summary
| # | Section | Background | Visual Weight | CTA? | Conversion Role |
|---|---------|-----------|--------------|------|-----------------|
| 1 | Hero | [Dark/Light/Accent] | 🔴 High | ✅ | Hook |
| 2 | [Name] | [bg] | [weight] | [Y/N] | [role] |
| 3 | [Name] | [bg] | [weight] | [Y/N] | [role] |
| [continue for all sections] |

### Visual Rhythm
```
[Dark] → [Light] → [Light] → [Dark] → [Light] → [Dark]
Hero     Problem    Solution   Proof    Features   Offer
```

### CTA Map
| Position | Trigger | Text | Style |
|----------|---------|------|-------|
| Hero | Visible on load | "[CTA text]" | Filled accent button |
| Sticky nav | After hero scrolls out | "[CTA text]" | Compact filled button |
| After proof | Scroll to section | "[CTA text]" | Filled accent button |
| Offer block | Scroll to section | "[CTA text]" | Large filled button (most prominent) |
| Closing | Bottom of page | "[CTA text]" | Filled accent button |

---

## 2. Section Specifications

### Section 1: HERO

**Layout:** [Split / Centered / Featured Result — specify pattern from spec-patterns]
**Background:** [Color tone / gradient / image — general direction, not exact colors]
**Visual weight:** 🔴 High

**Content blocks:**
```
┌──────────────────────────────────────────────┐
│  [Block 1: Navigation bar]                   │
│  Position: fixed top                         │
│  Contents: logo, nav links, CTA button       │
│  Mobile: logo + hamburger + CTA button       │
├──────────────────────────────────────────────┤
│  [Block 2: Hero content — left/center]       │
│  H1: [from Copy Document, recommended var]   │
│  H2: [from Copy Document]                    │
│  CTA button + microcopy                      │
│                                              │
│  [Block 3: Hero visual — right/below]        │
│  Type: [screenshot / illustration / none]    │
│  Description: [what it shows]                │
│                                              │
│  [Block 4: Trust anchor — bottom]            │
│  Type: [logo bar / metric / micro-quote]     │
│  Contents: [specific items]                  │
└──────────────────────────────────────────────┘
```

**Animations:**
- [e.g., "H1 fade-in on load, 0.3s delay"]
- [e.g., "Trust logos fade-in staggered, 0.5s delay"]

**Mobile behavior:**
- [e.g., "Stack: H1 → H2 → CTA → Trust. Hide hero visual."]
- [e.g., "CTA must be above fold. Reduce H1 to 28px."]

---

### Section [N]: [NAME]

**Layout:** [Pattern name]
**Background:** [Tone]
**Visual weight:** [High / Medium / Low]

**Content blocks:**
```
[ASCII wireframe showing block arrangement]
```

**Animations:** [List or "None"]

**Mobile behavior:** [Specific adaptations]

---

[Repeat for ALL sections]

---

## 3. Navigation Specification

### Desktop Nav
```
┌──────────────────────────────────────────────┐
│  [Logo]     [Link1] [Link2] [Link3]   [CTA] │
└──────────────────────────────────────────────┘
```
- Position: sticky on scroll (transparent on hero, solid background after)
- Height: [56-64px]
- Z-index: highest
- CTA style: [filled button, accent color]
- Links scroll to: [section anchors]

### Mobile Nav
```
┌──────────────────────────────────────────────┐
│  [Logo]                        [☰]   [CTA]  │
└──────────────────────────────────────────────┘
```
- Hamburger opens: [overlay / slide-in]
- CTA stays visible even when menu is closed
- Menu items: [same links + contact info]

---

## 4. Form Specification (if applicable)

### Fields
| Field | Type | Label | Placeholder | Required | Validation |
|-------|------|-------|-------------|----------|------------|
| [Name] | text | "[label]" | "[placeholder]" | Yes/No | [rules] |
| [Email] | email | "[label]" | "[placeholder]" | Yes/No | [rules] |
| [Phone] | tel | "[label]" | "[placeholder]" | Yes/No | [rules] |

### Form behavior
- Submit action: [API endpoint / mailto / WhatsApp redirect / Calendly embed]
- Loading state: [button text changes / spinner]
- Success state: [redirect to URL / show message / WhatsApp open]
- Error state: [inline validation / toast notification]

---

## 5. Micro-Interaction Specifications

| Element | Section | Trigger | Behavior |
|---------|---------|---------|----------|
| Number counters | Proof/Metrics | IntersectionObserver | Animate 0 → target, cubic ease, 1.5s |
| Scroll reveals | All sections | IntersectionObserver | Fade-in + translateY(20px), staggered 0.1s |
| CTA hover | All CTAs | Mouse hover | Scale(1.02) + shadow increase, 0.2s |
| FAQ accordion | FAQ | Click | Expand/collapse with height animation |
| Nav background | Navigation | Scroll past hero | Transparent → solid background, 0.3s |
| [Other] | [section] | [trigger] | [behavior] |

---

## 6. Performance Requirements

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total page weight | < 1MB |
| Font files | Max 2 families, woff2 only |
| Images | WebP/AVIF, lazy loaded below fold |
| Animations | GPU-accelerated (transform/opacity only) |
| No backdrop-filter on load | Allowed only on sticky nav after scroll |

---

## 7. Accessibility Requirements

| Requirement | Spec |
|-------------|------|
| Semantic HTML | section, article, nav, main, header, footer |
| Heading hierarchy | H1 (hero only) → H2 (sections) → H3 (sub-items) |
| ARIA labels | All interactive elements |
| Color contrast | WCAG AA minimum (4.5:1 text, 3:1 large text) |
| Keyboard navigation | All CTAs and form fields focusable via Tab |
| Screen reader | Alt text for all images, aria-hidden for decorative |
| Reduced motion | Respect prefers-reduced-motion media query |

---

## 8. Technical Notes for Phase 3

[Any additional notes for the page builder:
- External services to integrate (Calendly, WhatsApp API, analytics)
- Special scripts needed (tracking pixels, chat widgets)
- Third-party embeds (video players, form tools)
- SEO requirements (meta tags, OG images, structured data)]
```
