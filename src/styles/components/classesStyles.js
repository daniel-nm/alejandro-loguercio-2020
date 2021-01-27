import styled from "styled-components";
import { motion } from "framer-motion";

// Main page section
export const Page = styled.section`
  p {
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  h2 {
    margin: 2rem 0 1rem;
  }

  iframe {
    margin: 5rem calc(-50vw + 50%);
    height: 13rem;
    width: 100vw;

    @media screen and (min-width: 40em) {
      height: 24rem;
    }

    @media screen and (min-width: 64em) {
      height: 36rem;
    }

    @media screen and (min-width: 120em) {
      display: block;
      margin: 10rem auto;
      height: 46.875rem;
      max-height: 750px;
      width: 75%;
    }
  }

  .bio {
    .title {
      font-size: 2rem;
      margin-top: 5rem;

      @media screen and (min-width: 64em) {
        font-size: 2rem;
        margin-top: 0;
      }
    }

    @media screen and (min-width: 64em) {
      columns: 3;
      column-gap: 3rem;
      margin-bottom: 10rem;
      margin-top: 10rem;
    }
    @media screen and (min-width: 120em) {
      max-width: 50vw;
    }
  }

  .bio__img {
    margin: 2rem calc(-50vw + 50%) 1rem;
    width: 100vw;
    
    @media screen and (min-width: 64em) {
      margin: unset;
      max-width: 100%;
    }
  }

  .highlight {
    font-size: 1.25rem;
    color: var(--dark-gray);
    margin-bottom: 2rem;

    @media screen and (min-width: 64em) {
      margin-bottom: 4rem;
    }
  }
`

// Flex div
export const FlexDiv = styled(motion.div)`
  @media screen and (min-width: 64em) {
    display: flex;
    justify-content: space-between;
    min-height: 100vh;

    h2 {
      margin-top: 2rem;
    }
  }
`

// Teaching section
export const TeachingDiv = styled(motion.div)`
  @media screen and (min-width: 64em) {
    &:first-of-type {
      text-align: right;

      p {
        width: 90%;
        margin-left: auto;
      }
    }

    &:last-of-type {
      background: #474748;
      color: #ffffff;
      margin-bottom: 10rem;

      p {
        width: 90%;
      }
    }
  }

  @media screen and (min-width: 120em) {
    &:first-of-type {
      width: 50%;
    }

    &:last-of-type {
      p {
        width: 45%;
      }  
    }
  }
`

// Image
export const ImgDiv = styled(motion.div)`
  background-image: ${props => `url(${props.mobileImg})`};
  background-position: center;
  background-size: cover;
  height: 31.25rem;
  width: 100%;

  @media screen and (min-width: 48em) {
    height: 34.375rem;
  }

  @media screen and (min-width: 64em) {
    height: 60vh;
  }
`

// Prices section
export const PricesContainer = styled(motion.div)`
  max-width: 1440px;
  margin: 0 auto 10rem;

  h3 {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 0;

    @media screen and (min-width: 64em) {
      margin-top: 4rem;
    }
  }

  @media screen and (min-width: 44em) {
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  @media screen and (min-width: 64em) {
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    } 
  }
`

// Card div for prices section
export const Card = styled.div`
  background-color: ${props => `${props.bg === 'dark' ? 'var(--primary)' : 'var(--white)'}`};
  border: 1px solid #CCCED6;
  color: ${props => `${props.bg === 'dark' ? 'var(--white)' : 'var(--primary)'}`};
  box-shadow: 10px -10px 10px 0px rgba(0,0,0,0.16);
  padding: 2rem 2rem 1rem;
  margin-bottom: 0;
  

  &:first-of-type,
  &:nth-child(2) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 48em) {
    width: 40%;
  }

  @media screen and (min-width: 64em) {
    width: 40%;
  }

  @media screen and (min-width: 120em) {
    width: 45%;
  }

  .card__title {
    margin: 0;
    text-transform: uppercase;
    font-size: 1.15rem;
    text-align: center;
    border-bottom: ${props => `${props.bg === 'dark' ? '1px solid var(--white)' : '1px solid var(--primary)'}`};
    font-family: 'Open Sans', serif;
    margin: 0 auto;
    width: 45%;

    @media screen and (min-width: 48em) {
      width: 50%;
    }

    @media screen and (min-width: 64em) {
      width: 90%;
    }

    @media screen and (min-width: 120em) {
      width: 40%;
    }
  }

  .card__body{
    position: relative;
    margin-bottom: 0;
    margin: 1rem 0;
    font-family: 'Domine', serif;
    text-align: center;

    .price {
      font-size: 3.5rem;

      @media screen and (min-width: 48em) {
        font-size: 4rem;
      }

      @media screen and (min-width: 64em) {
        font-size: 4.5rem;
      }
    }

    .price__sign {
      font-size: 1.15rem;
      vertical-align: top;
    }

    .price__time {
      display: block;
      text-transform: lowercase;
      font-size: 0.95rem;
      margin-top: -1rem;
      
      @media screen and (min-width: 64em) {
        font-size: 1rem;
        margin-top: -1.5rem;
      }
    }
  }

`

export const VatDiv = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  
`

// Footnote in prices section
export const Footnote = styled.p`
  font-size: 0.85rem;
  color: var(--light-gray);
`

// Contact section
export const ContactDiv = styled.div`
  background-color: var(--white);
  border: 1px solid #CCCED6;
  box-shadow: 10px -10px 10px 0px rgba(0,0,0,0.16);
  position: relative;
  top: 48px;
  z-index: 3;
  padding: 2rem 3rem;

  @media screen and (min-width: 48em) {
    width: 56.667%;
    margin: 10rem auto 0;
    padding: 3rem 2rem;
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

    &:last-of-type {
      margin-bottom: 5rem;

      @media screen and (min-width: 64em) {
        margin-bottom: 0;
      }
    }


    @media screen and (min-width: 64em) {
      font-size: 1.5rem;
      margin-bottom: 0;
      text-align: left;
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