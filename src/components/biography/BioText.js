import React, { useContext } from 'react';

// Content
import Content from "../../content/biography.json";

// Context
import LanguageContext from "../../context/LanguageContext";

// Styles
import { Container } from "../../styles/globalStyles";
import { TextDiv } from "../../styles/components/biographyStyles";

const BioText = ({ transition }) => {

  // App language
  const [language] = useContext(LanguageContext);

  return (
    <>
      <TextDiv
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 100, opacity: 0}}
        transition={{transition, duration: 1, delay: 1}}
      >
        <Container>
        <div className="intro">
          <h1>{Content[language].title}</h1>
          <p className="highlight">{Content[language].highlight}</p>
          <p>{Content[language].intro}</p>
        </div>
        <div className="training">
          <h2>{Content[language].subtitle1}</h2>
          {Content[language].training.map((para, index) => (
            <p key={index}>{para.text}</p>
          ))}
        </div>
        <div className="vienna">
          <h2>{Content[language].subtitle2}</h2>
          {Content[language].vienna.map((para, index) => (
            <p key={index}>{para.text}</p>
          ))}
        </div>
        {Content[language].pedagogue && 
        <div className="pedagogue">
          <h2>{Content[language].subtitle3}</h2>
          {Content[language].pedagogue.map((para, index) => (
            <p key={index}>{para.text}</p>
          ))}
        </div>
        }
        </Container>
      </TextDiv>
    </>
  )
}

export default BioText
