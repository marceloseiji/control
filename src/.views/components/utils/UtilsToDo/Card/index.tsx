import React, { useState, useContext, useEffect } from "react"
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
} from "@material-ui/core"
import {
  CardContainer,
  InfosContainer,
  Done,
  ButtonsContainer,
  RemoveBtnContainer,
} from "./styles"
import DeleteIcon from "@material-ui/icons/Delete"
import toDoController from "../../../../../.controllers/toDoController"
import AuthContext from "../../../../../contexts/AuthContext"

interface ICard {
  title?: string
  text?: string
  createdDate?: string
  endDate?: string
  id?: string
  completed?: boolean | undefined
  tasks: any
  setTasks: any
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
  const user: any = useContext(AuthContext)
  const [alterados, setAlterados] = useState([])

  const ToggleCheck = async (
    id: string | undefined,
    uid: string,
    completed: boolean | undefined
  ) => {
    toDoController.check(id, uid, completed).then((res) => {
      if (res) {
        const findTask = tasks.find((task: any) => task.id === id)
        const indexToChange = tasks.findIndex(
          (element: any) => element.id === findTask.id
        )

        tasks[indexToChange].completed = !completed
        setTasks([...tasks])
        return tasks
      }
    })
  }

  const remove = (uid: string, id: string | undefined) => {
    toDoController.removeTask(uid, id).then((response: any) => {
      console.log(response)
      if (response) {
        const newTasks = tasks.filter((task: any) => task.id != id)
        setTasks(newTasks)
      }
    })
  }

  return (
    <>
      <CardContainer key={id}>
        <InfosContainer>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body1">{text}</Typography>
        </InfosContainer>
        <ButtonsContainer>
          <RemoveBtnContainer>
            <IconButton onClick={() => remove(user.uid, id)} size="small">
              <DeleteIcon />
            </IconButton>
          </RemoveBtnContainer>
          <FormControlLabel
            value="top"
            control={
              <Switch
                color="secondary"
                checked={completed}
                onChange={() => {
                  ToggleCheck(id, user.uid, completed)
                }}
              />
            }
            label=""
            labelPlacement="top"
          />
        </ButtonsContainer>
      </CardContainer>
    </>
  )
}

export default Card
