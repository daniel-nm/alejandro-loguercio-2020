import React, { useContext, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Context
import LanguageContext from "../../context/LanguageContext";

// Content
import Content from "../../content/navigation.json";

// Components
import ListItem  from "./ListItem";
import PanelTransition from "./PanelTransition";

// Icons
import { Facebook, Instagram, Youtube } from "../../assets/icons/icons";

// Styles
import { MenuContent, NavList, NavFooter, NavFooterSocial } from "../../styles/components/headerStyles";

// Motion
import { transition, parent, footer, footerSlideUp} from "../../animation/header";

const Navigation = ({toggleMenu, setToggleMenu}) => {

  // App language
  const [language, setLanguage] = useContext(LanguageContext);

  // Handle change of app language
  function changeLanguage(e) {
    setLanguage(e.target.value);
    // Store app language in session
    localStorage.setItem("AL - Lang", e.target.value);
  }

  // Get browser location
  const location = useLocation();

  useEffect(() => {
    // Get body element
    const body = document.getElementsByTagName("body");

    // Prevent body from scrolling when menu is opened
    if(toggleMenu) {
      body[0].style.overflow = "hidden";
    }
    else {
      body[0].style.overflow = null;
    }

  }, [toggleMenu])

  useEffect(() => {
    // Hide navigation when changing location‚
    setToggleMenu(false);
  }, [setToggleMenu, location]);

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <>
          {/* Menu content */}
          <MenuContent  
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{...transition, duration: 1.25}}
          >
            {/* List items */}
            <NavList>
              <motion.ul
                variants={parent}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {Content[language].main.map((item) => (
                  <ListItem 
                    key={item.id}  
                    to={item.to}
                    name={item.link}
                  />
                  ))}
                </motion.ul>
            </NavList>
            <div className="footer">
            {/* Footer */}
              <NavFooter
                variants={footer}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.button
                  variants={footerSlideUp}
                  transition={{...transition, duration: 1.5}}
                  className="btn"
                  value={language === "en" ? "de" : "en"} 
                  onClick={changeLanguage}>
                    {language === "en" ? "Deutsch" : "English"}
                </motion.button>
                {/* Social icons */}
                <NavFooterSocial>
                  <motion.a variants={footerSlideUp}
                  transition={{...transition, duration: 1.5}} href="/">
                    <Facebook />
                  </motion.a>
                  <motion.a variants={footerSlideUp}
                  transition={{...transition, duration: 1.5}} href="/">
                    <Instagram />
                  </motion.a>
                  <motion.a variants={footerSlideUp}
                  transition={{...transition, duration: 1.5}} href="/">
                    <Youtube />
                  </motion.a>
                </NavFooterSocial>
              </NavFooter>
            </div>
            {/* Menu panel transition */}
            <PanelTransition />
          </MenuContent>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation



