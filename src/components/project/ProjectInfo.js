import React from 'react';
import { Link } from "react-router-dom";

// Styles
import { ProjectDivInfo, ProjectFlex, OtherProjects } from "../../styles/components/projectStyles";

const ProjectInfo = ({project, previousProject, nextProject, transition}) => {
  return (
    <ProjectDivInfo
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{transition, duration: 0.75, delay: 1}}
    >
      <h1>{project.title}</h1>
      <ProjectFlex>
        <div className="projectflex__info">
          {project.text.map((p, index) => (
            <p key={index}>{p.para}</p>
          ))}
        </div>
      </ProjectFlex>
      <iframe title="iframe"
        src={project.iframe}
        frameBorder="0" allowFullScreen>
      </iframe>
      <OtherProjects>
        <Link to={{
          pathname: `${project.other.previous}`,
          state: {project: previousProject}
        }}>
          {project.other.previous && <span>Previous: {project.other.previous}</span>}
        </Link>
        <Link to={{
          pathname: `${project.other.next}`,
          state: {project: nextProject}
        }}>
          {project.other.next && <span>Next: {project.other.next}</span>}
        </Link>
      </OtherProjects>
    </ProjectDivInfo>
  )
}

export default ProjectInfo
