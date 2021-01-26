import React, { useEffect, useState } from 'react'

// scroll Behaviour
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// Styles
import { Container } from "../../styles/globalStyles";
import { ContactDiv } from "../../styles/components/classesStyles";

// Motion
import { transition, scrollView } from "../../animation/classes";

const ClassContact = ({ content, language}) => {

  // JSON data
  const data = content[language];

  // Obfuscation of email and phone variables
  const [phone1] = useState("+4369910");
  const [phone2] = useState("511139");
  const [emailUser] = useState("contact");
  const [emailDomain] = useState("alejandrologuercio.com");

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
        <div>
          {data.kontakt.map((item) => (
            <p>{item.text}</p>
          ))}
        </div>
        <div>
          <p>
          <a class="link"
          href={`mailto:${emailUser}@${emailDomain}?Subject=Email%20sent%20from%20alejandrologuercio.com`}>{emailUser}@{emailDomain}</a>
          </p>
          <p>
            <a href={`tel:${phone1}${phone2}`}>{phone1}{phone2}</a>
          </p>
        </div>
      </ContactDiv>
    </Container>
  )
}

export default ClassContact
