import styled from "styled-components/macro"
import theme from "../../../styles/theme"
import Grid from "@material-ui/core/Grid"
import { InfiniteScroll, ScrollBarStyle } from "../../../styles/styles"

export const NotesContainer = styled(Grid)`
  padding: ${theme.spacing(0, 3, 0, 0)};
  display: inline-block;
  flex-direction: column;
  margin-bottom: ${theme.spacing(2)}px;
`

export const CardsContainer = styled.div`
  ${InfiniteScroll}
  ${ScrollBarStyle}
  max-height: 80vh;
  margin-top: ${theme.spacing(4)}px;
  // Card not the first
  span:not(:first-child) .MuiCard-root {
    margin-top: ${theme.spacing(2)}px;
  }
`

export const SkeletonContainer = styled.div`
  padding: ${theme.spacing(2)}px;
  background-color: ${theme.palette.background.paper};
  border-radius: 3px;
  border: 1px solid ${theme.palette.grey[800]};
`

export const SqueletonText = styled.div`
  margin-top: ${theme.spacing(3)}px;
`

export const SqueletonButtons = styled.div`
  display: flex;
  margin-top: ${theme.spacing(2)}px;
  span {
    margin-right: ${theme.spacing(1)}px;
  }
`

export const FormContainer = styled.div`
  margin-top: ${theme.spacing(3)}px;
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiButtonBase-root {
    margin-top: ${theme.spacing(1)}px;
  }
  .MuiTypography-h6 {
    color: ${theme.palette.primary.main};
  }
`

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
`

export const FormTitleContainer = styled.div`
  margin-bottom: ${theme.spacing(1)}px;
`
