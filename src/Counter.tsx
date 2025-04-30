import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", fontFamily: "Roboto Condensed, sans-serif" }}>
      <h2>Счётчик: {count}</h2>
      <button onClick={() => setCount(count + 1)} style={{width: 50}}>+</button>
      <button onClick={() => setCount(count - 1)} style={{width: 50}}>-</button>
    </div>
  );
};

export default Counter;
