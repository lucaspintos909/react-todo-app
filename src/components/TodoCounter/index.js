import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 className="todo_counter">
      Has completado {completedTodos} de {totalTodos} TODO's
    </h2>
  );
}

export { TodoCounter };
