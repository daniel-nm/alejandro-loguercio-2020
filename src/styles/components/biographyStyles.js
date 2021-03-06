import styled from "styled-components";
import { motion } from "framer-motion";

// **********
// PAGE
// **********

export const Page = styled.section`
  @media screen and (min-width: 64em) {
    display: flex;
    width: 85.4167%;
    max-width: 1980px;
    margin: 0 auto 5rem;
  } 
`

// **********
// MAIN IMAGE
// **********

export const ImgDiv = styled(motion.div)`
  background-image: ${props => `url(${props.bgImage})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  height: 31.25rem;
  width: 100%;

  @media screen and (min-width: 48em) {
    margin: 0 auto;
    height: 34.375rem;
    width: 50%;
  }

  @media screen and (min-width: 64em) {
    background-position: center;
    flex: 1;
    height: 100vh;
    width: 100%;
  }

  @media screen and (min-width: 137em) {
    height: 80vh;
  }
`

// **********
// BIO TEXT
// **********

export const TextDiv = styled(motion.div)`
  margin-top: 3rem;

  @media screen and (min-width: 64em) {
    columns: 2;
    flex: 2;
    margin-top: 0;
    margin-left: 2rem;
  }

  h1 {
      @media screen and (min-width: 64em) {
        column-span: all;
        font-size: 2rem;
        text-align: center;
        margin-bottom: 5rem;
      }
    }

  h2 {
    font-size: 1rem;
    margin: 3rem 0 1rem;

    @media screen and (min-width: 64em) {
      font-size: 1.5rem;
    }
  }

  .intro {
    margin-bottom: 3rem;

    .highlight {
      color: var(--dark-gray);
      margin-bottom: 2rem;

      @media screen and (min-width: 64em) {
        font-size: 1.25rem;
      }
    }
  }

  .training,
  .vienna,
  .pedagogue {
    margin-bottom: 3rem;
    p {
      margin-bottom: 1rem;
    }
  }

`