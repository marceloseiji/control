import React, { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  List,
  Typography,
  Avatar,
  Divider,
  IconButton,
  Paper,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import authController from "../../../../.controllers/authController";
import AuthContext from "../../../contexts/AuthContext";
import NavBar from "../../global/Navbar";
import { MenuButton } from "./MenuButton/styles";
import { Drawer } from "../../global/SideBar/Drawer/styles";
import Icon from "@material-ui/core/Icon";
import { MainPanel } from "./MainPanel/index";

import UtilsLinks from "../../utils/UtilsLinks";
import AvatarButton from "../../global/Navbar/AvatarButton";
import UtilsToDo from "../../utils/UtilsToDo";
interface IComponent {
  element: JSX.Element | null;
  name: string;
}

export default function MainPage() {
  let user: any = {
    displayName: "",
    photoURL: "",
  };
  user = useContext(AuthContext);
  const location = useLocation();

  const [utilName, setUtils] = useState<String>("");
  const [renderComponent, setRenderComponent] = useState<IComponent>({
    element: null,
    name: "",
  });

  useEffect(() => {
    const currentPath = location.pathname;
    const searchParams = new URLSearchParams(location.search);
    defineUtils(currentPath);
  }, [location]);

  const defineUtils = (currentPath: String) => {
    console.log(currentPath);
  };

  const renderUtil = (render: IComponent) => {
    setRenderComponent(render);
  };

  return (
    <>
      <NavBar utilName={utilName} />
      <Drawer variant="permanent">
        <MenuButton
          onClick={() => {
            renderUtil({
              element: <UtilsLinks />,
              name: " / links",
            });
          }}
        >
          <Icon>link</Icon>
          <Typography variant="subtitle2">Link</Typography>
        </MenuButton>
        <MenuButton onClick={authController.logOut}>
          <Icon>logout</Icon>
          <Typography variant="subtitle2">Logout</Typography>
        </MenuButton>
      </Drawer>
      <MainPanel>
        {renderComponent.element}
        <UtilsToDo />
      </MainPanel>
    </>
  );
}
