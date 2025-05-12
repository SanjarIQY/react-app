import cls from "./ThemeToggler.module.css";
import { useTheme } from "../../hooks/useTheme";

import {} from "react";
import { THEME_STORAGE } from "../../constants";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const onChangeHandler = (e) => {
    const updatedTheme = e.target.checked === false ? "dark" : "light";
    setTheme(updatedTheme);

    updatedTheme === "light" ? document.body.classList.add("lightLayout") : document.body.classList.remove("lightLayout");
    localStorage.setItem(THEME_STORAGE, updatedTheme);
  };

  return (
    <div>
      <label className={cls.switch} htmlFor="switch">
        <input id="switch" type="checkbox" className={cls.circle} onChange={onChangeHandler} checked={theme === "light"} />
        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className={`${cls.moon} ${cls.svg}`}>
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
        </svg>
        <div className={`${cls.sun} ${cls.svg}`}>
          <span className={cls.dot}></span>
        </div>
      </label>
    </div>
  );
};
