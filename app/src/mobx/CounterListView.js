import { useRef } from "react";
import { observer } from "mobx-react-lite";
import CounterView from "./CounterView";
import { countersListStore } from "./CountersStore";

const CounterListView = observer(() => {
  const renderCounterListItem = (counter) => (
    <li key={counter.id}>
      <CounterView counter={counter} />
      <button onClick={() => countersListStore.remove(counter.id)}>🗑</button>
    </li>
  );

  const inputRef = useRef();

  return (
    <div className="CounterList">
      <h2>Counters</h2>
      <input type="number" defaultValue={0} ref={inputRef} />
      <button onClick={() => (inputRef.current.value = 0)}>🌀</button>
      <button
        onClick={() => countersListStore.add(Number(inputRef.current.value))}
      >
        ➕
      </button>
      <ul className="counters">
        {countersListStore.counters.map(renderCounterListItem)}
      </ul>
    </div>
  );
});

export default CounterListView;
