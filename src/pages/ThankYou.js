import React from 'react';
import ScriptTag from 'react-script-tag';
import { Link } from "react-router-dom";
import Image from "../assets/img/alejandro-loguercio/alejandro-loguercio-sitting-smiling.jpg";

// Motion
import {transition} from "../animation/home";

// Styles
import { Container } from "../styles/globalStyles";
import { Page, ImgDiv } from "../styles/components/thankYouStyles";

const ThankYou = () => {
  
  // Event snippet for Contakt conversion page
  <ScriptTag type="text/javascript" src="../Conversion.js" />

  return (
    <Page 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}} 
      transition={transition}
    >
      <div className="page__content">
        <ImgDiv img={Image} />
        <Container>
          <h1>
            Danke für Deine Nachricht!
          </h1>
          <p>
            Ich melde mich so bald wie möglich.
          </p>
          <Link to="/">Startseite</Link>
        </Container>
      </div>
    </Page>
  )
}

export default ThankYou
