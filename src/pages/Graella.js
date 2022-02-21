import { useState } from "react";

import "./Graella.css";

const fotos = [
  "https://www.fillmurray.com/400/300",
  "https://www.fillmurray.com/440/330",
  "https://www.fillmurray.com/480/360",
  "https://www.fillmurray.com/520/390",
  "https://www.fillmurray.com/560/420",
];

export default function Graella() {
  const [gran, setGran] = useState(false);

  if (gran)
    return (
      <div className="Graella-zoom">
        <img src={gran} alt="Fill Murray" onClick={() => setGran(false)} />
      </div>
    );

  return (
    <div className="Graella">
      {fotos.map((foto) => (
        <img
          key={foto}
          src={foto}
          alt="Fill Murray"
          onClick={() => setGran(foto)}
        />
      ))}
    </div>
  );
}
