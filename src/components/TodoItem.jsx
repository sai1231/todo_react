import React, { Component } from "react";

class TodoItem extends Component {
    state = {};

    render() {
        return (
            <div >
                <input
                    className=" sign"
                    type="checkbox"
                    id={this.props.todoItem.id}
                    onChange={() => this.props.onCheckboxChange(this.props.todoItem.id)}
                    // checked={this.props.todoItem.completed}
                    defaultChecked={this.props.todoItem.completed}
                />
                <label
                    htmlFor={this.props.todoItem.id}>
                    {this.props.todoItem.title}
                </label>
            </div>
        );
    }


}

export default TodoItem;
