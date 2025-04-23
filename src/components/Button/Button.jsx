import cls from "../Button/Button.module.css";

export const Button = (props) => {
  return (
    <button className={props.isActive == true ? cls.btn : cls.active} onClick={props.onClick} disabled={props.isDisabled}>
      {props.children}
    </button>
  );
};
