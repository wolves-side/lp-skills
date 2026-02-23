# Icon Guide

Selection, sizing, and usage rules for SVG inline icons.

## Library Decision Matrix

| Aesthetic | Library | CDN/Import | Why |
|-----------|---------|-----------|-----|
| **Corporate** | [Lucide](https://lucide.dev) | `lucide-react` | Clean, neutral, professional. 2px stroke default. |
| **Startup/Tech** | [Phosphor](https://phosphoricons.com) | `@phosphor-icons/react` | 6 weights (thin→fill), versatile, slightly playful. |
| **Creative** | [Phosphor](https://phosphoricons.com) | `@phosphor-icons/react` | Duotone and fill variants add personality. |
| **SaaS/Product** | [Lucide](https://lucide.dev) | `lucide-react` | Minimal, functional, developer-friendly. |
| **Premium** | [Heroicons](https://heroicons.com) | `@heroicons/react` | Refined, Apple-influenced outline style. |
| **Wellness** | [Phosphor](https://phosphoricons.com) | `@phosphor-icons/react` | Thin weight feels light and organic. |

## ONE Library Rule

**Choose one library per project. No mixing.** Mixed icon libraries create visual noise — different stroke widths, corner treatments, and proportions clash.

## Sizing Scale

All icons follow a consistent sizing scale:

| Size | px | Use For |
|------|-----|---------|
| `xs` | 14px | Inline with small text, badges |
| `sm` | 16px | Inline with body text, form labels |
| `md` | 20px | Buttons, input icons, navigation |
| `lg` | 24px | Feature cards, list items |
| `xl` | 32px | Feature section highlights |
| `2xl` | 48px | Section hero icons, empty states |

```tsx
// Consistent sizing pattern
<Icon className="size-4" />  {/* 16px — sm */}
<Icon className="size-5" />  {/* 20px — md */}
<Icon className="size-6" />  {/* 24px — lg */}
<Icon className="size-8" />  {/* 32px — xl */}
<Icon className="size-12" /> {/* 48px — 2xl */}
```

## Color Rules

Icons inherit text color by default. Use CSS `currentColor`:

```tsx
// ✅ Correct — inherits color from parent
<ArrowRight className="size-5 text-muted-foreground" />

// ❌ Wrong — hardcoded color
<ArrowRight className="size-5 text-blue-500" />
```

- **Primary icons** (CTAs, emphasis): `text-primary`
- **Standard icons** (body, features): `text-foreground` or `text-muted-foreground`
- **Decorative icons** (backgrounds, accents): `text-muted-foreground/30`
- **Success/Error icons**: `text-green-500` / `text-destructive`

## Icon + Text Alignment

Icons next to text need optical alignment, not mathematical:

```tsx
// ✅ Correct — shrink-0 prevents icon from resizing
<div className="flex items-center gap-2">
  <CheckIcon className="size-5 shrink-0 text-primary" />
  <span>Feature description text</span>
</div>

// For inline icons in text
<span className="inline-flex items-center gap-1.5">
  <ArrowRightIcon className="size-4 shrink-0" />
  Learn more
</span>
```

## Common Icon Mappings

| Concept | Lucide | Phosphor | Heroicons |
|---------|--------|----------|-----------|
| Check/Success | `Check`, `CheckCircle` | `Check`, `CheckCircle` | `CheckIcon`, `CheckCircleIcon` |
| Arrow right | `ArrowRight`, `ChevronRight` | `ArrowRight`, `CaretRight` | `ArrowRightIcon` |
| Star/Rating | `Star` | `Star` | `StarIcon` |
| Shield/Security | `Shield`, `ShieldCheck` | `Shield`, `ShieldCheck` | `ShieldCheckIcon` |
| Speed/Performance | `Zap`, `Gauge` | `Lightning`, `Gauge` | `BoltIcon` |
| Users/Team | `Users`, `UserCircle` | `Users`, `UserCircle` | `UsersIcon` |
| Chart/Growth | `TrendingUp`, `BarChart` | `TrendUp`, `ChartBar` | `ArrowTrendingUpIcon` |
| Lock/Privacy | `Lock`, `KeyRound` | `Lock`, `Key` | `LockClosedIcon` |
| Globe/International | `Globe`, `Languages` | `Globe`, `Translate` | `GlobeAltIcon` |
| Clock/Time | `Clock`, `Timer` | `Clock`, `Timer` | `ClockIcon` |

## Anti-Patterns

- ❌ Font Awesome — bloated, icon-font based, doesn't support inline SVG well
- ❌ Mixing icon styles (outline + filled) within the same context
- ❌ Icons without labels on mobile (small targets, unclear meaning)
- ❌ Oversized icons that compete with text hierarchy
- ❌ Colored backgrounds behind feature icons (circle with bg-primary-100) — overused, looks template-y
