import { ADD_TODO, CLEAR_TODO } from "../Actions";

// all state values need an initial value
const initialState = {
  Todo: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
