// Transition animation
export const transition = { 
  duration: 0.8, 
  ease: [0.6, -0.05, 0.1, 0.9]
};

export const parent = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1
    }
  }
}

export const slideUp = {
  initial: {y: "350px", opacity: 0},
  animate: {y: 0, opacity: 1},
  exit: {y: "350px", opacity: 0}
}

