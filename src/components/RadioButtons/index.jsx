import React from "react";
import {
  Container,
  Title,
  RadioWrapper,
  RadioItem,
  RadioInput,
  Text,
  TextWrapper,
} from "./RadioButtons.styles";

export const RadioButtons = (props) => {
  return (
    <Container>
      <Title>Select {props.name} Level</Title>
      <label htmlFor={props.name}>
        <RadioWrapper>
          {[...Array(10)].map((el, i) => (
            <RadioItem key={crypto.randomUUID()}>
              <RadioInput
                onChange={props.handleChange}
                checked={props.value === i + 1 ? "checked" : ""}
                name={props.name}
                type="radio"
                value={i + 1}
              />
              <TextWrapper radioColor={props.value === i + 1}>
                <Text>{i + 1}</Text>
              </TextWrapper>
            </RadioItem>
          ))}
        </RadioWrapper>
      </label>
    </Container>
  );
};
