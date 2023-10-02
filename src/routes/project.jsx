import React from "react";
import projects from "../projects";
import { useParams } from "react-router-dom";

const project = () => {
  const { projectId } = useParams();
  const project = projects.find(
    (project) => project.projectId === Number(projectId)
  );

  return (
    <div id="pages-project">
      <h1>{project.title}</h1>

      <section style={{ backgroundImage: `url(${project.image})` }}>
        {" "}
        <div>
          <a href={project.link} target="_blank">
            View Deployment
          </a>
          <a href={project.link} target="_blank">
            View GibHub
          </a>
        </div>
      </section>
      <p>{project.text}</p>
    </div>
  );
};

export default project;
