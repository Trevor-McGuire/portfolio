import projects from "../projects";
import { useParams } from "react-router-dom";

const Project = () => {
  const { projectId } = useParams();
  const project = projects.find(
    (project) => project.projectId === Number(projectId)
  );

  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div id="pages-project">
      <h1>{project.title}</h1>
      <h2>{project.description}</h2>

      <section style={{ backgroundImage: `url(${project.image})` }}>
        {" "}
        <div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Deployment
          </a>
        </div>
      </section>
      <div dangerouslySetInnerHTML={createMarkup(project.text)} />
    </div>
  );
};

export default Project;
