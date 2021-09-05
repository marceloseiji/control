import styled from "styled-components/macro"
import theme from "../../../styles/theme"

export const DialogContaier = styled.div`
  padding: ${theme.spacing(2)}px;
  .MuiButtonBase-root {
    margin-top: ${theme.spacing(1)}px;
    padding: 0;
    &:nth-child(2) {
      margin-left: ${theme.spacing(2)}px;
    }
  }
`

export const ButtonsContainer = styled.div`
  padding-top: ${theme.spacing(1)}px;
  display: flex;
  justify-content: flex-start;
`
