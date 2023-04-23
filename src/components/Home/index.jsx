import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CardItem } from "../CardItem";
import { Dropdown } from "../Dropdown";
import { TextInput } from "../TextInput";
import { ButtonWide } from "../ButtonWide";
import { MagnifyIcon, ArrowIcon } from "../IconComponent";

class Home extends React.Component {
  handleAddClick = () => {
    this.props.handleAddClick()
  }
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
        <div style={{ width: "500px", padding: "50px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <MagnifyIcon
              width="24"
              height="24"
              style={{ position: "absolute", left: "0", margin: "auto 18px" }}
            />
            <TextInput
              type="text"
              style={{ paddingLeft: "50px" }}
              placeholder="Search..."
            />
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "0",
                backgroundColor: "rgba(13, 153, 255, 0.1)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                margin: "auto 10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <ArrowIcon width="24" height="24" style={{ rotate: "180deg" }} />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px auto",
              height: "50px",
            }}
          >
            <Dropdown text="Sort" />
            <Dropdown text="Filter" />
          </div>
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
          <div style={{ margin: "10px auto 20px" }}>
            <ButtonWide text="Add New Task" icon="plus" handleClick={this.handleAddClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
