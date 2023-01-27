import React, { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../context/TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <h2 className="todo_counter">
      Has completado {completedTodos} de {totalTodos} TODO's
    </h2>
  );
}

export { TodoCounter };
