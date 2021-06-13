import React, { useContext } from "react";
import { Icon, IconButton, Typography } from "@material-ui/core";
import AuthContext from "../../../../contexts/AuthContext";
import { CardContainer } from "./styles";

interface ILink {
  link?: any;
  text?: string;
  id?: string;
  remove: Function;
}

const Card = ({ link, remove }: ILink) => {
  const user: any = useContext(AuthContext);

  return (
    <CardContainer>
      <IconButton
        aria-label="delete"
        onClick={() => {
          remove(link.id, user.uid);
        }}
      >
        <Icon>delete</Icon>
      </IconButton>
      <a href={link.text} target="blank">
        <Typography variant="body2">{link.text}</Typography>
      </a>
    </CardContainer>
  );
};

export default Card;
