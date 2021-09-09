import { useSelector } from "react-redux";

const NbCounters = () => {
  const count = useSelector((state) => Object.keys(state.counters).length);
  return <>{count}</>;
};

export default NbCounters;
