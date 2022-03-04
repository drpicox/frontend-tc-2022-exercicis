import {
  getTaulell,
  juga,
  reinicia,
  getHiHaGuanyador,
  getCasellesGuanyadores,
  getFiDePartida,
} from "./ticToeRedux";
import "./TicToe.css";
import { useDispatch, useSelector } from "react-redux";

export function TicToe() {
  const dispatch = useDispatch();
  const taulell = useSelector(getTaulell);
  const hiHaGuanyador = useSelector(getHiHaGuanyador);
  const casellesGuanyadores = useSelector(getCasellesGuanyadores) ?? [];
  const fiDePartida = useSelector(getFiDePartida);
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
