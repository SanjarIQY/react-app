import {} from "react";
import cls from "./QuestionCard.module.css";
import { Button } from "../Button";

export const QuestionCard = () => {
  return (
    <div className={cls.card}>
      <div className={cls.cardLabels}>
        <div>Level: 1</div>
        <div>Not Completed</div>
      </div>

      <h5 className={cls.cardTitle}>What is JSX?</h5>

      <div className={cls.cardAnswers}>
        <label>short answer: </label>
        <p className={cls.cardAnswer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, esse!</p>
      </div>

      <Button onClick={() => {}}>View</Button>
    </div>
  );
};
