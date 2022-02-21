import { useState } from "react";

export default function Comptador() {
  const [count, setCount] = useState(0);
  const increment = (quantitat) => {
    const nouCount = count + quantitat;
    if (0 <= nouCount && nouCount <= 10) setCount(nouCount);
  };
  return (
    <div>
      Comptador: {count}.<br />
      <button onClick={() => increment(+1)}>+1</button>
      <button onClick={() => increment(-1)}>-1</button>
      <button onClick={() => increment(+5)}>+5</button>
    </div>
  );
}
