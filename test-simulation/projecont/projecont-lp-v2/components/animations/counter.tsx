'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CounterProps {
    value: number;
    direction?: 'up' | 'down';
    className?: string;
    delay?: number;
}

export function Counter({ value, direction = 'up', className, delay = 0 }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === 'down' ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
        mass: 1,
    });
    const isInView = useInView(ref, { once: true, margin: '-10px' });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                motionValue.set(direction === 'down' ? 0 : value);
            }, delay * 1000);
        }
    }, [motionValue, isInView, delay, value, direction]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat('pt-BR').format(Math.round(latest));
            }
        });
    }, [springValue]);

    return <span ref={ref} className={className} />;
}
