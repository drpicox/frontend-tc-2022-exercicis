import { createSelector } from "reselect";

const combinacionsGuanyadores = [
  [0, 1],
  [1, 2],
  [2, 3],
];

export function selectTaulell(state) {
  return state.ticToe;
}

export function selectHiHaGuanyador(state) {
  return !!selectCasellesGuanyadores(state);
}

export const selectCasellesGuanyadores = createSelector(
  selectTaulell,
  (taulell) =>
    combinacionsGuanyadores.find(
      ([a, b]) => taulell[a] && taulell[a] === taulell[b]
    )
);

export function selectFiDePartida(state) {
  const taulell = selectTaulell(state);
  return taulell.every((peça) => peça !== "") || selectHiHaGuanyador(state);
}
