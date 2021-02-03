export const transition = { duration: 1, ease: [0.6, -0.05, 0.1, 0.9]};

export const opacity = {
  initial: {opacity: 0},
  animate: {opacity: 1},
  exit: {opacity: 0}
}

export const slideUp = {
  initial: {y: "100px", opacity: 0},
  animate: {y: 0, opacity: 1},
  exit: {y: "100px", opacity: 0}
}