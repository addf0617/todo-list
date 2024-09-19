import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* const DATA: { name: string; date: number; completed: boolean } = [
  { name: "Create React App", date: Date.now(), completed: false },
  { name: "Learn React", date: Date.now(), completed: false },
  { name: "Create a Todo App", date: Date.now(), completed: false },
]; */

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
