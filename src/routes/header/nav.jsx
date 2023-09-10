import { NavLink } from "react-router-dom";
import Dropdown from "./dropdown";

const nav = ({ currentPath, toggleNeeded, mainToggled, dropdownToggled }) => {
  const paths = [
    { to: "/", text: "About" },
    { to: "/skills", text: "Skills" },
    { to: "/contact", text: "Contact" },
  ];
  return (
    <nav>
      <ul id="main-list">
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

      <Dropdown
        currentPath={currentPath}
        mainToggled={mainToggled}
        dropdownToggled={dropdownToggled}
      />
    </nav>
  );
};

export default nav;
