import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import "./App.css";

const todolist = [
  {
    task: "Make lunches",
    id: Date.now(),
    completed: false
  },
  {
    task: "Do Dishes",
    id: Date.now() + 1,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentToDoList: todolist
    };
  }

  addItem = newItem => {
    const newTodoItem = {
      task: newItem,
      id: Date.now(),
      completed: false
    };

    this.setState({
      currentToDoList: [...this.state.currentToDoList, newTodoItem]
    });
  };

  toggleItem = id => {
    const newList = this.state.currentToDoList.map(item => {
      if (item.id === id) {
        const newObj = {
          ...item,
          completed: !item.completed
        };
        return newObj;
      } else {
        return item;
      }
    });

    this.setState({ currentToDoList: newList });
  };

  clearComp = event => {
    if (this.state.currentToDoList.length >= 0) {
      const newList = this.state.currentToDoList.filter(
        item => item.completed !== true
      );
      this.setState({
        currentToDoList: newList.filter(item => item.task !== "")
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h1>Melvin's Super Fantastical Fun List!</h1>
        </div>
        <div className='border-line'>
          <span />
        </div>
        <div className='toDo-List'>
          <TodoList
            todolist={this.state.currentToDoList}
            toggleItem={this.toggleItem}
          />
        </div>
        <div className='toDo-Form'>
          <TodoForm addNewItem={this.addItem} clearCompleted={this.clearComp} />
        </div>
      </div>
    );
  }
}
export default App;
