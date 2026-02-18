# Decorative Effects

Visual effects that make each project unique. Select 2-3 per project
based on the aesthetic classification from Phase 2.

**Rule: Effects are background/ambient. They enhance content, never compete with it.**

---

## Effect Selection Guide

| Aesthetic | Primary Effect | Secondary Effect | Accent |
|-----------|---------------|-----------------|--------|
| **Corporate/Enterprise** | Grid Pattern | Noise Texture | Subtle gradient |
| **Startup/Tech** | Aurora | Gradient Blob | Spotlight |
| **Creative/Agency** | Gradient Blob | Spotlight | Bold gradient |
| **SaaS/Product** | Dot Pattern | Clean gradient | Text glow |
| **Premium/Luxury** | Noise Texture | Spotlight | Minimal particles |
| **Health/Wellness** | Organic blob | Soft gradient | Noise texture |
| **Finance/Legal** | Grid Pattern | Noise Texture | — |

---

## GradientBlob Component

Animated floating gradient blobs for backgrounds.

```tsx
// components/decorative/gradient-blob.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientBlobProps {
  className?: string;
  colors?: [string, string, string];
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizes = {
  sm: 'w-[300px] h-[300px]',
  md: 'w-[500px] h-[500px]',
  lg: 'w-[700px] h-[700px]',
  xl: 'w-[900px] h-[900px]',
};

export function GradientBlob({
  className,
  colors = ['#4F46E5', '#7C3AED', '#EC4899'],
  size = 'lg',
}: GradientBlobProps) {
  return (
    <motion.div
      className={cn(
        'absolute rounded-full blur-3xl opacity-30 pointer-events-none',
        sizes[size],
        className
      )}
      style={{
        background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
```

**Usage:**
```tsx
<section className="relative overflow-hidden">
  <GradientBlob className="-top-40 -right-40" colors={['#3B82F6', '#8B5CF6', '#EC4899']} />
  <GradientBlob className="-bottom-40 -left-40" colors={['#10B981', '#3B82F6', '#6366F1']} size="md" />
  <div className="relative z-10 container">{/* content */}</div>
</section>
```

---

## NoiseTexture Component

SVG noise overlay that adds grain/texture to backgrounds.

```tsx
// components/decorative/noise-texture.tsx
import { cn } from '@/lib/utils';

interface NoiseTextureProps {
  className?: string;
  opacity?: number;
}

export function NoiseTexture({ className, opacity = 0.04 }: NoiseTextureProps) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none z-[1]', className)}
      style={{ opacity }}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
```

**Usage:**
```tsx
<section className="relative bg-slate-900">
  <NoiseTexture opacity={0.05} />
  <div className="relative z-10">{/* content */}</div>
</section>
```

---

## GridPattern Component

Dot or line grid background pattern.

```tsx
// components/decorative/grid-pattern.tsx
import { cn } from '@/lib/utils';

interface GridPatternProps {
  className?: string;
  variant?: 'dots' | 'lines' | 'cross';
  size?: number;
  color?: string;
  opacity?: number;
}

export function GridPattern({
  className,
  variant = 'dots',
  size = 24,
  color = 'currentColor',
  opacity = 0.1,
}: GridPatternProps) {
  const patterns = {
    dots: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
    lines: `
      linear-gradient(${color} 1px, transparent 1px),
      linear-gradient(90deg, ${color} 1px, transparent 1px)
    `,
    cross: `
      linear-gradient(${color} 1px, transparent 1px),
      linear-gradient(90deg, ${color} 1px, transparent 1px)
    `,
  };

  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        backgroundImage: patterns[variant],
        backgroundSize: `${size}px ${size}px`,
        opacity,
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
      }}
    />
  );
}
```

**Usage:**
```tsx
<section className="relative">
  <GridPattern variant="dots" size={32} opacity={0.08} />
  <div className="relative z-10">{/* content */}</div>
</section>
```

---

## Aurora Component

Northern lights gradient effect for hero sections.

```tsx
// components/decorative/aurora.tsx
'use client';

import { cn } from '@/lib/utils';

interface AuroraProps {
  className?: string;
  colors?: string[];
}

export function Aurora({
  className,
  colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4'],
}: AuroraProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div
        className="absolute -inset-[10px] opacity-50"
        style={{
          background: `
            linear-gradient(135deg, ${colors[0]}33 0%, transparent 50%),
            linear-gradient(225deg, ${colors[1]}33 0%, transparent 50%),
            linear-gradient(315deg, ${colors[2]}33 0%, transparent 50%),
            linear-gradient(45deg, ${colors[3]}33 0%, transparent 50%)
          `,
          filter: 'blur(80px)',
          animation: 'aurora 15s ease infinite',
        }}
      />
      <style jsx>{`
        @keyframes aurora {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(3deg) scale(1.05); }
          50% { transform: rotate(-2deg) scale(1.02); }
          75% { transform: rotate(1deg) scale(0.98); }
        }
      `}</style>
    </div>
  );
}
```

---

## Spotlight Component

Mouse-following spotlight effect.

```tsx
// components/decorative/spotlight.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  className?: string;
  size?: number;
  color?: string;
}

export function Spotlight({
  className,
  size = 400,
  color = 'rgba(120, 119, 198, 0.15)',
}: SpotlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - size / 2);
      mouseY.set(e.clientY - rect.top - size / 2);
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, size]);

  return (
    <div ref={containerRef} className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          x,
          y,
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
        }}
      />
    </div>
  );
}
```

**Usage:**
```tsx
<section className="relative" onMouseMove={(e) => {/* propagates to children */}}>
  <Spotlight color="rgba(59, 130, 246, 0.15)" size={500} />
  <div className="relative z-10 pointer-events-auto">{/* content */}</div>
</section>
```

---

## CSS-Only Effects (via globals.css)

### Grainy Gradient Background

```css
/* Add to app/globals.css @layer utilities */
.gradient-grain {
  position: relative;
  background: linear-gradient(135deg, var(--gradient-from), var(--gradient-to));
}
.gradient-grain::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
}
```

### Animated Gradient Border

```css
.gradient-border {
  position: relative;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
.gradient-border > * {
  border-radius: 11px;
  background: var(--background);
}
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

## Combining Effects

**Example: Tech/SaaS Hero**
```tsx
<section className="relative min-h-screen bg-slate-950 overflow-hidden">
  {/* Layer 1: Grid pattern */}
  <GridPattern variant="dots" color="rgba(148, 163, 184, 0.3)" size={32} />

  {/* Layer 2: Aurora gradient */}
  <Aurora colors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981']} />

  {/* Layer 3: Noise texture */}
  <NoiseTexture opacity={0.03} />

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6">
    {/* Hero content */}
  </div>
</section>
```

**Example: Corporate Section**
```tsx
<section className="relative bg-white overflow-hidden">
  <GridPattern variant="lines" color="rgba(0,0,0,0.05)" size={48} />
  <NoiseTexture opacity={0.02} />
  <div className="relative z-10">{/* content */}</div>
</section>
```
