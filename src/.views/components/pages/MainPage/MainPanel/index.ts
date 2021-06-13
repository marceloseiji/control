import styled from "styled-components/macro";
import theme from "../../../../styles/theme";

export const MainPanel = styled.div`
  background-color: ${theme.palette.background.default};
  padding: ${theme.spacing(2, 3)};
  margin-left: 240px;
  flex: 1;
  height: 100%;
`;
