import styled from "styled-components/macro";
import theme from "../../../../styles/theme";
import { Paper } from "@material-ui/core";

export const CardContainer = styled.div`
  background: ${theme.palette.background.paper};
  padding: ${theme.spacing(1, 3, 1, 2)};
  margin: ${theme.spacing(1, 0)};
  border-radius: 3px;
  button {
    padding: ${theme.spacing(0, 1, 0, 0)};
  }
  transition: 0.3s ease;
  &:hover {
    background: ${theme.palette.primary.main}55;
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
