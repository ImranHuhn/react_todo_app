import React from "react";
import { GlobalStyle } from "./App.styles";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";

class App extends React.Component {
  state = {
    taskList: [],
    editFormData: null,
    showHome: true,
    showAdd: false,
    allTags: [],
  };

  addAllTags = (data) => {
    let newAllTags = [];
    data.map((el) => {
      newAllTags = newAllTags.concat(el.tags);
    });
    newAllTags = newAllTags.filter(
      (item, index) => newAllTags.indexOf(item) === index
    );
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

  handleAddClick = () => {
    this.setState({ showHome: false, showAdd: true });
  };

  handleBackClick = () => {
    this.setState({ showHome: true, showAdd: false, showEdit: false });
  };

  handleEditClick = (item) => {
    this.setState({ showHome: false, showEdit: true, editFormData: item });
  };

  render() {
    console.log("tags", this.state.allTags);
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
            editFormData={this.state.editFormData}
            getTask={this.editTask}
          />
        )}
        {this.state.showHome && (
          <Home
            allTags={this.state.allTags}
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
