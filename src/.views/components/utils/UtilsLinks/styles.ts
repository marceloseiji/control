import styled from "styled-components/macro"
import theme from "../../../styles/theme"
import Grid from "@material-ui/core/Grid"

export const LinksContainer = styled(Grid)`
  padding: ${theme.spacing(0, 3, 0, 0)};
  display: inline-block;
  flex-direction: column;
`

export const FormContainer = styled.div`
  margin: ${theme.spacing(1, 1, 2, 1)};
`
