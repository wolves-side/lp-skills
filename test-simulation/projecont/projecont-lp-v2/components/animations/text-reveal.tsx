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
