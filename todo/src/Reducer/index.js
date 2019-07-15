import { ADD_TODO, TOGGLE_TODO } from "../Actions";

// all state values need an initial value
const initialState = {
  todoTask: [{ task: "Makes lunches", id: 0, completed: false }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const addTodo = {
        task: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todoTask: [...state.todoTask, addTodo]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoTask: state.todoTask.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };

    default:
      return state;
  }
};

export default reducer;
