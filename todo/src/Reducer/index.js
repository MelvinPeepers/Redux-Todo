import { ADD_TODO, TOGGLE_TODO } from "../Actions";

// all state values need an initial value
const initialState = {
  todoTask: [{ task: "Makes lunches", id: 0, completed: false }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todoTask: [
          ...state.todoTask,
          {
            task: action.payload,
            completed: false
          }
        ]
      });
    case TOGGLE_TODO:
      return {
        ...state,
        todoTask: state.todoTask.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
};

export default reducer;
