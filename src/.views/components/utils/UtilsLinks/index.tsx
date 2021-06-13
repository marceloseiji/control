import React, { useState, useContext, useEffect } from "react";
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
import AuthContext from "../../../contexts/AuthContext";
import utilsLinksController from "../../../../.controllers/utilsLinksController";
import SnackBar from "../../../components/global/SnackBar";
import Card from "./Card";
import { LinksContainer, FormContainer } from "./styles";

const UtilsLinks = () => {
  const [links, setLinks] = useState<any[]>();
  const [link, setLink] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<any>();
  const user: any = useContext(AuthContext);

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = () => {
    utilsLinksController.getAllLinks(user.uid).then((res) => {
      setLinks(res);
      console.log(res);
    });
  };

  const removeLink = (id: string, uid: string) => {
    utilsLinksController.removeLink(id, uid).then((res) => {
      if (res) {
        const remainingLinks = links?.filter((link) => {
          return link.id !== id;
        });
        setLinks(remainingLinks);
      }
    });
  };

  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      utilsLinksController
        .addLink(e.target.value, user.uid)
        .then((response) => {
          if (response && response.key) {
            setLink("");
            setOpen(true);
            setMessage("Link adicionado!");
            setSeverity("success");
            getLinks();
          } else {
            setOpen(true);
            setMessage("Erro ao adicionar!");
            setSeverity("error");
          }
        });
      e.preventDefault();
    }
  };

  return (
    <>
      <LinksContainer>
        <FormContainer>
          <TextField
            value={link}
            id="add-link"
            label="Link here"
            helperText="press enter to add a link"
            onChange={(e) => {
              setLink(e.target.value);
            }}
            onKeyDown={keyPress}
          />
        </FormContainer>
        {links &&
          links.length > 0 &&
          links.map((link) => (
            <Card link={link} key={link.id} remove={removeLink} />
          ))}
        <SnackBar
          openState={{ open, setOpen }}
          message={message}
          severity={severity}
        />
      </LinksContainer>
    </>
  );
};

export default UtilsLinks;
