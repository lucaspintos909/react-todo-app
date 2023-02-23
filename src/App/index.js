import { CreateTodoButton } from "../components/CreateTodoButton/index.js";
import { Modal } from "../components/Modal/index.js";
import { TodoCounter } from "../components/TodoCounter/index.js";
import { TodoForm } from "../components/TodoForm/index.js";
import { TodoHeader } from "../components/TodoHeader/index.js";
import { TodoItem } from "../components/TodoItem/index.js";
import { TodoList } from "../components/TodoList/index.js";
import { TodoSearch } from "../components/TodoSearch/index.js";
import { useTodos } from "../hooks/useTodos.js";
import { EmptyTodos, TodoNotFound } from "./TodosInfo.js";
import { TaskListContentLoader } from "./TaskListContentLoader.js";

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

      <TodoList>
        {error && (
          <p className="text-info">
            Hubo un error, recargue la página por favor.
          </p>
        )}
        {loading && <TaskListContentLoader />}
        {!loading && !searchedTodos.length && !searchValue.length && (
          <EmptyTodos />
        )}
        {!loading && !searchedTodos.length && !!searchValue.length && (
          <TodoNotFound />
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
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
}

export default App;
