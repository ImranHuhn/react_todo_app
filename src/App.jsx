import React from "react";
import { GlobalStyle } from "./App.styles";
import TaskForm from "./components/TaskForm";

class App extends React.Component {
  state = null;

  getTask = (task) => {
    this.setState({ state: { ...task } });
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
