import React, { Component } from 'react';

class TodoItem extends Component {
    state = {}
    render() {
        return (
            <div>
                <input className=" sign" type="checkbox" id="test2" />
                <label for="test2">Red</label>
            </div>
        );
    }
}

export default TodoItem;