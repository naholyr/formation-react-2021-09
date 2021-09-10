import { useSelector } from "react-redux";
import type { AppState } from "./reducer";

const NbCounters = () => {
  const count = useSelector((state: AppState) => state.counters.size);
  return <>{count}</>;
};

export default NbCounters;
