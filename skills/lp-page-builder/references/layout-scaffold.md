# Layout Scaffold

Templates for `app/layout.tsx` and `app/page.tsx` — the two core composition files.

---

## app/layout.tsx

The root layout handles:
- Font loading (via `next/font`)
- SEO metadata
- Lenis smooth scrolling provider
- Skip link for accessibility
- Analytics scripts

```tsx
import type { Metadata } from 'next';
import { fontBody, fontDisplay } from '@/lib/fonts';
import { LenisProvider } from '@/lib/lenis-provider';
import Script from 'next/script';
import './globals.css';

// ── SEO Metadata (from Page Specification) ──
export const metadata: Metadata = {
  title: '[Page Title]',
  description: '[Meta description — max 160 chars]',
  openGraph: {
    title: '[OG Title]',
    description: '[OG Description]',
    type: 'website',
    locale: 'pt_BR',
    url: '[URL]',
    siteName: '[Company Name]',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '[Image description]',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Title]',
    description: '[Description]',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ── Layout ──────────────────────────────────
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
          {/* Skip link — accessibility */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:font-semibold"
          >
            Pular para o conteúdo
          </a>

          {children}
        </LenisProvider>

        {/* ── Analytics (from Page Spec) ────────── */}
        {/* Google Tag Manager */}
        {/*
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXX');`,
          }}
        />
        */}

        {/* Facebook Pixel */}
        {/*
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){...}('PIXEL_ID');`,
          }}
        />
        */}
      </body>
    </html>
  );
}
```

---

## app/page.tsx

The main page composes all sections in order from the Page Specification.

```tsx
import { Navbar } from '@/components/navigation/navbar';
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
import { Proof } from '@/components/sections/proof';
import { Features } from '@/components/sections/features';
import { Testimonials } from '@/components/sections/testimonials';
import { Offer } from '@/components/sections/offer';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { CtaFinal } from '@/components/sections/cta-final';
import { Footer } from '@/components/sections/footer';

// ── Page Data ───────────────────────────────
// Data comes directly from the Page Specification.
// Inline here or extract to a separate data file.

const NAV_LINKS = [
  { label: 'Problema', href: '#problem' },
  { label: 'Solução', href: '#solution' },
  { label: 'Resultados', href: '#proof' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contact' },
];

// ── Page Component ──────────────────────────
export default function Home() {
  return (
    <>
      <Navbar
        logo={<span className="text-primary font-display font-bold">[Logo]</span>}
        links={NAV_LINKS}
        ctaText="[CTA Text]"
        ctaHref="#contact"
      />

      <main id="main">
        <Hero
          title="[Hero title from spec]"
          subtitle="[Hero subtitle from spec]"
          ctaText="[CTA text from spec]"
          ctaHref="#contact"
          ctaMicrocopy="[Microcopy from spec]"
        />

        <Problem
          headline="[Problem headline from spec]"
          paragraphs={[
            '[Problem paragraph 1]',
            '[Problem paragraph 2]',
          ]}
          transition="[Transition line from spec]"
        />

        {/* Continue with all sections from Plan... */}

        <Faq
          headline="[FAQ headline]"
          items={[
            { question: '[Q1]', answer: '[A1]' },
            { question: '[Q2]', answer: '[A2]' },
          ]}
        />

        <Contact
          headline="[Contact headline]"
          submissionType="whatsapp"
          whatsappNumber="5511999999999"
        />

        <CtaFinal
          headline="[Final CTA headline]"
          ctaText="[CTA text]"
          ctaHref="#contact"
        />

        <Footer
          companyName="[Company]"
          columns={[
            {
              title: 'Links',
              links: [
                { label: 'Início', href: '#hero' },
                { label: 'Sobre', href: '#solution' },
              ],
            },
          ]}
        />
      </main>
    </>
  );
}
```

---

## Data Organization

For larger projects, extract section data to a data file:

```typescript
// lib/data.ts
export const heroData = {
  title: '...',
  subtitle: '...',
  ctaText: '...',
  ctaHref: '#contact',
} as const;

// Then in page.tsx:
import { heroData } from '@/lib/data';
<Hero {...heroData} />
```
