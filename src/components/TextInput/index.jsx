import React from "react";
import { Title, Label } from "./TextInput.styles";

export const TextInput = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
      <Label htmlFor={props.name}>
        <input
          autoFocus={props.focus}
          onBlur={props.handleBlur}
          onChange={props.handleChange}
          value={props.value}
          placeholder={props.placeholder}
          name={props.name}
          type={props.type}
          defaultValue={props.defaultValue}
          style={props.style}
        />
      </Label>
    </>
  );
};
