import React, { useState } from "react";
import ShowCounterValue from "./ShowCounterValue";

export default function SimpleCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Increase Counter value</h2>
      <ShowCounterValue counter={counter} />
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter
      </button>
    </div>
  );
}
