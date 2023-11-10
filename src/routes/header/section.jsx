const Section = () => {
  // function to find item in an array and then select the next item
  const nextItem = () => {
    const colorTheme = ["#f00", "#0f0", "#ff0", "#f0f", "#0ff"];
    const currentColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--theme-color");
    const index = colorTheme.indexOf(currentColor);
    if (index === colorTheme.length - 1) {
      return colorTheme[0];
    } else {
      return colorTheme[index + 1];
    }
  };

  return (
    <section>
          <svg
      version="1.1"
      id="logo"
      width="171.52"
      height="172.16"
      viewBox="0 0 171.52 172.16"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        document.documentElement.style.setProperty(
          "--theme-color",
          nextItem()
        );
      }}
      
    >
      <defs id="defs6" />
      <g id="g8">
        <path
          fill="#999999"
          stroke="none"
          strokeWidth="0.64"
          d="m 120.32,153.6 c -8.2944,2.38848 -15.62496,6.04352 -24.32,7.39904 -21.2832,3.3184 -44.193088,-4.01792 -60.16,-18.38848 C 19.917696,128.28032 10.24,107.87968 10.24,86.4 10.24,81.936 9.549056,69.42784 13.717056,66.57792 15.818176,65.14112 19.97536,65.92 22.4,65.92 h 22.4 v 49.92 H 56.32 V 65.92 h 18.56 v -9.6 H 28.16 C 21.706368,56.32 12.718016,54.684416 6.536768,56.523456 3.3045952,57.48512 2.6638592,63.756224 2.0543232,66.56 -0.22321408,77.03616 -0.2955552,87.28448 0.64,97.92 c 3.1318272,35.60384 33.462912,64.73152 67.2,72.39168 12.8,2.90624 27.03488,2.49472 39.68,-0.98368 13.24247,-4.16264 12.94825,-2.10017 12.8,-15.728 z"
          id="path7682"
        />
        <path
          id="logo-path"
          fill="#2996c1"
          stroke="none"
          strokeWidth="0.64"
          d="M 10.24,46.08 C 21.307775,46.822527 21.371665,45.427896 27.709632,37.76 31.277376,33.540544 35.275968,29.525312 39.68,26.175296 51.950144,16.841728 66.00064,11.803648 81.28,10.348672 120.74432,6.590528 157.44576,40.22272 161.1712,78.72 c 1.89504,19.58144 -4.32512,38.14336 -15.8912,53.76 l -0.64,-26.24 V 56.32 L 129.6064,56.977792 125.184,67.84 113.92,99.84 102.36992,68.48 97.5936,56.977792 82.56,56.32 v 59.52 h 11.52 l -0.64,-44.16 16,44.16 7.87072,-0.65792 4.8064,-11.50208 11.64288,-32 h 0.64 l -1.28,85.12 c 7.50656,-1.97184 14.61568,-10.78976 19.32544,-16.64 15.4496,-19.19104 22.71808,-45.4016 17.792,-69.76 C 158.53696,12.542016 90.37632,-19.880448 39.68,13.548672 28.592384,20.85984 14.150656,32.790272 10.24,46.08"
        />
      </g>
    </svg>


      <h1>Trevor McGuire</h1>
      <div id="main-toggle">
        <div>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </div>
    </section>
  );
};

export default Section;
