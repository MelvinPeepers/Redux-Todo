// action types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
// export const CLEAR_TODO = "CLEAR_TODO";

//action creators
export const addTodo = task => {
  //   console.log("add");
  //action
  return {
    type: ADD_TODO,
    payload: task
  };
};

export const toggleTodo = id => {
  //action
  return {
    type: TOGGLE_TODO,
    id: id
  };
};

// export const clearTodo = id => {
//   //action
//   return {
//     type: CLEAR_TODO,
//     payload: id
//   };
// };
