import { CreateTodoButton } from "../components/CreateTodoButton/index.js";
import { Modal } from "../components/Modal/index.js";
import { TodoCounter } from "../components/TodoCounter/index.js";
import { TodoForm } from "../components/TodoForm/index.js";
import { TodoHeader } from "../components/TodoHeader/index.js";
import { TodoItem } from "../components/TodoItem/index.js";
import { TodoList } from "../components/TodoList/index.js";
import { TodoSearch } from "../components/TodoSearch/index.js";
import { useTodos } from "../hooks/useTodos.js";
import { TodosContentLoader } from "./TodosContentLoader.js";
import { EmptyTodos, TodoNotFound, TodosError } from "./TodosInfo.js";

/* const defaultTodos = [
  { id: 1, text: "Arreglar errores HDG", completed: false },
  { id: 2, text: "Salir a almorzar", completed: true },
  { id: 3, text: "Comprar chicles", completed: true },
]; */

function App() {
  const {
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
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchValue={searchValue}
        onError={() => <TodosError />}
        onEmpty={() => <EmptyTodos />}
        onTodoNotFound={() => <TodoNotFound />}
        onLoading={() => <TodosContentLoader />}
        render={(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            toggleTodoState={() => toggleTodoState(todo.id)}
            onDeleteTodo={() => onDeleteTodo(todo.id)}
          />
        )}
      />

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
}

export default App;
