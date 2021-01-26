import React, { useEffect } from 'react';

// Scroll Behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// Motion
import { transition, scrollView } from "../../animation/classes";

// Styles
import { Container } from "../../styles/globalStyles";
import { PricesContainer, Card, Footnote } from "../../styles/components/classesStyles";

const ClassPrices = ({content, language}) => {

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
    <Container
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={scrollView}
      exit="hidden"
      transition={transition}
    >
    <PricesContainer>
      <h2>{data.title}</h2>
      {data.text.slice(0,2).map((item) => (
        <p key={item.id}>{item.para}</p>
      ))}
      <div className="flex">
        {data.prices.map((item) => (
          <Card 
            key={item.id}
            bg={item.background}
          >
            <h3 className="card__title">{item.minutes} minuten</h3>
            <p className="card__body">
            <span className="price__sign">
              €
            </span>
            <span className="price">
              {item.price}
            </span>
            <span className="price__time">
              /{item.time}
            </span>
            </p>
          </Card>
        ))}
      </div>
      {data.text.slice(2,4).map((item) => (
        <p key={item.id}>{item.para}</p>
      ))}
      {data.footnote.map((item) => (
        <Footnote key={item.id}>{item.para}</Footnote>
      ))}
      </PricesContainer>
    </Container>
  )
}

export default ClassPrices
