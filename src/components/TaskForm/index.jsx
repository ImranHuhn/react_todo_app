import React from "react";
import CheckList from "../CheckList";
import { ButtonWide } from "../ButtonWide";
import { RadioButtons } from "../RadioButtons";
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
} from "./TaskForm.styles";

class TaskForm extends React.Component {
  state = {
    id: this.props.editFormData?.id || crypto.randomUUID(),
    taskName: this.props.editFormData?.taskName || "",
    priority: this.props.editFormData?.priority || 0,
    complexity: this.props.editFormData?.complexity || 0,
    dueDate: this.props.editFormData?.dueDate || "",
    dueTime: this.props.editFormData?.dueTime || "",
    checklist: this.props.editFormData?.checklist || [],
    tags: this.props.editFormData?.tags || [],
    isComplete: this.props.editFormData?.isComplete || false,
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
    const newChecklist = this.state.checklist.map((el) => {
      if (el.id === id) {
        el.value = newValue;
      }
      return el;
    });
    this.setState({ checklist: newChecklist });
  };

  handleBackClick = () => {
    this.props.handleBackClick();
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
      isComplete: false,
    });
    this.props.handleBackClick();
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <HeaderWrapper>
            <Header>
              <ArrowButtonWrapper>
                <ArrowButton onClick={this.handleBackClick}>
                  <ArrowIcon width="24" height="24" />
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
                  defaultValue={this.state.taskName}
                  type="text"
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
                <div style={{ width: "45%" }}>
                  <TextInput
                    title="Select Due Date"
                    name="date"
                    type="date"
                    handleChange={this.getDate}
                    value={this.state.dueDate}
                  />
                </div>
                <div style={{ width: "45%" }}>
                  <TextInput
                    title="Select Time"
                    name="time"
                    type="time"
                    handleChange={this.getTime}
                    value={this.state.dueTime}
                  />
                </div>
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
                  type="text"
                />
              </TagsWrapper>
              <SaveButtonWrapper>
                <ButtonWide text="Save Task" />
              </SaveButtonWrapper>
            </div>
          </HeaderWrapper>
        </form>
      </Container>
    );
  }
}
export default TaskForm;
