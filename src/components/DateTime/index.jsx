import React from "react";
import { Container, Title } from "./DateTime.styles";

export const DateTime = (props) => {
  const handleChange = (e) => {
    props.getDateTime(e.target.value);
  };
  return (
    <Container>
      <Title>Select {props.title}</Title>
      <label htmlFor={props.type}>
        <input
          value={props.value}
          onChange={handleChange}
          name={props.type}
          type={props.type}
        />
      </label>
    </Container>
  );
};
