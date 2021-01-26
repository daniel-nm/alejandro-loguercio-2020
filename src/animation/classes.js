export const transition = { 
  duration: 1.25, 
  ease: [0.6, -0.05, 0.1, 0.9]
};

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