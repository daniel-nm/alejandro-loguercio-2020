import React from 'react'

// Styles
import { ImgDiv } from "../../styles/components/classesStyles";

const ClassImg = ({ transition, img }) => {
  return (
    <>
      <ImgDiv
        mobileImg={img}
        desktopImg={img}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{transition, duration: 1, delay: 0.5}}
      >
      </ImgDiv>
    </>
  )
}

export default ClassImg
