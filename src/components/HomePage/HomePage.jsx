import { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { QuestionCardList } from "../QuestionCardList";
import { Loader } from "../Loader";
import { useFetch } from "../hooks/useFetch";
import cls from "./HomePage.module.css";
import { SearchInput } from "../SearchInput/SearchInput";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  // const _getQuestions = async () => {
  //   try {
  //     setIsLoading(true);
  //     await DelayfFn(2000);
  //     const response = await fetch(API_URL + "/react");
  //     const questions = await response.json();
  //     setQuestions(questions);

  //     console.log(questions);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    getQuestions("react");
  }, []);

  const onSearchChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className={cls.controlsContainer}>
        <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
      </div>

      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      <QuestionCardList cards={questions} />
    </>
  );
};
