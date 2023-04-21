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
  EnterButton,
} from "./CheckList.styles";
import { PlusIcon, DeleteIcon, EnterIcon } from "../IconComponent";

class CheckList extends React.Component {
  state = {
    value: "",
    showInput: false,
    item: null,
    editValue: "",
  };

  // getItem = (item) => {
  //   this.setState({ value: item });
  // };

  handleItemChange = (e) => {
    // props.getValue(e.target.value);
    // console.log(e.target.value)
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

  handleDelete = (e, item) => {
    e.stopPropagation();
    this.props.handleDelete(item);
  };

  showInput = (item) => {
    // console.log(item);
    this.setState({
      showInput: !this.state.showInput,
      item,
      editValue: item.value,
    });
  };

  handleBlur = () => {
    this.setState({ showInput: !this.state.showInput });
  };

  // getEdit = (item) => {
  //   console.log("changing", item);
  //   this.setState({ editValue: item });
  // };
  handleEditChange = (e) => {
    console.log("handleEditChange", e.target.value);
    // return e.target.value;
    // this.setState({ editValue: e.target.value });
    // this.handleSubmit(e.target.value)
  };

  handleSubmit = () => {
    this.setState({ editValue: test });
  };

  render() {
    console.log("editValue", this.state.editValue);
    return (
      <Container>
        <InputWrapper>
          <TextInput
            title="Add Checklist"
            placeholder="Add item..."
            name="list"
            // getValue={this.getItem}
            handleChange={this.handleItemChange}
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
                    //default value works in the input element
                    //1.try settings input component as class
                    //2.make item into seperate component(ChecklistItem) and passing item as props
                    //3.add key to input element
                    //4.use index for keys
                    <TextInput
                      name="item"
                      focus={true}
                      value={this.state.editValue}
                      // defaultValue={this.state.editValue}
                      handleChange={this.handleEditChange}
                      // getValue={this.getEdit}
                      handleBlur={this.handleBlur}
                    />
                  ) : (
                    <ItemName onClick={() => this.showInput(item)}>
                      {item.value}
                    </ItemName>
                  )}
                  {this.state.showInput && this.state.item.id === item.id ? (
                    <EnterButton onClick={this.handleSubmit} type="button">
                      <EnterIcon style={{ width: "44px", height: "44px" }} />
                    </EnterButton>
                  ) : (
                    <DeleteButton
                      onClick={(e) => this.handleDelete(e, item)}
                      type="button"
                    >
                      <DeleteIcon />
                    </DeleteButton>
                  )}
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
