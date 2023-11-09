import {
  FaDatabase,
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const skillsArray = [
  {
    id: 1,
    image: <FaDatabase />,
    title: "Apollo / GraphQL / MongoDB",
    time: "April 2023 - Present",
    description:
      "Learning about the power of databases was very exciting. Learning how to use Apollo and GraphQL to unlock that power was a liberating experience. The potential of this technology seems limitless. I am excited to continue to learn more about these powerful tools.",
  },
  {
    id: 5,
    image: <FaReact />,
    title: "React",
    time: "May 2023 - Present",
    description:
      "React did for what I had always wanted to do with JS. I learned how to use React to create dynamic and interactive websites. I am excited to continue to learn more about this powerful scripting language. One of my favorite new tools is the MUI component library.",
  },
  {
    id: 6,
    image: <FaNodeJs />,
    title: "NodeJS",
    time: "March 2023 - Present",
    description:
      "NodeJS was a game changer for me. Maintaining my own servers is a challenge I relish. Im always looking for new ways to push the boundries of what I can do with NodeJS. My NexCommerce project utilized complex mathmatical algorithms to create hundreds of unique reviews for each product in the seed phase.",
  },
  {
    id: 3,
    image: <FaHtml5 />,
    title: "HTML5",
    time: "Febuary 2021 - Present",
    description:
      "Doesn't get much more basic than HTML. I have learned how to use HTML to create the basic structure of a website. While basic, im always on the lookout for new ways to enhance productivity or improve functionality.",
  },
  {
    id: 2,
    image: <FaCss3 />,
    title: "CSS3",
    time: "Febuary 2021 - Present",
    description:
      "I still remember the first time I used CSS3 to style a website. It was a very exciting moment for me. I have since learned how to use Tailwind, Bootstrap, W3CSS, and SASS to make styling websites even easier.",
  },
  {
    id: 4,
    image: <FaJs />,
    title: "JavaScript",
    time: "Febuary 2022 - Present",
    description:
      "Discovering JS was a cambrian explosion of creativity for me. I thrive on the challenge of taking a complex problem and breaking it down into smaller, more managable pieces, and then solving those pieces using JS. I am truely humbled by the giants who have come before me.",
  },
];

const Skills = () => {
  return (
    <div className="skills">
      <h1>The More I Learn, The More Hours I Need In The Day.</h1>
      <IconContext.Provider value={{ className: "icons", size: "3.5rem" }}>
        <ol>
          {skillsArray.map((skill) => {
            return (
              <li key={skill.id}>
                <span>{skill.image}</span>
                <h3>{skill.title}</h3>
                <time>{skill.time}</time>
                <p>{skill.description}</p>
              </li>
            );
          })}
        </ol>
      </IconContext.Provider>
    </div>
  );
};

export default Skills;
