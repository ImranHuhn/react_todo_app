import React from "react";
import { GlobalStyle } from "./App.styles";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";

import moment from "moment";
class App extends React.Component {
  state = { taskList: [], showHome: true, showAdd: false };

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
    console.log("data", data);
    this.setState({ taskList: data });
  };

  componentDidMount = () => {
    const data = JSON.parse(localStorage.getItem("taskList")) || [];
    this.handleData(data);
  };

  handleAddClick = () => {
    console.log("show add");
    this.setState({ showHome: false, showAdd: true });
  };

  handleBackClick = () => {
    this.setState({ showHome: true, showAdd: false, showEdit: false });
  };

  handleEditClick = () => {
    console.log("handleEditClick");
    this.setState({ showHome: false, showEdit: true });
  };

  render() {
    console.log(this.state.taskList);
    return (
      <div style={{ position: "relative" }}>
        <GlobalStyle />
        {this.state.showAdd && (
          <TaskForm
            getTask={this.getTask}
            title="Add New Task"
            backToHome={this.backToHome}
            handleBackClick={this.handleBackClick}
          />
        )}
        {this.state.showEdit && (
          <TaskForm
            title="Edit Task"
            handleBackClick={this.handleBackClick}
            taskList={this.state.taskList}
          />
        )}
        {this.state.showHome && (
          <Home
            taskList={this.state.taskList}
            handleCheckClick={this.handleCheckClick}
            handleAddClick={this.handleAddClick}
            handleEditClick={this.handleEditClick}
          />
        )}
      </div>
    );
  }
}

export default App;
