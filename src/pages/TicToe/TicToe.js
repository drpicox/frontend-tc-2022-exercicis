import {
  selectTaulell,
  selectHiHaGuanyador,
  selectCasellesGuanyadores,
  selectFiDePartida,
} from "./selectors";
import { juga, reinicia } from "./actions";

import "./TicToe.css";
import { useDispatch, useSelector } from "react-redux";

export function TicToe() {
  const dispatch = useDispatch();
  const taulell = useSelector(selectTaulell);
  const hiHaGuanyador = useSelector(selectHiHaGuanyador);
  const casellesGuanyadores = useSelector(selectCasellesGuanyadores) ?? [];
  const fiDePartida = useSelector(selectFiDePartida);
  const [casellaGuanyadoraA] = casellesGuanyadores;

  return (
    <div>
      <h1>Tic Toe!</h1>
      <div className="TicToe-board">
        {taulell.map((peça, indexCasella) => (
          <button
            key={indexCasella}
            className={
              "TicToe-casella" +
              (casellesGuanyadores.includes(indexCasella)
                ? " TicToe-casella--winner"
                : "")
            }
            onClick={() => dispatch(juga(indexCasella))}
          >
            {peça}
          </button>
        ))}
      </div>
      {hiHaGuanyador && (
        <div>
          <br />
          Guanya el jugador {taulell[casellaGuanyadoraA]}
        </div>
      )}
      {fiDePartida && (
        <div>
          <br />
          <button onClick={() => dispatch(reinicia())}>Torna a començar</button>
        </div>
      )}
    </div>
  );
}
