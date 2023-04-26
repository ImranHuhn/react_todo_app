import React from "react";
import { DropdownBox } from "../DropdownBox";
import { Chevron } from "../IconComponent";

export const DropdownButton = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 0",
        height: "50px",
        width: "45%",
        position: "relative",
      }}
    >
      <button
        onClick={props.handleClick}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          borderRadius: "30px",
          padding: "10px 40px",
          border: "none",
          backgroundColor: " #fff",
          cursor: "pointer",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>{props.text}</h3>
        <Chevron
          style={{ transform: `${props.showDropdown ? "rotate(180deg)" : ""}` }}
        />
      </button>
      {props.text === "Sort" && props.showDropdown && (
        <DropdownBox
          name={props.name}
          options={props.sortOptions}
          dropdownSelection={props.dropdownSelection}
        />
      )}
      {props.text === "Filter" && props.showDropdown && (
        <DropdownBox
          name={props.name}
          options={props.allTags}
          dropdownSelection={props.dropdownSelection}
          // getFilter={props.getFilter}
          // filters={props.filters}
        />
      )}
    </div>
  );
};
