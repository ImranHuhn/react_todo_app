import React from "react";
import { Title, Label } from "./TextInput.styles";

export const TextInput = (props) => {
  const handleChange = (e) => {
    props.getText(e.target.value);
  };

  return (
    <>
      <Title>{props.title}</Title>
      <Label htmlFor={props.name}>
        <input
          onBlur={props.handleBlur}
          value={props.value}
          // onChange={handleChange}
          onChange={handleChange}
          placeholder={props.placeholder}
          name={props.name}
          type="text"
        />
      </Label>
    </>
  );
};
