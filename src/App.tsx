import React, { Component } from "react";
import "./App.css";
import ListComponent from "./components/list-component";

type Task = {
  name: string;
  date: number;
  completed: boolean;
};

const DATA: Task[] = [
  { name: "Create React App", date: Date.now(), completed: false },
  { name: "Learn React", date: Date.now(), completed: false },
  { name: "Create a Todo App", date: Date.now(), completed: true },
];

//新增這行
type AppState = {
  tasks: Task[];
};

//更改過這行
class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      tasks: DATA,
    };
  }
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
          {this.state.tasks.map((task) => {
            return (
              <ListComponent
                name={task.name}
                date={task.date}
                completed={task.completed}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
