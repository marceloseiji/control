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
import {CardContainer} from "./styles";

interface ICard {
  text: string
  title: string
  date: Date
}

const Card = ({ text, title, date }: ICard) => {
  return (
  <CardContainer>
    <Typography variant="h3">{title}</Typography>
    <Typography variant="body1">{text}</Typography>
  </CardContainer>
  );
};

export default Card;
