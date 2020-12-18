// Transition animation
export const transition = { 
  duration: 1.25, 
  ease: [0.6, -0.05, 0.1, 0.9]
};

// Parent variant
export const parent = {
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1
    }
  }
}

// Slide up transition
export const slideUp = {
  initial: {y: "100px", opacity: 0},
  animate: {y: 0, opacity: 1},
  exit: {y: "100px", opacity: 0}
}

// Slide down transition
export const slideDown = {
  initial: {y: "-70px", opacity: 0},
  animate: {y: 0, opacity: 1},
  exit: {y: "-70px", opacity: 0}
}

// Scroll animation
export const scrollView = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {...transition, duration: 1.5}
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
}