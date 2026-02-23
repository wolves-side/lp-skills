'use client';

import { useId } from 'react';
import { cn } from '@/lib/utils';

interface NoiseTextureProps {
    opacity?: number;
    className?: string;
}

export function NoiseTexture({ opacity = 0.05, className }: NoiseTextureProps) {
    const id = useId();

    return (
        <div
            className={cn('absolute inset-0 z-0 pointer-events-none', className)}
            style={{ opacity }}
        >
            <svg
                className="h-full w-full opacity-100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <filter id={id}>
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter={`url(#${id})`} />
            </svg>
        </div>
    );
}
