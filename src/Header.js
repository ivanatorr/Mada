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
          <AppBar>
            <Toolbar>
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
