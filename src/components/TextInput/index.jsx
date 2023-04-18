import React from "react";

class TextInput extends React.Component {
  state = {
    value: ""
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
    this.props.getText(e.target.value);
  }

  render() {
    return (
      <>
        <h2 style={{ marginBottom: "15px" }}>{this.props.title}</h2>
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