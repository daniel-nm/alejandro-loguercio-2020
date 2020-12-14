import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem auto;
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

    &:hover::after {
      all: unset;
    }

    /* Bigger screens */
    @media screen and (min-width: 64em) {
      font-size: 1.125rem;
    }
  }

  .nav__btn {
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 9;

    span {
      background: var(--black);
      display: block;
      height: 1px;
      width: 27px;
      margin: 0.5rem;
    }
  }

  .rotated {
    position: relative;
    transition: transform 0.2s ease-in-out;
  }

  .rotated--top {
    top: 0.2rem;
    transform: rotate(45deg);
  }
  
  .rotated--bottom {
    bottom: 0.3rem;
    transform: rotate(-45deg);
  }

  .rotated--no {
    transform: rotate(0deg);
    transition: transform 0.2s ease-in-out;
  }
`