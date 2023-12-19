import React from "react";

export default function User({ id, username, name }) {
  return (
    <div
      style={{
        padding: "1em",
        margin: "1em",
        backgroundColor: "#292929",
        color: "white",
      }}
    >
      <h3>Id: {id}</h3>
      <h3>Username: {username}</h3>
      <h3>Name: {name}</h3>
    </div>
  );
}
