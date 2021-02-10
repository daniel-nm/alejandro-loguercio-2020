import React, { useEffect } from 'react';

// Styles
import { Container } from "../../styles/globalStyles";
import { Press, PressText, PressAuthor } from "../../styles/components/homeStyles";

// Scroll behaviour
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

// Motion
import { scrollView, transition } from "../../animation/home";

const HomePress = ({ content, language }) => {

  // JSON data
  const data = content[language].press;

  // Scroll animation
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
      <Press>
        <PressText>
          {data.text}
        </PressText>
        <PressAuthor>
          {data.author}
        </PressAuthor>
      </Press>
    </Container>
  )
}

export default HomePress
