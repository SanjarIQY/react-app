import cls from "../Button/Button.module.css";

export const Button = (props) => {
  return (
    <button className={props.isActive == true ? cls.active : cls.btn} onClick={props.onClick} disabled={props.isDisabled}>
      {props.children}
    </button>
  );
};
