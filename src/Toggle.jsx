import React, { useState } from "react";
import sun from "./sun.jpg";
import moon from "./moon.png";
import "./Toggle.css";
import { lightTheme, darkTheme, GlobalStyles } from "./style";
import { ThemeProvider } from "styled-components";

const Toggle = () => {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="Toggle">
        <img src={sun} className="toggleIcon" alt="" />
        <img src={moon} className="toggleIcon" alt="" />
        <div
          className="toggleBtn"
          style={{
            left: theme === "light" ? 15 : 45,
          }}
          onClick={handleClick}
        ></div>
      </div>
      <div className="text">
        <h1
          style={{
            color: theme === "light" ? "black" : "white",
          }}
        >
          Welcome !!!
        </h1>
      </div>
    </ThemeProvider>
  );
};

export default Toggle;
