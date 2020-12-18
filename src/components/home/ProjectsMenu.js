import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components
import ListItem from "../navigation/ListItem";
import PanelTransition from "../navigation/PanelTransition";

// Styles
import { MenuContent, MenuHeader } from "../../styles/components/homeStyles";

// Motion
import { transition, parent, slideDown } from "../../animation/home";

const ProjectsMenu = ({ content, toggleMenu, setToggleMenu, language }) => {

  // Location
  const location = useLocation();

  useEffect(() => {
    const body = document.getElementsByTagName("body");

    // Prevent body from scrolling when menu is opened
    if(toggleMenu) {
      body[0].style.overflow = "hidden";
    }
    else {
      body[0].style.overflow = null;
    }
  });

  useEffect(() => {
    // Hide navigation when changing location‚
    setToggleMenu(false);
  }, [setToggleMenu, location]);


  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <>
          <MenuContent  
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{...transition, duration: 1.25}}
          >
            <MenuHeader
              variants={parent}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div variants={slideDown} transition={{...transition, duration: 1.25}}>
                <Link className="logo" to="/">Alejandro Loguercio</Link>
              </motion.div>
              <motion.button 
                variants={slideDown} 
                transition={{...transition, duration: 1.25}}
                aria-label="Menu" 
                className="nav__btn" 
                onClick={() => {
                  setToggleMenu(!toggleMenu)
                }}> 
                  <span className="top"></span>
                  <span className="bottom"></span>
              </motion.button>
            </MenuHeader>
            <motion.ul
              variants={parent}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {content[language].data.map((project) => (
                <ListItem 
                  key={project.id}  
                  to={{
                    pathname: `project/${project.url}`,
                    state: {project: project}
                  }}
                  name={project.title}
                />
              ))}
            </motion.ul>
            <PanelTransition />
          </MenuContent>
        </>
      )}
    </AnimatePresence>
  </>
  )
}

export default ProjectsMenu
