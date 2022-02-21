import Comptador from "./Comptador";
import Graella from "./Graella";
import ToggleButton from "./ToggleButton";

const llista = [
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "graella", titol: "Graella de fotos", element: <Graella /> },
  { path: "toggle-button", titol: "Toggle button", element: <ToggleButton /> },
];

export default llista;
