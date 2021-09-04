import styled from "styled-components/macro"
import theme from "../../../../styles/theme"
import { Paper, IconButton } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { lighten } from "@material-ui/core/styles"

export const CardContainer = styled(Paper)`
  margin-bottom: ${theme.spacing(1)}px;
  background-color: ${lighten(
    `${theme.palette.background.default}`,
    0.1
  )} !important;
  width: 100%;
`

export const InfosContainer = styled.div`
  padding: ${theme.spacing(2)}px;
  .MuiFormControlLabel-root {
    margin: 0;
    .MuiSwitch-root {
      .MuiSwitch-switchBase {
        top: 8px;
      }
    }
  }
`

export const ButtonsContainer = styled.div`
  padding: ${theme.spacing(0, 1.5, 1.5, 1.5)};
  display: flex;
  .MuiFormControlLabel-root {
    margin: 0;
    .MuiSwitch-root {
      .MuiSwitch-switchBase {
        top: 8px;
      }
    }
  }
`

export const RemoveBtnContainer = styled.div`
  display: inline-flex;
  .MuiFormControlLabel-root {
    margin: 0;
    .MuiSwitch-root {
      .MuiSwitch-switchBase {
        top: 8px;
      }
    }
  }
  .MuiButtonBase-root {
    margin: 0;
  }
`

export const Done = styled(IconButton)``

export const endDate = styled.span``
