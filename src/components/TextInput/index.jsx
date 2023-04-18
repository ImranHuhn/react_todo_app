import React from "react";
import { Title } from "./TextInput.styles";

class TextInput extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.getText(e.target.value);
  };

  render() {
    return (
      <>
        <Title>{this.props.title}</Title>
        <label htmlFor={this.props.inputType}>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            name={this.props.inputType}
            type="text"
          />
        </label>
      </>
    );
  }
}

export default TextInput;
