import styled from "styled-components/macro";
import theme from "../../../styles/theme";
import { Paper } from "@material-ui/core";

export const TodoContainer = styled(Paper)`
  padding: ${theme.spacing(2, 2)};
  float: right;
  width: 320px;
  height: 100%;
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
