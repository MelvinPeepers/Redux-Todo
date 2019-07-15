import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../Actions";

class TodoForm extends React.Component {
  state = {
    newText: ""
  };

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

  // clearHandler = event => {
  //   event.preventDefault();
  //   this.props.clearCompleted();
  // };

  render() {
    const { newText } = this.state;
    return (
      <div className='form-box'>
        <h1>Melvin's Fantastical Todo List</h1>
        <form>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

// const mapDispatchToProps = state => {
//   return {
//     addTodo: addTodo
//   };
// };

export default connect(
  mapStateToProps,
  { addTodo }
  // mapDispatchToProps
)(TodoForm);
