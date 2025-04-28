import { useId } from "react";
import cls from "./SearchInput.module.css";
import { SearchIcon } from "../icons";

export const SearchInput = (props) => {
  const inputID = useId();

  return (
    <div className={cls.inputContainer}>
      <label htmlFor={inputID}>
        <SearchIcon className={cls.searchIcon} />
      </label>
      <input
        type="text"
        value={props.searchValue}
        placeholder="search..."
        className={cls.input}
        id={inputID}
        onChange={props.onSearchChangeHandler}
      />
    </div>
  );
};
