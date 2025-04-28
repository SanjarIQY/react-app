import { memo } from "react";
import { QuestionCard } from "../QuestionCard";
import cls from "./QuestionCardList.module.css";

export const QuestionCardList = memo((props) => {
  return (
    <div className={cls.cardList}>
      {props.cards.map((card, index) => (
        <QuestionCard card={card} key={index} />
      ))}
    </div>
  );
});
