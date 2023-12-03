import React from "react";

export default function User({ id, firstName, age, increaseAge, deleteUser }) {
  return (
    <div>
      <p>{id}</p>
      <p>{firstName}</p>
      <p>{age}</p>
      <button
        onClick={() => {
          increaseAge(id);
        }}
      >
        Increase Age
      </button>
      <button
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete User
      </button>
      <br />
    </div>
  );
}
