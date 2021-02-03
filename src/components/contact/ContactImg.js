import React from 'react'

// Images
// TODO: these images need changing
import mobileImg from "../../assets/img/alejandro-loguercio-looking-down.jpg";
import desktopImg from "../../assets/img/alejandro-loguercio-holding-violin.jpg";

// Styles
import { ImgDiv } from "../../styles/components/contactStyles";

const ContactImg = ({ transition }) => {
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

export default ContactImg
