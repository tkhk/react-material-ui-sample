import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import { CategorizedList } from "./categorizedList";
import { TODOS } from "./dummy_responses";

const sideBarWidth = "12em";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: sideBarWidth
  },
  drawerPaper: {
    width: sideBarWidth
  }
}));

export const Sidebar = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      // const res = await fetch("localhost");
      // const json = await res.json();
      setTodos(TODOS.todos);
    };
    fetchTodos();
  }, []);

  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawer }}
    >
      <div className={classes.toolbar} />
      <CategorizedList todos={todos} />
    </Drawer>
  );
};
