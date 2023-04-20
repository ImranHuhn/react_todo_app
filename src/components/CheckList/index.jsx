import React from "react";
import { TextInput } from "../TextInput";
import {
  Container,
  InputWrapper,
  AddButton,
  List,
  Item,
  ItemName,
  DeleteButton,
} from "./CheckList.styles";
import { PlusIcon, DeleteIcon } from "../IconComponent";

class CheckList extends React.Component {
  state = {
    value: "",
    showInput: false,
  };

  getItem = (item) => {
    this.setState({ value: item });
  };

  getValue = (item) => {
    console.log("getValue", item);
  };

  handleAdd = () => {
    const item = {
      value: this.state.value,
      id: crypto.randomUUID(),
    };
    this.setState({ value: "" });
    this.props.getList(item);
  };

  showInput = () => {
    // console.log(this.props.checklist.map((el)=>{console.log("el",el.id)}))
    this.setState({ showInput: !this.state.showInput });
  };

  handleBlur = () => {
    this.showInput();
  };
  render() {
    console.log("state", this.state.list);
    // const showInput = this.state.showInput;
    // const id = this.props.checklist.map((el)=>el.id);
    // console.log("id", id)
    return (
      <Container>
        <InputWrapper>
          <TextInput
            title="Add Checklist"
            placeholder="Add item..."
            name="list"
            getText={this.getItem}
            value={this.state.value}
          />
          <AddButton onClick={this.handleAdd} type="button">
            <PlusIcon />
          </AddButton>
        </InputWrapper>
        <div>
          <List>
            {this.props.checklist.map((item) => {
              return (
                <Item key={crypto.randomUUID()}>
                  {this.state.showInput ? (
                    <TextInput
                      name="list"
                      value={item.value}
                      handleBlur={this.handleBlur}
                    />
                  ) : (
                    <ItemName onClick={this.showInput}>{item.value} : {item.id}</ItemName>
                  )}
                  <DeleteButton
                    onClick={(e) => {
                      e.stopPropagation();
                      this.props.handleDelete(item);
                    }}
                    type="button"
                  >
                    <DeleteIcon />
                  </DeleteButton>
                </Item>
              );
            })}
          </List>
        </div>
      </Container>
    );
  }
}

export default CheckList;
