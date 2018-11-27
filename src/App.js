import React, { Component } from 'react';
import './App.css';
import TodoAdd from './components/TodoAdd';



class App extends Component {
    state = {

        todolist: {
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        }
    }
    render() {
        return (

            <TodoAdd

            />
        );
    }
}

export default App;
