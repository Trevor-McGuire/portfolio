import { FaMailBulk, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

const Contact = () => {
  const contactArray = [
    {
      id: 1,
      href: "mailto:trevor.mcguire.candidate@gmail.com",
      target: false,
      image: <FaMailBulk />,
      title: "TM@trevmcdev.com",
    },
    {
      id: 3,
      href: "https://www.linkedin.com/in/trevor-mcguire-5b888725b/",
      target: true,
      image: <FaLinkedin />,
      title: "LinkedIn",
    },
  ];

  return (
    <div id="page-contact">
      <IconContext.Provider value={{ className: "icons", size: "3.5rem" }}>
        <h1>Contact Me Here:</h1>
        <p>
          I am always happy to hear from you! Feel free to reach out to me
          through any of the following channels:
        </p>
        <ul>
          {contactArray.map((contact) => {
            return (
              <li key={contact.id}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.image}
                  <h3>{contact.title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </IconContext.Provider>
    </div>
  );
};

export default Contact;
