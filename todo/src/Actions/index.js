// action types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

//action creators
export const addTodo = task => {
  //   console.log("add");
  //action
  return {
    type: ADD_TODO,
    id: Date.now(),
    payload: task
  };
};

export const toggleTodo = id => {
  //action
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};
