import styled from "styled-components/macro";
import theme from "../../../styles/theme";

export const DialogContaier = styled.div`
  padding: ${theme.spacing(2)}px;
  .MuiButtonBase-root {
    padding: 0;
    margin-left: ${theme.spacing(1.5)}px;
  }
`;

export const ButtonsContainer = styled.div`
  padding-top: ${theme.spacing(1)}px;
  display: flex;
  justify-content: flex-end;
`;
