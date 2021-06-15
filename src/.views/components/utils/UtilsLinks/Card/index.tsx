import React, { useContext, useState } from "react";
import {
  Icon,
  IconButton,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import AuthContext from "../../../../contexts/AuthContext";
import {
  CardContainer,
  CardOverlay,
  CardInfos,
  CardPreview,
  PreviewLoader,
} from "./styles";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

interface ILink {
  data: {
    link: string;
    position: number;
    id: string;
  };
  remove: Function;
  onMouseEnter: any;
}

const Card = ({ data, remove, onMouseEnter }: ILink) => {
  const user: any = useContext(AuthContext);
  const [showPreview, setShowPreview] = useState(false);

  const toggleShowPreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <CardContainer
      onMouseEnter={toggleShowPreview}
      onMouseLeave={toggleShowPreview}
    >
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
      {showPreview && (
        <CardPreview>
          <LinkPreview
            url={data.link}
            width="250px"
            height="250px"
            customLoader={
              <PreviewLoader>
                <CircularProgress />
              </PreviewLoader>
            }
          />
        </CardPreview>
      )}
    </CardContainer>
  );
};

export default Card;
