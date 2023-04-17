import React from "react";

export const DateTime = (props) => {
    return(
        <div
        className="add__date-time-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "45%",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Select {props.title}</h2>
        <label htmlFor={props.type}>
          <input name={props.type} type={props.type} />
        </label>
      </div>
    )
}