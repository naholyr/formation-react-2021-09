import { fireEvent, render, screen } from "@testing-library/react";
import DumbCounter from "./Counter/DumbCounter";

describe("DumbCounter", () => {
  test("renders", () => {
    render(<DumbCounter incr={() => {}} value={42} />);
    const spanElement = screen.getByText(/42/i);
    expect(spanElement).toBeInTheDocument();
  });

  test("increment", () => {
    const incr = jest.fn();
    render(<DumbCounter incr={incr} value={42} />);
    const button = screen.getByText("⬆");
    fireEvent.click(button);
    expect(incr).toHaveBeenCalled();
  });
});
