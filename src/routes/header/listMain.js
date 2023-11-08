import { NavLink } from "react-router-dom";

const listMain = ({ currentPath }) => {

  const paths = [
    { to: "/", text: "About" },
    { to: "/skills", text: "Skills" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <ul id="list-main">
      {paths.map((path) => {
        return (
          <li key={path.to}>
            <NavLink
              to={path.to}
              className={currentPath === path.to ? "active" : "inactive"}
            >
              {path.text}
            </NavLink>
          </li>
        );
      })}
      <li id="dropdown-toggle">Projects</li>
    </ul>
  );
};

export default listMain;
