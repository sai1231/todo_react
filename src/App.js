import React, { Component } from 'react';
import './App.css';



class App extends Component {
    state = {}
    render() {
        return (

            <div className="main">
                <p className="sign" align="center">Todos</p>
                <input className="un" type="text" placeholder="Todo" />
                <button className="submit" align="">Add</button>
                <div>
                    <input className=" sign" type="checkbox" id="test1" />
                    <label for="test1">Red</label>
                </div>

            </div>
        );
    }
}

export default App;
