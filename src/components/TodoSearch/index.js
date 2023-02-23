import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {

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
