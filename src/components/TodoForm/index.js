import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [text, setText] = useState("");

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setOpenModal(false);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="todo_form">
      <label htmlFor="todo_text" className="todo_form__label">
        Escribe tu nuevo TODO
      </label>
      <textarea
        id="todo_text"
        value={text}
        onChange={handleTextChange}
        className="todo_form__textarea"
        placeholder="Ej: Lavar la ropa"
      />
      <div className="todo_form__buttons_box">
        <button
          type="button"
          onClick={onCancel}
          className="button small_button todo_form__cancel_button"
        >
          Cancelar
        </button>
        <button type="submit" className="button small_button todo_form__add_button">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
