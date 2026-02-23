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
