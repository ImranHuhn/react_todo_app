import React from "react";
import { Container, Button, ButtonName } from "./DropdownButton.styles";
import { DropdownBox } from "../DropdownBox";
import { Chevron } from "../IconComponent";

export const DropdownButton = (props) => {
  return (
    <Container>
      <Button onClick={props.handleClick}>
        <ButtonName>{props.text}</ButtonName>
        <Chevron
          style={{ transform: `${props.showDropdown ? "rotate(180deg)" : ""}` }}
        />
      </Button>
      {props.text === "Sort" && props.showDropdown && (
        <DropdownBox
          name={props.name}
          options={props.sortOptions}
          dropdownSelection={props.dropdownSelection}
          sort={props.sort}
        />
      )}
      {props.text === "Filter" && props.showDropdown && (
        <DropdownBox
          name={props.name}
          options={props.allTags}
          dropdownSelection={props.dropdownSelection}
          filters={props.filters}
        />
      )}
    </Container>
  );
};
