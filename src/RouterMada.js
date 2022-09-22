import React from "react";

// import { MainMenu } from "./Components/MainMenuButton";
// import { PlusButton } from "./Components/PlusButton";
// import { ProfileButton } from "./Components/ProfileButton";
import Header from "./Header";
import { PipelineList } from "./SideBar/PipelineList";
import { SideBar } from "./SideBar/SideBar";
import { TasksList } from "./SideBar/TasksList";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export const RouterMada = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <SideBar />
      <Routes>
        <Route exact path="/pipelines" element={<PipelineList />}></Route>
        <Route path="/tasks" element={<TasksList />}></Route>
      </Routes>
    </div>
  );
};
