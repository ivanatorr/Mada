import React, { useState } from "react";
import { Resizable } from "re-resizable";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const TasksList = () => {
  const [state, setState] = useState({ width: 175 });
  return (
    <Resizable
      className="schemaListPosition"
      size={{ width: state.width }}
      onResizeStop={(d) => {
        setState({
          width: state.width + d.width,
        });
      }}
    >
      <List sx={{ width: "100%", maxWidth: 360 }} aria-label="contacts">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <i className="fas fa-angle-right"></i>
            </ListItemIcon>
            <ListItemText className="schemaListText" primary="task 1" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <i className="fas fa-angle-right"></i>
            </ListItemIcon>
            <ListItemText className="schemaListText" primary="task 2" />
          </ListItemButton>
        </ListItem>
      </List>
    </Resizable>
  );
};
