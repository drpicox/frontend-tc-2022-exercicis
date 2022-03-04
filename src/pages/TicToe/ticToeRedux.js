const JUGA = "ticToe/JUGA";
export function juga(indexCasella) {
  return { type: JUGA, indexCasella };
}

const REINICIA = "ticToe/REINICIA";
export function reinicia() {
  return { type: REINICIA };
}

const combinacionsGuanyadores = [
  [0, 1],
  [1, 2],
  [2, 3],
];

export function getTaulell(state) {
  return state.ticToe;
}

export function getHiHaGuanyador(state) {
  return !!getCasellesGuanyadores(state);
}

export function getCasellesGuanyadores(state) {
  const taulell = getTaulell(state);
  return combinacionsGuanyadores.find(
    ([a, b]) => taulell[a] && taulell[a] === taulell[b]
  );
}

export function getFiDePartida(state) {
  const taulell = getTaulell(state);
  return taulell.every((peça) => peça !== "") || getHiHaGuanyador(state);
}

export const initialTaulell = ["", "", "", ""];

export function ticToe(state = initialTaulell, action) {
  switch (action.type) {
    case JUGA: {
      const hiHaGuanyador = getHiHaGuanyador({ ticToe: state });
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
