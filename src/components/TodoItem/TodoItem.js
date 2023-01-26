import React from "react";
import "./TodoItem.css";

function TodoItem({ text, completed }) {
  const onComplete = () => {
    alert("Completaste el todo " + text);
  };

  const onDelete = () => {
    alert("Eliminaste el todo " + text);
  };

  return (
    <li className={`todo_item ${completed && "todo_item_completed"}`}>
      <span className="todo_item__icon" onClick={onComplete}>
        <button className="todo_item__icon_button">
          {completed ? "Done" : "To do"}
        </button>
      </span>
      <p className="todo_item__text">{text}</p>
      <span className="todo_item__delete" onClick={onDelete}>
        <button className="todo_item__delete_button">X</button>
      </span>
    </li>
  );
}

export { TodoItem };
