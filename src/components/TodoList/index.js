import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section>
      <ul className="todo_list">
        {props.loading && props.onLoading()}
        {!props.loading &&
          !props.searchedTodos.length &&
          !props.searchValue.length &&
          props.onEmpty()}
        {!props.loading &&
          !props.searchedTodos.length &&
          !!props.searchValue.length &&
          props.onTodoNotFound()}
        {!props.loading &&
          !props.error &&
          props.searchedTodos.map(props.render)}
      </ul>
    </section>
  );
}

export { TodoList };
