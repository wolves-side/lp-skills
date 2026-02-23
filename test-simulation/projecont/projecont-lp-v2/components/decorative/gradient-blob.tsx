'use client';

import { cn } from '@/lib/utils';

interface GradientBlobProps {
    className?: string;
    colors?: string[];
    size?: 'sm' | 'md' | 'lg';
}

export function GradientBlob({
    className,
    colors = ['#FF0080', '#7928CA', '#0070F3'],
    size = 'md',
}: GradientBlobProps) {
    const sizeClasses = {
        sm: 'w-64 h-64 blur-3xl',
        md: 'w-96 h-96 blur-[100px]',
        lg: 'w-[800px] h-[800px] blur-[120px]',
    };

    return (
        <div
            className={cn(
                'absolute rounded-full opacity-40 mix-blend-multiply filter animate-blob',
                sizeClasses[size],
                className
            )}
            style={{
                background: `linear-gradient(to right, ${colors.join(', ')})`,
            }}
        />
    );
}
