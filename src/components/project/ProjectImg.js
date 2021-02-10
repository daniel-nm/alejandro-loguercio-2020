import React from 'react';

// Styles
import { ImgDiv } from "../../styles/components/projectStyles";

const projectImg = ({img, transition}) => {

  return (
    <>
      <ImgDiv
        img={require(`../../assets/img/${img}`).default}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{transition, duration: 0.5, delay: 0.5}}
      >
      </ImgDiv>
    </>
  )
}

export default projectImg
