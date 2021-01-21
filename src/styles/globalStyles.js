import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

export const GlobalStyle = createGlobalStyle`

  :root {
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none !important;  /* Firefox */
  }

  html {
    /* Colour variables */
    --black: #36363B;
    --white: #FFFFFF;
    --primary: #2266A6;
    --dark-gray: #474748;
    --light-gray: #63677B;

    /* Typography variables */
    --serif: 'Domine', serif;
    --sans-serif: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    font-family: var(--sans-serif);
    font-size: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    margin: 0;


    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  h1,
  h2,
  h3 {
    font-family: var(--serif);
  }

  p {
    margin: 0;
  }

  a {
    color: var(--primary);
    font-weight: 600;
    overflow: hidden;
    position: relative;
    text-decoration: none;

    &::after {
      content: "";
      background: rgba(34, 102, 166, 0.25);
      position: absolute;
      bottom: -6px;
      left: 12px;
      height: calc(100% - 8px);
      width: calc(100% - 8px);
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
      z-index: -1;
    }

    &:hover::after {
      bottom: -2px;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
`

// Container for sections
export const Container = styled(motion.section)`
  margin: 0 auto;
  max-width: 1980px;
  width: 89.067%;

  /* Bigger screens */
  @media screen and (min-width: 64em) {
    width: 85.4167%;
  }
`

