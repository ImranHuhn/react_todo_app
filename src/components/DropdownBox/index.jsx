import React from "react";
import { DropdownItem } from "../DropdownItem";

export const DropdownBox = (props) => {
  return (
    <div
      style={{
        bottom: "0",
        backgroundColor: "#fff",
        width: "100%",
        padding: "0 15px",
        borderBottom: "1px solid #d3d3d3",
        borderRadius: "14px",
        WebkitBoxShadow: "0px 8px 30px -15px rgba(0,0,0,0.75)",
        MozBoxShadow: "0px 8px 30px -15px rgba(0,0,0,0.75)",
        boxShadow: "0px 8px 30px -15px rgba(0,0,0,0.75)",
        position: "relative",
        zIndex: "2",
      }}
    >
      {props.options.map((item) => {
        return (
          <DropdownItem
            key={crypto.randomUUID()}
            item={item}
            dropdownSelection={props.dropdownSelection}
            name={props.name}
          />
        );
      })}
    </div>
  );
};
