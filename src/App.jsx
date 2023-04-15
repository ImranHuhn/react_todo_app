import React from "react";
import { createGlobalStyle } from "styled-components";
import { ArrowIcon } from "./components/IconComponent";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
`;

class App extends React.Component {
  render() {
    return (
      <div
        className="main__container"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "lightblue",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <GlobalStyle />
        <div className="add__container" style={{ width: "500px" }}>
          <div
            className="add__header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="add__header-back"
            >
              <ArrowIcon />
            </div>
            <h1 className="add__header-title">Add New Task</h1>
          </div>
          <div>
            <div
              className="add__task"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="task">Task Name</label>
              <input name="task" type="text" />
            </div>
            <div
              className="add__priority"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="priority">Select Priority Level</label>
              <div
                className="add__priority-radio-wrapper"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {[...Array(10)].map((e, i) => (
                  <input
                    name="priority"
                    type="radio"
                    key={crypto.randomUUID()}
                  />
                ))}
              </div>
            </div>
            <div
              className="add__complexity"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="complexity">Select Complexity Level</label>
              <div
                className="add__complexity-radio-wrapper"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {[...Array(10)].map((e, i) => (
                  <input
                    name="complexity"
                    type="radio"
                    key={crypto.randomUUID()}
                  />
                ))}
              </div>
            </div>
            <div
              className="add__date-time"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                className="add__date-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "45%",
                }}
              >
                <label htmlFor="date">Select Due Date</label>
                <input name="date" type="date" />
              </div>
              <div
                className="add__time-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "45%",
                }}
              >
                <label htmlFor="time">Select Time</label>
                <input name="time" type="time" />
              </div>
            </div>
            <div
              className="add__list"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="list">Add Checklist for subtasks</label>
              <input name="list" type="text" />
              <div className="add__list--display-list">
                <ul>
                  <li>test1</li>
                  <li>test2</li>
                </ul>
              </div>
            </div>
            <div
              className="add__tags"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="tags">Add Tags</label>
              <input name="tags" type="text" />
            </div>
            <div
              className="add__button-wrapper"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="add__button">Save Task</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
