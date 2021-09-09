import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrCounter } from "../actions";

const ReduxCounter = memo(({ id }) => {
  const value = useSelector((state) => state.counters.values[id]);
  const dispatch = useDispatch();
  const incr = () => dispatch(incrCounter(id));

  return (
    <>
      <span>Value = {value}</span>
      <button onClick={incr}>⬆</button>
    </>
  );
});

export default ReduxCounter;
