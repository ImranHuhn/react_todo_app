import React from "react";
import CheckList from "../CheckList";
import { RadioButtons } from "../RadioButtons";
import { DateTime } from "../DateTime";
import { TextInput } from "../TextInput";
import { ArrowIcon } from "../IconComponent";
import {
  Container,
  HeaderWrapper,
  Header,
  ArrowButtonWrapper,
  ArrowButton,
  TaskNameWrapper,
  DateTimeWrapper,
  TagsWrapper,
  SaveButtonWrapper,
  SaveButton,
} from "./TaskForm.styles";

class TaskForm extends React.Component {
  state = {
    id: crypto.randomUUID(),
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

  getList = (list) => {
    // console.log("taskformList", list);
    const newList = [...this.state.checklist, list];
    // console.log("taskformNewList", newList);
    this.setState({ checklist: newList });
  };

  getTags = (tags) => {
    const newTags = tags.toLowerCase().split(",");
    this.setState({ tags: newTags });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const aTask = this.state;
    this.props.getTask(aTask);
    this.setState({
      id: crypto.randomUUID(),
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
    console.log("checklist",this.state.checklist)
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
                  inputValue={this.state.taskName}
                />
              </TaskNameWrapper>
              <RadioButtons
                inputType="Priority"
                getNumber={this.getPriority}
                inputValue={this.state.priority}
              />
              <RadioButtons
                inputType="Complexity"
                getNumber={this.getComplexity}
                inputValue={this.state.complexity}
              />
              <DateTimeWrapper>
                <DateTime
                  title="Due Date"
                  type="date"
                  getDateTime={this.getDate}
                  inputValue={this.state.dueDate}
                />
                <DateTime
                  title="Time"
                  type="time"
                  getDateTime={this.getTime}
                  inputValue={this.state.dueTime}
                />
              </DateTimeWrapper>
              <CheckList
                getList={this.getList}
                checklist={this.state.checklist}
              />
              <TagsWrapper>
                <TextInput
                  title="Add Tags"
                  placeholder="Tag1, Tag2, Tag3, ..."
                  inputType="tags"
                  getText={this.getTags}
                  inputValue={this.state.tags}
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
