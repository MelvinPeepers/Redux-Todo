import React from "react";

function Todo(props) {
  // console.log("ITEM PROPS:", props)

  const clickHandler = () => {
    props.toggleItem(props.listItem.id);
  };
  return (
    <div
      className={`item${props.listItem.completed ? " completed" : ""}`}
      onClick={clickHandler}
    >
      <p>{props.listItem.task}</p>
    </div>
  );
}

export default Todo;
