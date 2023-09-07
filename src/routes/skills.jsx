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
      <h1 >
        The More I Learn, The More Hours I Need In The Day.
      </h1>
      <IconContext.Provider value={{ className: "icons", size: "3.5rem" }}>
        <ol >
          <li >
            <span >
              <FaDatabase />
            </span>
            <h3 >
              MySql2 / MongoDB{" "}
            </h3>
            <time >
              April 2023 - Present
            </time>
            <p >
              Learning the power of MySql2 and MongoDB was an exciting an eye
              opening experience. I am excited to continue to learn more about
              these powerful database technologies and querying languages.
            </p>
          </li>
          <li >
            <span >
              <FaCss3 />
            </span>
            <h3 >
              CSS3 / Tailwind / Bootstrap{" "}
            </h3>
            <time >
              Febuary 2021 - Present
            </time>
            <p >
              I still remember the first time I used CSS3 to style a website. It
              was a very exciting moment for me. I have since learned how to use
              Tailwind and Bootstrap to make styling websites even easier. I am
              excited to continue to learn more about these powerful styling
              tools.
            </p>
          </li>
          <li >
            <span >
              <FaHtml5 />
            </span>
            <h3 >
              HTML5{" "}
            </h3>
            <time >
              Febuary 2021 - Present
            </time>
            <p >
              Doesn't get much more basic than HTML. I have learned how to use
              HTML to create the basic structure of a website. I am excited to
              continue to learn more about this powerful markup language.
            </p>
          </li>
          <li >
            <span >
              <FaJs />
            </span>
            <h3 >
              JavaScript{" "}
            </h3>
            <time >
              Febuary 2022 - Present
            </time>
            <p >
              Discovering JS was a cambrian explosion of creativity for me. I
              learned how to use JS to create dynamic and interactive websites.
              I am excited to continue to learn more about this powerful
              scripting language.
            </p>
          </li>
          <li >
            <span >
              <FaReact />
            </span>
            <h3 >
              React{" "}
            </h3>
            <time >
              May 2023 - Present
            </time>
            <p >
              React did for what I had always wanted to do with JS. I learned
              how to use React to create dynamic and interactive websites. I am
              excited to continue to learn more about this powerful scripting
              language.
            </p>
          </li>
          <li >
            <span >
              <FaNodeJs />
            </span>
            <h3 >
              NodeJS{" "}
            </h3>
            <time >
              March 2023 - Present
            </time>
            <p >
              NodeJS was a game changer for me. I learned how to use NodeJS to
              create dynamic and interactive websites. I am excited to continue
              to learn more about this powerful scripting language.
            </p>
          </li>
        </ol>
      </IconContext.Provider>
    </>
  );
};

export default skills;
