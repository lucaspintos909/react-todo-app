import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="todo_search"
      type="text"
      placeholder="Buscar"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
