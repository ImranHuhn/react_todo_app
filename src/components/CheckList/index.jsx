import React from "react";
import { TextInput } from "../TextInput";
import { CheckListWrapper } from "./CheckList.styles";
import { PlusIcon, DeleteIcon } from "../IconComponent";

class CheckList extends React.Component {
  state = {
    value: "",
    list: [],
  };

  getItem = (item) => {
    this.setState({ value: item });
  };

  handleClick = () => {
    console.log(this.state.value);
    const newList = [...this.state.list, ...[this.state.value]];
    this.setState({ list: newList, value: "" });
  };
  render() {
    console.log("state", this.state.list);
    return (
      <CheckListWrapper>
        <div style={{ position: "relative" }}>
          <TextInput
            title="Add Checklist"
            placeholder="Add item..."
            inputType="list"
            getText={this.getItem}
            inputValue={this.state.value}
          />
          <button
            onClick={this.handleClick}
            type="button"
            style={{
              position: "absolute",
              backgroundColor: "#0d99ff",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "none",
              right: "10px",
              top: "44px",
              cursor: "pointer",
            }}
          >
            <PlusIcon />
          </button>
        </div>
        <div className="add__list--display-list">
          <ul style={{ padding: "0" }}>
            {this.state.list.map((item) => {
              return (
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    height: "60px",
                    width: "100%",
                    borderRadius: "30px",
                    border: "1px solid lightgray",
                    boxSizing: "border-box",
                    padding: "25px",
                    listStyle: "none",
                    backgroundColor: "#fff",
                    margin: "10px auto",
                  }}
                  key={crypto.randomUUID()}
                >
                  {item}
                  <button
                    onClick={()=>console.log("delete")}
                    type="button"
                    style={{
                      position: "absolute",
                      backgroundColor: "rgba(245, 88, 88, .8)",
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "none",
                      cursor: "pointer",
                      right: "0",
                      marginRight: "10px",
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </CheckListWrapper>
    );
  }
}

export default CheckList;
