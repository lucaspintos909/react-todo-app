import { TodoProvider } from "../context/TodoContext.js";
import { AppUI } from "./AppUI.js";

/* const defaultTodos = [
  { id: 1, text: "Arreglar errores HDG", completed: false },
  { id: 2, text: "Salir a almorzar", completed: true },
  { id: 3, text: "Comprar chicles", completed: true },
]; */

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
