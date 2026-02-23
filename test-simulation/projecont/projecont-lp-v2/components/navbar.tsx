'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Segmentos', href: '#segmentos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 shadow-sm" : "bg-transparent py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="relative z-10 flex items-center gap-2">
                        <span className={cn(
                            "font-display font-bold text-2xl tracking-tight transition-colors",
                            isScrolled ? "text-primary" : "text-primary-50"
                        )}>
                            PROJECONT
                        </span>
                        <div className="w-2 h-2 rounded-full bg-accent mt-1" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-accent",
                                    isScrolled ? "text-foreground" : "text-primary-100"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            variant={isScrolled ? "default" : "secondary"}
                            className={cn(
                                "font-semibold shadow-none transition-all duration-300",
                                !isScrolled && "bg-background text-primary hover:bg-background/90"
                            )}
                        >
                            Falar com Especialista
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "lg:hidden relative z-10 p-2 -mr-2 transition-colors",
                            isScrolled || isMobileMenuOpen ? "text-primary" : "text-primary-50"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={cn(
                    "fixed inset-0 bg-background z-0 lg:hidden flex flex-col pt-32 px-6",
                    isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
                )}
                initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    clipPath: isMobileMenuOpen ? "circle(150% at 100% 0)" : "circle(0% at 100% 0)"
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <nav className="flex flex-col gap-6 text-2xl font-display font-bold text-primary">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="hover:text-accent transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto pb-12">
                    <Button size="lg" className="w-full text-lg">
                        Falar com Especialista
                    </Button>
                </div>
            </motion.div>
        </motion.header>
    );
}
