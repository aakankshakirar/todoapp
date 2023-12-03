import React from "react";
import ShowFullName from "./ShowFullName";

export default function Greeting({ myFunction }) {
  return (
    <>
      <button onClick={myFunction}>Hey Geeting Button</button>
    </>
  );
}
