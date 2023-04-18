import React from "react";

class TextInput extends React.Component {
  state = {
    value: ""
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({value: e.target.value})
  }
  render() {
    console.log(this.state.value)
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