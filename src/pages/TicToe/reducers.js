import { JUGA, REINICIA } from "./actions";
import { selectHiHaGuanyador } from "./selectors";

export const initialTaulell = ["", "", "", ""];

export function ticToe(state = initialTaulell, action) {
  switch (action.type) {
    case JUGA: {
      const hiHaGuanyador = selectHiHaGuanyador({ ticToe: state });
      if (hiHaGuanyador) return state;

      const jugadorActual = calculaJugadorActual(state);
      const indexCasella = action.indexCasella;
      if (state[indexCasella]) return state;

      const copy = [...state];
      copy[indexCasella] = jugadorActual;
      return copy;
    }
    case REINICIA:
      return initialTaulell;
    default:
      return state;
  }
}

function calculaJugadorActual(taulell) {
  const numeroDeJugades = taulell.filter((peça) => peça !== "").length;
  if (numeroDeJugades % 2 === 0) return "X";
  return "O";
}
