import styled from "styled-components/macro";
import theme from "../../../styles/theme";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface INewTask {
  newTaskShow?: boolean;
}

export const ToDoContainer = styled(Grid)`
  margin-left: auto !important;
  background-color: ${theme.palette.background.paper};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing(2, 2)};
  p {
    color: ${theme.palette.primary.main};
  }
`;

export const TaskContainer = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  .MuiButtonBase-root {
    color: ${theme.palette.primary.main};
    margin-left: ${theme.spacing(1)}px;
    padding: 1px;
  }
  .MuiGrid-root {
    margin: ${theme.spacing(1, 0)};
  }
`;

export const NewTaskContainer = styled.div<INewTask>`
  align-items: center;
  width: 100%;
  display: flex;
  transform: ${(props) => (props.newTaskShow ? "scaleY(1)" : "scaleY(0)")};
  height: ${(props) => (props.newTaskShow ? "270px" : "0%")};
  transition: 0.3s ease;
  transform-origin: top left;
  button {
    margin-left: 0 !important;
  }
  .MuiButtonBase-root {
    color: ${theme.palette.primary.main};
    margin-left: ${theme.spacing(1)}px;
    padding: 1px;
  }
  .MuiGrid-root {
    margin: ${theme.spacing(1, 0)};
  }
`;

export const TitleContainer = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  .MuiButtonBase-root {
    color: ${theme.palette.primary.main};
    margin-left: ${theme.spacing(1)}px;
    padding: 1px;
  }
  .MuiGrid-root {
    margin: ${theme.spacing(1, 0)};
  }
`;

export const DatePickerContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
  margin-right: ${theme.spacing(1)}px;
  .SingleDatePickerInput {
    background-color: transparent;
    border: none;
    border-radius: inherit;
    width: inherit;
    .DateInput {
      background: transparent;
      width: inherit;
      input {
        outline: none;
        background: transparent;
        border: 1px solid ${theme.palette.grey[300]};
        padding: 5px;
        border-radius: 3px;
        color: white;
        width: 100%;
        font-size: 15px;
        padding: 1px;
        text-align: center;
        &:hover {
          border: 1px solid ${theme.palette.grey[50]} !important;
        }
        &:focus {
          border: 1px solid ${theme.palette.primary.main} !important;
        }
      }
    }
  }
  span {
    color: white;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 10px;
    padding: 0;
    .material-icons {
      color: ${theme.palette.primary.main};
    }
  }
`;
