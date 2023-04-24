import React from "react";
import CheckListItem from "../CheckListItem";
import { List } from "./CheckList.styles";

export const CheckList = (props) => {
  return (
    <List>
      {props.checklist.map((item) => {
        return (
          <CheckListItem
            deleteChecklistItem={props.deleteChecklistItem}
            item={item}
            key={crypto.randomUUID()}
            editChecklistItem={props.editChecklistItem}
          />
        );
      })}
    </List>
  );
};
