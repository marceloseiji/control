import styled from "styled-components/macro"
import theme from "../../../../styles/theme"

export const ButtonActiveS = styled.a`
  align-items: center;
  display: flex;
  padding: ${theme.spacing(2, 3)};
  &:hover {
    cursor: pointer;
    .MuiIcon-root,
    .MuiTypography-root {
      color: ${theme.palette.primary.main};
    }
  }
  .MuiIcon-root {
    transition: 0.1s ease;
  }
  .MuiTypography-root {
    margin-left: ${theme.spacing(1.5)}px;
    transition: 0.1s ease;
  }
`
