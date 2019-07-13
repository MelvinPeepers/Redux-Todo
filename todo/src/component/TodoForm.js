import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log("LIST ITEM PROPS", props)
    this.state = {
      listItem: ""
    };
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({ listItem: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    // console.log("LIST ITEM PROPS", this.props)
    this.props.addNewItem(this.state.listItem);
  };

  clearHandler = event => {
    event.preventDefault();
    this.props.clearCompleted();
  };

  render() {
    const { listItem } = this.state;
    return (
      <div className='form-box'>
        <form onSubmit={this.submitHandler}>
          <input
            value={listItem}
            placeholder='Add New Item'
            type='text'
            onChange={this.changeHandler}
          />
          <div className='form-btn'>
            <button className='add-btn'>Add to List</button>
            <button className='clear-btn' onClick={this.clearHandler}>
              Clear Completed
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoForm;
