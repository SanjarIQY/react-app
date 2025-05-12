import {} from "react";
import { Button } from "../Button/Button";
import cls from "./Header.module.css";
import reactLogo from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AUTH_STORAGE } from "../../constants";
import { ThemeToggler } from "../../features/ThemeToggler";

export const Header = () => {
  const navigate = useNavigate();
  const { isAuth, setAuth } = useAuth();

  const loginHandler = () => {
    localStorage.setItem(AUTH_STORAGE, !isAuth);
    setAuth(!isAuth);
  };

  return (
    <header className={cls.header}>
      <p onClick={() => navigate("/")}>
        <img src={reactLogo} alt="react logo" />
        <span>ReactCards</span>
      </p>

      <div className={cls.buttons}>
        <ThemeToggler />
        {isAuth && <Button onClick={() => navigate("/addquestion")}>Add</Button>}
        <Button onClick={loginHandler} isActive={!isAuth}>
          {isAuth ? "Logout" : "Login"}
        </Button>
      </div>
    </header>
  );
};
