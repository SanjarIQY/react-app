import {} from "react";
import cls from "./Badge.module.css";

export const Badge = (props) => {
  switch (props.variant) {
    case "primary":
      return <div className={`${cls.badge} ${cls.primary}`}>{props.children}</div>;
    case "success":
      return <div className={`${cls.badge} ${cls.success}`}>{props.children}</div>;
    case "warning":
      return <div className={`${cls.badge} ${cls.warning}`}>{props.children}</div>;
    case "alert":
      return <div className={`${cls.badge} ${cls.alert}`}>{props.children}</div>;
    default:
      return <div className={cls.badge}>{props.children}</div>;
  }
};
