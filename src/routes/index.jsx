import Profile from "../assets/Profile.png";

export default function Index() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Passion, Creativity, Dedication, and a lot of coffee.
      </h1>
      <img
        className="rounded-full w-32 h-35 mx-auto"
        src={Profile}
        alt="image description"
      />
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Hello, my name is Trevor McGuire. I am a full stack web developer with a
        passion for creating functional, smart, and responsive websites. I am a
        graduate of the University of Wisconsins Full Stack Web Development
        Bootcamp. I am skilled in HTML, CSS, JavaScript, Node.js, Express.js,
        MySQL, MongoDB, and React.js. I am a hard worker, a quick learner, and
        I'm always looking for new challenges. I am currently seeking a
        full-time position as a web developer. Please feel free to look around
        my portfolio and contact me if you have any questions.
      </p>
    </>
  );
}
