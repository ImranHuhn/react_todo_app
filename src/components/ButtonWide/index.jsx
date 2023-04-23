import React from "react";
import { Button } from "./ButtonWide.styles";
import { PlusIcon } from "../IconComponent";

export const ButtonWide = (props) => {
  const iconObj = {
    plus: <PlusIcon width="24" height="24" style={{marginRight:"15px"}} />,
  };
  return (
    <Button onClick={props.handleClick}>
      {iconObj[props.icon]}
      <h2>{props.text}</h2>
    </Button>
  );
};
