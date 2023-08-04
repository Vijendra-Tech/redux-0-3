import {
  applyMiddleware,
  combineReducers,
  compose,
  bindActionCreators,
  createStore,
} from "redux";

const reducer = (state) => state;

const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = Math.round(end - start);
    console.log(diff);
    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};
//adding Middleware
const logMiddleWare = (store) => (next) => (action) => {
  console.log("old State ", store.getState(), action);
  next(action);
  console.log("new  State ", store.getState(), action);
};
const monitorMiddleWare = (store) => (next) => (action) => {
  const start = performance.now();
  next(action);
  const end = performance.now();
  const diff = Math.round(end - start);
  console.log(diff);
};

const store = createStore(
  reducer,
  applyMiddleware(logMiddleWare, monitorMiddleWare)
);

store.dispatch({ type: "Hello" });
