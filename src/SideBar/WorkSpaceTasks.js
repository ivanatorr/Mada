import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import moment from "moment";
import Tasks from "../resources/tasks-data.json";

export const WorkSpaceTasks = (onClick) => {
  return (
    <div className="workSpacePosition">
      {Tasks &&
        Tasks.data.map((task) => {
          return (
            <>
              <List className="cardList" onClick={onClick}>
                <ListItemText>Name:{task.name}</ListItemText>
                <ListItemText>File name:{task.displayName}</ListItemText>
                <ListItemText>
                  Date of foundation:
                  {moment(task.created).format("MM.DD.YY hh:mm:ss")}
                </ListItemText>
                <ListItemText>
                  Date of change:
                  {moment(task.modified).format("MM.DD.YY hh:mm:ss")}
                </ListItemText>
                <ListItemText>Author:{task.author}</ListItemText>
                <ListItemText>Author of change:{task.modifier}</ListItemText>
                <ListItemText>Version:{task.version}</ListItemText>
              </List>
            </>
          );
        })}
    </div>
  );
};
