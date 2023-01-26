import React from "react";
import "./TodoItem.css";

function TodoItem({ text, completed }) {
  return (
    <li className={`todo_item ${completed && "todo_item_completed"}`}>
      <span className="todo_item__icon">{completed ? "Done" : "To do"}</span>
      <p className="todo_item__text">{text}</p>
      <span className="todo_item__btn">X</span>
    </li>
  );
}

export { TodoItem };
