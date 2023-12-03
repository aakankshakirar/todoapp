import React, { useState } from "react";

export default function Counter() {
  const [person, setPerson] = useState({
    name: "aakanksha",
    age: 24,
    phone: 987897,
  });

  function increaseAge() {
    setPerson({ ...person, age: person.age + 1 });
  }
  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.phone}</h1>
      <h1>{person.age}</h1>
      <button onClick={increaseAge}>Increase Age</button>
    </>
  );
}
