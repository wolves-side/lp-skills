import { type Variants } from 'framer-motion';

// --- Project-specific timing values from Motion System ---
const EASE = [0.22, 1, 0.36, 1] as const; // Corporate easeOutExpo
const DURATION_BASE = 0.6;
const STAGGER_DELAY = 0.1;

// --- Reveal (Text/Headlines) ---
export const textReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: DURATION_BASE, ease: [...EASE] },
    },
};

// --- Fade Up (default section entrance) ---
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: DURATION_BASE, ease: [...EASE] },
    },
};

// --- Fade In (no movement) ---
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: DURATION_BASE, ease: [...EASE] },
    },
};

// --- Scale Up (cards, images) ---
export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: DURATION_BASE, ease: [...EASE] },
    },
};

// --- Slide variants ---
export const slideLeft: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: DURATION_BASE, ease: [...EASE] },
    }
};

export const slideRight: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: DURATION_BASE, ease: [...EASE] },
    }
};

// --- Stagger Container ---
export const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: STAGGER_DELAY, delayChildren: 0.1 } },
};

// --- Stagger Item ---
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: Math.max(0.4, DURATION_BASE - 0.2), ease: [...EASE] },
    },
};

// --- Blur In (premium feel) ---
export const blurIn: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
    visible: {
        opacity: 1, filter: "blur(0px)", scale: 1,
        transition: { duration: DURATION_BASE + 0.2, ease: [...EASE] },
    },
};
