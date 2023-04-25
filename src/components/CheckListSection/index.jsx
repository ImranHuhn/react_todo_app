import React from "react";
import { TextInput } from "../TextInput";
import { CheckList } from "../CheckList";
import { Container, InputWrapper, AddButton } from "./CheckListSection.styles";
import { PlusIcon } from "../IconComponent";

class CheckListSection extends React.Component {
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
      isComplete: false,
    };
    this.setState({ value: "" });
    this.props.getChecklist(item);
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
            type="text"
          />
          <AddButton onClick={this.handleAdd} type="button">
            <PlusIcon width="24" height="24" />
          </AddButton>
        </InputWrapper>
        <div>
          <CheckList
            itemType="input"
            checklist={this.props.checklist}
            deleteChecklistItem={this.props.deleteChecklistItem}
            editChecklistItem={this.props.editChecklistItem}
          />
        </div>
      </Container>
    );
  }
}

export default CheckListSection;
