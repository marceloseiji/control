import styled from "styled-components/macro";
import theme from "../../../styles/theme";
import { Paper } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

export const TodoContainer = styled(Grid)`
  background-color: ${theme.palette.background.paper};
  border-radius: 3px;
  padding: ${theme.spacing(2, 2)};
  p {
    color: ${theme.palette.primary.main};
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 10px;
    padding: 0;
    .material-icons {
      color: ${theme.palette.primary.main};
    }
  }
`;
