import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [value, setValue] = useState(() => initialValue);
  const incr = () => setValue(value + 1);
  return [value, incr];
};
