import React, { useContext } from "react";
import { CreateTodoButton } from "../components/CreateTodoButton/index.js";
import { Modal } from "../components/Modal/index.js";
import { TodoCounter } from "../components/TodoCounter/index.js";
import { TodoForm } from "../components/TodoForm/index.js";
import { TodoItem } from "../components/TodoItem/index.js";
import { TodoList } from "../components/TodoList/index.js";
import { TodoSearch } from "../components/TodoSearch/index.js";
import { TodoContext } from "../context/TodoContext.js";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleTodoState,
    onDeleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && (
          <p className="text-info">
            Hubo un error, recargue la página por favor.
          </p>
        )}
        {loading && <p className="text-info">Cargando...</p>}
        {!loading && !searchedTodos.length && (
          <p className="text-info">No hay todos</p>
        )}

        {!loading &&
          !error &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              toggleTodoState={() => toggleTodoState(todo.id)}
              onDeleteTodo={() => onDeleteTodo(todo.id)}
            />
          ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
}

export { AppUI };
