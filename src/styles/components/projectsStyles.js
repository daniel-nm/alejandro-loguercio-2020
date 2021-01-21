import styled from "styled-components";
import {motion} from "framer-motion";

// Section
export const ProjectsSection = styled(motion.section)`
  margin-bottom: 3rem;

  @media screen and (min-width: 48em) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 6rem;
  }

  @media screen and (min-width: 64em) {
    margin-bottom: 10rem;
  }
`

// Overflow div as parent container
export const Overflow = styled(motion.div)`
  overflow: hidden;
  height: 350px;

  @media screen and (min-width: 48em) {
    width: 50%;
    height: 500px;
    
  }

  @media screen and (min-width: 64em) {
    width: 33.333%;
    height: 70vh;

    &:nth-child(4),
    &:nth-child(5) {
      width: 50%;
    }
  }

  @media screen and (min-width: 137em) {
    height: 60vh;
  }
`

// Single Project
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
    height: 500px;
    background-position: top;
  }

  @media screen and (min-width: 64em) {
    height: 70vh;
  }

  @media screen and (min-width: 137em) {
    height: 60vh;
  }

  div {
    width: 89.067%;
    margin: 0 auto 2rem;
  }

  h2 {
    margin: 0;
    font-size: 1.25rem;
    
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