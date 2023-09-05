import {
  FaDatabase,
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "../style/footer.css";

const footer = () => {
  return (
    <footer>
      <p>Footer</p>
      <IconContext.Provider value={{ className: "icons", size: "3.5rem" }}>
        <FaDatabase />
        <FaCss3 />
        <FaHtml5 />
        <FaJs />
        <FaReact />
        <FaNodeJs />
      </IconContext.Provider>
    </footer>
  );
};

export default footer;
