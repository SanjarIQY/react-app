import { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { QuestionCard } from "../QuestionCard/QuestionCard";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(API_URL + "/react");
      const questions = await response.json();
      setQuestions(questions);

      console.log(questions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      {questions.map((card, index) => {
        return <QuestionCard card={card} key={index} />;
      })}

      <button onClick={getQuestions}>get questions</button>
    </>
  );
};
