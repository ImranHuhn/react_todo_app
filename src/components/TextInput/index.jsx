import React from "react";
import { Title, Label } from "./TextInput.styles";

export const TextInput = (props) => {
  // const handleChange = (e) => {
  //   props.getValue(e.target.value);
  // };

  return (
    <>
      <Title>{props.title}</Title>
      <Label htmlFor={props.name}>
        <input
          autoFocus={props.focus}
          onBlur={props.handleBlur}
          // onChange={handleChange}
          onChange={props.handleChange}
          value={props.value}
          placeholder={props.placeholder}
          name={props.name}
          type="text"
          defaultValue={props.defaultValue}
        />
      </Label>
    </>
  );
};
