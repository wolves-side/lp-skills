# Navigation Implementation

React components for navbar and mobile menu with Framer Motion animations.

---

## Navbar Component

```tsx
// components/navigation/navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileMenu } from './mobile-menu';
import { cn } from '@/lib/utils';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: React.ReactNode;
  links: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export function Navbar({ logo, links, ctaText, ctaHref }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'relative z-50 transition-all duration-300 w-full',
          isScrolled
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm sticky top-0'
            : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="font-display font-bold text-xl">
            {logo}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" asChild>
              <a href={ctaHref}>{ctaText}</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2"
            aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <MobileMenu
            links={links}
            ctaText={ctaText}
            ctaHref={ctaHref}
            onClose={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
```

---

## Mobile Menu Component

Full-screen overlay with staggered link animation.

```tsx
// components/navigation/mobile-menu.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  links: { label: string; href: string }[];
  ctaText: string;
  ctaHref: string;
  onClose: () => void;
}

export function MobileMenu({ links, ctaText, ctaHref, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
    >
      <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={onClose}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.05 * i, duration: 0.3 }}
            className="text-2xl font-display font-bold"
          >
            {link.label}
          </motion.a>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * links.length + 0.1, duration: 0.3 }}
          className="mt-4"
        >
          <Button size="lg" asChild onClick={onClose}>
            <a href={ctaHref}>{ctaText}</a>
          </Button>
        </motion.div>
      </nav>
    </motion.div>
  );
}
```

---

## Usage in app/page.tsx

```tsx
import { Navbar } from '@/components/navigation/navbar';

const NAV_LINKS = [
  { label: 'Problema', href: '#problem' },
  { label: 'Solução', href: '#solution' },
  { label: 'Resultados', href: '#proof' },
  { label: 'FAQ', href: '#faq' },
];

export default function Home() {
  return (
    <>
      <Navbar
        logo={<span className="text-primary">Brand</span>}
        links={NAV_LINKS}
        ctaText="Falar com especialista"
        ctaHref="#contact"
      />
      <main id="main">
        {/* sections */}
      </main>
    </>
  );
}
```

---

## Smooth Scroll (via Lenis)

Lenis handles smooth scrolling to anchor links automatically. No extra config needed
as long as `LenisProvider` wraps the page in `app/layout.tsx`.

Links like `<a href="#faq">` will smooth-scroll by default.
