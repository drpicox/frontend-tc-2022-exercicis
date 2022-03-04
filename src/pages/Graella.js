import { useState } from "react";

import "./Graella.css";

const fotos = [
  "/graella/pic0.jpg",
  "/graella/pic1.jpg",
  "/graella/pic2.jpg",
  "/graella/pic3.jpg",
  "/graella/pic4.jpg",
  "/graella/pic5.jpg",
].map((f) => process.env.PUBLIC_URL + f);

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
