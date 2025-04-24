import {} from "react";
import { Button } from "../Button/Button";
import cls from "./Header.module.css";
import reactLogo from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={cls.header}>
      <p onClick={() => navigate("/")}>
        <img src={reactLogo} alt="react logo" />
        <span>ReactCards</span>
      </p>

      <div className={cls.buttons}>
        <Button isActive={true} onClick={() => navigate("/addquestion")}>
          Add
        </Button>
        <Button isActive={true}>Log in</Button>
      </div>
    </header>
  );
};
