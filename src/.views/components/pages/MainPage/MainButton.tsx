import React, { useState } from "react";
import { ListItemText, ListItemIcon, ListItem, Icon } from "@material-ui/core";

interface IMainButton {
  text?: string;
  icon?: any;
  className?: string;
  action: Function;
}

const MainButton = ({ icon, text, action, className }: IMainButton) => {
  return (
    <ListItem button onClick={() => action()} className={className}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default MainButton;
