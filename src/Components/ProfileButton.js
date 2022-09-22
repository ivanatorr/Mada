import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        className="h1"
        variant="primary"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <i
          className="fas fa-user-alt"
          style={{ color: "white", fontSize: "22px" }}
        ></i>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Title 1</MenuItem>
        <MenuItem onClick={handleClose}>Title 2</MenuItem>
        <MenuItem onClick={handleClose}>Title 3</MenuItem>
      </Menu>
    </>
  );
};
