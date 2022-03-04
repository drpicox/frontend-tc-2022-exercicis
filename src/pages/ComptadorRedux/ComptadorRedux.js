import { useDispatch, useSelector } from "react-redux";
import { getCount, increment } from "./counter";

export function ComptadorRedux() {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  return (
    <div>
      Comptador: {count}.<br />
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
      <button onClick={() => dispatch(increment(+5))}>+5</button>
    </div>
  );
}
