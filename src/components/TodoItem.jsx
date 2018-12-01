import React, { Component } from "react";

const TodoItem = props => (
  <div>
    <input
      className=" sign"
      type="checkbox"
      id={props.todoItem.id}
      onChange={() => props.onCheckboxChange(props.todoItem.id)}
      // checked={props.todoItem.completed}
      defaultChecked={props.todoItem.completed}
    />
    <label htmlFor={props.todoItem.id}>{props.todoItem.title}</label>
  </div>
);

export default TodoItem;
