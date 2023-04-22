import React from "react";
import { TextInput } from "../TextInput";
import {
  Item,
  ItemName,
  DeleteButton,
  EnterButton,
} from "./CheckListItem.styles";
import { DeleteIcon, EnterIcon } from "../IconComponent";

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

  handleClick = () => {
    this.setState({
      showInput: !this.state.showInput,
    });
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
      <>
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
            <ItemName onClick={this.handleClick}>{this.state.value}</ItemName>
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
      </>
    );
  }
}

export default CheckListItem;
