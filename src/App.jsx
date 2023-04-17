import React from "react";
import { createGlobalStyle } from "styled-components";
import { ArrowIcon } from "./components/IconComponent";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
    box-sizing: border-box;
  }

  ::placeholder {
    color: lightgray;
  }

  ::-webkit-datetime-edit {
    color: gray;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    background-image: url(../../src/assets/calendar.svg);
  }

  input[type="time"]::-webkit-calendar-picker-indicator {
    background-image: url(../../src/assets/clock.svg);
  }

  body {
    margin: 0;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    font-weight: normal
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 14px;
  }

  input[type="text"], input[type="date"], input[type="time"] {
    font-size: 16px;
    height: 60px;
    width: 100%;
    border-radius: 30px;
    border: 1px solid lightgray;
    box-sizing: border-box;
    padding: 25px;
  }

  .radio-text {
    background-color: rgba(13,153,255,0.1);
  }

  .radio-input:checked + .radio-text {
    background-color: rgba(13,153,255,1);
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
          backgroundColor: "#F5F5F5",
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
                backgroundColor: "#FFFFF",
              }}
              className="add__header-back"
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ArrowIcon style={{ width: "20px" }} />
              </div>
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
              <h2>Task Name</h2>
              <label htmlFor="task">
                <input placeholder="Name of task..." name="task" type="text" />
              </label>
            </div>
            <div
              className="add__priority"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 0",
                height: "60px",
              }}
            >
              <h2>Select Priority Level</h2>
              <label htmlFor="priority">
                <div
                  className="add__priority-radio-list"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "480px",
                  }}
                >
                  {[...Array(10)].map((e, i) => (
                    <div
                      className="add__priority-radio-item"
                      style={{ position: "relative" }}
                      key={crypto.randomUUID()}
                    >
                      <input
                        className="radio-input"
                        onClick={() => console.log(i + 1)}
                        style={{
                          position: "absolute",
                          zIndex: "1",
                          opacity: "0",
                          width: "30px",
                          height: "30px",
                          transform: "translate(-15%, -15%)",
                          cursor: "pointer",
                        }}
                        name="priority"
                        type="radio"
                        value={i + 1}
                      />
                      <div
                        className="radio-text"
                        style={{
                          position: "absolute",
                          zIndex: "0",
                          borderRadius: "100%",
                          width: "30px",
                          height: "30px",
                          textAlign: "center",
                        }}
                      >
                        <h3
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          {i + 1}
                        </h3>
                      </div>
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
                height: "60px",
              }}
            >
              <h2>Select Complexity Level</h2>
              <label htmlFor="complexity">
                <div
                  className="add__complexity-radio-list"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "480px",
                  }}
                >
                  {[...Array(10)].map((e, i) => (
                    <div
                      className="add__complexity-radio-item"
                      style={{ position: "relative" }}
                      key={crypto.randomUUID()}
                    >
                      <input
                        className="radio-input"
                        onClick={() => console.log(i + 1)}
                        style={{
                          position: "absolute",
                          zIndex: "1",
                          opacity: "0",
                          width: "30px",
                          height: "30px",
                          transform: "translate(-15%, -15%)",
                          cursor: "pointer",
                        }}
                        name="complexity"
                        type="radio"
                        value={i + 1}
                      />
                      <div
                        className="radio-text"
                        style={{
                          position: "absolute",
                          zIndex: "0",
                          borderRadius: "100%",
                          width: "30px",
                          height: "30px",
                          textAlign: "center",
                        }}
                      >
                        <h3
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          {i + 1}
                        </h3>
                      </div>
                    </div>
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
                <h2>Select Due Date</h2>
                <label htmlFor="date" style={{ position: "relative" }}>
                  <input name="date" type="date" />
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
                <h2>Select Time</h2>
                <label htmlFor="time">
                  <input name="time" type="time" />
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
              <h2>Add Checklist for subtasks</h2>
              <label htmlFor="list">
                <input placeholder="Add item..." name="list" type="text" />
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
              <h2>Add Tags</h2>
              <label htmlFor="tags">
                <input placeholder="Add tag..." name="tags" type="text" />
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
      </div>
    );
  }
}

export default App;
