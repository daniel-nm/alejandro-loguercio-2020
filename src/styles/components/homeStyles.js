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