// Transition
export const transition = { 
  duration: 0.8, 
  ease: [0.6, -0.05, 0.1, 0.9]
};

// Parent variant
export const parent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
}

// Footer variant
export const footer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.5
    }
  }
}

// Slide up animation
export const slideUp = {
  initial: {y: "200px"},
  animate: {y: 0},
  exit: {y: "200px"}
}

// Footer slide up animation
export const footerSlideUp = {
  initial: {y: 100},
  animate: {y: 0},
  exit: {y: 100}
}