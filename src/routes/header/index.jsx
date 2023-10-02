import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import projects from "../../projects";
import Section from "./section";
import ListMain from "./listMain";
import ListProjects from "./listProjects";

export async function loader() {
  return projects;
}

const nav = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [toggleNeeded, setToggleNeeded] = useState(false);
  const [mainToggled, setMainToggled] = useState(false);
  const [dropdownToggled, setDropdownToggled] = useState(false);

  const location = useLocation();
  useEffect(() => setCurrentPath(location.pathname), [location]);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 768 ? setToggleNeeded(true) : setToggleNeeded(false);
      toggleNeeded ? setMainToggled(false) : setMainToggled(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleToggle = () => {
      setMainToggled(!mainToggled);
      mainToggled === true ? setDropdownToggled(false) : null;
    };
    const mainToggle = document.getElementById("main-toggle");
    const listMain = document.getElementById("list-main");
    mainToggled
      ? (listMain.style.maxHeight = hiddenCloneHeight(listMain))
      : (listMain.style.maxHeight = "0px");
      mainToggle.addEventListener("click", handleToggle);
    return () => {
      mainToggle.removeEventListener("click", handleToggle);
    };
  }, [mainToggled]);

  useEffect(() => {
    const handleToggle = () => {
      setDropdownToggled(!dropdownToggled);
    };
    const dropdownToggle = document.getElementById("dropdown-toggle");
    const listProjects = document.getElementById("list-projects");
    dropdownToggled
      ? (listProjects.style.maxHeight = hiddenCloneHeight(listProjects))
      : (listProjects.style.maxHeight = "0px");
    dropdownToggle.addEventListener("click", handleToggle);
    return () => {
      dropdownToggle.removeEventListener("click", handleToggle);
    };
  }, [dropdownToggled]);

  const hiddenCloneHeight = (element) => {
    let clone = element.cloneNode(true);
    clone.style.visibility = "hidden";
    clone.style.position = "absolute";
    clone.style.maxHeight = "9999px";
    document.body.appendChild(clone);
    let height = window.getComputedStyle(clone).height;
    document.body.removeChild(clone);
    return height;
  };

  return (
    <header
      className={`
        ${!toggleNeeded ? "toggle-not-needed" : "toggle-needed"} 
        ${!mainToggled ? "main-not-toggled" : "main-toggled"} 
        ${!dropdownToggled ? "dropdown-not-toggled" : "dropdown-toggled"}
      `}
    >
      <Section />
      <nav>
        <ListMain currentPath={currentPath} />
        <ListProjects currentPath={currentPath} />
      </nav>
    </header>
  );
};

export default nav;
