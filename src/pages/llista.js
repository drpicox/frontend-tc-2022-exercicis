import Comptador from "./Comptador";
import { ComptadorRedux } from "./ComptadorRedux";
import { TicToe } from "./TicToe";
import Graella from "./Graella";
import ToggleButton from "./ToggleButton";

const llista = [
  {
    path: "comptador-redux",
    titol: "ComptadorRedux",
    element: <ComptadorRedux />,
  },
  { path: "tic-toe", titol: "Dos en Ratlla", element: <TicToe /> },
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "graella", titol: "Graella de fotos", element: <Graella /> },
  { path: "toggle-button", titol: "Toggle button", element: <ToggleButton /> },
];

export default llista;
