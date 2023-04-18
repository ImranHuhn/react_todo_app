import React from "react";
import {Container, Title} from "./DateTime.styles";

class DateTime extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
    this.props.getDateTime(e.target.value);
  };
  render() {
    return (
      <Container>
        <Title>Select {this.props.title}</Title>
        <label htmlFor={this.props.type}>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            name={this.props.type}
            type={this.props.type}
          />
        </label>
      </Container>
    );
  }
}

export default DateTime;
