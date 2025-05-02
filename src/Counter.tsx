import React, { useState } from "react";
import "./styles.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter-container">
      <h2>Счётчик: {count}</h2>
      <button className="counter-button" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
