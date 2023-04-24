import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CardItem } from "../CardItem";
import { DropdownButton } from "../DropdownButton";
import { TextInput } from "../TextInput";
import { ButtonWide } from "../ButtonWide";
import { MagnifyIcon, ArrowIcon } from "../IconComponent";

class Home extends React.Component {
  state = {
    showSort: false,
    showFilter: false,
    sort: [
      "Default",
      "Ascending Date",
      "Descending Date",
      "Ascending Complexity",
      "Descending Complexity",
      "Ascending Priority",
      "Descending Priority",
    ],
  };

  handleAddClick = () => {
    this.props.handleAddClick();
  };

  handleSortClick = () => {
    this.setState({ showSort: !this.state.showSort });
  };

  handleFilterClick = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

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
            }}
          >
            <DropdownButton
              text="Sort"
              showDropdown={this.state.showSort}
              handleClick={this.handleSortClick}
              sort={this.state.sort}
            />
            <DropdownButton
              text="Filter"
              showDropdown={this.state.showFilter}
              handleClick={this.handleFilterClick}
              allTags={this.props.allTags}
            />
          </div>
          {this.props.taskList.map((item) => {
            return (
              <CardItem
                item={item}
                key={item.id}
                handleCheckClick={this.props.handleCheckClick}
                handleEditClick={this.props.handleEditClick}
                handleDetailClick={this.props.handleDetailClick}
              />
            );
          })}
          <div style={{ margin: "10px auto 20px" }}>
            <ButtonWide
              text="Add New Task"
              icon="plus"
              handleClick={this.handleAddClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
