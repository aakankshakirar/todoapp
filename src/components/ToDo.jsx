import React from "react";
import { ImCross } from "react-icons/im";

export default function ToDo({
  id,
  title,
  isCompleted,
  toggleToDoChekbox,
  removeToDo,
}) {
  const toggleCheckbox = (id) => {
    toggleToDoChekbox(id);
  };

  const remove = (id) => {
    removeToDo(id);
  };
  return (
    <div className="toDo">
      <div className="toDoTitle">
        <input
          type="checkbox"
          checked={isCompleted ? true : false}
          onChange={() => {
            toggleCheckbox(id);
          }}
        />
        <p className={`${isCompleted ? "completed" : ""}`}>{title}</p>
      </div>

      <div className="crossBtn" onClick={() => remove(id)}>
        <ImCross />
      </div>
    </div>
  );
}
