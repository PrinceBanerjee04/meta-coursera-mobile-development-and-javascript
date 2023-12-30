// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    const message = "%c" + txt;
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    const fontStyle = "color: tomato; font-size: 50px";

  if (reason === "birthday") {
    console.log("%cHappy birthday", fontStyle);
  } else if (reason === "champions") {
    console.log("%cCongrats on the title!", fontStyle);
  } else {
    console.log("No special celebration today");
  }
}
