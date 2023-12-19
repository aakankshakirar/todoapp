import React, { useState } from "react";

export default function ItemList() {
  const [items, setItem] = useState([
    { name: "Item One", id: 1 },
    { name: "Item Two", id: 2 },
    { name: "Item Three", id: 3 },
    { name: "Item Four", id: 4 },
    { name: "Item Five", id: 5 },
  ]);

  const handleAddNewItem = () => {
    const newItem = {
      name: " Recently Added",
      id: crypto.randomUUID,
    };

    setItem((prevState) => [...prevState, newItem]);
  };

  return (
    <div>
      <h1>
        Items List <span style={{ color: "blue" }}>React App</span> heck Now
      </h1>

      {items.map((row) => {
        return <h4 key={row.id}>{row.name}</h4>;
      })}

      <button type="button" onClick={handleAddNewItem}>
        Add New Item
      </button>
    </div>
  );
}
