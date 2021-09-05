import styled from "styled-components/macro"
import theme from "../../../../styles/theme"
import Grid from "@material-ui/core/Grid"

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
