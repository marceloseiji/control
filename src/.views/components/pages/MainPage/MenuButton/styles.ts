import styled from "styled-components/macro";
import { Button as ButtonS } from "@material-ui/core";
import theme from "../../../../styles/theme";

export const MenuButton = styled(ButtonS)`
  padding: ${theme.spacing(1.5, 3)};
  justify-content: end !important;
  .MuiIcon-root {
    margin: ${theme.spacing(0,0,0,2)};
  }
  .MuiTypography-root {
    margin: ${theme.spacing(2, 2)};
  }
`;
