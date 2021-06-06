import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Drawer
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useStyles from "./styles";
import authController from "../../../../.controllers/authController";

import UtilsLinks from "../../Utils/UtilsLinks";
import MainButton from "./MainButton";
import Logo from "./Control.png";

interface IComponent {
  element: JSX.Element | null;
  name: string;
}

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [renderComponent, setRenderComponent] = useState<IComponent>({
    element: null,
    name: "",
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle2" noWrap style={{color: "white"}}>
            <img src={Logo} style={{ width: "150px" }} /> {renderComponent.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        color="secondary"
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <MainButton
            icon="link"
            text="Links"
            action={() =>
              setRenderComponent({ element: <UtilsLinks />, name: " / links" })
            }
          />
          <MainButton
            icon="logout"
            text="Logout"
            action={authController.logOut}
          />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderComponent.element}
      </main>
    </div>
  );
}
