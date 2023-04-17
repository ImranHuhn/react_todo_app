import React from "react";

export const RadioButtons = (props) => {
  return (
    <div
      className="add__radio"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "60px",
        marginBottom: "35px",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>Select {props.type} Level</h2>
      <label htmlFor={props.type}>
        <div
          className="add__radio-list"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "470px",
          }}
        >
          {[...Array(10)].map((e, i) => (
            <div
              className="add__radio-item"
              style={{ position: "relative" }}
              key={crypto.randomUUID()}
            >
              <input
                className="radio-input"
                onClick={() => console.log(i + 1)}
                style={{
                  position: "absolute",
                  zIndex: "1",
                  opacity: "0",
                  width: "30px",
                  height: "30px",
                  transform: "translate(-15%, -15%)",
                  cursor: "pointer",
                }}
                name={props.type}
                type="radio"
                value={i + 1}
              />
              <div
                className="radio-text"
                style={{
                  position: "absolute",
                  zIndex: "0",
                  borderRadius: "100%",
                  width: "30px",
                  height: "30px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {i + 1}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </label>
    </div>
  );
};
