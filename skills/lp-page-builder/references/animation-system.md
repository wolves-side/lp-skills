# Animation System

Complete animation components using Framer Motion + GSAP + Lenis.
All components are reusable wrappers — use them around content, not as content.

---

## lib/animations.ts — Shared Variants

```typescript
import { type Variants } from 'framer-motion';

// --- Fade Up (most common) ---
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Fade In (no movement) ---
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// --- Scale Up (cards, images) ---
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Slide from Left ---
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Slide from Right ---
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Stagger Container ---
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// --- Stagger Item (use with staggerContainer) ---
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Blur In (premium feel) ---
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
```

---

## ScrollReveal Component

Wraps any element to animate it when it enters the viewport.

```tsx
// components/animations/scroll-reveal.tsx
'use client';

import { motion, type Variants } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
  as = 'div',
}: ScrollRevealProps) {
  const Component = motion[as] as any;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
```

**Usage:**
```tsx
<ScrollReveal>
  <h2>This fades up when scrolled into view</h2>
</ScrollReveal>

<ScrollReveal variants={slideLeft} delay={0.2}>
  <p>This slides from the left with a delay</p>
</ScrollReveal>
```

---

## StaggerChildren Component

Animates children one by one with staggered delays.

```tsx
// components/animations/stagger-children.tsx
'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// Use this wrapper around each child
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={cn(className)}>
      {children}
    </motion.div>
  );
}
```

**Usage:**
```tsx
<StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <StaggerItem><FeatureCard /></StaggerItem>
  <StaggerItem><FeatureCard /></StaggerItem>
  <StaggerItem><FeatureCard /></StaggerItem>
</StaggerChildren>
```

---

## Counter Component

Animated number counter that activates when scrolled into view.

```tsx
// components/animations/counter.tsx
'use client';

import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  locale?: string;
}

export function Counter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  decimals = 0,
  className,
  locale = 'pt-BR',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (decimals > 0) {
      return latest.toFixed(decimals);
    }
    return Math.floor(latest).toLocaleString(locale);
  });

  useEffect(() => {
    if (!isInView) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    if (prefersReduced.matches) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    return controls.stop;
  }, [isInView, target, duration, count]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
```

**Usage:**
```tsx
<Counter target={500000} suffix="+" className="text-5xl font-bold text-primary" />
<Counter target={98.5} suffix="%" decimals={1} />
```

---

## TextReveal Component

Reveals text word-by-word or character-by-character.

```tsx
// components/animations/text-reveal.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  mode?: 'word' | 'character';
  staggerDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function TextReveal({
  text,
  className,
  mode = 'word',
  staggerDelay = 0.05,
  as: Tag = 'p',
}: TextRevealProps) {
  const units = mode === 'word' ? text.split(' ') : text.split('');
  const separator = mode === 'word' ? '\u00A0' : '';

  return (
    <Tag className={cn('overflow-hidden', className)}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay } },
        }}
        className="inline"
      >
        {units.map((unit, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {unit}
            {separator}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
```

**Usage:**
```tsx
<TextReveal text="Transform your business today" as="h1" className="text-5xl font-bold" />
<TextReveal text="PREMIUM" mode="character" as="span" staggerDelay={0.03} />
```

---

## ParallaxSection Component (GSAP)

Creates parallax scroll effects using GSAP ScrollTrigger.

```tsx
// components/animations/parallax-section.tsx
'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 0.5 = slow, 1 = normal, 2 = fast
  direction?: 'up' | 'down';
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  direction = 'up',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = innerRef.current;
    if (!el) return;

    const yMultiplier = direction === 'up' ? -1 : 1;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: 100 * speed * yMultiplier,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed, direction]);

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
```

---

## MagneticButton Component

Button that subtly follows the cursor when hovered.

```tsx
// components/animations/magnetic-button.tsx
'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  );
}
```

**Usage:**
```tsx
<MagneticButton>
  <Button size="lg">Falar com especialista</Button>
</MagneticButton>
```

---

## GSAP ScrollTrigger: Advanced Patterns

### Pin a section while content scrolls

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: 1,
    });
  });
  return () => ctx.revert();
}, []);
```

### Horizontal scroll section

```tsx
useEffect(() => {
  const ctx = gsap.context(() => {
    const container = containerRef.current;
    const panels = container?.querySelectorAll('.panel');
    if (!panels) return;

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => '+=' + container!.offsetWidth,
      },
    });
  });
  return () => ctx.revert();
}, []);
```

---

## Performance Rules

| Rule | Why |
|------|-----|
| Always use `viewport={{ once: true }}` | Don't re-trigger animations |
| Clean up GSAP in `useEffect` return | Prevent memory leaks |
| Use `will-change` via Tailwind `will-change-transform` | GPU compositing |
| Check `prefers-reduced-motion` in every animated component | Accessibility |
| Use `layout` prop sparingly | Layout animations are expensive |
| Prefer `transform` and `opacity` over other properties | No layout recalculation |
| Use `@gsap/react` `useGSAP` hook when possible | Auto-cleanup |
