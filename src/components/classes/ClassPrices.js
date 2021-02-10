import React, { useEffect } from 'react';

import ClassContact from "./ClassContact";

// Scroll Behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// Motion
import { transition, scrollView } from "../../animation/classes";

// Styles
import { Container } from "../../styles/globalStyles";
import { PricesContainer, Card, VatDiv, Footnote } from "../../styles/components/classesStyles";

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
      <h3 className="subtitle">{data.subtitle}</h3>
      {data.text.slice(0,1).map((item) => (
        <p key={item.id}>{item.para}</p>
      ))}
      {/* List */}
      <ul>
        {data.list.map((item) => (
        <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      

      {/* 30 minuten */}
      <h3>{data.subtitle2}</h3>
      <div className="flex">
        {data.prices.slice(0,2).map((item) => (
          <Card 
            key={item.id}
            bg={item.background}
          >
            <h4 className="card__title">{item.minutes} minuten</h4>
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
      {/* 50 minuten */}
      <h3>{data.subtitle3}</h3>
      <div className="flex">
      {data.prices.slice(2,4).map((item) => (
          <Card 
            key={item.id}
            bg={item.background}
          >
            <h4 className="card__title">{item.minutes} minuten</h4>
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
      <ClassContact content={content} language={language} />
      </PricesContainer>
    </Container>
  )
}

export default ClassPrices
