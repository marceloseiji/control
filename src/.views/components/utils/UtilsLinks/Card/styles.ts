import styled from "styled-components/macro";
import theme from "../../../../styles/theme";
import { Paper } from "@material-ui/core";

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
  z-index: 0;
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
  position: relative;
  top: 0;
  left: 0;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
