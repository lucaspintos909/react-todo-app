// import './App.css';
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const todos = [
  { text: "Arreglar errores HDG", completed: false },
  { text: "Salir a almorzar", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
