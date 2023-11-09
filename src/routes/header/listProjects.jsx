import PropTypes from "prop-types";
import projects from "../../projects";
import { NavLink } from "react-router-dom";

const ListProjects = ({ currentPath }) => {
  return (
    <ul id="list-projects">
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
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

ListProjects.propTypes = {
  currentPath: PropTypes.string.isRequired,
};

export default ListProjects;
