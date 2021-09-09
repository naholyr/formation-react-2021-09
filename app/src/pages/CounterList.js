import { useRef, useState } from "react";
import Counter from "../Counter/Counter";
import { v4 as uuid } from "uuid";

const CounterList = () => {
  const [counters, setCounters] = useState([]);

  const addCounter = (initialValue) => {
    const id = uuid();
    setCounters([...counters, { id, initialValue }]);
  };

  const removeCounter = (counterId) =>
    setCounters(counters.filter((id) => id !== counterId));

  const renderLi = ({ id, initialValue }) => (
    <li key={id}>
      <Counter initialValue={initialValue} />
      <button onClick={() => removeCounter(id)}>🗑</button>
    </li>
  );

  const inputRef = useRef();

  return (
    <div className="CounterList">
      <h2>Counters</h2>
      <input type="number" defaultValue={0} ref={inputRef} />
      <button onClick={() => (inputRef.current.value = 0)}>🌀</button>
      <button onClick={() => addCounter(Number(inputRef.current.value))}>
        ➕
      </button>
      <ul className="counters">{counters.map(renderLi)}</ul>
    </div>
  );
};

export default CounterList;
