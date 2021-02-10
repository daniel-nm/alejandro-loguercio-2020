import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

// scroll Behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// Styles
import { ContactDiv } from "../../styles/components/classesStyles";

// Motion
import { transition, scrollView } from "../../animation/classes";

const ClassContact = ({ content, language}) => {

  // JSON data
  const data = content[language];

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
    <div
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={scrollView}
      exit="hidden"
      transition={transition}
    >
      <ContactDiv>
        <p>{data.kontakt.text}</p>
        <div>
          <Link to="/contact">{data.kontakt.link}</Link>
        </div>
      </ContactDiv>
    
    </div>
  )
}

export default ClassContact
