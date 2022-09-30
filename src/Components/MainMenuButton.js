import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useTranslation } from "react-i18next";

export const MainMenuButton = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
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
          className="fas fa-bars"
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
        <MenuItem>
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            {" "}
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </MenuItem>

        <Divider />
        <MenuItem onClick={handleClose}>Title 3</MenuItem>
        <MenuItem onClick={handleClose}>Title 1</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Title 2</MenuItem>
        <MenuItem onClick={handleClose}>Title 3</MenuItem>
      </Menu>
    </>
  );
};
