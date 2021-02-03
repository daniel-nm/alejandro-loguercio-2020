import styled from "styled-components";
import { motion } from "framer-motion";

export const Page = styled.section`
  @media screen and (min-width: 64em) {
    display: flex;
    width: 85.4167%;
    max-width: 1980px;
    margin: 0 auto 5rem;
  } 
`

export const ImgDiv = styled(motion.div)`
  background-image: ${props => `url(${props.mobileImg})`};
  background-position: top;
  background-size: cover;
  height: 31.25rem;
  width: 100%;

  @media screen and (min-width: 48em) {
    margin: 0 auto;
    height: 34.375rem;
    width: 50%;
  }

  @media screen and (min-width: 64em) {
    background-image: ${props => `url(${props.desktopImg})`};
    background-position: right;
    flex: 1;
    height: 100vh;
    width: 100%;
  }

  @media screen and (min-width: 137em) {
    height: 80vh;
  }
`

export const ContactFormDiv = styled(motion.div)`
  width: 89.067%;
  margin: 0 auto;

  @media screen and (min-width: 64em) {
    flex: 1;
    padding-left: 5rem;
    width: 100%;
  }

  h2 {
    margin: 2rem 0;
    @media screen and (min-width: 64em) {
      margin-top: 0;
    }
  }

  hr {
    border: 1px solid #CCCED6;
    margin-bottom: 2rem;
  }

`

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--serif);
  font-weight: 700;
  margin-bottom: 0.5rem;

  .required {
    color: red;
    font-size: 0.75rem;
  }
`

export const Input = styled.input`
  border: 1px solid #CCCED6;
  box-sizing: border-box;
  color: var(--dark-gray);
  font-size: 1rem;
  margin-bottom: 1.5rem; 
  padding: 1rem;
  width: 100%;
`
export const Textarea = styled.textarea`
  border: 1px solid #CCCED6;
  box-sizing: border-box;
  color: var(--dark-gray);
  font-size: 1rem;
  margin-bottom: 1.5rem; 
  padding: 1rem;
  height: 15rem;
  width: 100%;
`

export const Error = styled.div`
  background-color: red;
  box-sizing: border-box;
  color: var(--white);
  font-weight: 700;
  padding: 1rem;
  width: 100%;
  margin-top: -1rem;
  margin-bottom: 2rem;
`
export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: var(--primary);
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 5rem;
  padding: 1.5rem;
  width: 100%;

  @media screen and (min-width: 64em) {   
    margin-bottom: 2rem; 
    width: 50%;
  }
`

export const ContactDetails = styled.div`
  background-color: var(--white);
  border: 1px solid #CCCED6;
  box-shadow: 10px -10px 10px 0px rgba(0,0,0,0.16);
  padding: 1rem 1rem 2rem;
  margin-bottom: 5rem;

  @media screen and (min-width: 64em) {
    padding: 2rem 3rem 1rem;
  }

  svg {
    fill: var(--dark-gray);
    margin-right: 0.5rem;
    vertical-align: middle;

    @media screen and (min-width: 64em) {
      height: 1.75rem;
      width: 1.75rem;
      margin-right: 1rem;
    }
  }

  a {
    display: block;
    margin-bottom: 1rem;
  }
`

export const Message = styled(motion.div)`
  
  box-sizing: border-box;
  color: var(--white);
  font-weight: 700;
  padding: 1rem 2rem;
  margin: -2rem calc(-50vw + 50%) 3rem;
  text-align: center;

  @media screen and (min-width: 48em) {
    padding: 2rem 3rem;
  }

  @media screen and (min-width: 64em) {
    margin: 0 0 3rem;
  }

  span {
    display:  block;

    :last-of-type {
      margin-top: 1rem;
      font-size: 0.9rem;
      font-weight: 400;
    }
  }

  &.success {
    background-color: #02a102;
  } 

  &.error {
    background-color: #c90101;
  }
`