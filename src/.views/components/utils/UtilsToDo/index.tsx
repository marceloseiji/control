import React, { useState, useContext, useEffect } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  Button,
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
  Grid,
} from "@material-ui/core";
import {
  ToDoContainer,
  TaskContainer,
  DatePickerContainer,
  TitleContainer,
  NewTaskContainer,
} from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./Card/index";
import AuthContext from "../../../contexts/AuthContext";
import toDoController from "../../../../.controllers/toDoController";
import SnackBar from "../../../components/global/SnackBar";
import moment from "moment";
import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

interface ITask {
  title?: string | undefined;
  text?: string | undefined;
  createdDate?: any | undefined;
  endDate?: any | undefined;
  id?: string;
  completed: boolean;
}

const UtilsToDo = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<any>();
  const [newTaskShow, setNewTaskShow] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [endDate, setEndDate] = useState<any>();
  const [createdDate, setCreatedDate] = useState(moment().format("DD/MM/yyyy"));

  const user: any = useContext(AuthContext);

  const ToggleShow = () => {
    setNewTaskShow(!newTaskShow);
  };

  const loadTasks = (uid: string) => {
    toDoController.getAllTasks(uid).then((res) => {
      setTasks(res);
    });
  };

  useEffect(() => {
    if (user && user.uid) {
      loadTasks(user.uid);
    }
  }, [user]);

  const saveTask = () => {
    toDoController
      .addTask(
        {
          title,
          text,
          endDate: moment(endDate).format("DD/MM/yyyy"),
          createdDate,
        },
        user.uid
      )
      .then((response) => {
        if (response) {
          ToggleShow();
          setTitle("");
          setText("");
          setEndDate(null);
          setCreatedDate("");
          setOpen(true);
          setMessage("Task adicionada!");
        }
      });
  };

  return (
    <ToDoContainer item xs={12} sm={5} md={3}>
      <TitleContainer>
        <Typography variant="body2">TO DO LIST</Typography>
        <IconButton
          onClick={() => {
            ToggleShow();
          }}
        >
          {!newTaskShow && <Icon>add_circle</Icon>}
          {newTaskShow && <Icon>remove_circle</Icon>}
        </IconButton>
      </TitleContainer>
      <NewTaskContainer newTaskShow={newTaskShow}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <TextField
              value={title}
              id="outlined-basic"
              label="Task Title"
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              value={text}
              id="outlined-multiline-static"
              label="Task Text"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Grid>
          <Grid container spacing={1}>
            <DatePickerContainer item xs={12} sm={6}>
              <SingleDatePicker
                date={endDate}
                onDateChange={(date) => setEndDate(date)}
                focused={focused}
                onFocusChange={() => setFocused(!focused)}
                id="date-picker"
              />
              <Typography variant="caption">final date</Typography>
            </DatePickerContainer>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<Icon>save</Icon>}
                fullWidth
                onClick={() => saveTask()}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </NewTaskContainer>
      <SnackBar
        openState={{ open, setOpen }}
        message={message}
        severity={severity}
      />
      <TaskContainer>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => {
            return (
              <Card
                id={task.id}
                key={task.id}
                text={task.text}
                title={task.title}
                endDate={task.endDate}
                createdDate={task.createdDate}
                completed={task.completed}
                tasks={tasks}
                setTasks={setTasks}
              />
            );
          })}
      </TaskContainer>
    </ToDoContainer>
  );
};

export default UtilsToDo;
