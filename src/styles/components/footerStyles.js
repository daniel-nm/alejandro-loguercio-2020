import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--black);
  color: var(--white);
  padding-top: 6rem;
  padding-bottom: 3rem;

  @media screen and (min-width: 48em) {
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  .logo {
    color: var(--white);
    display: block;
    font-family: var(--serif);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
  }
`

export const SocialFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 48em) {
    margin-top: 3rem;
    margin-bottom: 0;
  }

  svg {
    height: 1.5rem;
    margin-right: 1rem;

    &::last-child {
      margin-right: 0;
    }

    path {
      fill: var(--white);
    }
  }
`

export const Copyright = styled.div`
  color: var(--white);
  font-size: 0.75rem;

  @media screen and (min-width: 48em) {
    text-align: right;
  }

  p:first-child {
    margin-bottom: 1rem;
  }
`
