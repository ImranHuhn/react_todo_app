import React from "react";
import { TextInput } from "../TextInput";
import CheckListItem from "../CheckListItem";
import { Container, InputWrapper, AddButton, List } from "./CheckList.styles";
import { PlusIcon } from "../IconComponent";

class CheckList extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleAdd = () => {
    const item = {
      value: this.state.value,
      id: crypto.randomUUID(),
    };
    this.setState({ value: "" });
    this.props.getList(item);
  };

  deleteChecklistItem = (item) => {
    this.props.deleteChecklistItem(item);
  };

  render() {
    return (
      <Container>
        <InputWrapper>
          <TextInput
            title="Add Checklist"
            placeholder="Add item..."
            name="list"
            handleChange={this.handleChange}
            value={this.state.value}
          />
          <AddButton onClick={this.handleAdd} type="button">
            <PlusIcon width="24" height="24" />
          </AddButton>
        </InputWrapper>
        <div>
          <List>
            {this.props.checklist.map((item) => {
              return (
                <CheckListItem
                  deleteChecklistItem={this.deleteChecklistItem}
                  item={item}
                  itemObj={this.state.item}
                  key={crypto.randomUUID()}
                  editChecklistItem={this.props.editChecklistItem}
                />
              );
            })}
          </List>
        </div>
      </Container>
    );
  }
}

export default CheckList;
