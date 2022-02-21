import { useState } from "react";

/*
Mostrar 1 botó
En prémer el botó, canviar el color del botó
En prémer de nou el botó, treure el color del botó
Següents clics repliquen 2,3,2,3,2,3...
Mostrar un text a sota dient si està premut o no
*/

export default function ToggleButton() {
  const [color, setColor] = useState("red");
  const estaPremut = color !== "red";

  const toggle = () => {
    if (color === "red") setColor("cyan");
    else setColor("red");
  };

  return (
    <>
      <button style={{ background: color }} onClick={toggle}>
        Toggle Me
      </button>
      {estaPremut ? <p>Esta premut</p> : <p>No esta premut</p>}
    </>
  );
}
