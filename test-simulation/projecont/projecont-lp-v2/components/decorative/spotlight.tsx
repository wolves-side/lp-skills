'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
    className?: string;
    fill?: string;
};

export function Spotlight({ className, fill = 'white' }: SpotlightProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                'absolute inset-0 overflow-hidden pointer-events-none',
                className
            )}
            ref={ref}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${fill}, transparent 40%)`,
                }}
            />
        </div>
    );
}
