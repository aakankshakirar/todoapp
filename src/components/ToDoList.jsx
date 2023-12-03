import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todos, toggleToDoChekbox, removeToDo }) {
  return (
    <>
      {todos.map((row) => {
        return (
          <ToDo
            {...row}
            key={row.id}
            toggleToDoChekbox={toggleToDoChekbox}
            removeToDo={removeToDo}
          />
        );
      })}
    </>
  );
}
