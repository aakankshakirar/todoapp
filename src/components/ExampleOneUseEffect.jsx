import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import MouseMoveEvent from "./MouseMoveEvent";

export default function ExampleOneUseEffect() {
  console.log("Component rendered");

  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(true);

  useEffect(() => {
    console.log("use effect called");

    // clean up function
    return function () {
      console.log("Clean up method is called");
    };
  }, [showCounter]);

  return (
    <div>
      <h1>This is another example of useeffect</h1>
      <label htmlFor="showCounter">Show Counter Component</label>
      <input
        type="checkbox"
        name="showCounter"
        id="showCounter"
        checked={showCounter}
        onChange={() => setShowCounter(!showCounter)}
      />
      {showCounter && <MouseMoveEvent />}
    </div>
  );
}
