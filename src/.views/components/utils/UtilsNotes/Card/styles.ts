import styled from "styled-components/macro"
import theme from "../../../../styles/theme"
import { Paper, Card as CardS } from "@material-ui/core"

interface ICard {
  xPosition?: number
}

export const Card = styled(CardS)`
  .MuiTypography-root {
    margin-bottom: ${theme.spacing(2)}px;
  }
  .MuiCardActions-root {
    button {
      color: ${theme.palette.primary.main};
    }
  }
  #delete {
    color: ${theme.palette.warning.main};
  }
  #cancel {
    color: ${theme.palette.error.main};
  }
  #update {
    color: ${theme.palette.success.main};
  }
`

export const UpdateContainer = styled.div`
  display: flex;
  flex-direction: column;
  .MuiFormControl-root:nth-child(2) {
    margin-top: 20px;
  }
`
