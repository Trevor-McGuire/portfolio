import { FaGithub, FaMailBulk, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../style/header.css";

const header = () => {
  return (
    <header>
      <span className="tm-logo">TM</span>
      <h1>Trevor McGuire</h1>
      <div>
        <IconContext.Provider value={{ className: "icons", size: "3.5rem" }}>
          <a href="mailto:trevor.mcguire.candidate@gmail.com">
            <FaMailBulk />
          </a>
          <a href="https//github.com/trevor-mcguire">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/trevor-mcguire/">
            <FaLinkedin />
          </a>
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default header;
