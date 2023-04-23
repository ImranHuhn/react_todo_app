import React from "react";

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
      {props.options.map((el) => {
        return (
          <div
          key={crypto.randomUUID()}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #d3d3d3",
              padding: "10px 0",
            }}
          >
            <h5>{el}</h5>
            <input type="radio" />
          </div>
        );
      })}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #d3d3d3",
          padding: "10px 0",
        }}
      >
        <h5>box</h5>
        <input type="radio" />
      </div> */}
    </div>
  );
};
