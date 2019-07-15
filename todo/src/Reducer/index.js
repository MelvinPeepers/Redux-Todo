import { ADD_TODO } from "../Actions";

// all state values need an initial value
const initialState = {
  todo: [{ task: "Makes lunches", id: 0, completed: false }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todo: [
          ...state.todo,
          {
            task: action.payload,
            completed: false
          }
        ]
      });
    // case TOGGLE_TODO:
    //   return state.map(todo =>
    //     todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //   );
    default:
      return state;
  }
};

export default reducer;
