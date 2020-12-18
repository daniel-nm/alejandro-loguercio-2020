import styled from "styled-components";
import { motion } from "framer-motion";

// **********
// HOME BANNER
// **********

// Flex section for desktop screens
export const SectionFlex = styled.section`
  @media screen and (min-width: 64em) {
    display: flex;
    flex-direction: row-reverse;
    margin-left: 5.4660%;
    align-items: center;

    section {
      position: absolute;
      left: 5.4660%;
      width: 30%;
    }
  }
`

// Div
export const Div = styled(motion.div)`
  overflow: hidden;
  position: relative;
`

// Banner img
export const BannerImg = styled(motion.img)`
  display: block;
  height: 420px;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: right;

  /* Tablet */
  @media screen and (min-width: 48em) {
    height: 60vh;
  }

  /* Tablet & Landscape */
  @media screen and (min-width: 48em) and (orientation: landscape) {
    height: 80vh;
    object-position: top;
  }

  /* Desktop */
  @media screen and (min-width: 64em) {
    height: 100vh;
    width: 85%;
    margin-left: auto;
  }
`;

// Banner title
export const Title = styled(motion.h1)`
  margin: 0;
  margin-bottom: 1rem;

  /* Desktop */
  @media screen and (min-width: 64em) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

// Banner subtitle
export const Subtitle = styled(motion.p)`
  color: var(--dark-gray);
  margin: 0;
  margin-bottom: 1.5rem;

  /* Desktop */
  @media screen and (min-width: 64em) {
    font-size: 1.25rem;
    margin-bottom: 3rem;
  }
`;


// **********
// HOME PRESS
// **********

export const Press = styled.div`
  margin-top: 6rem;

  /* Tablet */
  @media screen and (min-width: 48em) {
    margin-top: 10rem;
  }

  /* Desktop */
  @media screen and (min-width: 48em) {
    margin: 15rem auto 0;
    width: 54.271%,
  }
`

// Press cite
export const PressText = styled.p`
  color: var(--dark-gray);
  font-size: 1.25rem;
  margin-bottom: 1rem;
`

// Press author
export const PressAuthor = styled.p`
  color: var(--light-gray);
  font-size: 0.875rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  &:.before {
    content: "";
    background: var(--light-gray);
    display: inline-block;
    height: 1px;
    width: 2rem;
    margin-right: 0.5rem;
  }
`

// **********
// HOME PROJECTS
// **********

export const Projects = styled(motion.section)`
  margin: 6rem 0;
  overflow: hidden;

  /* Tablet */
  @media screen and (min-width: 48em) {
    margin-top: 10rem;
  }

 /* Desktop */
  @media screen and (min-width: 48em) {
    margin-top: 15rem;

    .projects__flex {
      display: flex;
    }
  }

  .btn {
    background: var(--black);
    border: none;
    color: var(--white);
    cursor: pointer;
    display: inline-block;
    font-family: var(--sans-serif);
    font-size: 0.875rem;
    font-weight: 600;
    padding: 1.5rem 3.75rem;
    margin: 3rem auto 0;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover,
    &:focus {
      background-color: var(--primary);
      box-shadow: 10px -10px 10px 0px rgba(0,0,0,0.16);
      letter-spacing: 0.1rem;
    }

    &:focus {
      border: 1px solid var(--primary);
    }
  }
`

export const Project = styled(motion.div)`
  background: ${props => `linear-gradient(rgba(54, 54, 59, 0.6), rgba(54, 54, 59, 0.6)), url(${props.bg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: var(--white);
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (min-width: 48em) {
    background-position: top;
    height: 500px;
  }

  div {
    margin: 0 auto 2rem;
    width: 89.067%;
  }

  h2 {
    font-size: 1.25rem;
    margin: 0;
    
    @media screen and (min-width: 64em) {
      font-size: 2rem;
    }
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--white);
    text-decoration: none;

      &::after {
      content: "";
      background: rgba(255, 255, 255, 0.25);
      position: absolute;
      left: 12px;
      bottom: -6px;
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      z-index: 0;
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
    }

    &:hover:after {
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 100%;
    }
  }
`