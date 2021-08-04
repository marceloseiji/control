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
    uid: string;
  };
  remove: Function;
}

const Card = ({ data, remove }: ILink) => {
  const user: any = useContext(AuthContext);
  const [showPreview, setShowPreview] = useState(false);
  const [xPosition, setXPosition] = useState<number>();

  const toggleShowPreview = () => {
    setShowPreview(!showPreview);
  };

  const showPositionx = (e: any) => {
    if (e.target.tagName === "DIV") setXPosition(e.target.offsetWidth);
  };

  return (
    <CardContainer
      onMouseEnter={toggleShowPreview}
      onMouseLeave={toggleShowPreview}
      onMouseMove={(e) => {
        showPositionx(e);
      }}
    >
      <CardInfos>
        <IconButton
          aria-label="delete"
          onClick={() => {
            remove(data.id, user.uid);
          }}
        >
          <Icon>highlight_off</Icon>
        </IconButton>
        <a href={data.link} target="blank">
          <Typography variant="body2">{data.link}</Typography>
        </a>
      </CardInfos>
      <CardOverlay />
      {showPreview && (
        <CardPreview xPosition={xPosition}>
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
