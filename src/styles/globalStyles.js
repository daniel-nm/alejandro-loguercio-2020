import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
    line-height: 1.5;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

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
      background: rgba(34, 102, 166, 0.25);
      bottom: -6px;
      content: "";
      height: calc(100% - 8px);
      left: 12px;
      position: absolute;
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
      width: calc(100% - 8px);
      z-index: -1;
    }

    &:hover::after {
      bottom: -2px;
      height: 100%;
      left: 0;
      width: 100%;
    }
  }
`

// Container for sections
export const Container = styled.section`
  margin: 0 auto;
  width: 89.067%;

  /* Bigger screens */
  @media screen and (min-width: 64em) {
    width: 85.4167%;
  }
`

