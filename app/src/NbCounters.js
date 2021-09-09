import { useSelector } from "react-redux";

const NbCounters = () => {
  const count = useSelector((state) => state.counters.ids.length);
  return <>{count}</>;
};

export default NbCounters;
