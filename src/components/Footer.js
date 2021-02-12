import React, { useContext } from 'react';
import { Link } from "react-router-dom";

// Content
import Content from "../content/footer.json";

// Context
import LanguageContext from "../context/LanguageContext";

// Styles
import { Container } from "../styles/globalStyles";
import { StyledFooter, SocialFooter, Copyright } from "../styles/components/footerStyles";

// Icons
import { Facebook, Instagram, Youtube } from "../assets/icons/icons";

const Footer = () => {
  
  // App language
  const [language] = useContext(LanguageContext);

  return (
    <StyledFooter>
      <Container>
        <div className="flex">
          <div className="flex--left">
            <Link className="logo" to="/">Alejandro Loguercio</Link>
            <SocialFooter>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/alejandrologuercio.official/"><Facebook /></a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/alejandrologuercio/"><Instagram /></a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCrFn_dbPa5x6_mX6NwBmw1A"><Youtube /></a>
            </SocialFooter>
          </div>
          <div className="flex--right">
            <Copyright>
              <p>&copy; Alejandro Loguercio</p>
              <p>{Content[language].photos}</p>
            </Copyright>
          </div>
        </div>
      </Container>
    </StyledFooter>
  )
}

export default Footer
