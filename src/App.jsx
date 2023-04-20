import React from "react";
import { GlobalStyle } from "./App.styles";
import TaskForm from "./components/TaskForm";

class App extends React.Component {
  state = { taskList: [] };

  getTask = (task) => {
    const newTaskList = [...this.state.taskList, ...[task]]
    this.setState({ taskList: newTaskList });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <GlobalStyle />
        <TaskForm getTask={this.getTask} title="Add New Task" />
        {/* <TaskForm title="Edit Task" /> */}
      </>
    );
  }
}

export default App;
