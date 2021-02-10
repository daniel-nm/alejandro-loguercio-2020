import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerImg from "../../assets/img/alejandro-loguercio/alejandro-loguercio.jpg";

// Styles
import { Container } from "../../styles/globalStyles";
import { SectionFlex, Div, BannerImg, Title, Subtitle } from "../../styles/components/homeStyles";

// Motion
import { transition, parent, slideUp } from "../../animation/home";

const HomeBanner = ({ content, language }) => {

  // JSON data
  const data = content[language].banner;

  return (
    <SectionFlex>
      <Div className="banner__img">
        <BannerImg
          srcSet={`${bannerImg} 907w, ${bannerImg} 1516w`}
          sizes={`(max-width: 768px) 100vw, 100vw`}
          src={bannerImg} 
          alt="Alejandro Loguercio" 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{...transition, delay: 0.5}}
        />
      </Div>
      <Container
        variants={parent}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Div>
          <Title variants={slideUp} transition={transition}>
            {data.title}
          </Title>
        </Div>
        <Div>
          <Subtitle variants={slideUp} transition={transition}>
            {data.text}
          </Subtitle>
          <motion.p
            variants={slideUp} 
            transition={transition}
          >
            <Link to="/unterricht">{data.link}</Link>
          </motion.p>
        </Div>
      </Container>
    </SectionFlex>
  )
}

export default HomeBanner
