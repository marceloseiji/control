import React, { useState } from "react";

import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  TextField,
} from "@material-ui/core";
import EventEmitter from "events";
import utilsLinksController from "../../../../.controllers/utilsLinksController";

const UtilsLinks = () => {
  const [link, setLink] = useState<string>("");

  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      const response = utilsLinksController.addLink(e.target.value);
      if (response) {
        setLink("");
        console.log(response);
      }
    }
  };

  return (
    <form>
      <TextField
        value={link}
        id="add-link"
        label="Link here"
        helperText="press enter to add link"
        onChange={(e) => {
          setLink(e.target.value);
        }}
        onKeyDown={keyPress}
      />
    </form>
  );
};

export default UtilsLinks;
