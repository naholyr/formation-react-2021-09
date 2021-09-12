import { render, screen } from "@testing-library/react";
import HomePage from "./pages/Home";

test("renders HomePage", () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Coucou/i);
  expect(linkElement).toBeInTheDocument();
});
