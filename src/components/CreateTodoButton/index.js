import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal, openModal }) {
  const handleClick = () => {
    setOpenModal((oldValue) => !oldValue);
  };

  return (
    <div className="create_todo">
      <button
        onClick={handleClick}
        className={`button create_todo__button ${
          openModal && "create_todo__button_close"
        }`}
      >
        {openModal ? "Close modal" : "Add todo"}
      </button>
    </div>
  );
}

export { CreateTodoButton };
