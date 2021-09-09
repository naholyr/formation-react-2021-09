import propTypes from "prop-types";
import { memo } from "react";
import { useCounter } from "../useCounter";

const Counter = memo(({ initialValue = 0 }) => {
  const [value, incr] = useCounter(initialValue);

  return (
    <>
      <span>Value = {value}</span>
      <button onClick={incr}>⬆</button>
    </>
  );
});

Counter.propTypes = {
  initialValue: propTypes.number,
};

export default Counter;
