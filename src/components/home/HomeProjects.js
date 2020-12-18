import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// Components
import ProjectsMenu from "./ProjectsMenu";

// Content
import ProjectsContent from "../../content/projects.json";

// Scroll behaviour
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// Motion
import { transition, scrollView} from "../../animation/home";

// Styles
import { Projects, Project } from "../../styles/components/homeStyles";

const HomeProjects = ({ content, language }) => {

  const data = ProjectsContent[language].data;

  // Animation
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "150px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView]);

  // Toggle Nav Menu
  const [toggleMenu, setToggleMenu] = useState(false);

  // Determine if menu btn should be disabled
  const [disabled, setDisabled] = useState(false);

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200)
  }

  return (
    <Projects exit={{opacity: 0}}>
      <div className="projects__flex">
        {data.slice(0,3).map((project) => (
          <Project
            key={project.id}
            bg={require(`../../assets/img/${project.images.main}`).default}
          >
            <motion.div
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={scrollView}
              exit="hidden"
              transition={transition}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link to={{
                pathname: `project/${project.url}`,
                state: {project: project}
              }}>
                {project.linkText}
              </Link>
            </motion.div>
          </Project>
        ))}
      </div>
      <motion.div 
        style={{textAlign: "center"}}
        initial={{y: "100px", opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: "100px", opacity: 0}}
        transition={{...transition, duration: 1.5}}
      >
        <button 
          disabled={disabled} 
          className="btn"        
          onClick={() => {
            setToggleMenu(!toggleMenu)
            disableMenu();
          }} 
        >
          {content[language].projects.link}
        </button>
      </motion.div>
      <ProjectsMenu content={ProjectsContent} language={language} setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
    </Projects>
  )
}

export default HomeProjects
