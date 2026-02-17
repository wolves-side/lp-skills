# Navigation Implementation

Navigation spans 4 files. This reference shows what goes where.

---

## File Map

| Concern | File |
|---------|------|
| HTML structure | `index.html` → `<header class="nav">` |
| Desktop layout + base styles | `css/04-components.css` → `.nav-*` classes |
| Mobile hamburger + overlay | `css/07-responsive.css` → `@media (max-width: 640px)` |
| Scroll state + hamburger toggle + Escape | `js/nav.js` |

---

## HTML (in index.html)

See `html-scaffold.md` for the complete nav HTML pattern.

Key structure:
```
header.nav#nav
  div.container.nav__inner
    a.nav__logo          → always visible
    nav.nav__links       → desktop only (hidden on mobile via CSS)
    a.btn.nav__cta       → always visible (order 2 on mobile)
    button.nav__hamburger → mobile only (hidden on desktop via CSS)
  div.nav__mobile#navMobile → mobile overlay (controlled by JS)
```

**Critical mobile rule:** CTA stays visible between logo and hamburger.
Order on mobile: Logo (1) — CTA (2) — Hamburger (3).

---

## CSS: Desktop (in 04-components.css)

All `.nav-*` styles for desktop are in `css/04-components.css`:
- `.nav` — fixed positioning, z-index, transitions
- `.nav--transparent` / `.nav--solid` — background states
- `.nav__inner` — flexbox layout, height
- `.nav__logo`, `.nav__link`, `.nav__cta` — individual elements
- `.nav__hamburger` — `display: none` (shown in responsive)
- `.nav__mobile` — `display: none` (shown in responsive)
- `.nav__hamburger--open` — X animation for hamburger lines
- `.nav__mobile-link`, `.nav__mobile-footer` — overlay content styles

---

## CSS: Mobile (in 07-responsive.css)

The `@media (max-width: 640px)` block in `css/07-responsive.css` handles:
- Reducing nav height to `var(--nav-height-mobile)`
- Hiding `.nav__links` (desktop menu)
- Showing `.nav__hamburger` with flex + ordering
- Showing `.nav__mobile` as fixed overlay (controlled by `.nav__mobile--open`)
- Adjusting `.nav__cta` size and order

---

## JS Behavior (in js/nav.js)

The `js/nav.js` module handles:

1. **Scroll state** — switches `.nav--transparent` ↔ `.nav--solid`
   - Transparent when over hero section
   - Solid after scrolling past hero bottom (with 80px offset)
   - Throttled with `requestAnimationFrame`

2. **Hamburger toggle** — toggles `.nav__mobile--open`
   - Toggles `aria-expanded` on hamburger button
   - Toggles `aria-hidden` on mobile menu
   - Locks body scroll when menu is open

3. **Link close** — closes menu when clicking any link inside overlay

4. **Escape key** — closes menu and returns focus to hamburger button

---

## Accessibility Checklist

- [ ] `<header>` has `role="banner"`
- [ ] Desktop `<nav>` has `aria-label="Navegação principal"`
- [ ] Mobile `<nav>` has `aria-label="Menu mobile"`
- [ ] Hamburger has `aria-expanded="false"` (toggled by JS)
- [ ] Hamburger has `aria-controls="navMobile"`
- [ ] Mobile menu has `aria-hidden="true"` (toggled by JS)
- [ ] Escape key closes menu and returns focus to hamburger
- [ ] Logo link has `aria-label="[Company name] — voltar ao topo"`
- [ ] All touch targets ≥ 44x44px

---

## Testing

```
DESKTOP:
  ✓ Nav transparent over hero, solid after scroll
  ✓ Links scroll smoothly to sections (offset for nav height)
  ✓ CTA button in nav is visible and clickable
  ✓ No hamburger visible on desktop

MOBILE (375px):
  ✓ Only logo, CTA, and hamburger visible
  ✓ Hamburger opens full-height overlay
  ✓ Links in overlay scroll to sections and close overlay
  ✓ CTA in overlay is full-width
  ✓ Body scroll locked when overlay open
  ✓ Escape closes overlay
  ✓ X animation on hamburger when open
```
