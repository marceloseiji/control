import styled from "styled-components/macro";
import theme from "../../../../styles/theme";
import { Paper } from "@material-ui/core";


export const CardContainer = styled(Paper)`
  background-color: ${theme.palette.background.paper};
  padding: ${theme.spacing(1, 3, 1, 2)};
  margin: ${theme.spacing(1, 0)};
  border-radius: 3px;
  border: 1px solid transparent;
  transition: 0.3s ease;
  button {
    padding: ${theme.spacing(1, 1, 1, 0)};
  }
  &:hover {
    border: 1px solid ${theme.palette.primary.main};
    button {
      &: hover {
        transition: 0.3s ease;
        color: ${theme.palette.primary.main};
      }
      background-color: transparent;
    }
    p {
      color: ${theme.palette.primary.main};
    }
  }
  a {
    p {
      display: inline-block;
      text-decoration: none;
      color: white;
      transition: 0.3s ease;
    }
  }
`;
