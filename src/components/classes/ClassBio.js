import React, { useEffect } from 'react'
import img from "../../assets/img/alejandro-loguercio-smiling.jpg";

// Scroll Behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// Motion
import { scrollView, transition } from "../../animation/classes";

// Styles
import { Container } from "../../styles/globalStyles"

const ClassBio = ({ content, language }) => {

  // JSON data
  const data = content[language].bio;

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
      className="bio"
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={scrollView}
      exit="hidden"
      transition={transition}
    >
      <img className="bio__img" src={img} alt="Alejandro Loguercio" />
      <h2>{data.title}</h2>
      <div className="intro">
      <p className="highlight">{data.highlight}</p>
      <p>{data.intro}</p>
      </div>
      <div className="training">
      <h2>{data.subtitle1}</h2>
      <p>
        {data.training.map((item, index) => (
          <p key={index}>{item.text}</p> 
        ))}
      </p>
      </div>
      <div className="wien">
        <h2>{data.subtitle2}</h2>
        {data.vienna.map((item, index) => (
          <p key={index}>{item.text}</p> 
        ))}
      </div>
      <div className="pedagogue">
        <h2>{data.subtitle3}</h2>
        {data.pedagogue.map((item, index) => (
          <p key={index}>{item.text}</p> 
        ))}
      </div>
    </Container>
  )
}

export default ClassBio
