import { applyMiddleware, compose, createStore } from "redux";
import { initialState, reducer } from "./reducer";

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
