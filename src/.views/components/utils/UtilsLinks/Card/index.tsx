import React, { useContext } from "react";
import { Icon, IconButton, Typography } from "@material-ui/core";
import AuthContext from "../../../../contexts/AuthContext";
import { CardContainer, CardOverlay, CardInfos } from "./styles";

interface ILink {
  data: {
    link: string;
    position: number;
    id: string;
  };
  remove: Function;
}

const Card = ({ data, remove }: ILink) => {
  const user: any = useContext(AuthContext);
  return (
    <CardContainer>
      <CardInfos>
        <IconButton
          aria-label="delete"
          onClick={() => {
            remove(data.id, user.uid);
          }}
        >
          <Icon>delete</Icon>
        </IconButton>
        <a href={data.link} target="blank">
          <Typography variant="body2">{data.link}</Typography>
        </a>
      </CardInfos>
      <CardOverlay />
    </CardContainer>
  );
};

export default Card;
