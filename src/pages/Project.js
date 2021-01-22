import React, { useState, useEffect, useContext } from 'react';
import { Link, withRouter } from "react-router-dom";

// Motion
import {transition} from "../animation/home";

// Context
import LanguageContext from "../context/LanguageContext";

// Content
import Content from "../content/projects.json";

// Components
import ProjectImg from "../components/project/ProjectImg";
import ProjectInfo from "../components/project/ProjectInfo";

// Styles
import { Container } from "../styles/globalStyles";
import { Page } from "../styles/components/projectStyles";

const Project = (props) => {

  // App language
  const [language] = useContext(LanguageContext);

  // Project
  const [project, setProject] = useState(props.location.state.project);

  // Previous/Next Project
  const [previousProject, setPreviousProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  // When language changes, fetch the project in the appropiate language
  useEffect(() => {
    Content[language].data.forEach((item) => {
      if(item.id === project.id) {
        setProject(item);
      }
    });
  }, [language, project.id]);

  // Fetch previous and next projects
  useEffect(() => {
    Content[language].data.forEach((item) => {
      if(item.url === project.other.next) {
        setNextProject(item);
      } 
      else if(item.url === project.other.previous) {
        setPreviousProject(item);
      }
    });
  }, [language, project.other.previous, project.other.next]);

  return (
    <Page 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}} 
      transition={transition}
    >
      <Container>
        <p className="page__path"><Link to="/projects">&lt; {Content[language].backTo}</Link></p>
      </Container>
      <div className="page__content">
        <ProjectImg img={project.images.secondary} transition={transition} />
        <ProjectInfo project={project} previousProject={previousProject} nextProject={nextProject} transition={transition} />
      </div>
    </Page>
  )
}

export default withRouter(Project) 
