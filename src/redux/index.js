import {
  applyMiddleware,
  combineReducers,
  compose,
  bindActionCreators,
  createStore,
} from "redux";

// const makeloud = (string) => string.toUpperCase();
// const threeT = (string) => string.repeat(3);
// const embolden = (string) => string.bold();

// const allThree = compose(embolden, threeT, makeloud);
// console.log(allThree("Rana"));

const initalState = { value: 0 };

const incrementaction = { type: "INCREMENT" };

const increment = () => ({ type: "INCREMENT" });
const add = (amount) => ({ type: "ADD", payload: amount });

const reducer = (state = initalState, action) => {
  if (action.type === "INCREMENT") {
    return {
      value: state.value + 1,
    };
  }
  if (action.type === "ADD") {
    return {
      value: state.value + action.payload,
    };
  }
  return state;
};

const store = createStore(reducer);

const subscriber = () => console.log("SUBSCRIBER", store.getState());
const actions = bindActionCreators({ increment, add }, store.dispatch);
actions.increment();

// store.subscribe(subscriber);

// console.log(store);
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());

console.log(store.getState());
