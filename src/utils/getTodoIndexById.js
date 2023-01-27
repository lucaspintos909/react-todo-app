export function getTodoIndexById(id, todos) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    console.error(`Todo de id=${id} no encontrada.`);
    return false;
  } else {
    return todoIndex;
  }
}
