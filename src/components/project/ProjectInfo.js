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
      transition={{transition, duration: 1, delay: 1}}
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
          {project.other.previous && <p>Previous: {project.other.previous}</p>}
        </Link>
        <Link to={{
          pathname: `${project.other.next}`,
          state: {project: nextProject}
        }}>
          {project.other.next && <p>Next: {project.other.next}</p>}
        </Link>
      </OtherProjects>
    </ProjectDivInfo>
  )
}

export default ProjectInfo