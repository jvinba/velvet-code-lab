import { Variants } from "framer-motion";

// Page transition variants
export const pageVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20, 
    filter: "blur(4px)" 
  },
  in: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
  out: { 
    opacity: 0, 
    y: -20, 
    filter: "blur(4px)",
    transition: { 
      duration: 0.4, 
      ease: [0.4, 0, 1, 1] 
    } 
  }
};

// Stagger animation for lists
export const staggerContainer: Variants = {
  initial: {},
  in: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  in: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

// Hero animations
export const heroTitle: Variants = {
  initial: { 
    opacity: 0, 
    y: 30,
    scale: 0.9 
  },
  in: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2 
    }
  }
};

export const heroSubtitle: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  in: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4 
    }
  }
};

export const heroCTA: Variants = {
  initial: { 
    opacity: 0, 
    y: 20,
    scale: 0.9 
  },
  in: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.6 
    }
  }
};

// Card hover animations
export const cardHover = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0
  },
  hover: {
    scale: 1.05,
    z: 50,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Button animations
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  tap: { 
    scale: 0.95,
    transition: { 
      duration: 0.1 
    }
  }
};

// Floating animation for background elements
export const floatingVariants: Variants = {
  float: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    rotate: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Skills animation
export const skillBarVariants: Variants = {
  initial: { width: 0 },
  in: (percentage: number) => ({
    width: `${percentage}%`,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.5
    }
  })
};

// Modal animations
export const modalVariants: Variants = {
  initial: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  in: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  out: { 
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: { 
      duration: 0.2,
      ease: [0.4, 0, 1, 1] 
    }
  }
};

// Underline animation
export const underlineVariants: Variants = {
  initial: { scaleX: 0 },
  hover: { 
    scaleX: 1,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};