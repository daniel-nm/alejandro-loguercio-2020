import styled from "styled-components";
import { motion } from "framer-motion"

// Navbar
export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 89.067%;
  margin: 2rem auto;

  /* Logo */
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

  /* Navbar menu button */
  .nav__btn {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    position: relative;
    z-index: 9;

      /* Btn lines */
      span {
        background: var(--black);
        display: block;
        width: 27px;
        height: 1px;
        margin: 0.5rem;
      }
    }

    /* Rotate btn lines */
    .rotated {
      position: relative;
      transition: transform 0.2s ease-in-out;
    }

    /* Rotate top line */
    .rotated--top {
        top: 0.2rem;
        transform: rotate(45deg);
      }
    
    /* Rotate bottom line */
    .rotated--bottom {
      bottom: 0.3rem;
      transform: rotate(-45deg);
    }

    /* Reset lines position */
    .rotated--no {
      transform: rotate(0deg);
      transition: transform 0.2s ease-in-out;
    }

    .footer {
      margin: 0 auto;
      position: relative;
      width: 89.067%;
    }
`;

// Menu content
export const MenuContent = styled(motion.div)`
  background: var(--white);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 8;
`;

// Nav list
export const NavList = styled.div`
  width: 89.067%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Mobile landscape position  */
  @media screen and (max-height: 31.25em) {
    margin-top: 2rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      font-weight: 900;
      height: 4rem;
      list-style: none;
      text-transform: uppercase;
      overflow: hidden;

      /* Tablet */
      @media screen and (min-width: 48em) {
        height: 6rem;
      }

      /* Mobile landscape position */
      @media screen and (max-height: 31.25em) {
        height: 4rem;
      }

      .nav__link {
        display: flex;
        align-items: center;
        color: var(--black);
        cursor: pointer;
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

        /* Tablet */
        @media screen and (min-width: 48em) {
          font-size: 2rem;
        }

        /* Mobile landscape position */
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
          vertical-align: middle;
          transition: opacity 0.2s ease-in-out;

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
`
// Nav footer
export const NavFooter = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 2rem;
  width: 100%;

  /* Change lang btn */
  .btn {
    background: var(--black);
    border: none;
    color: var(--white);
    cursor: pointer;
    font-family: var(--sans-serif);
    font-weight: 600;
    padding: 0.5rem 1rem;
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

    /* Tablet */
    @media screen and (min-width: 48em) {
      font-size: 1rem;
      padding: 1rem 1.5rem;
    }

    /* Mobile landscape position */
    @media screen and (max-height: 31.25em) {
      font-size: 13.3333px;
      padding: 0.5rem 1rem;
    }

  }

  /* Mobile landscape position */
  @media screen and (max-height: 31.25em) {
    justify-content: flex-end;
    bottom: 5.5rem;
  }
`

// Social icons footer
export const NavFooterSocial = styled.div`
  display: flex;
  align-items: center;

  a {
    display: inline-block;
    padding: 0.25rem;

    &::after {
      all: unset;
    }

    &:hover:after {
      all: unset;
    }
  }
  
  svg {
    height: 1.5rem;

    &:hover path,
    &:focus path {
      fill: var(--primary);
    }

    /* Tablet */
    @media screen and (min-width: 48em) {
      height: 2rem;
    }

    /* Mobile landscape position */
    @media screen and (max-height: 31.25em) {
      height: 1.5rem;
    }
  }

`

// Panel transition styles
export const PanelBg = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
`