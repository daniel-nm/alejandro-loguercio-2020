import React, { useContext } from 'react';
import { Link } from "react-router-dom";

// Components
import PanelTransition from "../components/panel/PanelTransition";

// Content
import Content from "../content/projects.json";

// Context
import LanguageContext from "../context/LanguageContext";

// Styles
import { ProjectsSection, Overflow, Project } from "../styles/components/projectsStyles";

// Motion
import { transition, parent, slideUp} from "../animation/projects";

const Projects = () => {

  const [language] = useContext(LanguageContext);

  return (
    <div>
      <ProjectsSection     
        variants={parent}
        initial="initial"
        animate="animate" 
        exit="exit"
      >
        {Content[language].data.map((project) => (
          <Overflow key={project.id}>
            <Project
              bg={require(`../assets/img/${project.images.main}`).default}
              variants={slideUp} 
              transition={{...transition, duration: 1.25}}
            >
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Link to={{
                  pathname: `project/${project.url}`,
                  state: {project: project}
                }}>
                  {project.linkText}
                </Link>
              </div>
            </Project>
          </Overflow>
        ))}
        <PanelTransition />
      </ProjectsSection>
    </div>
  )
}

export default Projects