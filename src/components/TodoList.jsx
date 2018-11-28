import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    state = {

    };

    render() {
        const { todolist } = this.props
        return (
            <div>
                {todolist.map(todoItem => (
                    <TodoItem
                        key={todolist.id}
                        title={todolist.title}
                        todoItem={todoItem}
                        onCheckboxChange={this.props.onCheckboxChange}
                    />
                ))}
            </div>
        );
    }
}

export default TodoList;
