"use client";

import { useState } from "react";

type CounterProps = {
  title: string;
  initialValue: number;
};

export default function Counter({
  title,
  initialValue,
}: CounterProps) {
  // Stores the current counter value
  const [count, setCount] = useState(initialValue);

  // Updates the counter based on button clicks
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(initialValue);
  };

  return (
    <section>
      <h2>{title}</h2>

      <h3>Count: {count}</h3>

      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={increaseCount}>Increase</button>

      {/* Displays a message based on the counter value */}
      {count > 0 && <p>The counter is positive.</p>}
      {count === 0 && <p>The counter is zero.</p>}
      {count < 0 && <p>The counter is negative.</p>}
    </section>
  );
}