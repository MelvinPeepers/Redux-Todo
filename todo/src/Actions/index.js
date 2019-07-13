export const ADD_TODO = "ADD_TODO";
export const CLEAR_TODO = "CLEAR_TODO"; // action types

//action creators
export const addTodo = newItem => {
  return {
    type: ADD_TODO,
    payload: newItem,
    id: Date.now(),
    completed: false
  };
};
