import styled from "styled-components/macro";
import theme from "../../../styles/theme";
import Grid from "@material-ui/core/Grid";
import { InfiniteScroll } from "../../../styles/styles";

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
  ${InfiniteScroll}
  max-height: 80vh;
  margin-top: ${theme.spacing(4)}px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${theme.palette.background.default};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.background.paper};
  }
`;

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
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const FormTitleContainer = styled.div`
  margin-bottom: ${theme.spacing(1)}px;
`;
