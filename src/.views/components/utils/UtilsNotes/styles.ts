import styled from "styled-components/macro";
import theme from "../../../styles/theme";
import Grid from "@material-ui/core/Grid";

export const NotesContainer = styled(Grid)`
  padding: ${theme.spacing(0, 3, 0, 0)};
  display: inline-block;
  flex-direction: column;
  margin-bottom: ${theme.spacing(2)}px;
  .MuiCard-root {
    margin-top: ${theme.spacing(2)}px;
  }
`;

export const CardsContainer = styled.div`
  margin-top: ${theme.spacing(4)}px;
`;

export const FormContainer = styled.div`
  margin-top: ${theme.spacing(4)}px;
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiButtonBase-root {
    margin-top: ${theme.spacing(1)}px;
  }
`;

export const FormTitleContainer = styled.div`
  margin-bottom: ${theme.spacing(1)}px;
`;
