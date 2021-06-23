import styled from "styled-components/macro";
import theme from "../../../../styles/theme";
import { Paper, IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { lighten } from "@material-ui/core/styles";

export const CardContainer = styled(Paper)`
  padding: ${theme.spacing(2)}px;
  margin-bottom: ${theme.spacing(1)}px;
  background-color: ${lighten(
    `${theme.palette.background.default}`,
    0.1
  )} !important;
  width: 100%;
`;

export const InfosContainer = styled.span`
  .MuiFormControlLabel-root {
    margin: 0;
    .MuiSwitch-root {
      .MuiSwitch-switchBase {
        top: 8px;
      }
    }
  }
`;

export const Done = styled(IconButton)``;

export const endDate = styled.span``;
