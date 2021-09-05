import styled from "styled-components/macro"
import { AppBar as AppBarS } from "@material-ui/core"
import { IconButton as IconButtonS } from "@material-ui/core"
import theme from "../../../styles/theme"

export const AppBar = styled(AppBarS)`
  background-color: ${theme.palette.background.paper} !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  .MuiToolbar-root {
    justify-content: space-between;
  }
  .MuiSvgIcon-root path {
    color: ${theme.palette.type === "dark"
      ? theme.palette.primary.main
      : theme.palette.grey[800]};
  }
`

export const UserContainer = styled.div`
  .MuiIconButton-root {
    padding: ${theme.spacing(0.5)}px;
    margin: ${theme.spacing(1, 0.4)};
    &:hover {
      /* background-color: transparent;  */
    }
  }
`

export const IconButton = styled(IconButtonS)`
  padding: 0;
  &:hover {
    background-color: transparent;
  }
`

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`
