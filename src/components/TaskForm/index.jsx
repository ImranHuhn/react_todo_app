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

  // getName = (name) => {
  //   this.setState({ taskName: name });
  // };
  handleNameChange = (e) => {
    this.setState({ taskName: e.target.value });
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
    const newList = [...this.state.checklist, list];
    this.setState({ checklist: newList });
  };

  // getTags = (tags) => {
  //   const newTags = tags.toLowerCase().split(",");
  //   this.setState({ tags: newTags });
  // };
  handleTagChange = (e) => {
    const newTags = e.target.value.toLowerCase().split(",");
    this.setState({ tags: newTags });
  };

  handleDelete = (item) => {
    const newList = this.state.checklist.filter((el) => {
      return el.id !== item.id;
    });
    this.setState({ checklist: newList });
  };

  // handleEdit = () => {
  //   console.log("edit");
  // };

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
    console.log("checklist", this.state.checklist);
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
                  name="task"
                  // getValue={this.getName}
                  handleChange={this.handleNameChange}
                  value={this.state.taskName}
                />
              </TaskNameWrapper>
              <RadioButtons
                name="Priority"
                getNumber={this.getPriority}
                value={this.state.priority}
              />
              <RadioButtons
                name="Complexity"
                getNumber={this.getComplexity}
                value={this.state.complexity}
              />
              <DateTimeWrapper>
                <DateTime
                  title="Due Date"
                  type="date"
                  getDateTime={this.getDate}
                  value={this.state.dueDate}
                />
                <DateTime
                  title="Time"
                  type="time"
                  getDateTime={this.getTime}
                  value={this.state.dueTime}
                />
              </DateTimeWrapper>
              <CheckList
                getList={this.getList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                checklist={this.state.checklist}
              />
              <TagsWrapper>
                <TextInput
                  title="Add Tags"
                  placeholder="Tag1, Tag2, Tag3, ..."
                  name="tags"
                  // getValue={this.getTags}
                  handleChange={this.handleTagChange}
                  value={this.state.tags}
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
