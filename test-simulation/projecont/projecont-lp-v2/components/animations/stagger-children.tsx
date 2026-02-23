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
