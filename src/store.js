import { combineReducers, createStore } from "redux";
import { counter } from "./pages/ComptadorRedux/counter";
import { ticToe } from "./pages/TicToe";

const reducer = combineReducers({
  counter,
  ticToe,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
