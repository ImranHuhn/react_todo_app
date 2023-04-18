import React from "react";
import RadioButtons from "../RadioButtons";
import DateTime from "../DateTime";
import TextInput from "../TextInput";
import { ArrowIcon } from "../IconComponent";
import {
  Container,
  HeaderWrapper,
  Header,
  ArrowButtonWrapper,
  ArrowButton,
  TaskNameWrapper,
  DateTimeWrapper,
  CheckListWrapper,
  TagsWrapper,
  SaveButtonWrapper,
  SaveButton,
} from "./TaskForm.styles";

class TaskForm extends React.Component {
  state = {
    id: crypto.randomUUID,
    taskName: "",
    priority: 0,
    complexity: 0,
    dueDate: "",
    dueTime: "",
    checklist: [],
    tags: [],
  };

  getName = (name) => {
    this.setState({ taskName: name });
  };

  getPriority = (number) => {
    this.setState({ priority: number });
  };

  getComplexity = (number) => {
    this.setState({ complexity: number });
  };

  getDate = (date) => {
    this.setState({ dueDate: date });
  };

  getTime = (time) => {
    this.setState({ dueTime: time });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const aTask = this.state;
    this.props.getTask(aTask);
    this.setState({
      taskName: "",
      priority: 0,
      complexity: 0,
      dueDate: "",
      dueTime: "",
      checklist: [],
      tags: [],
    });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <HeaderWrapper>
            <Header>
              <ArrowButtonWrapper>
                <ArrowButton>
                  <ArrowIcon />
                </ArrowButton>
              </ArrowButtonWrapper>
              <h1>{this.props.title}</h1>
            </Header>
            <div>
              <TaskNameWrapper>
                <TextInput
                  title="Task Name"
                  placeholder="Name of task..."
                  inputType="task"
                  getText={this.getName}
                />
              </TaskNameWrapper>
              <RadioButtons inputType="Priority" getNumber={this.getPriority} />
              <RadioButtons
                inputType="Complexity"
                getNumber={this.getComplexity}
              />
              <DateTimeWrapper>
                <DateTime
                  title="Due Date"
                  type="date"
                  getDateTime={this.getDate}
                />
                <DateTime title="Time" type="time" getDateTime={this.getTime} />
              </DateTimeWrapper>
              <CheckListWrapper>
                <TextInput
                  title="Add Checklist for subtasks"
                  placeholder="Add item..."
                  inputType="list"
                />
                <div className="add__list--display-list">
                  <ul>
                    <li>test1</li>
                    <li>test2</li>
                  </ul>
                </div>
              </CheckListWrapper>
              <TagsWrapper>
                <TextInput
                  title="Add Tags"
                  placeholder="Add tag..."
                  inputType="tags"
                />
              </TagsWrapper>
              <SaveButtonWrapper>
                <SaveButton>
                  <h2>Save Task</h2>
                </SaveButton>
              </SaveButtonWrapper>
            </div>
          </HeaderWrapper>
        </form>
      </Container>
    );
  }
}
export default TaskForm;
