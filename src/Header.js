/* eslint-disable react/prop-types */
import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MainMenuButton } from "./Components/MainMenuButton";
import { PlusButton } from "./Components/PlusButton";
import { ProfileButton } from "./Components/ProfileButton";

const Header = () => {
  //   const menuItems = [
  //     {
  //       menuTitle: "Plus",
  //       pageURL: "/plus",
  //     },
  //     {
  //       menuTitle: "Profile",
  //       pageURL: "/profile",
  //     },
  //     {
  //       menuTitle: "About",
  //       pageURL: "/about",
  //     },
  //   ];

  return (
    <div>
      <div className="headerPosition">
        <header>
          <AppBar className="z-app-bar">
            <Toolbar>
              <i className="fas fa-brain" style={{ color: "white", fontSize: "32px", marginRight: "10px"}}></i>
              <Typography variant="h6">Mada</Typography>
              <div className="mainHeader">
                <div className="footer">
                  <PlusButton />
                  <ProfileButton />
                  <MainMenuButton />
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </header>
      </div>
    </div>
  );
};

export default Header;
