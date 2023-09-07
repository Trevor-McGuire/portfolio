import React, { useEffect, useState } from "react";
import { useLocation, NavLink, useLoaderData } from "react-router-dom";
import Dropdown from "./dropdown";
import Nav from "./nav";
import projects from "../../projects";

export async function loader() {
  return projects;
}

const nav = () => {
  // useState/Effect for the current path used to determine which nav item is active
  // and pass it to the Nav/Dropdown components
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();
  useEffect(() => setCurrentPath(location.pathname), [location]);

  // useState/Effect for the toggling of the Nav/Dropdown components
  // starts by making sure if nav toggle is even needed
  const [toggleNeeded, setToggleNeeded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 768 ? setToggleNeeded(true) : setToggleNeeded(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [navToggled, setNavToggled] = useState(false);
  useEffect(() => {
    const handleToggle = () => {
      setNavToggled(!navToggled);
      if (navToggled === true) {
        setDropdownToggled(false);
      }
    };
    const navToggle = document.getElementById("nav-toggle");
    navToggle.addEventListener("click", handleToggle);
    return () => {
      navToggle.removeEventListener("click", handleToggle);
    };
  }, [navToggled]);

  const [dropdownToggled, setDropdownToggled] = useState(false);
  useEffect(() => {
    const handleToggle = () => {
      setDropdownToggled(!dropdownToggled);
    };
    const dropdownToggle = document.getElementById("dropdown-toggle");
    dropdownToggle.addEventListener("click", handleToggle);
    return () => {
      dropdownToggle.removeEventListener("click", handleToggle);
    };
  }, [dropdownToggled]);

  return (
    <header>
      <div id="logo">TM</div>
      <h1>Trevor McGuire</h1>
      <Nav currentPath={currentPath} navToggled={navToggled} />
      <Dropdown 
        currentPath={currentPath}
        navToggled={navToggled}
        dropdownToggled={dropdownToggled}
      />
    </header>
  );
};

export default nav;
