import React from "react";
import { Container } from "./DropdownItem.styles";

export const DropdownItem = (props) => {
  const handleClick = () => {
    props.dropdownSelection(props.item);
  };

  return (
    <Container onClick={handleClick}>
      <h5>{props.item}</h5>
      {props.name ? (
        <input
          type="radio"
          name={props.name}
          value={props.item}
          checked={props.item === props.sort ? "checked" : ""}
          readOnly
        />
      ) : (
        <input
          type="checkbox"
          checked={
            props.filters.length > 0 && props.filters.includes(props.item)
              ? "checked"
              : ""
          }
          value={props.item}
          readOnly
        />
      )}
    </Container>
  );
};
