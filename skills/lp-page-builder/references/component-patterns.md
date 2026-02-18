# Component Patterns

React/TSX patterns for each standard section type.
Each section is a self-contained component in `components/sections/`.

**Every component receives data via props — no hardcoded content.**

---

## Hero — Split Layout

```tsx
// components/sections/hero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TextReveal } from '@/components/animations/text-reveal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { MagneticButton } from '@/components/animations/magnetic-button';
import { fadeUp, slideRight } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  ctaMicrocopy?: string;
  imageSrc?: string;
  imageAlt?: string;
  trustedByLabel?: string;
  trustedLogos?: { src: string; alt: string }[];
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  ctaMicrocopy,
  imageSrc,
  imageAlt,
  trustedByLabel,
  trustedLogos,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 bg-background-dark text-foreground-light overflow-hidden"
    >
      {/* Decorative effects go here — selected per project */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Content */}
          <div>
            <TextReveal
              text={title}
              as="h1"
              mode="word"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-[18ch]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl opacity-85 max-w-[45ch]"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8"
            >
              <MagneticButton>
                <Button size="lg" asChild>
                  <a href={ctaHref}>{ctaText}</a>
                </Button>
              </MagneticButton>
              {ctaMicrocopy && (
                <p className="mt-3 text-sm opacity-60">{ctaMicrocopy}</p>
              )}
            </motion.div>
          </div>

          {/* Visual */}
          {imageSrc && (
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              className="hidden lg:block"
            >
              <Image
                src={imageSrc}
                alt={imageAlt || ''}
                width={600}
                height={500}
                priority
                className="rounded-xl"
              />
            </motion.div>
          )}
        </div>

        {/* Trust bar */}
        {trustedLogos && trustedLogos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            {trustedByLabel && (
              <p className="text-sm opacity-50 mb-4">{trustedByLabel}</p>
            )}
            <div className="flex gap-8 items-center flex-wrap">
              {trustedLogos.map((logo, i) => (
                <Image
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={32}
                  className="h-8 w-auto opacity-60 brightness-0 invert"
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
```

## Hero — Centered Layout

```tsx
export function HeroCentered({ title, subtitle, ctaText, ctaHref, ctaMicrocopy }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center bg-background-dark text-foreground-light overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <TextReveal text={title} as="h1" className="text-4xl md:text-6xl font-display font-bold max-w-[20ch] mx-auto" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl opacity-85 max-w-[50ch] mx-auto">
          {subtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="mt-8">
          <MagneticButton>
            <Button size="lg" asChild><a href={ctaHref}>{ctaText}</a></Button>
          </MagneticButton>
          {ctaMicrocopy && <p className="mt-3 text-sm opacity-60">{ctaMicrocopy}</p>}
        </motion.div>
      </div>
    </section>
  );
}
```

---

## Problem — Narrative + Pain Cards

```tsx
// components/sections/problem.tsx
'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PainPoint {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface ProblemProps {
  headline: string;
  paragraphs: string[];
  transition?: string;
  painPoints?: PainPoint[];
}

export function Problem({ headline, paragraphs, transition, painPoints }: ProblemProps) {
  return (
    <section id="problem" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">{headline}</h2>
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground max-w-[65ch]">{p}</p>
            ))}
            {transition && (
              <p className="text-lg font-semibold text-primary">{transition}</p>
            )}
          </div>
        </ScrollReveal>

        {painPoints && painPoints.length > 0 && (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {painPoints.map((point, i) => (
              <StaggerItem key={i}>
                <div className="p-8 bg-secondary rounded-xl border-l-4 border-destructive">
                  <span className="text-2xl mb-4 block" aria-hidden="true">
                    {point.icon || <AlertCircle className="w-6 h-6 text-destructive" />}
                  </span>
                  <h3 className="font-display font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}
      </div>
    </section>
  );
}
```

---

## Social Proof — Metrics + Cases

```tsx
// components/sections/proof.tsx
'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { Counter } from '@/components/animations/counter';
import { Button } from '@/components/ui/button';

interface Metric {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

interface CaseStudy {
  title: string;
  challenge: string;
  result: string;
  timeline?: string;
}

interface ProofProps {
  metrics: Metric[];
  cases?: CaseStudy[];
  ctaText?: string;
  ctaHref?: string;
}

export function Proof({ metrics, cases, ctaText, ctaHref }: ProofProps) {
  return (
    <section id="proof" className="section-padding bg-background-dark text-foreground-light">
      <div className="container mx-auto px-6">
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {metrics.map((m, i) => (
            <StaggerItem key={i} className="text-center">
              <Counter
                target={m.value}
                suffix={m.suffix || ''}
                decimals={m.decimals}
                className="text-4xl md:text-5xl font-display font-extrabold text-primary"
              />
              <p className="text-sm opacity-60 mt-2">{m.label}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {cases && cases.length > 0 && (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <StaggerItem key={i}>
                <article className="p-8 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-primary font-bold mb-4">{c.title}</h3>
                  <p className="mb-3"><strong>Desafio:</strong> {c.challenge}</p>
                  <p className="mb-3"><strong>Resultado:</strong> {c.result}</p>
                  {c.timeline && (
                    <p className="text-sm opacity-50 mt-4">{c.timeline}</p>
                  )}
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}

        {ctaText && (
          <ScrollReveal className="text-center mt-12">
            <Button size="lg" asChild><a href={ctaHref}>{ctaText}</a></Button>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
```

---

## Features — Card Grid

```tsx
// components/sections/features.tsx
'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesProps {
  headline: string;
  features: Feature[];
}

export function Features({ headline, features }: FeaturesProps) {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold">{headline}</h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((f, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.2 }}
                className="p-8 bg-secondary rounded-xl h-full"
              >
                <f.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground">{f.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
```

---

## Offer Block

```tsx
// components/sections/offer.tsx
'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { MagneticButton } from '@/components/animations/magnetic-button';
import { Button } from '@/components/ui/button';
import { Check, Shield } from 'lucide-react';

interface OfferProps {
  headline: string;
  items: string[];
  price?: string;
  ctaText: string;
  ctaHref: string;
  ctaMicrocopy?: string;
  guarantee?: string;
}

export function Offer({ headline, items, price, ctaText, ctaHref, ctaMicrocopy, guarantee }: OfferProps) {
  return (
    <section id="offer" className="section-padding bg-background-dark text-foreground-light">
      <div className="container mx-auto px-6 max-w-2xl">
        <ScrollReveal>
          <div className="bg-white/[0.03] border-2 border-white/10 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">{headline}</h2>

            <ul className="text-left max-w-md mx-auto mb-8 space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg py-3 border-b border-white/5">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {price && (
              <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">{price}</p>
            )}

            <MagneticButton>
              <Button size="lg" asChild><a href={ctaHref}>{ctaText}</a></Button>
            </MagneticButton>
            {ctaMicrocopy && <p className="mt-3 text-sm opacity-60">{ctaMicrocopy}</p>}

            {guarantee && (
              <div className="mt-8 p-4 bg-white/5 rounded-lg text-sm flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                {guarantee}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

---

## FAQ — Accordion

```tsx
// components/sections/faq.tsx
'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  headline: string;
  items: FaqItem[];
}

export function Faq({ headline, items }: FaqProps) {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold">{headline}</h2>
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <Accordion type="single" collapsible defaultValue="item-0">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground max-w-[65ch]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

---

## Testimonials — Cards

```tsx
// components/sections/testimonials.tsx
'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company?: string;
}

interface TestimonialsProps {
  headline: string;
  testimonials: Testimonial[];
}

export function Testimonials({ headline, testimonials }: TestimonialsProps) {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold">{headline}</h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <blockquote className="p-8 bg-background rounded-xl border-l-4 border-primary h-full flex flex-col">
                <Quote className="w-6 h-6 text-primary/30 mb-4" />
                <p className="text-lg italic leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6">
                  <strong className="block">{t.name}</strong>
                  <span className="text-sm text-muted-foreground">
                    {t.title}{t.company && `, ${t.company}`}
                  </span>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
```

---

## Final CTA

```tsx
// components/sections/cta-final.tsx
'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { MagneticButton } from '@/components/animations/magnetic-button';
import { Button } from '@/components/ui/button';

interface CtaFinalProps {
  headline: string;
  body?: string;
  ctaText: string;
  ctaHref: string;
  ctaMicrocopy?: string;
}

export function CtaFinal({ headline, body, ctaText, ctaHref, ctaMicrocopy }: CtaFinalProps) {
  return (
    <section id="cta-final" className="section-padding bg-background-dark text-foreground-light">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold">{headline}</h2>
          {body && (
            <p className="mt-6 text-lg opacity-85 max-w-[50ch] mx-auto">{body}</p>
          )}
          <div className="mt-8">
            <MagneticButton>
              <Button size="lg" asChild><a href={ctaHref}>{ctaText}</a></Button>
            </MagneticButton>
            {ctaMicrocopy && <p className="mt-3 text-sm opacity-60">{ctaMicrocopy}</p>}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

---

## Footer

```tsx
// components/sections/footer.tsx
interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  companyName: string;
  description?: string;
  columns: FooterColumn[];
  copyright?: string;
}

export function Footer({ companyName, description, columns, copyright }: FooterProps) {
  return (
    <footer className="bg-background-dark text-foreground-light pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">{companyName}</h3>
            {description && <p className="text-sm opacity-60 max-w-xs">{description}</p>}
          </div>
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-white/10 text-sm opacity-50">
          {copyright || `© ${new Date().getFullYear()} ${companyName}. Todos os direitos reservados.`}
        </div>
      </div>
    </footer>
  );
}
```
