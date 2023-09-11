import { useEffect, useState } from "react";
import Profile from "../assets/Profile.png";

export default function Index() {
  const [decoderRun, setDecoderRun] = useState(true);
  useEffect(() => {
    setDecoderRun(false);
    decoder("emp1");
  }, [decoderRun]);
  const decoder = async (className) => {
    // neccessary to make sure function runs only once on mount
    if (decoderRun) return;

    /* 
      first half of function 
        creates an array of all elements with the class name
        creates an array of all the text in each element
        creates a span with
          classname of unsolved
          data-text of the correct char
          random char as innerHTML
          * space characters are replaced with &nbsp;
        replaces the text in each element with the span
    */

    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const elements = Array.from(document.getElementsByClassName(className));

    elements.forEach((element) => {
      const text = Array.from(element.innerText);
      let newText = "";

      text.forEach((character) => {
        if (character === " ") {
          newText += " ";
        } else {
          let rand = characters[Math.floor(Math.random() * characters.length)]
          newText += `<span class="unsolved" data-text="${character}">${rand}</span>`;
        }
      });
      element.innerHTML = newText;
    });
    
    let unsolved = Array.from(document.getElementsByClassName("unsolved"));
    while (unsolved.length > 0) {
      const rand = Math.floor(Math.random() * unsolved.length);
      unsolved[rand].innerHTML = unsolved[rand].dataset.text;
      unsolved.splice(rand, 1);
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  };

  return (
    <div className="about">
      <h1>Passion, Creativity, Dedication, and a Lot of Coffee.</h1>
      <img src={Profile} alt="image description" />
      <p>
        Hello, my name is <span className="emp1">Trevor McGuire</span>. I am a
        full stack web developer with a passion for creating{" "}
        <span className="emp1">functional, smart, and responsive websites</span>
        . I am a graduate of the{" "}
        <span className="emp1">
          University of Wisconsins Full Stack Web Development Bootcamp
        </span>
        . I am skilled in{" "}
        <span className="emp1">
          HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and
          React.js
        </span>
        . I am a hard worker, a <span className="emp1">quick learner</span>, and
        I'm always looking for new <span className="emp1">challenges</span>. I
        am currently seeking a <span className="emp1">full-time position</span>{" "}
        as a web developer. Please feel free to look around my{" "}
        <span className="emp1">portfolio</span> and contact me if you have any
        questions.
      </p>
    </div>
  );
}
