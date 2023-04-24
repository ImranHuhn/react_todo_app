import React from "react";
import moment from "moment";
import { HeaderText } from "../HeaderText";
import { RatingScale } from "../RatingScale";
import { ButtonWide } from "../ButtonWide";
import { Calendar, ArrowIcon, DirectionalIcon } from "../IconComponent";

class TaskDetails extends React.Component {
  render() {
    console.log("$$$", this.props.daysLeft);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "rgb(245, 245, 245)",
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        <div
          style={{ width: "500px", padding: "50px 0", position: "relative" }}
        >
          <HeaderText
            title="Task Details"
            arrowButton="arrow"
            editButton="edit"
            handleBackClick={this.props.handleBackClick}
          />
          <div style={{ marginTop: "30px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: `${
                  this.props.aTask.isComplete
                    ? "rgba(13, 153, 255, 0.1)"
                    : "#fff"
                }`,
                borderRadius: "15px",
                padding: "15px",
                marginBottom: "20px",
                cursor: "pointer",
                border: "none",
              }}
            >
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        backgroundColor: `rgba(${this.props.daysLeft},.8)`,
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                      }}
                    ></div>
                    <h1 style={{ fontWeight: "bold", margin: "5px" }}>
                      {this.props.aTask.taskName}
                    </h1>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      <Calendar
                        style={{
                          width: "15px",
                          height: "15px",
                          display: "flex",
                        }}
                      />
                    </div>
                    <h2 style={{ margin: "auto 5px", color: "#808080" }}>
                      Due Date:{" "}
                      <span
                        style={{
                          color: `rgba(${this.props.daysLeft})`,
                        }}
                      >
                        {this.props.aTask.dueDate &&
                          this.props.aTask.dueTime &&
                          moment(
                            this.props.aTask.dueDate +
                              " " +
                              this.props.aTask.dueTime,
                            "YYYY-MM-DD HH:mm"
                          ).format("MMMM Do YYYY, h:mm A")}{" "}
                      </span>
                    </h2>
                  </div>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      <ArrowIcon
                        style={{
                          width: "20px",
                          height: "20px",
                          rotate: "90deg",
                        }}
                      />
                    </div>
                    <RatingScale
                      htmlTag="h2"
                      text="Priority: "
                      radio={this.props.aTask.priority}
                    />
                  </div>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      <DirectionalIcon
                        style={{ width: "20px", height: "20px" }}
                      />
                    </div>
                    <RatingScale
                      htmlTag="h2"
                      text="Complexity: "
                      radio={this.props.aTask.complexity}
                    />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h2 style={{ fontWeight: "bold" }}>Task Complete</h2>
                    <h2
                      style={{
                        fontWeight: "bold",
                        color: `rgb(${this.props.daysLeft})`,
                      }}
                    >
                      77%
                    </h2>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "10px",
                      height: "15px",
                      width: "100%",
                      margin: "5px auto",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: `rgb(${this.props.daysLeft})`,
                        width: "77%",
                        height: "100%",
                        position: "absolute",
                        left: "0",
                        borderRadius: "10px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "10px auto 20px" }}>
            <ButtonWide
              text="Repeat Tasks"
              icon="repeat"
              handleClick={this.handleRepeatClick}
            />
          </div>
          <div style={{ margin: "10px auto 20px" }}>
            <ButtonWide
              text="Delete Tasks"
              icon="delete"
              handleClick={this.handleDeleteClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskDetails;
