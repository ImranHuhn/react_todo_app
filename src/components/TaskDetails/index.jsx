import React from "react";
// import { TextInput } from "../TextInput";
import { HeaderText } from "../HeaderText";
// import { EditButton } from "../EditButton";
import { CardItem } from "../CardItem";
import { ButtonWide } from "../ButtonWide";
import { EditIcon } from "../IconComponent";

class TaskDetails extends React.Component {
  render() {
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
            {this.props.taskList.map((item) => {
              return (
                <CardItem
                  item={item}
                  key={item.id}
                  handleCheckClick={this.props.handleCheckClick}
                  handleEditClick={this.props.handleEditClick}
                />
              );
            })}
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
