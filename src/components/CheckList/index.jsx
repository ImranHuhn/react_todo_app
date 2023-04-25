import React from "react";
import CheckListItem from "../CheckListItem";
import { List } from "./CheckList.styles";

export const CheckList = (props) => {
  return (
    <List>
      {props.checklist.map((item) => {
        return (
          <div key={crypto.randomUUID()}>
            <CheckListItem
              itemType={props.itemType}
              deleteChecklistItem={props.deleteChecklistItem}
              item={item}
              editChecklistItem={props.editChecklistItem}
              completedChecklist={props.completedChecklist}
            />
          </div>
        );
      })}
    </List>
  );
};
