import { useRef, useState } from "react";
import "./App.css";
import Counter from "./Counter/Counter";
import { v4 as uuid } from "uuid";

const App = () => {
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

  /* Uncontrolled input */

  const inputRef = useRef();

  return (
    <div className="App">
      <input type="number" defaultValue={0} ref={inputRef} />
      <button onClick={() => (inputRef.current.value = 0)}>🌀</button>
      <button onClick={() => addCounter(Number(inputRef.current.value))}>
        ➕
      </button>
      <ul className="counters">{counters.map(renderLi)}</ul>
    </div>
  );
  /**/

  /* Uncontrolled input * /

  const [currentValue, setCurrentValue] = useState(0);
  const handleValueChange = (event) => {
    setCurrentValue(Number(event.target.value));
  };

  return (
    <div className="App">
      <input type="number" defaultValue={0} onChange={handleValueChange} />
      <button
        onClick={
          // FIXME: reset by changing input's key
          () => setCurrentValue(0)
        }
      >
        🌀
      </button>
      <button onClick={() => addCounter(currentValue)}>➕</button>
      <ul className="counters">{counters.map(renderLi)}</ul>
    </div>
  );
  /**/

  /* Controlled input * /

  const [currentValue, setCurrentValue] = useState(0);
  const handleValueChange = (event) => {
    setCurrentValue(Number(event.target.value));
  };

  return (
    <div className="App">
      <input type="number" value={currentValue} onChange={handleValueChange} />
      <button onClick={() => setCurrentValue(0)}>🌀</button>
      <button onClick={() => addCounter(currentValue)}>➕</button>
      <ul className="counters">{counters.map(renderLi)}</ul>
    </div>
  );
  /**/
};

export default App;
