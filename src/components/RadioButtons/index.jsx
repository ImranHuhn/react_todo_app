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
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    props.getNumber(value);
  };

  return (
    <Container>
      <Title>Select {props.name} Level</Title>
      <label htmlFor={props.name}>
        <RadioWrapper>
          {[...Array(10)].map((e, i) => (
            <RadioItem key={crypto.randomUUID()}>
              <RadioInput
                onChange={handleChange}
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
