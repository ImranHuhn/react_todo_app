import React from "react";
// import { Button } from "./ButtonWide.styles";
import { PlusIcon, RepeatIcon, TrashIcon } from "../IconComponent";

export const ButtonWide = (props) => {
  const iconObj = {
    plus: <PlusIcon width="24" height="24" style={{ marginRight: "15px" }} />,
    repeat: <RepeatIcon style={{ marginRight: "15px" }} />,
    trash: <TrashIcon style={{ marginRight: "15px" }} />
  };

  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60px",
        width: "100%",
        borderRadius: "30px",
        border: "none",
        backgroundColor: `${props.redButton ? "rgba(255, 224, 222, 1)" : "rgba(13, 153, 255, 1)"}`,
        color: `${props.redButton ? "#000" : "#fff"}`,
        cursor: "pointer",
        margin: "auto",
      }}
      onClick={props.handleClick}
    >
      {iconObj[props.icon]}
      <h2>{props.text}</h2>
    </button>
  );
};
