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
    title: "MySql2 / MongoDB",
    time: "April 2023 - Present",
    description: "Learning the power of MySql2 and MongoDB was an exciting an eye opening experience. I am excited to continue to learn more about these powerful database technologies and querying languages.",
  },
  {
    id: 2,
    image: <FaCss3 />,
    title: "CSS3 / Tailwind / Bootstrap",
    time: "Febuary 2021 - Present",
    description: "I still remember the first time I used CSS3 to style a website. It was a very exciting moment for me. I have since learned how to use Tailwind and Bootstrap to make styling websites even easier. I am excited to continue to learn more about these powerful styling tools.",
  },
  {
    id: 3,
    image: <FaHtml5 />,
    title: "HTML5",
    time: "Febuary 2021 - Present",
    description: "Doesn't get much more basic than HTML. I have learned how to use HTML to create the basic structure of a website. I am excited to continue to learn more about this powerful markup language.",
  },
  {
    id: 4,
    image: <FaJs />,
    title: "JavaScript",
    time: "Febuary 2022 - Present",
    description: "Discovering JS was a cambrian explosion of creativity for me. I learned how to use JS to create dynamic and interactive websites. I am excited to continue to learn more about this powerful scripting language.",
  },
  {
    id: 5,
    image: <FaReact />,
    title: "React",
    time: "May 2023 - Present",
    description: "React did for what I had always wanted to do with JS. I learned how to use React to create dynamic and interactive websites. I am excited to continue to learn more about this powerful scripting language.",
  },
  {
    id: 6,
    image: <FaNodeJs />,
    title: "NodeJS",
    time: "March 2023 - Present",
    description: "NodeJS was a game changer for me. I learned how to use NodeJS to create dynamic and interactive websites. I am excited to continue to learn more about this powerful scripting language.",
  },
]

const skills = () => {
  return (
    <div className='skills'>
      <h1 >
        The More I Learn, The More Hours I Need In The Day.
      </h1>
      <IconContext.Provider value={{ className: "icons", size: "3.5rem" }}>
        <ol >
          {skillsArray.map((skill) => {
            return (
              <li key={skill.id}>
                <span>{skill.image}</span>
                <h3>{skill.title}</h3>
                <time>{skill.time}</time>
                <p>{skill.description}</p>
              </li>
            );
          })

          }

        </ol>
      </IconContext.Provider>
    </div>
  );
};

export default skills;
