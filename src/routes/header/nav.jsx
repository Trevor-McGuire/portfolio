import { NavLink } from "react-router-dom";

const nav = ({ currentPath, navToggled }) => {
  const paths = [
    { to: "/", text: "About" },
    { to: "/skills", text: "Skills" },
    { to: "/contact", text: "Contact" },
  ];
  return (
    <nav>
      <ul
        // if navToggled===true set the display to block and none if false
        style={{ display: navToggled ? "block" : "none" }}
      >
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
        <li>
          <button id="dropdown-toggle">Projects </button>
        </li>
      </ul>
      <button type="button" id="nav-toggle">
        Menu Toggle
      </button>
    </nav>
  );
};

export default nav;
