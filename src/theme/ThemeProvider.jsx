import { createContext, useState } from "react";
import { THEME_STORAGE } from "../constants";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem(THEME_STORAGE || "dark");
  const [theme, setTheme] = useState("light");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
