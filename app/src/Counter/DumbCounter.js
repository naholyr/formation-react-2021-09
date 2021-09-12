import { memo } from "react";

// Component (controlled)
const DumbCounter = memo(({ incr, value }) => {
  return (
    <>
      <span data-test-id="value">Value = {value}</span>
      <button onClick={incr}>⬆</button>
    </>
  );
});

export default DumbCounter;
