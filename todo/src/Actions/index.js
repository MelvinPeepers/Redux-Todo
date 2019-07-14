export const ADD_TODO = "ADD_TODO";
export const CLEAR_TODO = "CLEAR_TODO"; // action types

//action creators
export function addTodo(task, id, completed) {
  //action
  return {
    type: ADD_TODO,
    payload: {
      task,
      id,
      completed
    }
  };
}

export function clearTodo(task, id, completed) {
  //action
  return {
    type: ADD_TODO,
    payload: {
      task,
      id,
      completed
    }
  };
}
