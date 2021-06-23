import React, { useState, useContext, useEffect } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  Icon,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  TextField,
  Paper,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import { CardContainer, InfosContainer, Done } from "./styles";
import toDoController from "../../../../../.controllers/toDoController";
import AuthContext from "../../../../contexts/AuthContext";

interface ICard {
  title?: string;
  text?: string;
  createdDate?: string;
  endDate?: string;
  id?: string;
  completed: boolean;
  tasks: any;
  setTasks: any;
}

const Card = ({
  text,
  title,
  endDate,
  createdDate,
  id,
  completed,
  tasks,
  setTasks,
}: ICard) => {
  const user: any = useContext(AuthContext);
  const [alterados, setAlterados] = useState([]);

  const ToggleCheck = async (
    id: string | undefined,
    uid: string,
    completed: boolean
  ) => {
    toDoController.check(id, uid, completed).then((res) => {
      if (res) {
        const findTask = tasks.find((task: any) => task.id === id);
        const indexToChange = tasks.findIndex(
          (element: any) => element.id === findTask.id
        );

        tasks[indexToChange].completed = !completed;
        setTasks([...tasks]);
        return tasks;
      }
    });
  };

  return (
    <CardContainer key={id}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body1">{text}</Typography>
      <Button
        onClick={() => {
          setTasks([...alterados]);
        }}
      >
        update
      </Button>
      <InfosContainer>
        <FormControlLabel
          value="top"
          control={
            <Switch
              color="secondary"
              checked={completed}
              onChange={() => {
                ToggleCheck(id, user.uid, completed);
              }}
            />
          }
          label=""
          labelPlacement="top"
        />
      </InfosContainer>
    </CardContainer>
  );
};

export default Card;
