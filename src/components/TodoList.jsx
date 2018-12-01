import React, { Component } from "react";
import TodoItem from "./TodoItem";

const TodoList = props => (
  <div>
    {props.todolist.map(todoItem => (
      <TodoItem
        key={props.todolist.id}
        title={props.todolist.title}
        todoItem={todoItem}
        onCheckboxChange={props.onCheckboxChange}
      />
    ))}
  </div>
);

export default TodoList;
