import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {

  return (
    <h2 className="todo_counter">
      Has completado {completedTodos} de {totalTodos} {totalTodos !== 1 ? "TODO's" : "TODO"}
    </h2>
  );
}

export { TodoCounter };
