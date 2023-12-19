import React, { useState } from "react";

export default function RedundantState() {
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <div>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        id="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <br />
      <br />
      Full Name: {username} {lastname}
    </div>
  );
}
