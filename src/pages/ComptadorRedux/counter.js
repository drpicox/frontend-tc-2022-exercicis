const INCREMENT = "INCREMENT";
export function increment(amount) {
  return { type: INCREMENT, amount };
}

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: {
      const sumaFinal = state + action.amount;
      if (0 <= sumaFinal && sumaFinal <= 10) return sumaFinal;
      return state;
    }
    default:
      return state;
  }
};

export function getCount(state) {
  return state.counter;
}
