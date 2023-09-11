import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./nav";
import projects from "../../projects";

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
    const mainList = document.getElementById("main-list");
    mainToggled
      ? (mainList.style.maxHeight = hiddenCloneHeight(mainList))
      : (mainList.style.maxHeight = "0px");
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
    const dropdownList = document.getElementById("dropdown-list");
    dropdownToggled
      ? (dropdownList.style.maxHeight = hiddenCloneHeight(dropdownList))
      : (dropdownList.style.maxHeight = "0px");
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
      <div>
        <div id="logo">
          <div id='logo-t'></div>
          <div id='logo-m'></div>
          <div id='logo-b'></div>
        </div>
        <h1>Trevor McGuire</h1>
        <div id="main-toggle">
          <div>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>
      <Nav currentPath={currentPath} />
    </header>
  );
};

export default nav;
