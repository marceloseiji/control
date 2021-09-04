import styled from "styled-components/macro"
import { IconButton as IconButtonS } from "@material-ui/core"
import theme from "../../../styles/theme"

export const IconButton = styled(IconButtonS)`
  padding: 0 !important;
  margin: 0 !important;
  margin-left: ${theme.spacing(1)}px !important;
  .MuiIconButton-label {
    .material-icons {
      color: ${theme.palette.primary.main};
    }
  }
`
