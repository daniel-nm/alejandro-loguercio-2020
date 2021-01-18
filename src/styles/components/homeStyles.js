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

      @media screen and (min-width: 137em) {
        left: 10%;
      }
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
    max-width: 980px;
    width: 54.271%,
  }
`

// Press cite
export const PressText = styled.p`
  color: var(--dark-gray);
  font-size: 1.25rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 137em) {
    font-size: 1.5rem;
  }
`

// Press author
export const PressAuthor = styled.p`
  color: var(--light-gray);
  font-size: 0.875rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  @media screen and (min-width: 137em) {
    font-size: 1rem;
  }

  &::before {
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

  /* Tablet */
  @media screen and (min-width: 48em) {
    background-position: top;
    height: 500px;
  }

  @media screen and (min-width: 137em) {
    height: 600px;
  }

  div {
    margin: 0 auto 2rem;
    width: 89.067%;
  }

  h2 {
    font-size: 1.25rem;
    margin: 0;
    
    /* Desktop */
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

// Projects Menu
export const MenuContent = styled(motion.div)`
  background: var(--white);
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 8;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 0;
    position: absolute;
    top: 0;
    left: 5.4660%;
    z-index: -1;

    li {
      font-weight: 900;
      list-style: none;
      margin-bottom: 1rem;
      text-transform: uppercase;
      overflow: hidden;

      /* Mobile when landscape position */
      @media screen and (max-height: 31.25em) {
        margin-bottom: 0.5rem;
      }

      .nav__link {
        color: var(--black);
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: var(--serif);
        font-size: 1.5rem;
        font-weight: 400;
        text-decoration: underline;
        text-transform: uppercase;
        transition: all 0.2s ease-in-out;
        width: 100%;
        
        &::after {
          all: unset;
        }

        &:hover:after {
          all: unset;
        }

        @media screen and (min-width: 48em) {
          font-size: 2rem;
        }

        @media screen and (max-height: 31.25em) {
          font-size: 1.5rem;
        }


        .nav__link__title {
          display: inline-block;
          overflow: hidden;
        }

        .arrow {
          margin-left: 0.25rem;
          opacity: 0;
          transition: opacity 0.2s ease-in-out;
          vertical-align: middle;

          /* Desktop */
          @media screen and (min-width: 64em) {
            margin-left: 0.5rem;
          }
          
          svg {
            height: 1.25rem;

            /* Tablet */
            @media screen and (min-width: 48em) {
              height: 1.75rem;
            }
          }
        }

        &:hover {
          & .arrow {
            opacity: 1;
          }
        }
      } 
    }
  }
  
`;

// Projects Menu Header
export const MenuHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto 4rem;
  width: 89.067%;

  .logo {
    color: var(--black);
    font-family: var(--serif);
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    z-index: 9;

    &::after {
      all: unset;
    }

    &:hover:after {
      all: unset;
    }

    /* Desktop */
    @media screen and (min-width: 64em) {
      font-size: 1.125rem;
    }
  }

  .nav__btn {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;

    span {
      background: var(--black);
      display: block;
      width: 27px;
      height: 1px;
      margin: 0.5rem;
    }

    .top {
      position: relative;
      top: 0.2rem;
      transform: rotate(45deg);
      transition: transform 0.2s ease-in-out;
    }

    .bottom {
      position: relative;
      bottom: 0.3rem;
      transform: rotate(-45deg);
      transition: transform 0.2s ease-in-out;
    }
  }
`

// **********
// HOME CLASSES
// **********

export const ClassSection = styled(motion.section)`
  background-color: rgba(204, 206, 214, 0.25);
  margin-bottom: 6rem;
  padding: 4rem 0;

  .class__children {
    margin-bottom: 3.5rem;
  }

  /* Tablet */
  @media screen and (min-width: 48em) {
    margin-top: 10rem;
    padding: 6rem 0;
  }

 /* Desktop */
  @media screen and (min-width: 64em) {
    margin-top: 15rem;
    padding: 8rem 0;

    .flex {
      display: flex;
    }

    .class__children {
      margin-bottom: 0;
      margin-right: 5rem;
    }
  }
`

// Title
export const ClassTitle = styled(motion.h2)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`

// Subtitle
export const ClassSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`

// Text
export const ClassText = styled.p`
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
`

// **********
// HOME CONTACT
// **********

export const ContactDiv = styled.div`
  background-color: var(--white);
  border: 1px solid #CCCED6;
  box-shadow: 10px -10px 10px 0px rgba(0,0,0,0.16);
  position: relative;
  top: 48px;
  padding: 2rem 3rem;
  z-index: 3;
  
  @media screen and (min-width: 48em) {
    margin: 10rem auto 0;
    padding: 3rem 2rem;
    width: 56.667%;
  }

  @media screen and (min-width: 64em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6.75rem 4rem;
    margin-top: 15rem;
  }

  p {
    font-family: var(--serif);
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 5rem;

    @media screen and (min-width: 64em) {
      font-size: 1.5rem;
      margin-bottom: 0;
      text-align: left;
      width: 50%;
    }
  }

  div {
    text-align: center;
  }

  a {
    background: var(--black);
    border: none;
    color: var(--white);
    display: inline-block;
    font-family: var(--sans-serif);
    font-size: 0.875rem;
    font-weight: 600;
    padding: 1.5rem 3.75rem;
    text-decoration: none;
    transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);

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