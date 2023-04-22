import React from "react";
import { Container, Title } from "./DateTime.styles";

export const DateTime = (props) => {
  return (
    <Container>
      <Title>Select {props.title}</Title>
      <label htmlFor={props.type}>
        <input
          value={props.value}
          onChange={props.handleChange}
          name={props.type}
          type={props.type}
        />
      </label>
    </Container>
  );
};
