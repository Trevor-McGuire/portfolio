import React from "react";
import projects from "../projects";
import { useParams } from "react-router-dom";


const project = () => {
  const { projectId } = useParams();
  const project = projects.find(
    (project) => project.projectId === Number(projectId)
  );

  return (
    <section className={`bg-center bg-no-repeat bg-gray-700 bg-blend-multiply`} style={{ backgroundImage: `url(${project.image})` }}>
      <div >
        <h1 >
          {project.title}
        </h1>
        <p >
          {project.text}
        </p>
        <div >
          <a
            href={project.link}
            target='_blank'
            
          >
            View Deployment
          </a>
        </div>
      </div>
    </section>
  );
};

export default project;
