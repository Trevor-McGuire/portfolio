import { NavLink } from "react-router-dom";

const dropdown = ({ currentPath, mainToggled, dropdownToggled }) => {
  const projects = [
    {
      projectId: 1,
      title: "Project 1",
      description: "This is the first project",
      text: "This is the first project. I will put a longer description here.",
      image:
        "https://blog.magezon.com/wp-content/uploads/2022/03/image-32-1024x526.png",
      link: "https://www.google.com",
    },
    {
      projectId: 2,
      title: "Project 2a",
      description: "This is the second project",
      text: "This is the first project. I will put a longer description here.",
      image:
        "https://try.stackoverflow.co/img/landing-pages/discover-employer-branding/illo-tal-1-p03.png",
      link: "https://www.google.com",
    },
    {
      projectId: 3,
      title: "Project 3a",
      description: "This is the third project",
      text: "This is the first project. I will put a longer description here.",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
    },
  ];
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

export default dropdown;
