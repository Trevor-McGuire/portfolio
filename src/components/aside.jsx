import React, { useEffect, useState } from "react";
import { useLocation, NavLink, useLoaderData } from "react-router-dom";
import "../style/aside.css";
import projects from "../projects";

export async function loader() {
  return projects;
}

const nav = () => {
  const projects = useLoaderData();

  // useState for the current path
  const [currentPath, setCurrentPath] = useState("");

  // useLocation to get the current path
  const location = useLocation();

  // useEffect to set the current path
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
            <ul>
              {projects.map((project) => {
                return (
                  <li key={project.projectId}>
                    <NavLink to={`/project/${project.projectId}`}>
                      {project.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default nav;
