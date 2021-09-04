import styled from "styled-components/macro"
import theme from "../../../../styles/theme"
import Grid from "@material-ui/core/Grid"

export const MainPanel = styled(Grid)`
  background-color: ${theme.palette.background.default};
  padding: ${theme.spacing(2, 3)};
  display: flex;
  margin-left: 240px;
  flex: 1;
  width: auto !important;
  justify-content: space-between;
`
