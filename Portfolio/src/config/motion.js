// src/config/motion.js

// Professional easing curve - subtle yet sophisticated
export const easing = [0.25, 0.1, 0.25, 1];

// Base fade up animation (used by multiple components)
export const fadeInUp = {
    initial: {
        y: 30,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: easing,
            delay: 0.2
        }
    }
};

// Navigation animation
export const navAnimation = {
    initial: {
        y: -20,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: easing
        }
    }
};

// Container stagger effect
export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.3
        }
    }
};

// Section transition
export const sectionTransition = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
};

// Project card animation
export const projectCardLoad = {
    initial: {
        opacity: 0,
        scale: 0.98,
        y: 20
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
};

// Tech stack reveal animation
export const techStackReveal = {
    initial: {
        opacity: 0,
        y: 15,
        filter: 'blur(5px)'
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.5,
            ease: easing,
            delay: index * 0.1
        }
    })
};

// Menu animation
export const menuAnimation = {
    initial: { x: "100%" },
    animate: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
    exit: {
        x: "100%",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    }
};

// Line animation
export const lineAnimation = {
    initial: { scaleX: 0 },
    animate: {
        scaleX: 1,
        transition: {
            duration: 1.5,
            ease: easing
        }
    }
};