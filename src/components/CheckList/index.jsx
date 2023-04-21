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
    item: null,
  };

  getItem = (item) => {
    this.setState({ value: item });
  };

  handleAdd = () => {
    const item = {
      value: this.state.value,
      id: crypto.randomUUID(),
    };
    this.setState({ value: "" });
    this.props.getList(item);
  };

  handleDelete = (e, item) => {
    e.stopPropagation();
    this.props.handleDelete(item);
  };

  showInput = (item) => {
    console.log(item);
    this.setState({ showInput: !this.state.showInput, item });
  };

  handleBlur = () => {
    this.showInput();
  };
  getEdit = (item) => {
    console.log(item)
  }
  render() {
    console.log("state", this.state.list);
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
                  {this.state.showInput && this.state.item.id === item.id ? (
                    <TextInput
                      name="list"
                      value={item.value}
                      handleBlur={this.handleBlur}
                      getText={this.getEdit}
                    />
                  ) : (
                    <ItemName onClick={() => this.showInput(item)}>
                      {item.value}
                    </ItemName>
                  )}
                  <DeleteButton
                    onClick={(e) => this.handleDelete(e, item)}
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
