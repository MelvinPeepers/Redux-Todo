import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  // console.log(props);
  return (
    <div className='todo-list'>
      {props.todolist.map(item => {
        return (
          <Todo listItem={item} toggleItem={props.toggleItem} key={item.id} />
        );
      })}
    </div>
  );
}

export default TodoList;
