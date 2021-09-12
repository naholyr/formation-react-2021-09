import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrCounter } from "../actions";
import type { AppState } from "../reducer";
import DumbCounter from "./DumbCounter";

// Container
const ReduxCounter = memo(({ id }) => {
  const value = useSelector((state: AppState) => state.counters.get(id));
  const dispatch = useDispatch();
  const incr = () => dispatch(incrCounter(id));

  return <DumbCounter value={value} incr={incr} />;
});

export default ReduxCounter;
