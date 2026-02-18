# Project Scaffold

Complete setup for a new Next.js 14 LP project with the full stack.

---

## Quick Start

```bash
# 1. Create Next.js project
npx -y create-next-app@latest ./ \
  --typescript --tailwind --eslint \
  --app --src-dir=false \
  --import-alias="@/*" --use-npm

# 2. Install core dependencies
npm install framer-motion gsap @gsap/react lenis lucide-react \
  react-hook-form @hookform/resolvers zod \
  clsx tailwind-merge

# 3. Initialize Shadcn UI
npx -y shadcn@latest init -d

# 4. Add Shadcn components
npx -y shadcn@latest add button card accordion badge separator
```

### Optional Dependencies

```bash
# Carousel (testimonials, logos)
npm install embla-carousel-react

# 3D effects (premium projects)
npm install @react-three/fiber @react-three/drei three

# Spline 3D scenes
npm install @splinetool/react-spline

# Lottie animations
npm install @lottiefiles/dotlottie-react
```

---

## package.json (Complete)

```json
{
  "name": "[company-slug]-lp",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@gsap/react": "^2.1.0",
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.0",
    "lenis": "^1.1.0",
    "lucide-react": "^0.400.0",
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-hook-form": "^7.53.0",
    "tailwind-merge": "^2.5.0",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.0",
    "eslint": "^8",
    "eslint-config-next": "^14.2.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5"
  }
}
```

---

## next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // Static HTML export
  images: {
    unoptimized: true,     // Required for static export
  },
  trailingSlash: true,     // Better compatibility with static hosts
};

module.exports = nextConfig;
```

---

## components.json (Shadcn UI)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

---

## lib/utils.ts

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## lib/fonts.ts

```typescript
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

// REPLACE with fonts from the Design System (Phase 2)
export const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const fontDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});
```

---

## lib/lenis-provider.tsx

```tsx
'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced.matches) {
      lenis.destroy();
      return;
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

---

## app/layout.tsx (Template)

```tsx
import type { Metadata } from 'next';
import { fontBody, fontDisplay } from '@/lib/fonts';
import { LenisProvider } from '@/lib/lenis-provider';
import './globals.css';

// REPLACE with values from Page Specification
export const metadata: Metadata = {
  title: '[Page Title from Spec]',
  description: '[Meta description from Spec]',
  openGraph: {
    title: '[OG Title]',
    description: '[OG Description]',
    type: 'website',
    locale: 'pt_BR',
    // images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${fontBody.variable} ${fontDisplay.variable}`}
    >
      <body className="font-body text-foreground bg-background antialiased">
        <LenisProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-semibold"
          >
            Pular para o conteúdo
          </a>
          {children}
        </LenisProvider>

        {/* Analytics — add from Page Spec */}
      </body>
    </html>
  );
}
```

---

## app/globals.css (Template)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Shadcn UI CSS variables — generated by init */
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;

    /* OVERRIDE these with Design System values */
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}

@layer utilities {
  /* Noise texture overlay */
  .noise {
    position: relative;
  }
  .noise::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  /* Gradient text */
  .text-gradient {
    @apply bg-clip-text text-transparent;
  }

  /* Section padding */
  .section-padding {
    @apply py-20 md:py-28 lg:py-32;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}
```

---

## app/page.tsx (Template)

```tsx
import { Navbar } from '@/components/navigation/navbar';
import { Hero } from '@/components/sections/hero';
// Import all sections from Page Spec

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        {/* Add all sections in order from Page Spec */}
      </main>
    </>
  );
}
```

---

## File Responsibilities

| File/Dir | Responsibility | Changes Between Projects |
|----------|---------------|-------------------------|
| `app/layout.tsx` | Root layout, fonts, metadata, Lenis | Metadata, fonts |
| `app/page.tsx` | Section composition | Which sections are included |
| `app/globals.css` | Tailwind + utilities | Shadcn CSS variables |
| `components/ui/` | Shadcn base components | Rarely |
| `components/sections/` | Page sections | **Always** — every project is different |
| `components/animations/` | Animation wrappers | Rarely (variants change via config) |
| `components/decorative/` | Visual effects | **Selected per project** |
| `components/navigation/` | Nav components | Style changes, link structure |
| `lib/fonts.ts` | Font declarations | **Always** — different fonts per project |
| `lib/animations.ts` | Motion variants | **Always** — different feel per project |
| `tailwind.config.ts` | Design tokens | **Always** — different values per project |
