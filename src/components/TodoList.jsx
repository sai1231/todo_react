import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";

class TodoList extends Component {
  state = {
    todolist: [
      { id: 1, title: "delectus aut autem", completed: false },
      { id: 2, title: "skldfjio asdkfjh ", completed: true }
    ]
  };

  render() {
    return (
      <div>
        {this.state.todolist.map(todoItem => (
          <TodoItem
            key={this.state.todolist.id}
            title={this.state.todolist.title}
            todoItem={todoItem}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
