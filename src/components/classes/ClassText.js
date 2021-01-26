import React from 'react';

// Images
import mobileImg from "../../assets/img/alejandro-loguercio-teaching-1.jpg";
import desktopImg from "../../assets/img/alejandro-loguercio-teaching-2.jpg";

// Components
import ClassImg from "./ClassImg";

// Styles
import { Container } from "../../styles/globalStyles";
import { FlexDiv, TeachingDiv } from "../../styles/components/classesStyles";

const ClassText = ({content, language, transition}) => {

  // JSON data
  const data = content[language];

  return (
    <>
      <FlexDiv>
        <TeachingDiv 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{transition, duration: 1, delay: 0.5}}
          >
          <ClassImg transition={transition} img={mobileImg} />
          <Container as="div">
            <h2>{data.kinder.title}</h2>
            {data.kinder.text.map((item, index) => (
              <p key={index}>{item.para}</p>
            ))}
          </Container>
        </TeachingDiv>
        <TeachingDiv
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{transition, duration: 1, delay: 1}}
        >
          <ClassImg transition={transition} img={desktopImg} />
          <Container>
            <h2>{data.erwachsene.title}</h2>
              {data.erwachsene.text.map((item, index) => (
                <p key={index}>{item.para}</p>
              ))}
          </Container>
        </TeachingDiv>
      </FlexDiv>
    </>
  )
}

export default ClassText
