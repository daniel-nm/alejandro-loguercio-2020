import React, { useEffect } from 'react'
import img from "../../assets/img/alejandro-loguercio/alejandro-loguercio-teaching-bio.jpg";

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
      <div className="intro">
        <h2 className="title">{data.title}</h2>
        <p className="highlight">{data.highlight}</p>
        <p>{data.intro}</p>
      </div>
      <div className="training">
        <h2>{data.subtitle1}</h2>
        <div>
          {data.training.map((item, index) => (
            <p key={index}>{item.text}</p> 
          ))}
        </div>
      </div>
      <div className="wien">
        <h2>{data.subtitle2}</h2>
        {data.vienna.map((item, index) => (
          <p key={index}>{item.text}</p> 
        ))}
      </div>
      <div className="pedagogue">
      <img className="bio__img" src={img} alt="Alejandro Loguercio" />
      <h2>{data.subtitle3}</h2>
        {data.pedagogue.map((item, index) => (
          <p key={index}>{item.text}</p> 
        ))}
      </div>
    </Container>
  )
}

export default ClassBio
