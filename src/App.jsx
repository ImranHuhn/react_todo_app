import React from "react";
import moment from "moment";
import { GlobalStyle, Container } from "./App.styles";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";

class App extends React.Component {
  state = {
    taskList: [],
    allTags: [],
    aTask: null,
    showHome: true,
    showAdd: false,
    showDetails: false,
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

  getTask = (item) => {
    const newTaskList = [...this.state.taskList, ...[item]];
    this.setState({ taskList: newTaskList });
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
    this.addAllTags(newTaskList);
  };

  editTask = (item) => {
    const newTaskList = this.state.taskList.map((el) => {
      if (item.id === el.id) {
        el = item;
      }
      return el;
    });
    this.setState({ taskList: newTaskList });
    this.addAllTags(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  // toggles card/task
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

  // checks/unchecks item in checklist that is in a task
  completedChecklist = (item) => {
    const checklist = this.state.aTask.checklist.map((el) => {
      if (el.id === item.id) {
        el.isComplete = !item.isComplete;
      }
      return el;
    });
    const newTask = { ...this.state.aTask, checklist };
    this.setState({ aTask: newTask });
    this.editTask(newTask);
    this.percentage(checklist);
  };

  // unchecks all items in checklist that is in a task
  clearChecklist = () => {
    const checklist = this.state.aTask.checklist.map((el) => {
      el.isComplete = false;
      return el;
    });
    const newTask = { ...this.state.aTask, checklist };
    this.setState({ aTask: newTask });
    this.editTask(newTask);
    this.percentage(checklist);
  };

  percentage = (items) => {
    const checkedItem = items
      .map((item) => item.isComplete)
      .filter((el) => {
        return el === true;
      }).length;
    const totalItems = items.length;
    const percent = Math.trunc((checkedItem / totalItems) * 100);
    const newTask = { ...this.state.aTask, percent };
    this.setState({ aTask: newTask });
    this.editTask(newTask);
  };

  // deletes an entire task
  deleteTask = (item) => {
    const newTaskList = this.state.taskList.filter((el) => el.id !== item.id);
    this.setState({ taskList: newTaskList });
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
    this.backToHome();
  };

  componentDidMount = () => {
    const data = JSON.parse(localStorage.getItem("taskList")) || [];
    this.setState({ taskList: data });
    this.addAllTags(data);
  };

  backToHome = () => {
    this.setState({
      showHome: true,
      showAdd: false,
      showEdit: false,
      showDetails: false,
    });
  };

  // click on add button in home page and add-task page appears
  handleAddClick = () => {
    this.setState({ showHome: false, showAdd: true });
  };

  // edit form appears, takes unedited data to state and sent to edit function
  handleEditClick = (item) => {
    this.setState({
      showHome: false,
      showEdit: true,
      showDetails: false,
      aTask: item,
    });
    this.editTask(item);
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
    console.log("$", this.state);

    return (
      <Container>
        <GlobalStyle />
        {this.state.showAdd && (
          <TaskForm
            getTask={this.getTask}
            title="Add New Task"
            handleBackClick={this.backToHome}
          />
        )}
        {this.state.showEdit && (
          <TaskForm
            title="Edit Task"
            handleBackClick={this.backToHome}
            aTask={this.state.aTask}
            getTask={this.editTask}
          />
        )}
        {this.state.showDetails && (
          <TaskDetails
            taskList={this.state.taskList}
            aTask={this.state.aTask}
            handleBackClick={this.backToHome}
            daysLeft={this.state.daysLeft}
            handleEditClick={this.handleEditClick}
            backToDetails={this.backToDetails}
            completedChecklist={this.completedChecklist}
            clearChecklist={this.clearChecklist}
            deleteTask={this.deleteTask}
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
      </Container>
    );
  }
}

export default App;
