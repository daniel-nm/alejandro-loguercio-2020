import styled from "styled-components";
import { motion } from "framer-motion";

// **********
// PAGE
// **********

export const Page = styled(motion.section)`
  .page__path {
    margin-bottom: 1rem;
    font-size: 0.85rem;

    @media screen and (min-width: 120em) {
      margin-bottom: 2rem;
    }
  }

  .page__content {
    @media screen and (min-width: 64em) {
    display: flex;
    align-items: center;
    width: 85.4167%;
    max-width: 1980px;
    margin: 0 auto 5rem;

      .project__info {
        flex: 2
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
  height: 20.25rem;
  width: 100%;

  @media screen and (min-width: 48em) {
    margin: 0 auto;
    height: 34.375rem;
    width: 50%;
  }

  @media screen and (min-width: 64em) {
    flex: 2;
    height: 100vh;
    width: 100%;
  }

  @media screen and (min-width: 120em) {
    height: 70vh;
  }
`

// **********
// PROJECT INFO
// **********
export const ProjectDivInfo = styled(motion.div)`
  width: 85.4167%;
  margin: 0 auto 5rem;  

  @media screen and (min-width: 64em) {
    width: 100%;
    margin: 0 0 0 4rem;  
    flex: 1;
  }

  @media screen and (min-width: 120em) {
    flex: 2;
    margin-left: 10rem;
  }

  iframe {
    height: 15rem;
    width: 100%;
    margin: 2rem 0;

    @media screen and (min-width: 48em) {
      height: 20rem;
    }

    @media screen and (min-width: 120em) {
      height: 25rem;
      width: 70%;
    }
    
  }

  h1 {
    @media screen and (min-width: 64em) {
      font-size: 2rem;
      margin-top: 0;
    }
  }
`

export const ProjectFlex = styled.div`
  p {
    color: var(--dark-gray);
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const OtherProjects = styled.div`
  @media screen and (min-width: 48em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    display: block;
    text-transform: capitalize;
    width: 65%;

    @media screen and (min-width: 48em) {
      display: inline-block;
      width: unset;
    }

    &:first-of-type {
      margin-bottom: 1rem;

      @media screen and (min-width: 48em) {
        margin-bottom: 0;
      }
    }
  }
  
`