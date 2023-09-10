import React from "react";
import projects from "../projects";
import { useParams } from "react-router-dom";

const project = () => {
  const { projectId } = useParams();
  const project = projects.find(
    (project) => project.projectId === Number(projectId)
  );

  return (
    <>
      <h1>{project.title}</h1>
      <section style={{ backgroundImage: `url(${project.image})` }}>
        <p>{project.text}</p>
        <div>
          <a href={project.link} target="_blank">
            View Deployment
          </a>
        </div>
      </section>
    </>
  );
};

export default project;
