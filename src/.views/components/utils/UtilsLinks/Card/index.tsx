import React, { useContext } from "react";
import { Icon, IconButton } from "@material-ui/core";
import utilsLinksController from "../../../../../.controllers/utilsLinksController";
import AuthContext from "../../../../contexts/AuthContext";

interface ILink {
  link?: any;
  text?: string;
  id?: string;
  remove: Function;
}

interface IRemove {
  
}

const Card = ({ link, remove }: ILink) => {
  const user: any = useContext(AuthContext);

  return (
    <>
      <a href={link.text} target="blank">
        {link.text}
      </a>
      <IconButton
        aria-label="delete"
        onClick={() => {
          remove(link.id, user.uid)
        }}
      >
        <Icon>delete</Icon>
      </IconButton>
    </>
  );
};

export default Card;
