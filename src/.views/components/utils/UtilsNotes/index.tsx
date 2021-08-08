import React, { useState, useContext, useEffect } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  TextField,
  LinearProgress,
  Button,
} from "@material-ui/core";
import EventEmitter from "events";
import AuthContext from "../../../contexts/AuthContext";
import utilsNotesController from "../../../../.controllers/utilsNotesController";
import SnackBar from "../../../components/global/SnackBar";
import Card from "./Card";
import {
  NotesContainer,
  FormContainer,
  FormTitleContainer,
  CardsContainer,
} from "./styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export interface INote {
  title: string;
  text: string;
  id: string;
  remove?: any;
}

const UtilsNotes = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [note, setNote] = useState<INote>({ title: "", text: "", id: "" });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<any>();
  const [linkListReorder, setLinkLIstReorder] = useState<any>();
  const user: any = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    setLoading(true);
    utilsNotesController.getAllNotes(user.uid).then((res: any) => {
      setNotes(res);
      setLoading(false);
    });
  };

  const removeNote = (id: string, uid: string) => {
    utilsNotesController.removeNote(id, uid).then((res: any) => {
      if (res) {
        const remainingLinks = notes?.filter((note) => {
          return note.id !== id;
        });
        setNotes(remainingLinks);
      }
    });
  };

  const changeNoteTitle = (title: string) => {
    setNote({ ...note, title });
  };

  const chanteNoteText = (text: string) => {
    setNote({ ...note, text });
  };

  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      utilsNotesController
        .addNote(note, user.uid, notes)
        .then((response: any) => {
          if (response && response.key) {
            setNote({ title: "", text: "", id: "" });
            setOpen(true);
            setMessage("LNota adicionada!");
            setSeverity("success");
            getNotes();
          } else {
            setOpen(true);
            setMessage("Erro ao adicionar!");
            setSeverity("error");
          }
        });
      e.preventDefault();
    }
  };

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result: any = Array.from(list);

    const dbUpdateFirst = result[startIndex];
    const dbUpdateEnd = result[endIndex];
    const noteTitleHolder = result[startIndex].title;
    const noteTextHolder = result[startIndex].text;
    const notePositionHolder = result[startIndex].position;

    // dbUpdateFirst.title = result[endIndex].title;
    // dbUpdateFirst.text = result[endIndex].text;
    dbUpdateFirst.position = result[endIndex].position;

    // dbUpdateEnd.title = noteTitleHolder;
    // dbUpdateEnd.text = noteTextHolder;
    dbUpdateEnd.position = notePositionHolder;

    utilsNotesController.updateDnd(user.uid, dbUpdateFirst, dbUpdateEnd);
    getNotes();
    const [removed]: any = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(notes, result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <NotesContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
            item
            xs={12}
            sm={9}
          >
            <FormContainer>
              <FormTitleContainer>
                <TextField
                  value={note.title}
                  variant="outlined"
                  label="Note title"
                  onChange={(e) => {
                    changeNoteTitle(e.target.value);
                  }}
                />
              </FormTitleContainer>
              <TextField
                value={note.text}
                label="Your note"
                multiline
                rows={4}
                variant="outlined"
                onChange={(e) => {
                  chanteNoteText(e.target.value);
                }}
                onKeyDown={keyPress}
              />
            </FormContainer>
            {loading && <LinearProgress />}
            <CardsContainer>
              {notes &&
                notes.length > 0 &&
                notes.map((note, index) => (
                  <Draggable key={note.id} draggableId={note.id} index={index}>
                    {(provided, snapshot) => (
                      <span
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <Card data={note} remove={removeNote} />
                      </span>
                    )}
                  </Draggable>
                ))}
            </CardsContainer>
            <SnackBar
              openState={{ open, setOpen }}
              message={message}
              severity={severity}
            />
          </NotesContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default UtilsNotes;
