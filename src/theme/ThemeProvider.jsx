import { createContext, useState, useLayoutEffect } from "react";
import { THEME_STORAGE } from "../constants";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem(THEME_STORAGE || "dark");
  const [theme, setTheme] = useState(savedTheme);

  useLayoutEffect(() => {
    const detectTheme = () => {
      const isDark = window.matchMedia("(prefers-color-scheme: light)").matches;

      if (isDark) {
        setTheme("light");
        savedTheme === "light" && document.body.classList.remove("lightLayout");
      } else {
        savedTheme === "light" && document.body.classList.add("lightLayout");
        setTheme(savedTheme);
      }
    };
    detectTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    mediaQuery.addEventListener("change", detectTheme);

    return () => {
      mediaQuery.removeEventListener("change", detectTheme);
    };
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
