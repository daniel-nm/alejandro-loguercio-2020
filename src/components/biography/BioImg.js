import React from 'react'

// Images
import mobileImg from "../../assets/img/alejandro-loguercio-white-shirt.jpeg";
import desktopImg from "../../assets/img/alejandro-loguercio-sitting-smiling.jpeg";

// Styles
import { ImgDiv } from "../../styles/components/biographyStyles";

const BioImg = ({ transition }) => {
  return (
    <>
      <ImgDiv
        mobileImg={mobileImg}
        desktopImg={desktopImg}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{transition, duration: 1, delay: 0.5}}
      >
      </ImgDiv>
    </>
  )
}

export default BioImg
