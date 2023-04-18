import React from "react";
import { Title } from "./TextInput.styles";

export const TextInput = (props) => {
  const handleChange = (e) => {
    props.getText(e.target.value);
  };

  return (
    <>
      <Title>{props.title}</Title>
      <label htmlFor={props.inputType}>
        <input
          value={props.inputValue}
          onChange={handleChange}
          placeholder={props.placeholder}
          name={props.inputType}
          type="text"
        />
      </label>
    </>
  );
};
