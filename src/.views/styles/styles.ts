import styled from "styled-components/macro";
import theme from "./theme";

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  backgroundColor: ${theme.palette.background.default},
`;
