import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const Category = props => {
  const categoryName = props.categoryName;
  const todos = props.todos;

  const [collapseOpen, setCollapseOpen] = useState(false);
  const handleClick = () => setCollapseOpen(!collapseOpen);

  const classes = useStyles();
  return (
    <List component="nav">
      <ListItem button onClick={handleClick}>
        <ListItemText primary={`${categoryName} (${todos.length})`} />
        {collapseOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
        <List component="div" dense={true} disablePadding>
          {todos.map(todo => (
            <ListItem button className={classes.nested}>
              <ListItemText primary={todo.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export const CategorizedList = props => {
  const todos = props.todos;

  let categorized = {
    TODO: [],
    DOING: [],
    DONE: []
  };
  todos.forEach(todo => {
    categorized[todo.status].push(todo);
  });

  return (
    <List component="nav">
      <Category categoryName="todo" todos={categorized.TODO} />
      <Category categoryName="doing" todos={categorized.DOING} />
      <Category categoryName="done" todos={categorized.DONE} />
    </List>
  );
};
