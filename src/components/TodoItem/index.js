import React from "react";
import "./TodoItem.css";

function TodoItem({ text, completed, toggleTodoState, onDeleteTodo }) {
  return (
    <li className={`todo_item ${completed && "todo_item_completed"}`}>
      <span className="todo_item__icon" onClick={toggleTodoState}>
        <button className="todo_item__icon_button">
          {completed ? "Done" : "To do"}
        </button>
      </span>
      <p className="todo_item__text">{text}</p>
      <span className="todo_item__delete" onClick={onDeleteTodo}>
        <button className="todo_item__delete_button">X</button>
      </span>
    </li>
  );
}

export { TodoItem };
