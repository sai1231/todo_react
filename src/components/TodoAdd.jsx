import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

class TodoAdd extends Component {
  state = {
    todoText: "",

    todolist: []
  };

  getRandomNumber() {
    return Math.floor(Math.random() * Math.floor(500000));
  }

  handleClearComplete = () => {
    // const todolist = { ...this.state.todolist };
    const todolist = this.state.todolist.filter(
      todo => todo.completed === false
    );
    console.log(todolist);
    this.setState({ todolist });
  };

  handleClear = () => {
    const todolist = [];

    this.setState({ todolist });
  };

  handleAdd = () => {
    const todoText = document.getElementById("todo").value;
    this.setState({ todoText });
    this.state.todolist.push({
      id: this.getRandomNumber(),
      title: todoText,
      completed: false
    });
    // console.log(this.state.todolist)
    document.getElementById("todo").value = "";
  };

  onCheckboxChange = todoItemID => {
    // console.log(this);
    const todolist = { ...this.state.todolist };
    const index = this.state.todolist.findIndex(c => c.id === todoItemID);

    // console.log(index);
    if (todolist[index].completed) {
      todolist[index].completed = false;
    } else {
      todolist[index].completed = true;
    }

    // console.log(todolist[index].completed);
    this.setState(todolist);
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      if (document.getElementById("todo").value !== "") {
        this.handleAdd();
      }
    }
  };

  totalCount() {
    return this.state.todolist.length;
  }

  completedCount() {
    return this.state.todolist.filter(c => c.completed === true).length;
  }

  clear;
  render() {
    const { todolist, todoText } = this.state;
    return (
      <div className="main">
        <p className="sign" align="center">
          Todos
        </p>
        <input
          onKeyPress={this.handleKeyPress}
          id="todo"
          className="un"
          type="text"
          placeholder="Todo"
        />

        <TodoList
          key={todolist}
          todolist={todolist}
          todoText={todoText}
          handleSet={this.handleSet}
          onCheckboxChange={this.onCheckboxChange}
        />
        <TodoFooter
          onClickClearComplete={this.handleClearComplete}
          onClickClear={this.handleClear}
          totalCount={this.totalCount()}
          completedCount={this.completedCount()}
        />
      </div>
    );
  }
}

export default TodoAdd;
