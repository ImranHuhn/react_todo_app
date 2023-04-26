import React from "react";

export const DropdownItem = (props) => {
  const handleClick = () => {
    props.dropdownSelection(props.item);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #d3d3d3",
        padding: "10px 0",
        cursor: "pointer",
      }}
    >
      <h5>{props.item}</h5>
      {props.name ? (
        <input type="radio" name={props.name} value={props.item} />
      ) : (
        <input
          type="checkbox"
          // checked={props.filter.isChecked ? "checked" : ""}
          value={props.item}
          // onChange={props.getFilter}
        />
      )}
    </div>
  );
};
