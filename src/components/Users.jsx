import React from "react";
import User from "./User";

export default function Users({ users, increaseAge, deleteUser }) {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <User
          {...user}
          increaseAge={increaseAge}
          key={user.id}
          deleteUser={deleteUser}
        />
      ))}
    </div>
  );
}
