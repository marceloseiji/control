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
  FormHeader,
} from "./styles";
import AddButton from "../../global/AddButton";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ConfirmDialog from "../../../components/global/ConfirmDialog";

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
  const [showForm, setShowForm] = useState(false);
  const [linkListReorder, setLinkLIstReorder] = useState<any>();
  const user: any = useContext(AuthContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [removeId, setRemoveId] = useState("");

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

  //Bloco de remocao de nota
  const removeNote = (id: string) => {
    setDialogOpen(true);
    setRemoveId(id);
  };

  const handleConfirmRemove = () => {
    setConfirmRemove(true);
  };

  useEffect(() => {
    if (confirmRemove) {
      utilsNotesController.removeNote(removeId, user.uid).then((res: any) => {
        if (res) {
          const remainingNotes = notes?.filter((note) => {
            return note.id !== removeId;
          });
          setNotes(remainingNotes);
          setConfirmRemove(false);
          setDialogOpen(false);
        }
      });
    }
  }, [confirmRemove]);
  //Fim do bloco de remoção de nota

  const changeNoteTitle = (title: string) => {
    setNote({ ...note, title });
  };

  const chanteNoteText = (text: string) => {
    setNote({ ...note, text });
  };

  const keyPress = (e: any) => {
    if (e.keyCode === 13 && note.title.length > 0 && note.text.length > 0) {
      utilsNotesController
        .addNote(note, user.uid, notes)
        .then((response: any) => {
          if (response && response.key) {
            setNote({ title: "", text: "", id: "" });
            setOpen(true);
            setMessage("LNota adicionada!");
            setSeverity("success");
            getNotes();
            setShowForm(false);
          } else {
            setOpen(true);
            setMessage("Erro ao adicionar!");
            setSeverity("error");
          }
        });
      setShowForm(!showForm);
      e.preventDefault();
    }

    if (e.keyCode === 13 && note.title.length <= 0) {
      setOpen(true);
      setMessage("Add a note title");
      setSeverity("warning");
    }

    if (e.keyCode === 13 && note.text.length <= 0) {
      setOpen(true);
      setMessage("Add a text to your note");
      setSeverity("warning");
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

    const [removed]: any = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setNotes(result);
    return result;
  };

  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(notes, result.source.index, result.destination.index);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
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
              <FormHeader>
                <Typography variant="h6">New note</Typography>
                <AddButton show={showForm} setShow={setShowForm} />
              </FormHeader>
              {showForm && (
                <>
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
                </>
              )}
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
      <ConfirmDialog
        dialogOpen={dialogOpen}
        handleConfirmRemove={handleConfirmRemove}
        handleCloseDialog={handleCloseDialog}
        text="CONFIRM EXCLUDE?"
      />
    </DragDropContext>
  );
};

export default UtilsNotes;
