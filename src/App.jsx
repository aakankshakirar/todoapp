import React from "react";
import ToDoForm from "./components/ToDoForm";
import ToDo from "./components/ToDo";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "To Do 1", isCompleted: false },
    { id: 2, title: "To Do 2", isCompleted: true },
    { id: 3, title: "To Do 3", isCompleted: false },
  ]);

  const addToDo = (newToDo) => {
    console.log(newToDo);
    setToDo((prevtoDo) => [newToDo, ...prevtoDo]);
  };

  const toggleToDoChekbox = (id) => {
    setToDo((prevToDo) => {
      return prevToDo.map((row) => {
        if (row.id == id) {
          return { ...row, isCompleted: !row.isCompleted };
        } else {
          return { ...row };
        }
      });
    });
  };

  const removeToDo = (id) => {
    setToDo((prevState) => prevState.filter((row) => row.id != id));
  };

  return (
    <div className="container">
      <h1 className="mainTitle">To Do List</h1>
      <ToDoForm addToDo={addToDo} />
      <ToDoList
        todos={toDo}
        toggleToDoChekbox={toggleToDoChekbox}
        removeToDo={removeToDo}
      />
      <ToastContainer />
    </div>
  );
}
