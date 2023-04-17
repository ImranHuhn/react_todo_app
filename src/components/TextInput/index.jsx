import React from "react";

export const TextInput = (props) => {
  return (
    <>
      <h2 style={{ marginBottom: "15px" }}>{props.title}</h2>
      <label htmlFor={props.inputType}>
        <input
          placeholder={props.placeholder}
          name={props.inputType}
          type="text"
        />
      </label>
    </>
  );
};
