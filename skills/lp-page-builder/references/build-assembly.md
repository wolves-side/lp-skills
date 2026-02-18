# Build & Assembly

How to build, export, and deploy a Next.js LP project.

---

## Build for Production

```bash
# Static HTML export (default for LPs)
npm run build
```

This generates a static `out/` folder with HTML/CSS/JS ready for any hosting.

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
```

---

## Pre-Build Checklist

Before running `npm run build`:

| Check | What to Verify |
|-------|---------------|
| **No `use server`** | Static export doesn't support Server Actions |
| **No API routes** | `app/api/` routes won't work with `output: 'export'` |
| **Images unoptimized** | `next/image` with `unoptimized: true` for static hosting |
| **All links are anchors** | No `next/link` to other pages (single-page LP) |
| **Dynamic imports** | Heavy components (R3F, Spline) should use `dynamic()` |
| **Fonts loaded** | `next/font` fonts generate at build time |
| **No runtime env vars** | Use `NEXT_PUBLIC_` prefix for client env vars |

---

## Dynamic Imports for Heavy Components

```tsx
import dynamic from 'next/dynamic';

// Only load R3F when needed
const Scene3D = dynamic(
  () => import('@/components/decorative/scene-3d').then(mod => mod.Scene3D),
  { ssr: false, loading: () => <div className="h-[400px] bg-muted animate-pulse rounded-xl" /> }
);

// Only load Spline when needed
const SplineScene = dynamic(
  () => import('@splinetool/react-spline'),
  { ssr: false }
);
```

---

## Bundle Optimization

### Check bundle size

```bash
npm run build
# Look for "Route (app)" table in output
# Each page should be < 200kB First Load JS
```

### Common optimizations

| Issue | Solution |
|-------|---------|
| Large GSAP bundle | Import only what you use: `import gsap from 'gsap'` + `import { ScrollTrigger } from 'gsap/ScrollTrigger'` |
| Unused Lucide icons | Already tree-shakeable, just import specific icons |
| R3F/Three.js too heavy | Dynamic import with `ssr: false` |
| Font files too many weights | Limit to 3-4 weights max in `lib/fonts.ts` |

---

## Deployment Options

### Option 1: Vercel (Recommended)

```bash
# CLI
npm install -g vercel
vercel --prod

# Or connect GitHub repo → auto-deploy
```

No config needed. Vercel auto-detects Next.js.

### Option 2: Static Hosting (Netlify, Cloudflare Pages, S3)

1. Run `npm run build`
2. Upload the `out/` folder
3. Set 404 page to `404.html`

### Option 3: Self-hosted (Nginx)

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/lp/out;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Cache static assets
    location /_next/static/ {
        expires 365d;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Post-Deploy Verification

| Check | Tool |
|-------|------|
| Performance score | [PageSpeed Insights](https://pagespeed.web.dev) — target 90+ |
| Mobile render | Chrome DevTools device mode |
| Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| SEO tags | View page source → check `<title>`, `<meta>`, OG tags |
| Links working | Click every CTA and nav link |
| Form working | Submit test form |
| Analytics firing | Check GA/GTM real-time panel |
