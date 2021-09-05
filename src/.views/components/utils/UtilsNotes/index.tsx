import React, { useState, useContext, useEffect } from "react"
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
} from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"
import EventEmitter from "events"
import AuthContext from "../../../../contexts/AuthContext"
import GlobalContext from "../../../../contexts/GlobalContext"
import utilsNotesController from "../../../../.controllers/utilsNotesController"
import SnackBar from "../../../components/global/SnackBar"
import Card from "./Card"
import {
  NotesContainer,
  FormContainer,
  FormTitleContainer,
  CardsContainer,
  FormHeader,
  SkeletonContainer,
  SqueletonText,
  SqueletonButtons,
} from "./styles"
import AddButton from "../../global/AddButton"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import ConfirmDialog from "../../../components/global/ConfirmDialog"
import NotesSkeleton from "./NotesSkeleton"

export interface INote {
  title: string
  text: string
  id: string
}

const UtilsNotes = () => {
  const [notes, setNotes] = useState<INote[]>([])
  const [note, setNote] = useState<INote>({ title: "", text: "", id: "" })
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const user: any = useContext(AuthContext)

  const { snack, setSnack } = useContext(GlobalContext)

  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = () => {
    setLoading(true)
    utilsNotesController.getAllNotes(user.uid).then((res: any) => {
      setNotes(res)
      setLoading(false)
    })
  }

  const changeNoteTitle = (title: string) => {
    setNote({ ...note, title })
  }

  const chanteNoteText = (text: string) => {
    setNote({ ...note, text })
  }

  const keyPress = (e: any) => {
    if (e.keyCode === 13 && note?.title?.length > 0 && note?.text?.length > 0) {
      utilsNotesController.addNote(note, user.uid, notes).then((response: any) => {
        if (response && response.key) {
          setNote({ title: "", text: "", id: "" })
          setSnack({
            open: true,
            severity: "success",
            message: "Nota adicionada!",
          })
          getNotes()
          setShowForm(false)
        } else {
          setSnack({
            open: true,
            severity: "error",
            message: "Erro ao adicionar!",
          })
        }
      })
      setShowForm(!showForm)
      e.preventDefault()
    }

    if (e.keyCode === 13 && note.title.length <= 0) {
      setSnack({
        open: true,
        severity: "warning",
        message: "Add a note title",
      })
    }

    if (e.keyCode === 13 && note.text.length <= 0) {
      setSnack({
        open: true,
        severity: "warning",
        message: "Add a text to your note",
      })
    }
  }

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result: any = Array.from(list)
    const dbUpdateFirst = result[startIndex]
    const dbUpdateEnd = result[endIndex]
    const noteTitleHolder = result[startIndex].title
    const noteTextHolder = result[startIndex].text
    const notePositionHolder = result[startIndex].position

    dbUpdateFirst.position = result[endIndex].position
    dbUpdateEnd.position = notePositionHolder

    utilsNotesController.updateDnd(user.uid, dbUpdateFirst, dbUpdateEnd)

    const [removed]: any = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    setNotes(result)
    return result
  }

  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    const items = reorder(notes, result.source.index, result.destination.index)
  }

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
                        changeNoteTitle(e.target.value)
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
                      chanteNoteText(e.target.value)
                    }}
                    onKeyDown={keyPress}
                  />
                </>
              )}
            </FormContainer>

            <CardsContainer>
              {loading && <NotesSkeleton />}
              {notes &&
                notes.length > 0 &&
                notes.map((note: INote, index) => (
                  <Draggable key={note.id} draggableId={note?.id} index={index}>
                    {(provided, snapshot) => (
                      <span
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <Card data={note} notes={notes} setNotes={setNotes} />
                      </span>
                    )}
                  </Draggable>
                ))}
            </CardsContainer>
            <SnackBar />
          </NotesContainer>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default UtilsNotes
