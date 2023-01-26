import React from "react";
import "./TodoList.css";

function TodoList({ children }) {
  return (
    <section>
      <ul className="todo_list">{children}</ul>
    </section>
  );
}

export { TodoList };
