import { useState } from "react";

import { getTodoIndexById } from "../components/utils/getTodoIndexById";
import { AppUI } from "./AppUI.js";

/* const defaultTodos = [
  { id: 1, text: "Arreglar errores HDG", completed: false },
  { id: 2, text: "Salir a almorzar", completed: true },
  { id: 3, text: "Comprar chicles", completed: true },
]; */

const VERSION = "TODOS_V1";
let localTodos;

if (!localStorage.getItem(VERSION)) {
  localStorage.setItem(VERSION, JSON.stringify([]));
  localTodos = [];
} else {
  const storedTodos = localStorage.getItem(VERSION);
  localTodos = JSON.parse(storedTodos);
}

function App() {
  const [todos, setTodos] = useState(localTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length === 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(VERSION, stringifiedTodos);
  };

  const toggleTodoState = (id) => {
    const todoIndex = getTodoIndexById(id, todos);

    if (todoIndex !== false) {
      let newTodos = [...todos];
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      saveTodos(newTodos);
    }
  };

  const onDeleteTodo = (id) => {
    const todoIndex = getTodoIndexById(id, todos);

    if (todoIndex !== false) {
      let newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      console.log(todoIndex);
      saveTodos(newTodos);
    }
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      toggleTodoState={toggleTodoState}
      onDeleteTodo={onDeleteTodo}
      setSearchValue={setSearchValue}
      searchValue={searchValue}
    />
  );
}

export default App;
