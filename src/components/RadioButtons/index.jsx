import React from "react";
import {
  Container,
  Title,
  RadioWrapper,
  RadioItem,
  Input,
  Text,
  TextWrapper,
} from "./RadioButtons.styles";

class RadioButtons extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (e) => {
    console.log(e.target.value);
    const value = parseInt(e.target.value);
    this.setState({ value });
    this.props.getNumber(value);
  };

  render() {
    return (
      <Container>
        <Title>Select {this.props.inputType} Level</Title>
        <label htmlFor={this.props.inputType}>
          <RadioWrapper>
            {[...Array(10)].map((e, i) => (
              <RadioItem key={crypto.randomUUID()}>
                <Input
                  onChange={this.handleChange}
                  checked={this.state.value === i + 1 ? "checked" : ""}
                  name={this.props.inputType}
                  type="radio"
                  value={i + 1}
                />
                <TextWrapper radioColor={this.state.value === i + 1}>
                  <Text>{i + 1}</Text>
                </TextWrapper>
              </RadioItem>
            ))}
          </RadioWrapper>
        </label>
      </Container>
    );
  }
}

export default RadioButtons;
