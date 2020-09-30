import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleIncre = () => {
    setCounter((counter) => counter + 1);
  };
  return (
    <div>
      Value: {counter} <button onClick={handleIncre}>Increment</button>
    </div>
  );
}

export default Counter;
