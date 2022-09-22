import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const TasksList = () => {
  return (
    <div className="schemaListPosition">
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
    </div>
  );
};
