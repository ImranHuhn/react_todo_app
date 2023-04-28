import React from "react";
import { ArrowIcon, EditIcon } from "../IconComponent";
import {
  Header,
  ArrowButtonWrapper,
  ArrowButton,
  EditButton,
  EditButtonWrapper,
} from "./HeaderText.styles";

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
      <EditButton onClick={handleEditClick}>
        <EditIcon style={{ width: "20px", height: "20px" }} />
      </EditButton>
    ),
  };

  return (
    <Header>
      <ArrowButtonWrapper>{button[props.arrowButton]}</ArrowButtonWrapper>
      <h1>{props.title}</h1>
      <EditButtonWrapper>{button[props.editButton]}</EditButtonWrapper>
    </Header>
  );
};
