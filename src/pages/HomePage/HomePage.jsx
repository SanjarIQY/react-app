import { useState, useEffect, useMemo, useRef } from "react";
import { API_URL } from "../../constants";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../components/hooks/useFetch";
import cls from "./HomePage.module.css";
import { SearchInput } from "../../components/SearchInput";
import { Button } from "../../components/Button";

const DEAFAULT_PER_PAGE = 10;

export const HomePage = () => {
  const [searchParams, setSearchParams] = useState(`?_page=1&_per_page=${DEAFAULT_PER_PAGE}`);
  const [questions, setQuestions] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [countSelectValue, setCountSelectValue] = useState(5);

  const controlsContainerRef = useRef();

  const getActivePageNumber = () => (questions.next === null ? questions.last : questions.next - 1);

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  const cards = useMemo(() => {
    if (questions?.data) {
      if (searchValue.trim()) {
        return questions.data.filter((data) => data.question.toLowerCase().includes(searchValue.trim().toLowerCase()));
      } else {
        return questions.data;
      }
    }
    return [];
  }, [questions, searchValue, countSelectValue]);

  const pagination = useMemo(() => {
    const totalCardsCount = questions?.pages || 0;

    return Array(totalCardsCount)
      .fill(0)
      .map((_, i) => i + 1);
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
    getQuestions(`react${searchParams}`);
  }, [searchParams]);

  const onSearchChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  const onSelectValueChangeHandler = (e) => {
    console.log(e.target.value);
    setSelectValue(e.target.value);

    setSearchParams(`?_page=1&_per_page=${countSelectValue}&${e.target.value}`);
  };

  const onChangeCountSelectValue = (e) => {
    setCountSelectValue(e.target.value);
    setSearchParams(`?_page=1&_per_page=${e.target.value}&${selectValue}`);
  };

  const paginationHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      setSearchParams(`?_page=${e.target.textContent}&_per_page=${countSelectValue}&${selectValue}`);
      controlsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className={cls.controlsContainer} ref={controlsContainerRef}>
        <SearchInput value={searchValue} onChange={onSearchChangeHandler} />

        <select value={countSelectValue} onChange={onChangeCountSelectValue} className={cls.select}>
          <option disabled>count</option>
          <hr />
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>

        <select value={selectValue} onChange={onSelectValueChangeHandler} className={cls.select}>
          <option value="">sort by</option>
          <hr />
          <option value="_sort=level">level ASC</option>
          <option value="_sort=-level">level DESC</option>
          <option value="_sort=completed">completed ASC</option>
          <option value="_sort=-completed">completed DESC</option>
        </select>
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      <QuestionCardList cards={cards} />

      {cards.length === 0 ? (
        <p className={cls.noCardsInfo}>No Cards...</p>
      ) : (
        pagination.length > 1 && (
          <div className={cls.paginationContainer} onClick={paginationHandler}>
            {pagination.map((value) => {
              return (
                <Button isActive={!(value === getActivePageNumber())} key={value}>
                  {value}
                </Button>
              );
            })}
          </div>
        )
      )}
    </>
  );
};
