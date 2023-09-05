import React from "react";
import projects from "../projects";
import { useParams } from "react-router-dom";

const project = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.projectId === Number(projectId));

  return (
    <>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <a href={project.link} target='_blank'>project.link</a>
    </>
  );
};

export default project;
