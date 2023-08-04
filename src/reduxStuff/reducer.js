import { DECREMENT, INCREMENT, SET } from "./action";

const initState = {
  count: 10,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        count: state.count - 1,
      };
    }
    case SET: {
      return {
        count: parseInt(action.payload, 10),
      };
    }
    default: {
      return state;
    }
  }
};
