import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../colors";

const ThemeSwitcher = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  //Assignment
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  //
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API Theme Switcher</h1>
      <p>This is a nice paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          border: `${currentTheme.border}`,
        }}
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      >
        {themeMode === "light" ? "Dark Mode On" : "Light Mode On"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
