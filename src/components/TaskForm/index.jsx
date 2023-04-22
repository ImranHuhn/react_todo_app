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

  getName = (e) => {
    this.setState({ taskName: e.target.value });
  };

  getPriority = (e) => {
    this.setState({ priority: parseInt(e.target.value) });
  };

  getComplexity = (e) => {
    this.setState({ complexity: parseInt(e.target.value) });
  };

  getDate = (e) => {
    this.setState({ dueDate: e.target.value });
  };

  getTime = (e) => {
    this.setState({ dueTime: e.target.value });
  };

  getList = (list) => {
    const newList = [...this.state.checklist, list];
    this.setState({ checklist: newList });
  };

  getTags = (e) => {
    const newTags = e.target.value.toLowerCase().split(",");
    this.setState({ tags: newTags });
  };

  deleteChecklistItem = (item) => {
    const newList = this.state.checklist.filter((el) => {
      return el.id !== item.id;
    });
    this.setState({ checklist: newList });
  };

  editChecklistItem = (id, newValue) => {
    const newList = [...this.state.checklist].map((el) => {
      if(el.id === id){
        el.value = newValue;
      }
      return el
    })
    this.setState({checklist: newList})
  }

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
                  handleChange={this.getName}
                  value={this.state.taskName}
                />
              </TaskNameWrapper>
              <RadioButtons
                name="Priority"
                handleChange={this.getPriority}
                value={this.state.priority}
              />
              <RadioButtons
                name="Complexity"
                handleChange={this.getComplexity}
                value={this.state.complexity}
              />
              <DateTimeWrapper>
                <DateTime
                  title="Due Date"
                  type="date"
                  handleChange={this.getDate}
                  value={this.state.dueDate}
                />
                <DateTime
                  title="Time"
                  type="time"
                  handleChange={this.getTime}
                  value={this.state.dueTime}
                />
              </DateTimeWrapper>
              <CheckList
                getList={this.getList}
                deleteChecklistItem={this.deleteChecklistItem}
                checklist={this.state.checklist}
                editChecklistItem={this.editChecklistItem}
              />
              <TagsWrapper>
                <TextInput
                  title="Add Tags"
                  placeholder="Tag1, Tag2, Tag3, ..."
                  name="tags"
                  handleChange={this.getTags}
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
