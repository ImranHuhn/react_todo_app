import React from "react";
import {DropdownItemWrapper} from "./DropdownBox.styles"
import { DropdownItem } from "../DropdownItem";

export const DropdownBox = (props) => {
  return (
    <DropdownItemWrapper
    >
      {props.options.map((item) => {
        return (
          <DropdownItem
            key={crypto.randomUUID()}
            item={item}
            dropdownSelection={props.dropdownSelection}
            name={props.name}
            filters={props.filters}
            sort={props.sort}
          />
        );
      })}
    </DropdownItemWrapper>
  );
};
