import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  topBar: {
    zIndex: theme.zIndex.drawer + 1
  }
}));

export const Topbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.topBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          TODO
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
