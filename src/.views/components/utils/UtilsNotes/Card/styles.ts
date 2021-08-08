import styled from "styled-components/macro";
import theme from "../../../../styles/theme";
import { Paper, Card as CardS } from "@material-ui/core";

interface ICard {
  xPosition?: number;
}

export const Card = styled(CardS)`
  .MuiTypography-root {
    margin-bottom: ${theme.spacing(2)}px;
  }
`;
