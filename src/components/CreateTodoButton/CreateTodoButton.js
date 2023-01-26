import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const handleClick = () => {
    console.log("asd");
  };

  return (
    <div className="create_todo">
      <button onClick={handleClick} className="create_todo__button">
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
