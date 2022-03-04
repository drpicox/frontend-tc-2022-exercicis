import { combineReducers, createStore } from "redux";
import { counter } from "./pages/ComptadorRedux/counter";

const reducer = combineReducers({
  counter,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
