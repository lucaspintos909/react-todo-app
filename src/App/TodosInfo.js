import React from "react";

function EmptyTodos() {
  return (
    <>
      <p className="text-info">No hay tareas guardadas</p>
      <p className="text-info">
        Toca el botón inferior "
        <span className="button mini_button">Agregar tarea</span>".
      </p>
    </>
  );
}

function TodoNotFound() {
  return (
    <>
      <p className="text-info">No hay tareas con el texto ingresado!</p>
    </>
  );
}

function TodosError() {
  <p className="text-info">Hubo un error, recargue la página por favor.</p>;
}

export { EmptyTodos, TodoNotFound, TodosError };
