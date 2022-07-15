import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext({
  theme: "",
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "light" ? "dark" : "light";

  const toggleTheme = () => {
    const selectedTheme = theme === "light" ? "dark" : "light";
    setTheme(selectedTheme);
    saveThemePreference(selectedTheme);
  };

  const saveThemePreference = (theme) => {
    localStorage.setItem("theme", theme);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const autoChecker = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      saveThemePreference("dark");
    } else {
      setTheme("light");
      saveThemePreference("light");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      autoChecker();
    } else {
      setTheme(localStorage.getItem("theme"));
    }
  }, [autoChecker]);

  return (
    <ThemeContext.Provider value={{ theme, colorTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
