import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import ReduxCounter from "./Counter/ReduxCounter";
import { initialState } from "./reducer";
import { initStore } from "./store";

const renderWithContext = (element, state = undefined, url = undefined) => {
  const store = initStore(state);
  return render(
    <React.StrictMode>
      <Provider store={store}>
        {/*<BrowserRouter> ← voir createMemoryHistory */}
        {element}
        {/*</BrowserRouter>*/}
      </Provider>
    </React.StrictMode>
  );
};

describe("ReduxCounter", () => {
  test("renders", () => {
    const state = {
      ...initialState,
      counters: initialState.counters.set("toto", 42),
    };
    renderWithContext(<ReduxCounter id="toto" />, state);
    const spanElement = screen.getByText(/42/i);
    expect(spanElement).toBeInTheDocument();
  });

  test("increment", () => {
    const state = {
      ...initialState,
      counters: initialState.counters.set("toto", 42),
    };
    renderWithContext(<ReduxCounter id="toto" />, state);
    const button = screen.getByText("⬆");
    fireEvent.click(button);
    const spanElement = screen.getByText(/43/i);
    expect(spanElement).toBeInTheDocument();
  });
});
