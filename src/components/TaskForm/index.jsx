import React from "react";
import CheckListSection from "../CheckListSection";
import { HeaderText } from "../HeaderText";
import { ButtonWide } from "../ButtonWide";
import { RadioButtons } from "../RadioButtons";
import { TextInput } from "../TextInput";
import {
  Container,
  Wrapper,
  TaskNameWrapper,
  DateTimeWrapper,
  TagsWrapper,
  SaveButtonWrapper,
} from "./TaskForm.styles";

class TaskForm extends React.Component {
  state = {
    id: this.props.aTask?.id || crypto.randomUUID(),
    taskName: this.props.aTask?.taskName || "",
    priority: this.props.aTask?.priority || 0,
    complexity: this.props.aTask?.complexity || 0,
    dueDate: this.props.aTask?.dueDate || "",
    dueTime: this.props.aTask?.dueTime || "",
    checklist: this.props.aTask?.checklist || [],
    tags: this.props.aTask?.tags || [],
    isComplete: this.props.aTask?.isComplete || false,
    percent: 0,
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

  //////////////////////
  getChecklist = (list) => {
    const newChecklist = [...this.state.checklist, list];
    this.setState({ checklist: newChecklist });
  };
  ////////////////////////

  getTags = (e) => {
    const newTags = e.target.value.toLowerCase().split(",");
    this.setState({ tags: newTags });
  };

  deleteChecklistItem = (item) => {
    const newChecklist = this.state.checklist.filter((el) => {
      return el.id !== item.id;
    });
    this.setState({ checklist: newChecklist });
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
          <Wrapper>
            <HeaderText
              handleBackClick={this.handleBackClick}
              title={this.props.title}
              arrowButton="arrow"
            />
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
              <CheckListSection
                getChecklist={this.getChecklist}
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
                <div style={{ width: "192px" }}>
                  <ButtonWide text="Save Task" />
                </div>
              </SaveButtonWrapper>
            </div>
          </Wrapper>
        </form>
      </Container>
    );
  }
}
export default TaskForm;
