import { createContext, useState } from "react";
import { getTodoIndexById } from "../utils/getTodoIndexById";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { generateUUID } from "../utils/generateUUID";

const VERSION = "TODOS_V1";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage(VERSION, []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

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

  const addTodo = (text) => {
    let newTodos = [...todos];

    const newTodo = {
      id: generateUUID(),
      text,
      completed: false,
    };

    newTodos.push(newTodo);

    saveTodos(newTodos);
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

      saveTodos(newTodos);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchedTodos,
        toggleTodoState,
        onDeleteTodo,
        setSearchValue,
        searchValue,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
