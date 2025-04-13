/**
 * Animation settings for different components in the portfolio
 */

// Base animation settings for different elements
export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };
  
  export const slideIn = (direction = 'up') => {
    const directions = {
      up: { y: 20 },
      down: { y: -20 },
      left: { x: 20 },
      right: { x: -20 }
    };
    
    return {
      initial: { opacity: 0, ...directions[direction] },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, ...directions[direction] },
      transition: { duration: 0.4 }
    };
  };
  
  export const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.4 }
  };
  
  // Staggered animations for lists of items
  export const stagger = (delayChildren = 0.1) => ({
    animate: {
      transition: {
        staggerChildren: delayChildren
      }
    }
  });
  
  // Animation variants for specific components
  export const variants = {
    // For navbar items
    navItem: {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.2 }
    },
    
    // For cards
    card: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.3 }
    },
    
    // For project items
    project: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 30 },
      transition: { duration: 0.4 }
    },
    
    // For skill bars
    skillBar: {
      initial: { width: 0 },
      animate: width => ({ width }),
      transition: { duration: 1, ease: "easeOut" }
    },
    
    // For page transitions
    page: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4 }
    }
  };
  
  // Typed text animation settings
  export const typedTextSettings = {
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
  };
  
  export default {
    fadeIn,
    slideIn,
    scaleIn,
    stagger,
    variants,
    typedTextSettings
  };