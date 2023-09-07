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
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        The More I Learn, The More Hours I Need In The Day.
      </h1>
      <IconContext.Provider value={{ className: "icons", size: "3.5rem" }}>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaDatabase />
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              MySql2 / MongoDB{" "}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2023 - Present
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Learning the power of MySql2 and MongoDB was an exciting an eye
              opening experience. I am excited to continue to learn more about
              these powerful database technologies and querying languages.
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaCss3 />
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              CSS3 / Tailwind / Bootstrap{" "}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Febuary 2021 - Present
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              I still remember the first time I used CSS3 to style a website. It
              was a very exciting moment for me. I have since learned how to use
              Tailwind and Bootstrap to make styling websites even easier. I am
              excited to continue to learn more about these powerful styling
              tools.
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaHtml5 />
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              HTML5{" "}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Febuary 2021 - Present
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Doesn't get much more basic than HTML. I have learned how to use
              HTML to create the basic structure of a website. I am excited to
              continue to learn more about this powerful markup language.
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaJs />
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              JavaScript{" "}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Febuary 2022 - Present
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Discovering JS was a cambrian explosion of creativity for me. I
              learned how to use JS to create dynamic and interactive websites.
              I am excited to continue to learn more about this powerful
              scripting language.
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaReact />
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              React{" "}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2023 - Present
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              React did for what I had always wanted to do with JS. I learned
              how to use React to create dynamic and interactive websites. I am
              excited to continue to learn more about this powerful scripting
              language.
            </p>
          </li>
          <li class="mb-10 ml-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaNodeJs />
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              NodeJS{" "}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2023 - Present
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
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
