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

export const RadioButtons = (props) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    props.getNumber(value);
  };

  return (
    <Container>
      <Title>Select {props.inputType} Level</Title>
      <label htmlFor={props.inputType}>
        <RadioWrapper>
          {[...Array(10)].map((e, i) => (
            <RadioItem key={crypto.randomUUID()}>
              <Input
                onChange={handleChange}
                checked={props.inputValue === i + 1 ? "checked" : ""}
                name={props.inputType}
                type="radio"
                value={i + 1}
              />
              <TextWrapper radioColor={props.inputValue === i + 1}>
                <Text>{i + 1}</Text>
              </TextWrapper>
            </RadioItem>
          ))}
        </RadioWrapper>
      </label>
    </Container>
  );
};
