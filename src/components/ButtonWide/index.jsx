import React from "react";
import { Button } from "./ButtonWide.styles";
import { PlusIcon, RepeatIcon, TrashIcon } from "../IconComponent";

export const ButtonWide = (props) => {
  const iconObj = {
    plus: <PlusIcon width="24" height="24" style={{ marginRight: "15px" }} />,
    repeat: <RepeatIcon style={{ marginRight: "15px" }} />,
    trash: <TrashIcon style={{ marginRight: "15px" }} />,
  };

  return (
    <Button redButton={props.redButton} onClick={props.handleClick}>
      {iconObj[props.icon]}
      <h2>{props.text}</h2>
    </Button>
  );
};
