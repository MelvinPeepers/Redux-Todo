import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../Actions";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newText: ""
    };
  }

  changeHandle = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();

    const { newText } = this.state;
    // Calling the action creator
    this.props.addTodo(newText);
    // resetting the form after it submits
    this.setState({
      newText: ""
    });
    console.log({ newText });
  };

  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    const { newText } = this.state;
    return (
      <div className='form-box'>
        <h1>Melvin's Fantastical Todo List</h1>
        <form onSubmit={this.addTodo}>
          <input
            type='text'
            name='newText'
            value={newText}
            placeholder='Add New Item'
            onChange={this.changeHandle}
          />
          <div className='form-btn'>
            <button className='add-btn' onClick={this.addTodo}>
              Add to List
            </button>
            {/* <button className='clear-btn' onClick={this.clearHandler}>
              Clear Completed
            </button> */}
          </div>
        </form>
        <div>
          {this.props.todoTask.map((todo, index) => (
            <ul key={index}>
              <li
                onClick={() => this.props.toggleTodo(index)}
                className={`todo${index.completed ? " completed" : ""}`}
              >
                {todo.task}
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoTask: state.todoTask
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
  // mapDispatchToProps
)(TodoForm);
