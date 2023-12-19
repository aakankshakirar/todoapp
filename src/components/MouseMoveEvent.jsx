import React, { useEffect, useState } from "react";

export default function MouseMoveEvent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseChange = (e) => {
    console.log(e.clientX, e.clientY);
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseChange);

    return () => {
      document.removeEventListener("mousemove", handleMouseChange);
    };
  });

  return (
    <div>
      <h1>Mouse Move Event</h1>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </div>
  );
}
