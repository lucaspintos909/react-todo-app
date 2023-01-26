import React from "react";
import { CreateTodoButton } from "../components/CreateTodoButton/index.js";
import { TodoCounter } from "../components/TodoCounter/index.js";
import { TodoItem } from "../components/TodoItem/index.js";
import { TodoList } from "../components/TodoList/index.js";
import { TodoSearch } from "../components/TodoSearch/index.js";

function AppUI({
  completedTodos,
  totalTodos,
  searchedTodos,
  toggleTodoState,
  onDeleteTodo,
  setSearchValue,
  searchValue,
  loading,
  error,
}) {
  return (
    <>
      <>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
          {error && <p>Hubo un error, recargue la página por favor.</p>}
          {loading && <p>Cargando...</p>}
          {!loading && !searchedTodos.length && <p>No hay todos</p>}

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

        <CreateTodoButton />
      </>
    </>
  );
}

export { AppUI };
