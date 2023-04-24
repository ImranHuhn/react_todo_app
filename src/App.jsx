import React from "react";
import moment from "moment";
import { GlobalStyle } from "./App.styles";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";

class App extends React.Component {
  state = {
    taskList: [],
    aTask: null,
    showHome: true,
    showAdd: false,
    showDetails: false,
    allTags: [],
    daysLeft: "",
  };

  addAllTags = (data) => {
    let newAllTags = [];
    data.map((el) => {
      newAllTags = newAllTags.concat(el.tags);
    });
    newAllTags = newAllTags.filter((el, i) => newAllTags.indexOf(el) === i);
    this.setState({ allTags: newAllTags });
  };

  getTask = (task) => {
    const newTaskList = [...this.state.taskList, ...[task]];
    this.setState({ taskList: newTaskList });
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
    this.addAllTags(newTaskList);
  };

  editTask = (task) => {
    const newTaskList = this.state.taskList.map((el) => {
      if (task.id === el.id) {
        el = task;
      }
      return el;
    });
    this.setState({ taskList: newTaskList });
    this.addAllTags(newTaskList);
  };

  handleCheckClick = (item) => {
    const newTaskList = this.state.taskList.map((el) => {
      if (item.id === el.id) {
        el.isComplete = !el.isComplete;
      }
      return el;
    });
    this.setState({ taskList: newTaskList });
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  componentDidMount = () => {
    const data = JSON.parse(localStorage.getItem("taskList")) || [];
    this.setState({ taskList: data });
    this.addAllTags(data);
  };

  handleBackClick = () => {
    this.setState({
      showHome: true,
      showAdd: false,
      showEdit: false,
      showDetails: false,
    });
  };

  handleAddClick = () => {
    this.setState({ showHome: false, showAdd: true });
  };

  handleEditClick = (item) => {
    this.setState({ showHome: false, showEdit: true, aTask: item });
  };

  handleDetailClick = (item) => {
    this.setState({ showHome: false, showDetails: true, aTask: item });
    this.daysLeft(item.dueDate);
  };

  colorManager = (days) => {
    if (days < 1) {
      this.setState({ daysLeft: "255, 64, 52" });
    } else if (days < 4 && days > 0) {
      this.setState({ daysLeft: "254, 126, 8" });
    } else {
      this.setState({ daysLeft: "13, 153, 255" });
    }
  };

  daysLeft = (date) => {
    const dueDate = moment(date);
    const todaysDate = moment();
    const days = dueDate.diff(todaysDate, "days");
    this.colorManager(days);
  };

  render() {
    console.log("$", this.state.aTask);
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
            aTask={this.state.aTask}
            getTask={this.editTask}
          />
        )}
        {this.state.showDetails && (
          <TaskDetails
            // taskList={this.state.taskList}
            aTask={this.state.aTask}
            handleBackClick={this.handleBackClick}
            daysLeft={this.state.daysLeft}
          />
        )}
        {this.state.showHome && (
          <Home
            allTags={this.state.allTags}
            taskList={this.state.taskList}
            handleCheckClick={this.handleCheckClick}
            handleAddClick={this.handleAddClick}
            handleEditClick={this.handleEditClick}
            handleDetailClick={this.handleDetailClick}
          />
        )}
      </div>
    );
  }
}

export default App;
