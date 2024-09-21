import React, { Component } from "react";
import { nanoid } from "nanoid";
import { getTodayDate } from "./utils/getTodayDate";
import "./App.css";
import ListComponent from "./components/list-component";

type Task = {
  id: string;
  name: string;
  date: string;
  completed: boolean;
};

const DATA: Task[] = [
  {
    id: nanoid(),
    name: "Create React App",
    date: getTodayDate(),
    completed: false,
  },
  { id: nanoid(), name: "Learn React", date: getTodayDate(), completed: false },
  {
    id: nanoid(),
    name: "Create a Todo App",
    date: getTodayDate(),
    completed: true,
  },
];

//這裡是給顯示task時篩選完成狀態用的。
const FILTER_MAP = {
  All: () => true,
  Active: (task: Task) => !task.completed,
  Completed: (task: Task) => task.completed,
};

//定義State型別
type AppState = {
  tasks: Task[];
  currentInput: string;
  currentFilter: "All" | "Active" | "Completed";
};

//Component內需要兩個參數（props, state）
//不用props要用state時，props填{}，相反情況不用State，就不填就好
class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      tasks: DATA,
      currentInput: "",
      currentFilter: "All",
    };
  }
  //React中有各種event type，這裡是由onChange事件觸發，所以用ChangEvent
  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      currentInput: e.target.value,
    });
  };
  //新增按鈕
  addButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (!this.state.currentInput) {
      alert("如果要新增待辦事項，請先在輸入框中輸入內容");
      return;
    }
    let newTask: Task = {
      id: nanoid(),
      name: this.state.currentInput,
      date: getTodayDate(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      currentInput: "",
    });
    alert("新增成功");
  };

  //編輯按鈕
  editButtonClickHandler = (id: string): void => {
    if (!this.state.currentInput) {
      alert("如果要更新待辦事項，請先在輸入框中輸入內容");
      return;
    }
    this.setState((preState) => ({
      tasks: preState.tasks.map((task) =>
        task.id === id ? { ...task, name: this.state.currentInput } : task
      ),
      currentInput: "",
    }));
    alert("更新完成");
    console.log(this.state.tasks);
  };

  //刪除按鈕
  deleteButtonClickHandler = (id: string): void => {
    this.setState((preState) => ({
      tasks: preState.tasks.filter((task) => task.id !== id),
    }));
  };

  //更換完成狀態
  toggleCompleted = (id: string): void => {
    this.setState((State) => ({
      //將id符合的task的completed狀態取反，返回新的tasks
      tasks: State.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({
      //型別斷言，語法 <型別>值 或 值as型別，但在React中只可使用後者。
      currentFilter: e.target.value as "All" | "Active" | "Completed",
    });
  };

  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <div className="filter">
          <button onClick={this.addButtonClickHandler}>Add task</button>
          <select
            name="selected"
            id="selected"
            onChange={this.handleSelectChange}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="list-container">
          <input
            type="text"
            name="newTask"
            id="newTask"
            placeholder="輸入你想做的事，或是你想更新的代辦事項，接著按下對應的按鈕"
            value={this.state.currentInput}
            onChange={this.handleInput}
          />

          {this.state.tasks
            .filter(FILTER_MAP[this.state.currentFilter])
            .map((task) => {
              return (
                <ListComponent
                  key={task.id}
                  name={task.name}
                  date={task.date}
                  completed={task.completed}
                  //why
                  toggleCompleted={() => this.toggleCompleted(task.id)}
                  editButtonClickHandler={() =>
                    this.editButtonClickHandler(task.id)
                  }
                  deleteButtonClickHandler={() =>
                    this.deleteButtonClickHandler(task.id)
                  }
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
