import React, { Component } from "react";

class TodoItem extends Component {
  state = {};

  render() {
    return (
      <div>
        <input className=" sign" type="checkbox" id="test2" />
        <label htmlFor="test2"> {this.props.todoItem.title}</label>
      </div>
    );
  }
}

export default TodoItem;
