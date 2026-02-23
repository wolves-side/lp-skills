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
