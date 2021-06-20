import React, { useState, useContext, useEffect } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  Icon,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  TextField,
  Paper,
} from "@material-ui/core";
import { TodoContainer, Title } from "./styles";

const UtilsToDo = () => {
  return (
    <TodoContainer item xs={12} sm={3}>
      <Title>
        <Typography variant="body2">TO DO LIST</Typography>
        <IconButton
          onClick={() => {
            console.log("Add to do");
          }}
        >
          <Icon>add_circle</Icon>
        </IconButton>
      </Title>
    </TodoContainer>
  );
};

export default UtilsToDo;
