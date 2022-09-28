import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import moment from "moment";
import Pipelines from "../resources/pipeline-data.json";

export const WorkSpacePipelines = () => {
  return (
    <div className="workSpacePosition">
      {Pipelines &&
        Pipelines.data.map((pipeline) => {
          return (
            <>
              <List className="cardList">
                <ListItemText>Name:{pipeline.name}</ListItemText>
                <ListItemText>File name:{pipeline.displayName}</ListItemText>
                <ListItemText>
                  Date of foundation:
                  {moment(pipeline.created).format("MM.DD.YY hh:mm:ss")}
                </ListItemText>
                <ListItemText>
                  Date of change:
                  {moment(pipeline.modified).format("MM.DD.YY hh:mm:ss")}
                </ListItemText>
                <ListItemText>Author:{pipeline.author}</ListItemText>
                <ListItemText>
                  Author of change:{pipeline.modifier}
                </ListItemText>
                <ListItemText>Version:{pipeline.version}</ListItemText>
              </List>
            </>
          );
        })}
    </div>
  );
};
