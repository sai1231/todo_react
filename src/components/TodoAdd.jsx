import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoAdd extends Component {
  state = {
    todoText: ""
  };

  handleAdd = () => {
    const todoText = document.getElementById("todo").value;
    this.setState({ todoText });
  };
  render() {
    return (
      <div className="main">
        <p className="sign" align="center">
          Todos
        </p>
        <input id="todo" className="un" type="text" placeholder="Todo" />
        <button onClick={this.handleAdd} className="submit" align="">
          Add
        </button>
        <TodoList todoText={this.state.todoText} handleSet={this.handleSet} />
      </div>
    );
  }
}

export default TodoAdd;
