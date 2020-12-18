import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

// Scroll Behaviour
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

// Styles
import { Container } from "../../styles/globalStyles";
import { ClassSection, ClassTitle, ClassSubtitle, ClassText } from "../../styles/components/homeStyles";

// Motion
import { transition, scrollView } from "../../animation/home";

const HomeClasses = ({ content, language }) => {

  const data = content[language].classes;

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
    <ClassSection
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={scrollView}
      exit="hidden"
      transition={transition}
    >
      <Container as="div">
        <ClassTitle>{data.title}</ClassTitle> 
        <div className="flex">
          <div className="class__children">
            <ClassSubtitle>{data.children.title}</ClassSubtitle>
            <ClassText>{data.children.text}</ClassText>
            <Link to="/classes">{data.children.link}</Link>
          </div>
          <div>
            <ClassSubtitle>{data.adults.title}</ClassSubtitle>
            <ClassText>{data.adults.text}</ClassText>
            <Link to="/classes">{data.adults.link}</Link>
          </div>
        </div>
      </Container>
    </ClassSection>
  )
}

export default HomeClasses
