"use client";
import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount(count + 1);
    else {
      alert("You've reached the max count!");
    }
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
