import React from 'react';

// Images
import mobileImg from "../../assets/img/DSC_4513.JPG";
import desktopImg from "../../assets/img/DSC_4586.JPG";

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
