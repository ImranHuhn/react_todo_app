import React from "react";
import { TextInput } from "../TextInput";
import {
  Item,
  ItemName,
  DeleteButton,
  EnterButton,
  CheckButton,
} from "./CheckListItem.styles";
import { DeleteIcon, EnterIcon, CheckIcon } from "../IconComponent";

class CheckListItem extends React.Component {
  state = {
    value: this.props.item.value,
    showInput: false,
  };

  handleSubmit = () => {
    this.setState({
      value: this.state.value,
      showInput: !this.state.showInput,
    });
    this.props.editChecklistItem(this.props.item.id, this.state.value);
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleBlur = () => {
    this.handleSubmit();
  };

  handleInputClick = () => {
    this.setState({
      showInput: !this.state.showInput,
    });
  };

  handleCheckClick = () => {
    this.props.completedChecklist(this.props.item);
  };

  handleMouseDown = () => {
    this.handleSubmit();
  };

  deleteChecklistItem = (e) => {
    e.stopPropagation();
    this.props.deleteChecklistItem(this.props.item);
  };

  render() {
    return (
      <div>
        {this.props.itemType === "input" && (
          <Item>
            {this.state.showInput ? (
              <TextInput
                name="item"
                focus={true}
                defaultValue={this.state.value}
                handleChange={this.handleChange}
                handleBlur={this.handleBlur}
                type="text"
              />
            ) : (
              <ItemName onClick={this.handleInputClick}>
                {this.state.value}
              </ItemName>
            )}
            {this.state.showInput ? (
              <EnterButton onMouseDown={this.handleMouseDown} type="button">
                <EnterIcon style={{ width: "44px", height: "44px" }} />
              </EnterButton>
            ) : (
              <DeleteButton onClick={this.deleteChecklistItem} type="button">
                <DeleteIcon width="24" height="24" />
              </DeleteButton>
            )}
          </Item>
        )}
        {this.props.itemType === "noninput" && (
          <Item onClick={this.handleCheckClick}>
            <ItemName>{this.state.value}</ItemName>
            <CheckButton item={this.props.item}>
              <CheckIcon
                style={{
                  stroke: `${this.props.item.isComplete ? "#fff" : "#000"}`,
                  width: "24px",
                  height: "24px",
                }}
              />
            </CheckButton>
          </Item>
        )}
      </div>
    );
  }
}

export default CheckListItem;
