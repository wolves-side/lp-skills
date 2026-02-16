# Page Specification Template

This is the BRIDGE DOCUMENT between strategy (Phase 0-1) and execution (Phase 2-3).
Every decision has been made. What remains is design and implementation.

Replace all `[brackets]` with final specifications.

---

```markdown
# 📄 PAGE SPECIFICATION
## [Company Name] — [Product/Service Name] Landing Page
> Generated: [date] | Version: 1.0
> Master Brief: v[X] | LP Type: [type]
> Total sections: [N] | Target: [success metric]

---

## META — Page-Level Specs

### Identity
- **Page title (SEO):** [Title tag — 55-60 chars]
- **Meta description:** [155-160 chars]
- **OG title:** [Social share title]
- **OG description:** [Social share description]
- **OG image:** [Description of social share image needed]
- **Favicon:** [From brand assets or needs creation]
- **URL slug:** [recommended-slug]

### Design Direction (for Phase 2)
- **Visual feel:** [e.g., "Editorial minimalism, bold typography, electric blue accent"]
- **NOT like:** [e.g., "No glassmorphism, no gradients, not corporate, not like [competitor]"]
- **Color direction:** [e.g., "White base, dark sections, single accent color"]
- **Typography feel:** [e.g., "Heavy display headline font, clean geometric body font"]
- **Imagery:** [e.g., "Real screenshots, founder photo, no stock photos"]
- **Animation level:** [e.g., "Subtle: scroll reveals + number counters only"]
- **Competitive gap:** [e.g., "All competitors use X — we use Y to stand out"]

### Component Inventory (for Phase 2)
Design these unique components:
| Component | Variants | Used in |
|-----------|----------|---------|
| Button | Primary (filled), Secondary (outline), Nav CTA (compact) | All CTAs |
| Card | Feature card, Case study card, Testimonial card | Sections [N, N, N] |
| Navigation | Desktop (full), Mobile (hamburger + CTA) | Sticky |
| Metrics counter | Single stat with label and context | Section [N] |
| Accordion | FAQ item (collapsed/expanded) | Section [N] |
| Form | [Fields from spec] | Section [N] |
| Logo bar | Client logos row | Section [N] |
| Footer | Multi-column with contact/legal | Section [N] |
| [Other] | [variants] | [sections] |

### Typography Hierarchy
| Level | Usage | Size direction | Weight |
|-------|-------|---------------|--------|
| H1 | Hero headline only | Largest (48-72px desktop) | Heavy/Black |
| H2 | Section headers | Large (32-40px desktop) | Bold |
| H3 | Sub-items, feature titles | Medium (20-24px desktop) | Semibold |
| Body | Paragraphs | Readable (16-18px) | Regular |
| Small | Microcopy, labels, captions | Small (13-14px) | Regular/Medium |

### Performance Targets
| Metric | Target |
|--------|--------|
| FCP | < 1.5s |
| LCP | < 2.5s |
| CLS | < 0.1 |
| Page weight | < 1MB |
| Fonts | 2 families max, woff2 |
| Images | WebP/AVIF, lazy below fold |

### Accessibility
- Semantic HTML (section, article, nav, main, header, footer)
- WCAG AA color contrast
- Keyboard navigable (Tab through all CTAs and forms)
- prefers-reduced-motion respected
- Alt text on all meaningful images
- ARIA labels on interactive elements

### External Integrations
| Service | Purpose | Integration method |
|---------|---------|-------------------|
| [e.g., Google Analytics] | [Tracking] | [Script tag / GTM] |
| [e.g., WhatsApp] | [CTA redirect] | [API link / Click-to-chat] |
| [e.g., Calendly] | [Booking] | [Embed / Redirect] |
| [e.g., Facebook Pixel] | [Retargeting] | [Script tag] |

---

## SECTIONS

### ═══ SECTION 1: HERO ═══

**Conversion role:** Hook — capture attention in <5 seconds
**Layout:** [Pattern name — e.g., "Split Hero (text left, visual right)"]
**Background:** [Dark / Light / Accent]
**Visual weight:** 🔴 High

#### Copy
```
H1: "[Final recommended headline]"

    Variant B: "[Alternative headline]"
    Variant C: "[Alternative headline]"

H2: "[Subheadline]"

TRUST: "[Trust anchor text — e.g., 'Trusted by 23 companies across 6 industries']"

CTA: "[Button text]"
MICROCOPY: "[Text below button]"
```

#### Structure
```
[ASCII wireframe — paste from blueprint]
```

#### Behavior
- **Animation:** [e.g., "H1 fade-in 0.3s, trust logos stagger 0.5s"]
- **Nav:** Transparent on hero, solid background on scroll
- **Mobile:** [e.g., "Stack text above CTA. Hide hero visual. H1: 28px."]

#### Notes
- **Designer:** [e.g., "This section carries the highest visual weight. Hero visual should be a real screenshot, not decorative."]
- **Builder:** [e.g., "Nav becomes sticky with backdrop-filter only after scrolling past hero height."]

---

### ═══ SECTION [N]: [NAME] ═══

**Conversion role:** [From psychology model]
**Layout:** [Pattern]
**Background:** [Tone]
**Visual weight:** [Level]

#### Copy
```
H2: "[Section headline]"

BODY:
[Full production-ready body copy.
 Multiple paragraphs if needed.
 This is the FINAL text — no placeholders.]

CTA (if present): "[Text]"
MICROCOPY (if present): "[Text]"
```

#### Structure
```
[ASCII wireframe]
```

#### Behavior
- **Animation:** [Spec]
- **Mobile:** [Adaptations]

#### Notes
- **Designer:** [Section-specific design notes]
- **Builder:** [Section-specific technical notes]

---

[REPEAT for ALL sections — every section gets the full spec block above]

---

## A/B VARIANT SUMMARY

| Element | Variant A (Recommended) | Variant B | Variant C |
|---------|------------------------|-----------|-----------|
| Hero H1 | "[text]" | "[text]" | "[text]" |
| Hero H2 | "[text]" | "[text]" | — |
| Primary CTA | "[text]" | "[text]" | "[text]" |
| Guarantee | "[text]" | "[text]" | — |

**Testing priority:** Hero H1 first (highest impact), then CTA text.

---

## FORM SPECIFICATION (if applicable)

### Fields
| Field | Type | Label | Placeholder | Required | Validation | Error msg |
|-------|------|-------|-------------|----------|------------|-----------|
| [field] | [type] | "[label]" | "[placeholder]" | [Y/N] | [rules] | "[msg]" |

### Behavior
- **Submit action:** [URL / API / WhatsApp / Calendly]
- **Loading state:** [Button text → "Sending..." / Spinner]
- **Success:** [Redirect to: URL / Show: message / Open: WhatsApp]
- **Error:** [Inline per-field / Toast notification]

---

## FINAL NOTES

### For Phase 2 (Design System Generator)
[Summary of what the designer needs to produce:
- Color palette (based on direction above)
- Typography (font selection based on feel above)
- Component styles (for each item in component inventory)
- Dark/light section variants
- Button states (default, hover, focus, disabled)
- Spacing/sizing system]

### For Phase 3 (Page Builder)
[Summary of what the builder needs to implement:
- Single HTML file (or framework spec)
- All copy verbatim from this document
- All structural specs from wireframes
- All animations from behavior specs
- All responsive from mobile specs
- All integrations from external services list
- Performance targets as acceptance criteria]

### For Phase 4 (Expert Panel)
[Summary of what reviewers should evaluate:
- Does the page match the positioning statement from the Master Brief?
- Do copy and structure align with the LP type?
- Are all sections from this spec properly implemented?
- Performance targets met?
- Mobile experience functional?]

---

## DOCUMENT LINEAGE

| Phase | Document | Status |
|-------|----------|--------|
| Phase 0 | Master Brief v[X] | ✅ Approved |
| Phase 1 | Copy Document v[X] | ✅ Complete |
| Phase 1 | Page Blueprint v[X] | ✅ Complete |
| Phase 1 | **This Page Spec v1.0** | ✅ Ready for Phase 2 |
```
