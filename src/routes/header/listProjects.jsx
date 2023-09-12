import projects from '../../projects'
import { NavLink } from "react-router-dom";

const listProjects = ({ currentPath }) => {
  return (
    <ul id="dropdown-list">
      {projects.map((project) => {
        return (
          <li key={project.projectId}>
            <NavLink
              to={`/project/${project.projectId}`}
              className={
                currentPath === `/project/${project.projectId}`
                  ? "active"
                  : "inactive"
              }
            >
              <div>{project.title}</div>
              <span>{project.description}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default listProjects;
