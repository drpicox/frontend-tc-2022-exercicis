export const JUGA = "ticToe/JUGA";
export function juga(indexCasella) {
  return { type: JUGA, indexCasella };
}

export const REINICIA = "ticToe/REINICIA";
export function reinicia() {
  return { type: REINICIA };
}
