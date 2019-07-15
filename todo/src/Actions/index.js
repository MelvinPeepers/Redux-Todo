// action types
export const ADD_TODO = "ADD_TODO";
// export const TOGGLE_TODO = "TOGGLE_TODO";
// export const CLEAR_TODO = "CLEAR_TODO";

//action creators
export const addTodo = task => {
  //   console.log("add");
  //action
  return {
    type: ADD_TODO,
    task: task,
    id: Date.now(),
    completed: false
  };
};

// export const toggleTodo = id => {
//   //action
//   return {
//     type: TOGGLE_TODO,
//     id: id
//   };
// };

// export const clearTodo = () => {
//   //action
//   return {
//     type: CLEAR_TODO
//   };
// };
