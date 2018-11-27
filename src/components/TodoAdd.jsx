import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoAdd extends Component {
    state = {}
    render() {
        return (
            <div className="main">
                <p className="sign" align="center">Todos</p>
                <input className="un" type="text" placeholder="Todo" />
                <button className="submit" align="">Add</button>
                <TodoList />
            </div>
        );
    }
}

export default TodoAdd;