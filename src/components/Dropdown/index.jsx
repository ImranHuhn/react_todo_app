import React from "react";
import { Chevron } from "../IconComponent";

export const Dropdown = (props) => {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "45%",
        borderRadius: "30px",
        padding: "10px 40px",
        border: "none",
        backgroundColor: " #fff",
        cursor: "pointer",
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>{props.text}</h3>
      <Chevron />
    </button>
  );
};
