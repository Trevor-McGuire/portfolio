import { FaMailBulk, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <div id="page-contact">
      <IconContext.Provider value={{ className: "icons", size: "3.5rem" }}>
        <h1>Contact Me Here:</h1>
        <p>
          I am always happy to hear from you! Feel free to reach out to me
          through any of the following channels:
        </p>
        <a
          href="https://www.linkedin.com/in/trevor-mcguire-5b888725b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> <h3>LinkedIn</h3>
        </a>
        <br />
        <div>
        <FaMailBulk /> <h3>tm@trevmcdev.com</h3>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Contact;
