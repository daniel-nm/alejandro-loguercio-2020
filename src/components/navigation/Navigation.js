import React, { useState, useContext, useEffect } from 'react';
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

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

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


  useEffect(() => {
    // Get viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;

    // Set value in the --vh custom propertz to the roof of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

  }, []);

  useEffect(() => {

    function handleResize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    // Listen to resize element
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, [dimensions])

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
                {/* If location is unterricht, disable the language btn */}
                {location.pathname === "/unterricht" && 
                  <motion.button
                    disabled
                    variants={footerSlideUp}
                    transition={{...transition, duration: 1.5}}
                    className="btn"
                    value={language === "en" ? "de" : "en"} 
                  >{language === "en" ? "Deutsch" : "English"}
                  </motion.button>
                }
                {/* If location is not unterricht, enable the language btn */}
                {location.pathname !== "/unterricht" && 
                  <motion.button
                    variants={footerSlideUp}
                    transition={{...transition, duration: 1.5}}
                    className="btn"
                    value={language === "en" ? "de" : "en"} 
                    onClick={changeLanguage}>{language === "en" ? "Deutsch" : "English"}
                  </motion.button>
                }
                {/* Social icons */}
                <NavFooterSocial>
                  <motion.a variants={footerSlideUp}
                  transition={{...transition, duration: 1.5}} href="https://www.facebook.com/alejandrologuercio.official/">
                    <Facebook />
                  </motion.a>
                  <motion.a variants={footerSlideUp}
                  transition={{...transition, duration: 1.5}} href="https://www.instagram.com/alejandrologuercio/">
                    <Instagram />
                  </motion.a>
                  <motion.a variants={footerSlideUp}
                  transition={{...transition, duration: 1.5}} href="https://www.youtube.com/channel/UCrFn_dbPa5x6_mX6NwBmw1A">
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



