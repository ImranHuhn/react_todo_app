import React from "react";
import { GlobalStyle } from "./App.styles";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";

import moment from "moment";
class App extends React.Component {
  state = { taskList: [] };

  getTask = (task) => {
    const newTaskList = [...this.state.taskList, ...[task]];
    this.setState({ taskList: newTaskList });
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  handleCheckClick = (item) => {
    console.log("clicked check");
    const newTaskList = this.state.taskList.map((el) => {
      if (item.id === el.id) {
        el.isComplete = !el.isComplete;
      }
      return el;
    });
    this.setState({ taskList: newTaskList });
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  handleData = (data) => {
    console.log("data", data)
    this.setState({taskList: data})
  }

  componentDidMount = () => {
    const data = JSON.parse(localStorage.getItem("taskList")) || []
    this.handleData(data)
  }

  render() {
    console.log(this.state.taskList);
    return (
      <>
        <GlobalStyle />
        <TaskForm getTask={this.getTask} title="Add New Task" />
        <Home
          taskList={this.state.taskList}
          handleCheckClick={this.handleCheckClick}
        />
        {/* <TaskForm title="Edit Task" /> */}
      </>
    );
  }
}

export default App;
