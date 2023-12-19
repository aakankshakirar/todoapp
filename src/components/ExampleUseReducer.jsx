import React, { useReducer, useState } from "react";

export default function ExampleUseReducer() {
  //   const [counter, setCounter] = useState({
  //     count: 0,
  //     title: "HI We are learning use reducer hook",
  //   });

  const initialState = {
    count: 0,
    title: "HI We are learning use reducer hook",
  };

  function reducer(counter, action) {
    if (action.type == "INCREASE") {
      return { ...counter, count: counter.count + 1 };
    }

    if (action.type == "RESET") {
      return { ...counter, count: 0 };
    }

    if (action.type == "DECREASE") {
      return { ...counter, count: counter.count - 1 };
    }

    return counter;
  }

  const handleIncrease = () => {
    dispatch({
      type: "INCREASE",
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: "DECREASE",
    });
  };

  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Application</h1>
      <h2>{counter.title}</h2>
      <h2>{counter.count}</h2>
      <br />
      <button type="button" onClick={handleIncrease} style={{ margin: "1em" }}>
        Increase
      </button>
      <button type="button" style={{ margin: "1em" }} onClick={handleReset}>
        Reset
      </button>
      <button type="button" style={{ margin: "1em" }} onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}
