import cls from "../Button/Button.module.css";

const isPrimary = true;

export default function Button({ onClick, children }) {
  return (
    <button className={isPrimary == true ? cls.btn : cls.primary} onClick={onClick}>
      {children}
    </button>
  );
}
