import React from "react";

function NoTodosInfo() {
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


export { NoTodosInfo, TodoNotFound };
