import React from "react";
import { GlobalStyle } from "./App.styles";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";

class App extends React.Component {
  state = {
    taskList: [],
    editFormData: null,
    showHome: true,
    showAdd: false,
    showDetails: false,
    allTags: [],
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
    this.setState({ showHome: false, showEdit: true, editFormData: item });
  };

  handleDetailClick = () => {
    this.setState({ showHome: false, showDetails: true });
  };

  render() {
    console.log("$", this.state);
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
        {this.state.showDetails && (
          <TaskDetails
            taskList={this.state.taskList}
            handleBackClick={this.handleBackClick}
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
