import { useState } from "react";

export default function Counter() {
  const [counter, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 2);
  };

  return <button onClick={increment}>Count = {counter}</button>;
}
