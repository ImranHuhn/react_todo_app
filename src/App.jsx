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

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  .add__priority-radio1:checked + .add__priority-radio2 {
    background-color: red;
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
          margin: "0 auto",
        }}
      >
        <GlobalStyle />
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
              }}
              className="add__header-back"
            >
              <ArrowIcon style={{ width: "20px" }} />
            </div>
            <h1 className="add__header-title">Add New Task</h1>
          </div>
          <div>
            <div
              className="add__task"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 0",
              }}
            >
              <h4>Task Name</h4>
              <label htmlFor="task">
                <input
                  style={{ width: "100%", borderRadius: "10px" }}
                  name="task"
                  type="text"
                />
              </label>
            </div>
            <div
              className="add__priority"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 0",
              }}
            >
              <h4>Select Priority Level</h4>
              <label htmlFor="priority">
                <div
                  className="add__priority-radio-wrapper"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {[...Array(10)].map((e, i) => (
                    <div
                      style={{ position: "relative" }}
                      key={crypto.randomUUID()}
                    >
                      <input
                        className="add__priority-radio1"
                        onClick={() => console.log(i + 1)}
                        style={{
                          position: "absolute",
                          zIndex: "1",
                          opacity: "0",
                          width: "20px",
                          height: "20px",
                          top: "-2px",
                          left: "-4px",
                        }}
                        name="priority"
                        type="radio"
                        value={i + 1}
                      />
                      <span
                      className="add__priority-radio2"
                        style={{
                          position: "absolute",
                          zIndex: "0",
                          border: "1px solid red",
                          borderRadius: "100%",
                          width: "20px",
                          height: "20px",
                          textAlign: "center",
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </label>
            </div>
            <div
              className="add__complexity"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 0",
              }}
            >
              <h4>Select Complexity Level</h4>
              <label htmlFor="complexity">
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
              </label>
            </div>
            <div
              className="add__date-time"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
              }}
            >
              <div
                className="add__date-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "45%",
                }}
              >
                <h4>Select Due Date</h4>
                <label htmlFor="date">
                  <input
                    style={{ width: "100%", borderRadius: "10px" }}
                    name="date"
                    type="date"
                  />
                </label>
              </div>
              <div
                className="add__time-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "45%",
                }}
              >
                <h4>Select Time</h4>
                <label htmlFor="time">
                  <input
                    style={{ width: "100%", borderRadius: "10px" }}
                    name="time"
                    type="time"
                  />
                </label>
              </div>
            </div>
            <div
              className="add__list"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 0",
              }}
            >
              <h4>Add Checklist for subtasks</h4>
              <label htmlFor="list">
                <input
                  style={{ width: "100%", borderRadius: "10px" }}
                  name="list"
                  type="text"
                />
              </label>
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
                padding: "10px 0",
              }}
            >
              <h4>Add Tags</h4>
              <label htmlFor="tags">
                <input
                  style={{ width: "100%", borderRadius: "10px" }}
                  name="tags"
                  type="text"
                />
              </label>
            </div>
            <div
              className="add__button-wrapper"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px 0",
              }}
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
