import React from 'react';
import { Link } from "react-router-dom";
import Image from "../assets/img/garufa/garufa-404.jpg";

// Motion
import {transition} from "../animation/home";

// Styles
import { Container } from "../styles/globalStyles";
import { Page, ImgDiv } from "../styles/components/pageNotFound";

const NotFoundPage = () => {
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
            404 error
            <span> We apologise!</span>
          </h1>
          <p>The page you are looking for does not exist or is not available.</p>
          <Link to="/">Go back</Link>
        </Container>
      </div>
    </Page>
  )
}

export default NotFoundPage
