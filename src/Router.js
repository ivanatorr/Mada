import React from "react";

import { MainMenu } from "./Components/MainMenu";
import { PlusButton } from "./Components/PlusButton";
import { ProfileButton } from "./Components/ProfileButton";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export const Router = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route exact from="/main" render={(props) => <MainMenu {...props} />} />
        <Route path="/plus" render={(props) => <PlusButton {...props} />} />
        <Route
          path="/profile"
          render={(props) => <ProfileButton {...props} />}
        />
      </Switch>
    </div>
  );
};
