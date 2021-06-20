import styled from "styled-components/macro";
import theme from "../../../../styles/theme";
import { Paper } from "@material-ui/core";

interface ICard {
  xPosition?: number;
}

export const CardContainer = styled.div`
  background: linear-gradient(
    to right,
    ${theme.palette.background.paper},
    ${theme.palette.primary.main}55
  );
  border-radius: 3px;
  padding: ${theme.spacing(1, 3, 1, 2)};
  margin: ${theme.spacing(1, 0)};
  position: relative;
  button {
    padding: ${theme.spacing(0, 1, 0, 0)};
  }
  transition: 0.3s ease;
  &:hover {
    .jcEXZt {
      background-color: transparent;
    }
    button {
      &: hover {
        color: ${theme.palette.primary.main};
      }
      background-color: transparent;
    }
  }
  a {
    p {
      display: inline-block;
      text-decoration: none;
      color: white;
    }
  }
`;

export const CardOverlay = styled.div`
  background-color: ${theme.palette.background.paper};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;

  width: 100%;
  height: 100%;
  z-index: 0;
  transition: 0.3s ease;
`;

export const CardInfos = styled.div`
  display: flex;
  position: relative;
  top: 0;
  border-radius: 3px;
  line-break: anywhere;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const CardPreview = styled.div<ICard>`
  position: absolute;
  top: -100px;
  left: ${(props) =>
    props.xPosition && props.xPosition > 250
      ? props.xPosition - 250
      : props.xPosition}px;
  z-index: 5000;
`;

export const PreviewLoader = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 100px;
`;
