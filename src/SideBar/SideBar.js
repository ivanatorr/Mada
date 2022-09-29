import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Outlet, Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sideBarPosition">
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link to="/pipelines">
                <i
                  className="fas fa-project-diagram"
                  style={{
                    color: "grey",
                    fontSize: "22px",
                  }}
                ></i>
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link to="/tasks">
                <i
                  className="far fa-file-alt"
                  style={{
                    color: "grey",
                    fontSize: "26px",
                    marginRight: "2px",
                  }}
                ></i>
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Outlet />
    </div>
  );
};
