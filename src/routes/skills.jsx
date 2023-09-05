import '../style/skills.css'
import {
  FaDatabase,
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const skills = () => {
  return (
    <>
      <p>skills</p>
      <IconContext.Provider value={{ className: "icons", size: "3.5rem" }}>
        <FaDatabase />
        <FaCss3 />
        <FaHtml5 />
        <FaJs />
        <FaReact />
        <FaNodeJs />
      </IconContext.Provider>
    </>
  );
};

export default skills;
