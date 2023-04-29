import "./App.css";
import { useState, useEffect } from "react";

function Footer() {
  // get the dark mode state from local storage
  // if it's not there, set it to false
  // if dark mode is true, set the background color to black
  // if dark mode is false, set the background color to white
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
    if (theme === "dark") {
      document.documentElement.style.setProperty(
        "--text-glitch",
        "0 0 5px rgba(255, 255, 255, 0.6), 1px 1px 2px rgba(255, 0, 0, 0.3), -1px -1px 2px rgba(0, 0, 255, 0.3)"
      );
      document.documentElement.style.setProperty(
        "--box-shadow",
        "inset 10px 24px 90px 0px #131313, inset -10px -24px 60px 0px #131313, inset 20px -10px 50px 0px #131313, inset -20px 10px 40px 0px #131313"
      );
    } else {
      document.documentElement.style.setProperty(
        "--text-glitch",
        "0 0 5px rgba(0, 0, 0, 0.6), 1px 1px 2px rgba(255, 0, 0, 0.3), -1px -1px 2px rgba(0, 0, 255, 0.3)"
      );
      document.documentElement.style.setProperty(
        "--box-shadow",
        "inset 10px 24px 90px 0px #bbb, inset -10px -24px 60px 0px #bbb, inset 20px -10px 50px 0px #bbb, inset -20px 10px 40px 0px #bbb"
      );
    }
  }, [theme]);

  return (
    <footer>
      <ul>
        <li>
          <a> save </a>
        </li>
        <li>
          <a> load </a>
        </li>
        <li>
          <a> restart </a>
        </li>
        <li>
          <a onClick={toggleTheme}>
            {theme === "dark" ? "light mode" : "dark mode"}
          </a>
        </li>
        <li>
          <a> sound off </a>
        </li>
        <li>
          <a> github repo </a>
        </li>
      </ul>
      - &nbsp;&nbsp;&nbsp;&nbsp;made in 48 hours for ludum dare 53
    </footer>
  );
}

export default Footer;
