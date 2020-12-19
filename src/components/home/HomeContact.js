import React, { useEffect } from 'react'
import { Link } from "react-router-dom"

// Styles
import { Container } from "../../styles/globalStyles";
import { ContactDiv } from "../../styles/components/homeStyles";

// Scroll Behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// Motion
import { transition, scrollView } from "../../animation/home";

const HomeContact = ({content, language}) => {

  const data = content[language].contact;

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
      <ContactDiv>
        <p>{data.text}</p>
        <div>
          <Link to="/contact">{data.link}</Link>
        </div>
      </ContactDiv>
    </Container>
  )
}

export default HomeContact
