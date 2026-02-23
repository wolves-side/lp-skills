---
name: lp-page-builder
description: >
  Build a complete, production-ready landing page as a React/Next.js project. Activate when the
  Page Specification (Phase 1) and Design System (Phase 2) are complete. Generates a modular
  Next.js 14 project with TypeScript, Tailwind CSS, Shadcn UI, Framer Motion, GSAP, and Lenis —
  every page is unique with advanced animations, decorative effects, and premium visual identity.
  Part of the Landing Page Pipeline (Phase 3, Step 1 of 2).
---

<HARD-GATE>
Do NOT write any component code until you have read BOTH the Copy Document (or Page
Specification) AND the Design System output completely. Building before reading produces
components that ignore the spec and override the design system with defaults.
Read first. Build second. Always.
</HARD-GATE>


# LP Page Builder — React/Next.js Architecture

## Iron Law

**Spec is Contract**: Every piece of copy goes into the JSX VERBATIM. Every layout decision from the blueprint is implemented exactly. Every design token from the Design System is used. No rewording, no improvising, no "I think this looks better."

## Skill Type

**Rigid** — The 12-step build order is mandatory. Steps cannot be reordered or merged.



## Checklist

You MUST create a task for each step using TaskCreate before starting it:

1. Read Copy Document completely (every section, every word)
2. Read Design System completely (Tailwind config, Framer Motion variants, aesthetic classification)
3. Scaffold Next.js project with full stack
4. Configure Design System (tailwind.config.ts, globals.css, fonts.ts, animations.ts)
5. Build animation components (ScrollReveal, StaggerChildren, Counter, Parallax, TextReveal, MagneticButton)
6. Build decorative components matching aesthetic classification
7. Build all section components verbatim from spec (one per section)
8. Build navigation (navbar + mobile menu)
9. Build forms if applicable
10. Compose page (app/page.tsx)
11. Add analytics and integrations
12. Self-review all 7 categories (Content / Structure / Styling / Animations / Responsive / Performance / Accessibility)
13. Build and export

## Purpose

Transform the Page Specification + Design System into a WORKING landing page
delivered as a **modern React project** — componentized, animated, visually unique.

Every project must feel different. Same stack, different soul.
The combination of decorative effects, animation patterns, color palettes,
typography, and layout variations should make each LP unmistakably its own.

**Requires**:
1. Copy Document (from `lp-copywriter`) + Page Blueprint (from `lp-page-architect`)
2. Color & Typography System (from `lp-color-typography`) — tokens, component styles, aesthetic classification
3. Motion System (from `lp-motion-system`) — timing presets, entry animations, interaction states, choreography
4. Asset System (from `lp-asset-system`) — icon library, backgrounds, hero pattern, gradient/glass recipes

## Design Integration Checklist

Before writing any code, verify ALL design phase outputs are present:

- [ ] **Color tokens**: Full palette scales (50-950) in CSS variables
- [ ] **Typography**: Font selection with `clamp()` fluid sizing
- [ ] **Tailwind config**: Complete `tailwind.config.ts` extension block
- [ ] **Component styles**: Button, card, input, section classes by aesthetic
- [ ] **Shadow scale**: 5 levels with actual values
- [ ] **Radius scale**: Per-component values
- [ ] **Aesthetic classification**: Category + mood keywords + intensity
- [ ] **Entry animations**: Per-section animation assignments
- [ ] **Interaction states**: Hover, focus, active for all interactive elements
- [ ] **Choreography**: Hero sequence, stagger rules
- [ ] **Reduced motion**: Fallback plan defined
- [ ] **Icon library**: Single selected library with size/color rules
- [ ] **Background strategy**: Per-section layers defined
- [ ] **Hero pattern**: Composition selected with layout CSS
- [ ] **Gradient/glass recipes**: CSS for all decorative effects

> If ANY item is missing, **stop and request it** from the responsible design skill before proceeding.

## Core Philosophy

**The spec is the contract. The builder is the executor. The design system makes it unique.**

Rules:
- Every piece of copy from the Page Spec goes into the JSX VERBATIM. No rewording.
- Every structural decision from the wireframes gets implemented. No improvising layouts.
- Every responsive behavior from the mobile specs gets coded. No "it'll probably work."
- The Design System's Tailwind config is the ONLY source of visual decisions.
- **Each component has ONE job.** Sections are isolated. Animations are composable.
- Decorative effects are selected PER PROJECT based on the aesthetic classification.
- If something is ambiguous in the spec, flag it — don't guess.

## Tech Stack

### Core (Always Used)

| Package | Purpose | Version |
|---------|---------|---------|
| **Next.js 14** | Framework (App Router, SSG) | `^14` |
| **TypeScript** | Type safety | `^5` |
| **Tailwind CSS** | Utility-first styling | `^3.4` |
| **Shadcn UI** | Base components (copy-paste) | latest |
| **Framer Motion** | Animations, transitions, gestures | `^11` |
| **GSAP + ScrollTrigger** | Advanced scroll animations, parallax, pin | `^3.12` |
| **Lenis** | Smooth scrolling | `^1.1` |
| **Lucide React** | Icon library | `^0.400` |
| **React Hook Form + Zod** | Form validation | latest |
| **clsx + tailwind-merge** | Class merging utilities | latest |

### Optional (Per Project)

| Package | When to Use |
|---------|-------------|
| **Embla Carousel** | Testimonial carousels, case study sliders, logo bars |
| **React Three Fiber + Drei** | Premium projects: 3D backgrounds, particles, organic shapes |
| **Spline React** | When using Spline 3D scenes as hero backgrounds |
| **@lottiefiles/react** | When using Lottie animations for icons or illustrations |

See `references/project-scaffold.md` for complete `package.json` and setup commands.

## Output: Project Structure

```
[company-slug]-lp/
│
├── app/
│   ├── layout.tsx              ← Root layout: fonts, metadata, Lenis provider
│   ├── page.tsx                ← Main page: composes all sections
│   └── globals.css             ← Tailwind directives + custom utilities
│
├── components/
│   ├── ui/                     ← Shadcn UI base (button, card, accordion, etc.)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   │
│   ├── sections/               ← One component per page section
│   │   ├── hero.tsx
│   │   ├── problem.tsx
│   │   ├── solution.tsx
│   │   ├── proof.tsx
│   │   ├── features.tsx
│   │   ├── testimonials.tsx
│   │   ├── offer.tsx
│   │   ├── faq.tsx
│   │   ├── contact.tsx
│   │   ├── cta-final.tsx
│   │   └── footer.tsx
│   │
│   ├── animations/             ← Reusable animation wrappers
│   │   ├── scroll-reveal.tsx   ← Framer Motion viewport reveal
│   │   ├── stagger-children.tsx← Staggered entry for lists/grids
│   │   ├── counter.tsx         ← Animated number counter
│   │   ├── parallax-section.tsx← GSAP ScrollTrigger parallax
│   │   ├── text-reveal.tsx     ← Character/word reveal animation
│   │   └── magnetic-button.tsx ← Magnetic hover effect for CTAs
│   │
│   ├── decorative/             ← Visual effects (selected per project)
│   │   ├── gradient-blob.tsx   ← Animated gradient blobs
│   │   ├── noise-texture.tsx   ← SVG noise overlay
│   │   ├── grid-pattern.tsx    ← Dot/line grid background
│   │   ├── aurora.tsx          ← Aurora borealis gradient effect
│   │   ├── spotlight.tsx       ← Mouse-following spotlight
│   │   └── particles.tsx       ← Floating particles (optional R3F)
│   │
│   └── navigation/
│       ├── navbar.tsx          ← Sticky nav with scroll state
│       └── mobile-menu.tsx     ← Full-screen mobile menu with Framer Motion
│
├── lib/
│   ├── utils.ts                ← cn() helper (clsx + tailwind-merge)
│   ├── fonts.ts                ← next/font declarations
│   ├── animations.ts           ← Shared Framer Motion variants
│   └── lenis-provider.tsx      ← Lenis smooth scroll wrapper
│
├── public/
│   └── assets/                 ← Images, SVGs, favicons
│
├── tailwind.config.ts          ← Design tokens from Phase 2
├── next.config.js              ← Static export config
├── package.json
├── tsconfig.json
└── components.json             ← Shadcn UI config
```

**Total: Modular component architecture with clear separation of concerns.**

See `references/project-scaffold.md` for detailed file responsibilities and setup.

## Build Order

Follow this exact sequence. Each step builds on the previous.

### Step 1: Read All Inputs

Read BOTH documents completely before writing ANY code:

**From Page Specification:**
- Meta → SEO tags (title, description, OG)
- Meta → External integrations (analytics, WhatsApp, Calendly)
- Meta → Performance targets (acceptance criteria)
- Meta → Accessibility requirements
- Each section spec (copy + wireframe + behavior + mobile)
- Form specification (if applicable)
- A/B variant summary (implement the "Recommended" variant)

**From Design System:**
- Tailwind config extensions (colors, typography, spacing, etc.)
- Aesthetic classification (determines decorative effects to use)
- Framer Motion variants (animation style unique to this project)
- Component style overrides (Shadcn + custom components)
- Font declarations and Google Fonts selections

### Step 2: Scaffold the Project

Initialize the Next.js project with the full stack:

```bash
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
npx -y shadcn@latest init
```

Install all dependencies:

```bash
npm install framer-motion gsap @gsap/react lenis lucide-react react-hook-form @hookform/resolvers zod clsx tailwind-merge embla-carousel-react
```

See `references/project-scaffold.md` for complete setup including Shadcn components and Lenis provider.

### Step 3: Configure Design System

Apply the Phase 2 Design System output:

1. **`tailwind.config.ts`** — Extend with all design tokens (colors, fonts, spacing, animations)
2. **`app/globals.css`** — Tailwind directives + custom CSS utilities (noise texture, gradients)
3. **`lib/fonts.ts`** — `next/font/google` declarations for selected fonts
4. **`lib/animations.ts`** — Framer Motion variants from the Design System
5. **`lib/utils.ts`** — `cn()` helper function

See `references/tailwind-config.md` for how to map Design System tokens to Tailwind config.

### Step 4: Build Animation Components

Create the reusable animation wrappers BEFORE building sections:

| Component | Mechanism | Use Case |
|-----------|-----------|----------|
| `ScrollReveal` | Framer Motion `whileInView` | Any element entering viewport |
| `StaggerChildren` | Framer Motion `staggerChildren` | Card grids, feature lists |
| `Counter` | Framer Motion `useMotionValue` + `animate` | Metric numbers |
| `ParallaxSection` | GSAP ScrollTrigger | Background parallax, pinned sections |
| `TextReveal` | Framer Motion per-character/word | Headlines, hero text |
| `MagneticButton` | Framer Motion `useMotionValue` + mouse position | CTA buttons |

See `references/animation-system.md` for complete component code.

### Step 5: Build Decorative Components

Select decorative effects based on the aesthetic classification from Phase 2:

| Aesthetic | Recommended Effects |
|-----------|-------------------|
| **Corporate/Enterprise** | Grid pattern + noise texture + subtle gradient |
| **Startup/Tech** | Aurora + gradient blobs + spotlight |
| **Creative/Agency** | Particles + bold gradients + magnetic buttons |
| **SaaS/Product** | Dot pattern + clean gradients + text reveal |
| **Premium/Luxury** | Noise texture + spotlight + minimal particles |

**Rule: Pick 2-3 effects maximum.** More than that creates visual noise.

See `references/decorative-effects.md` for component code and usage guidelines.

### Step 6: Build Sections

For EACH section in the Page Specification, create a component in `components/sections/`:

**A. Component props** — Type the section data for flexibility:
```tsx
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  ctaMicrocopy?: string;
  trustedBy?: string[];
}
```

**B. JSX structure** — Semantic HTML, Tailwind classes, animation wrappers:
- Use `<section>`, `<article>`, `<figure>`, `<nav>` semantics
- H1 for hero ONLY. H2 for section headers. H3 for sub-items.
- Wrap in `ScrollReveal` or `StaggerChildren` as specified
- Apply decorative components as backgrounds
- Copy VERBATIM from the Page Spec — no rewording

**C. Responsive design** — Tailwind responsive modifiers:
- Mobile-first by default (base = mobile)
- `md:` for tablet (768px)
- `lg:` for desktop (1024px)
- `xl:` for large screens (1280px)

**D. Animations** — Framer Motion props on the component:
- Entry animations via `ScrollReveal` wrapper
- Hover effects via `whileHover`
- Layout animations via `layout` prop
- GSAP for complex scroll-based sequences

See `references/component-patterns.md` for patterns per section type.

### Step 7: Implement Navigation

Navigation uses Framer Motion for smooth mobile menu:

| Concern | File |
|---------|------|
| Desktop navbar + scroll state | `components/navigation/navbar.tsx` |
| Mobile full-screen menu | `components/navigation/mobile-menu.tsx` |
| Smooth scroll to anchors | Via Lenis (automatic) |

See `references/nav-implementation.md` for complete React components.

### Step 8: Implement Forms (if applicable)

Forms use React Hook Form + Zod for validation:

| Concern | File |
|---------|------|
| Form component + UI | `components/sections/contact.tsx` |
| Validation schema | Zod schema inline or in `lib/schemas.ts` |
| Submission handler | Inside component (WhatsApp, API, mailto) |

See `references/form-implementation.md` for patterns by submission type.

### Step 9: Compose the Page

In `app/page.tsx`, compose all sections:

```tsx
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
// ... all sections

export default function Home() {
  return (
    <main>
      <Hero {...heroData} />
      <Problem {...problemData} />
      <Solution {...solutionData} />
      {/* All sections in order from Page Spec */}
    </main>
  );
}
```

### Step 10: Add Analytics & Integrations

From the External Integrations table in the Page Spec:

- Google Analytics / GTM → `app/layout.tsx` via `<Script>` component
- Facebook Pixel → `app/layout.tsx` via `<Script>`
- WhatsApp CTA → configured in contact component
- Calendly → inline embed or popup component

### Step 11: Self-Review Before Handoff

Run through ALL checks BEFORE delivering:

**Content:** Every headline, paragraph, CTA, microcopy verbatim from spec.
No placeholders. No typos.

**Structure:** All sections present and in order. All CTAs implemented.
Nav links correct. Form fields match spec.

**Styling:** Tailwind config matches Design System exactly. No hardcoded
color values in components. All design tokens come from config.

**Animations:** Each section has appropriate entry animation. No janky
transitions. GSAP ScrollTrigger properly cleaned up in `useEffect` return.
`prefers-reduced-motion` respected.

**Responsive:** Hero CTA above fold on 375px. No horizontal scroll.
Touch targets ≥ 44px. All mobile adaptations from spec implemented.

**Performance:** `next/image` for all images. `next/font` for fonts.
Dynamic imports for heavy components (R3F, Spline). No layout shift.

**Accessibility:** Skip link, lang attribute, semantic elements, ARIA states,
`prefers-reduced-motion` support, form labels linked, focus styles visible.

### Step 12: Build & Export

```bash
npm run build      # Static export via next.config.js output: 'export'
```

See `references/build-assembly.md` for deployment options and bundle optimization.

## What Makes Each Project Unique

Every LP uses the same stack but should feel completely different. Uniqueness comes from:

| Layer | How It Varies |
|-------|---------------|
| **Colors** | Tailwind config: completely different palette per brand |
| **Typography** | `next/font`: different font pairings per project |
| **Animations** | Different Framer Motion variants: some playful, some corporate |
| **Decorative effects** | Aurora for tech, grid for corporate, particles for creative |
| **Layout patterns** | Split hero vs centered, card grid vs masonry, etc. |
| **Scroll behavior** | Parallax depth, pin sections, reveal speed |
| **Micro-interactions** | Magnetic buttons, hover effects, cursor effects |
| **Background textures** | Noise grain, gradient blobs, dot patterns |

**Anti-pattern: If two LPs feel similar, you're not using enough variation layers.**

## Delivery

The builder delivers:

1. **Next.js project** — Complete, buildable, deployable
2. **Static export** — `out/` folder with HTML/CSS/JS for any hosting
3. **Build notes** — Ambiguities found, decisions made, effects chosen

## Integration

**Input from**:
- Page Specification (`lp-page-spec-assembler`, Phase 1)
- Design System (`lp-design-system`, Phase 2)

**Output to**: `lp-page-qa` (validates the built page against the spec)

## Red Flags — STOP and Follow the Process

| If you think... | Reality is... |
|----------------|---------------|
| "I know what a hero looks like, I'll use the standard pattern" | The spec defines THIS hero. Read it first. |
| "I'll reword this headline slightly, it flows better" | Copy is VERBATIM. Every word in the spec was intentional. |
| "The mobile layout isn't specified, I'll stack the desktop" | Flag the gap to the user. Do NOT guess mobile layout. |
| "Performance targets are aspirational" | FCP < 1.5s and LCP < 2.5s are required acceptance criteria. |
| "I'll skip the self-review and go straight to delivery" | Self-review catches spec violations before the QA skill does. Run it. |

**ALL of these mean: STOP. Return to the current step.**

## User Signals You're Off Track

- "That's not what the spec says" → You improvised. Find the exact spec text and implement it.
- "Where did this copy come from?" → You rewrote. Revert to verbatim spec copy immediately.
- "The style doesn't match our brand" → Design System tokens were not applied. Check tailwind.config.ts.

## Integration

**Next required skill**: After the project builds successfully, invoke `lp-page-qa`.
**Requires first**: Copy Document + Page Blueprint + Design System (all approved).
**Feeds into**: `lp-page-qa` (validates built page against spec).

## References

| Reference | Purpose |
|-----------|---------|
| `references/project-scaffold.md` | Project setup, package.json, configs |
| `references/tailwind-config.md` | Design System → Tailwind mapping |
| `references/layout-scaffold.md` | app/layout.tsx + app/page.tsx templates |
| `references/component-patterns.md` | Section components (React/TSX) |
| `references/animation-system.md` | Framer Motion + GSAP + Lenis patterns |
| `references/decorative-effects.md` | Background effects per aesthetic |
| `references/nav-implementation.md` | Navbar + mobile menu components |
| `references/form-implementation.md` | React Hook Form + Zod patterns |
| `references/asset-library.md` | Curated assets, icons, stock, inspiration |
| `references/build-assembly.md` | Build, export, deployment |
