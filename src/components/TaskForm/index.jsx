import React from "react";
import { RadioButtons } from "../RadioButtons";
import { DateTime } from "../DateTime";
import  TextInput  from "../TextInput";
import { ArrowIcon } from "../IconComponent";

class TaskForm extends React.Component {
  state = {
    id: crypto.randomUUID,
    taskName: "",
    priority: 1,
    complexity: 1,
    dueDate: "",
    dueTime: "",
    checklist: [],
    tags: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    return (
      <div
        className="main__container"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#F5F5F5",
          margin: "0 auto",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <div
            className="add__container"
            style={{ width: "500px", padding: "50px 0" }}
          >
            <div
              className="add__header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  left: "0",
                  backgroundColor: "#FFFFF",
                }}
                className="add__header-back"
              >
                <button
                  style={{
                    backgroundColor: "#fff",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <ArrowIcon style={{ width: "20px" }} />
                </button>
              </div>
              <h1 className="add__header-title">{this.props.title}</h1>
            </div>
            <div>
              <div
                className="add__task"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "40px 0 25px",
                }}
              >
                <TextInput
                  title="Task Name"
                  placeholder="Name of task..."
                  inputType="task"
                />
              </div>
              <RadioButtons inputType="Priority" />
              <RadioButtons inputType="Complexity" />
              <div
                className="add__date-time"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "45px",
                }}
              >
                <DateTime title="Due Date" type="date" />
                <DateTime title="Time" type="time" />
              </div>
              <div
                className="add__list"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "30px",
                }}
              >
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
              </div>
              <div
                className="add__tags"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "45px",
                }}
              >
                <TextInput
                  title="Add Tags"
                  placeholder="Add tag..."
                  inputType="tags"
                />
              </div>
              <div
                className="add__button-wrapper"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "45px",
                }}
              >
                <button
                  style={{
                    height: "60px",
                    width: "192px",
                    borderRadius: "30px",
                    border: "none",
                    backgroundColor: "#0d99ff",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  className="add__button"
                >
                  <h2>Save Task</h2>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default TaskForm;
