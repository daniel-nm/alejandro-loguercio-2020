import React from 'react'
import image from "../../assets/img/alejandro-loguercio/alejandro-loguercio-smiling.jpg";


// Styles
import { ImgDiv } from "../../styles/components/contactStyles";

const ContactImg = ({ transition }) => {
  return (
    <>
      <ImgDiv
        bgImage={image}
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
