import React, { useState, useEffect } from "react";
import "./styles/style.css";

function Container({ count, setCount }) {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const newCircles = [];
    for (let i = 0; i < count; i++) {
      const randomX = Math.floor(Math.random() * window.innerWidth);
      const randomY = Math.floor(Math.random() * window.innerHeight);
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      newCircles.push({ x: randomX, y: randomY, color: randomColor });
    }
    setCircles(newCircles);
  }, [count]);

  return (
    <div className="container">
        {circles.map((circle, index) => (
          <div
          className="circle"
          key={index}
          style={{ left: circle.x, top: circle.y, backgroundColor: circle.color }}
          ></div>
        ))}
      <button onClick={() => setCount(count + 1)}>Create Circle</button>
      <button onClick={() => setCount(0)} className="clear">Clear</button>
    </div>
  );
}

export default Container;
