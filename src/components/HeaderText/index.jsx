import React from "react";
import { ArrowIcon, EditIcon } from "../IconComponent";
import { Header, ArrowButtonWrapper, ArrowButton } from "./HeaderText.styles";

export const HeaderText = (props) => {
  const handleEditClick = () => {
    props.handleEditClick(props.aTask);
  };
  const button = {
    arrow: (
      <ArrowButton onClick={props.handleBackClick}>
        <ArrowIcon width="24" height="24" />
      </ArrowButton>
    ),
    edit: (
      <button
        onClick={handleEditClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "rgba(13, 153, 255, 0.1)",
        }}
      >
        <EditIcon style={{ width: "20px", height: "20px" }} />
      </button>
    ),
  };

  return (
    <Header>
      <ArrowButtonWrapper>{button[props.arrowButton]}</ArrowButtonWrapper>
      <h1>{props.title}</h1>
      <div style={{ position: "absolute", right: "0" }}>
        {button[props.editButton]}
      </div>
    </Header>
  );
};
