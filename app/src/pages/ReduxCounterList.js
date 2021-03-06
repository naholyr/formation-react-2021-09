import { memo, useRef } from "react";
import ReduxCounter from "../Counter/ReduxCounter";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import type { AppState } from "../reducer";

const ReduxCounterList = () => {
  const counterIds = useSelector((state: AppState) => state.counters.keySeq());
  const dispatch = useDispatch();
  const addCounter = (initialValue) =>
    dispatch(actions.addCounter(initialValue));
  const removeCounter = (counterId) =>
    dispatch(actions.removeCounter(counterId));

  const renderCounterListItem = (id) => (
    <li key={id}>
      <ReduxCounter id={id} />
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
      <ul className="counters">{counterIds.map(renderCounterListItem)}</ul>
    </div>
  );
};

export default memo(ReduxCounterList);
