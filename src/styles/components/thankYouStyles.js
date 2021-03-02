import styled from "styled-components";
import { motion } from "framer-motion";

// **********
// PAGE
// **********

export const Page = styled(motion.section)`

  h1 {
    font-size: 1.5rem;
    span {
      color: var(--light-gray);
      font-size: 1rem;
      display: block;
    }
  }

  p {
    color: var(--dark-gray);
    margin-bottom: 1rem;
  }

  a {
    display: inline-block;
    margin-bottom: 2rem;
  }

  .page__content {

    @media screen and (min-width: 48em) {
      section {
        margin-left: 2rem;
      }
    }
    @media screen and (min-width: 64em) {
      display: flex;
      align-items: center;
      width: 85.4167%;
      max-width: 1980px;
      margin: 0 auto;
      height: 90vh;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;

        span {
          font-size: 1.25rem;
        }
      }

      p {
        font-size: 1.25rem;
      }

      a {
        font-size: 1.25rem;
      }

      section {
        flex: 1;
      }
      
    } 
  }
`

// **********
// MAIN IMAGE
// **********
export const ImgDiv = styled(motion.div)`
  background-image: ${props => `url(${props.img})`};
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  height: 39rem;
  width: 100%;
  margin-bottom: 2rem;

  @media screen and (min-width: 48em) {
    margin: 0 auto;
    height: 43rem;
    width: 60%;
  }

  @media screen and (min-width: 64em) {
    background-size: contain;
    background-position: center;
    flex: 1;
    width: 100%;
    height: 75vh;
    max-height: 700px;
  }
`