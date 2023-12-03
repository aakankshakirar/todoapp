import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

export default function ToDoForm({ addToDo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);

    if (title.trim().length == 0) {
      toast.error("Title can not be blank!");
      return false;
    }

    const newToDo = {
      title: title,
      isCompleted: false,
      id: uuid(),
    };
    addToDo(newToDo);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="toDoForm">
        <input
          type="text"
          value={title}
          className="toDoFormInput"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <button type="submit" className="toDoFormBtn">
          Submit
        </button>
      </form>
    </div>
  );
}
