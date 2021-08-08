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
  Icon,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import authController from "../../../../.controllers/authController";
import AuthContext from "../../../contexts/AuthContext";
import NavBar from "../../global/Navbar";
import { Drawer } from "../../global/SideBar/Drawer/styles";
import { MainPanel } from "./MainPanel/index";
import UtilsLinks from "../../utils/UtilsLinks";
import UtilsNotes from "../../utils/UtilsNotes";
import AvatarButton from "../../global/Navbar/AvatarButton";
import UtilsToDo from "../../utils/UtilsToDo";
import { ButtonActive } from "./ButtonActive/index";

interface IComponent {
  element: any;
  name: string;
}

export default function MainPage() {
  let user: any = {
    displayName: "",
    photoURL: "",
  };
  user = useContext(AuthContext);
  const location = useLocation();
  const [utilsName, setUtilsName] = useState<String>("");
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
    console.log("currentPath: ", currentPath);
  };

  const renderUtil = (render: IComponent) => {
    setRenderComponent(render);
    setUtilsName(render.name);
  };

  const getActive = (toActive: string) => {
    const isActive = toActive === utilsName;
    return isActive;
  };

  return (
    <>
      <NavBar utilName={utilsName} />
      <Drawer variant="permanent">
        <ButtonActive
          onClick={() => {
            renderUtil({
              element: <UtilsLinks />,
              name: "links",
            });
          }}
          icon="link"
          text="Link"
          active={getActive("links")}
        />
        <ButtonActive
          onClick={() => {
            renderUtil({
              element: <UtilsNotes />,
              name: "notes",
            });
          }}
          icon="edit_note"
          text="Notes"
          active={getActive("notes")}
        />
        <ButtonActive
          onClick={authController.logOut}
          icon="logout"
          text="Logout"
        />
      </Drawer>
      <MainPanel container>
        {renderComponent.element}
        <UtilsToDo />
      </MainPanel>
    </>
  );
}
