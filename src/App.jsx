import React from "react";
import { useState } from "react";
import Forms from "./components/Forms";
import ExampleUseRef from "./components/ExampleUseRef";
import RedundantState from "./components/RedundantState";
import SimpleCounter from "./components/SimpleCounter";
import ItemList from "./components/ItemList";
import ExampleUseEffect from "./components/ExampleUseEffect";
import ExampleOneUseEffect from "./components/ExampleOneUseEffect";
import ExampleUseReducer from "./components/ExampleUseReducer";

export default function App() {
  return (
    <div className="container">
      <ExampleUseReducer />
    </div>
  );
}
