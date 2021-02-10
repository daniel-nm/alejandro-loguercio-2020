import React from 'react';
import image from "../../assets/img/alejandro-loguercio/alejandro-loguercio-holding-violin.jpg";

// Styles
import { ImgDiv } from "../../styles/components/biographyStyles";

const BioImg = ({ transition }) => {
  return (
    <>
      <ImgDiv
        bgImage={image}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{transition, duration: 0.75, delay: 0.5}}
      >
      </ImgDiv>
    </>
  )
}

export default BioImg
