import {} from "react";
import cls from "./QuestionCard.module.css";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { Badge } from "../Badge";

export const QuestionCard = (props) => {
  const navigate = useNavigate();
  const level = props.card.level;

  const levelVariant = level === 1 ? "primary" : level === 2 ? "warning" : "alert";
  const completedVariant = props.card.completed ? "success" : "primary";

  return (
    <div className={cls.card}>
      <div className={cls.cardLabels}>
        <Badge variant={levelVariant}>Level: {props.card.level}</Badge>
        <Badge variant={completedVariant}>{props.card.completed ? "Completed" : "Not Completed"}</Badge>
      </div>

      <h5 className={cls.cardTitle}>{props.card.question}</h5>

      <div className={cls.cardAnswers}>
        <label>short answer: </label>
        <p className={cls.cardAnswer}>{props.card.answer}</p>
      </div>

      <Button onClick={() => navigate(`/question/${props.card.id}`)}>View</Button>
    </div>
  );
};
