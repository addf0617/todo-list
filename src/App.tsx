import React, { Component } from "react";
import "./App.css";
import ListComponent from "./components/list-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <div className="filter">
          <button>Add task</button>
          <select name="selected" id="selected">
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="list-container">
          <ListComponent />
        </div>
      </div>
    );
  }
}

export default App;
