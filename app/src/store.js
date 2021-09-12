import { applyMiddleware, compose, createStore } from "redux";
import { initialState, reducer } from "./reducer";

const logAction = (store) => (next) => (action) => {
  // store.getState()
  // store.dispatch()
  console.log(action);
  next(action);
};

const userSessionMiddleware = (store) => (next) => (action) => {
  action.meta = action.meta ?? {};
  if (localStorage.getItem("user-id")) {
    action.meta.userId = "toto";
  } else {
    action.meta.userId = null;
  }
  next(action);
};

const documentTitleMiddleware = (store) => (next) => (action) => {
  if (action.documentTitle) {
    document.title = action.documentTitle;
  }
  next(action);
};

const middlewares = [userSessionMiddleware, logAction, documentTitleMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
