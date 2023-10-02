const section = () => {
  // function to find item in an array and then select the next item
  const nextItem = (array) => {
    const colorTheme = [
      '#f00',
      '#0f0',
      '#ff0',
      '#f0f',
      '#0ff',
    ]
    const currentColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color');
    const index = colorTheme.indexOf(currentColor);
    if (index === colorTheme.length - 1) {
      return colorTheme[0];
    } else {
      return colorTheme[index + 1];
    }
  };


  return (
    <section>
      <div 
        id="logo"
        onClick={() => {
          document.documentElement.style.setProperty('--theme-color', nextItem()); // new color
        }}
      >
        <div id="logo-t"></div>
        <div id="logo-m"></div>
        <div id="logo-b"></div>
      </div>
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

export default section;
