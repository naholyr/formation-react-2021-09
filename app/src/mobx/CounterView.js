import { observer } from "mobx-react-lite";

const CounterView = observer(({ counter }) => {
  return (
    <>
      <span>Value = {counter.value}</span>
      <button onClick={() => counter.incr()}>⬆</button>
    </>
  );
});

export default CounterView;
