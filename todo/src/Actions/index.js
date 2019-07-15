// action types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

let plusTodo = 0;
//action creators
export const addTodo = task => {
  //   console.log("add");
  //action
  return {
    type: ADD_TODO,
    id: plusTodo++,
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
