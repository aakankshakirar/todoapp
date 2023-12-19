import React from "react";
import { useState, useRef } from "react";

export default function ExampleUseRef() {
  const usernameRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" id="username" ref={usernameRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
