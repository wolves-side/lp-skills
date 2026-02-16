# Responsive Patterns

## Breakpoints

| Name | Width | Target |
|------|-------|--------|
| Mobile | < 640px | Phones (portrait) |
| Tablet | 640–1024px | Tablets, phones (landscape) |
| Desktop | > 1024px | Laptops, monitors |

Design MOBILE-FIRST. Desktop is the enhancement, not the default.
60%+ of LP traffic comes from mobile. If mobile UX is bad, nothing else matters.

---

## Universal Mobile Rules

Apply to ALL sections:

| Rule | Spec |
|------|------|
| Touch targets | Minimum 44x44px for all clickable elements |
| Font size | Body ≥ 16px, Headlines ≥ 24px |
| Line length | Max 65 characters per line |
| Padding | Horizontal padding ≥ 20px (never edge-to-edge text) |
| Images | Lazy load all. Use responsive srcset. |
| Horizontal scroll | NEVER. If a table overflows, convert to cards. |
| Sticky elements | Only nav. Never multiple sticky elements. |
| Video | Poster image by default. Play on tap. Never autoplay with sound. |

---

## Per-Section Mobile Adaptations

### Hero
| Desktop | Mobile |
|---------|--------|
| Split layout (text + visual) | Stack: text above, visual below (or hide visual) |
| Headline font-size: 48-64px | Headline font-size: 28-36px |
| Trust logos in a row | Trust logos 2 rows or scroll horizontal |
| CTA + microcopy visible | CTA must be visible WITHOUT scrolling |

**Critical:** On mobile, the CTA MUST be above the fold. If the hero headline
pushes the CTA below the fold, shorten the headline or move trust logos below the CTA.

### Problem / Solution
| Desktop | Mobile |
|---------|--------|
| Pain point cards in row (3 columns) | Stack vertically (1 column) |
| Long paragraphs OK (max 4 sentences) | Shorter paragraphs (max 2-3 sentences) |
| Visual alongside text | Visual above text or hidden |

### Proof / Metrics
| Desktop | Mobile |
|---------|--------|
| Metrics bar horizontal (3-4 columns) | Metrics bar 2 columns or stack |
| Case study cards side by side | Case study cards stacked |
| Number counters animate on scroll | Same — IntersectionObserver works |

### Features
| Desktop | Mobile |
|---------|--------|
| Alternating rows (text + visual) | Stack: always text above visual |
| Card grid (3 columns) | Card grid 1 column |
| Icon + title + description in row | Icon centered above title/description |

### Comparison Table
| Desktop | Mobile |
|---------|--------|
| Full table with columns | Convert to stacked cards per option |
| OR | Horizontal scroll with sticky first column |
| Two-column (us vs them) | Stack: "Without us" above "With us" |

**Table conversion pattern:**
```
Desktop:                    Mobile:
Feature | Us | Them         ┌──── Us ────┐
────────────────────        │ Feature 1 ✅│
Feat 1  | ✅ | ❌          │ Feature 2 ✅│
Feat 2  | ✅ | ❌          │ Price: $X   │
Price   | $X | $$$         └─────────────┘
                            ┌── Them ────┐
                            │ Feature 1 ❌│
                            │ Feature 2 ❌│
                            │ Price: $$$ │
                            └─────────────┘
```

### Testimonials
| Desktop | Mobile |
|---------|--------|
| Grid or row of 3 | Horizontal swipe carousel OR stack |
| Photo + quote + attribution | Same but smaller photo |
| All visible at once | Show 1, swipe for more |

### Offer Block
| Desktop | Mobile |
|---------|--------|
| Centered card with padding | Full-width card, minimal padding |
| Form alongside content (split) | Form below content (stacked) |
| Large CTA button | Full-width CTA button |

**Critical:** The offer CTA button should be FULL WIDTH on mobile.
Maximum finger-friendly tap area.

### FAQ
| Desktop | Mobile |
|---------|--------|
| Accordion, centered (max-width 800px) | Accordion, full-width |
| Padding: generous | Padding: tighter |

FAQ works well on both. No major changes needed.

### Sticky Navigation
| Desktop | Mobile |
|---------|--------|
| Logo + links + CTA button | Logo + hamburger menu + CTA button |
| Links visible | Links in dropdown/overlay menu |
| CTA always visible | CTA always visible (even in hamburger mode) |

**Rule:** Even if nav links are hidden behind hamburger, the CTA STAYS visible.

---

## Performance Budget (Mobile)

| Metric | Target | Why |
|--------|--------|-----|
| First Contentful Paint | < 1.5s | User perceives page as "fast" |
| Largest Contentful Paint | < 2.5s | Hero fully visible |
| Cumulative Layout Shift | < 0.1 | Nothing jumps around |
| Total page weight | < 1MB | 3G networks, emerging markets |
| Images | WebP/AVIF + lazy load | Biggest payload reducer |
| Fonts | 2 fonts max, woff2 only | Font flash prevention |

These targets feed into Phase 3 (Page Generation) technical requirements.
