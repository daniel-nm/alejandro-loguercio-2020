import React, { useEffect } from 'react'

// Scroll Behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// Motion
import { scrollView, transition } from "../../animation/classes";

// Styles
import { Container } from "../../styles/globalStyles";

const ClassVideo = () => {

  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView]);

  return (
    <Container
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={scrollView}
      exit="hidden"
      transition={transition}
    >
      <iframe 
        title="Viajera del Rio" 
        src="https://www.youtube-nocookie.com/embed/SmH5pBziHjM?color=white&modestbranding=1&rel=0&theme=light" 
        frameBorder="0" 
        allowFullScreen
      >
      </iframe>
    </Container>
  )
}

export default ClassVideo
