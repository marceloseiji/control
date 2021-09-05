import { useState, useEffect, useContext } from "react"
import { Card, UpdateContainer } from "./styles"
import { CardActions, CardContent, TextField, Tooltip } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import ConfirmDialog from "../../../../components/global/ConfirmDialog"
import utilsNotesController from "../../../../../.controllers/utilsNotesController"
import AuthContext from "../../../../../contexts/AuthContext"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import BlockIcon from "@material-ui/icons/Block"
import { INote } from "../index"

interface ICard {
  data: {
    id: string
    text: string
    title: string
  }
  notes: any
  setNotes: any
}

export default function OutlinedCard({ data, notes, setNotes }: ICard) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [confirmRemove, setConfirmRemove] = useState(false)
  const [removeId, setRemoveId] = useState("")
  const [edit, setEdit] = useState(false)
  const [editNoteInfos, setEditNoteInfos] = useState<INote>({
    title: "",
    text: "",
    id: "",
  })
  const user: any = useContext(AuthContext)

  //Bloco de remocao de nota
  const removeNote = (id: string) => {
    setDialogOpen(true)
    setRemoveId(id)
  }

  const handleConfirmRemove = () => {
    setConfirmRemove(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  const startRemove = () => {
    if (confirmRemove) {
      utilsNotesController.removeNote(removeId, user.uid).then((res: any) => {
        if (res) {
          const remainingNotes = notes?.filter((note: { id: string }) => {
            return note.id !== removeId
          })
          setNotes(remainingNotes)
          setConfirmRemove(false)
          setDialogOpen(false)
        }
      })
    }
  }

  useEffect(() => {
    startRemove()
  }, [confirmRemove])
  //Fim do bloco de remoção de nota

  //Bloco de edição
  useEffect(() => {
    setEditNoteInfos({
      title: data.title,
      text: data.text,
      id: data.id,
    })
  }, [])

  const cancelEdit = () => {
    setEdit(false)
  }

  const changeNoteTitle = (event: string) => {
    setEditNoteInfos({
      ...editNoteInfos,
      title: event,
    })
  }

  const changeNoteText = (event: string) => {
    setEditNoteInfos({
      ...editNoteInfos,
      text: event,
    })
  }

  const editNote = (id: string) => {
    setEdit(!edit)
    console.log("Editando nota: ", id)
  }

  //Para terminar a eddição falta fazer a tualização do array
  //primeiro pegar o index do elemento a ser substituído em seguida realizar o splice do item, depois atualizar
  //o estado do vetor de notas
  const startUpdate = (id: string) => {
    utilsNotesController.editNote(editNoteInfos, id, user.uid).then((res: any) => {
      if (res) {
        console.log(res)
        const newNotes = notes?.splice((note: INote, index: number) => {})
        setNotes(newNotes)
        cancelEdit()
      }
    })
  }
  //Fim edição

  return (
    <>
      {!edit && (
        <Card variant="outlined" key={data.id}>
          <CardContent>
            <Typography variant="h6">{data.title}</Typography>
            <Typography color="textSecondary">{data.text}</Typography>
          </CardContent>
          <CardActions>
            <Tooltip title="Remove" placement="top">
              <IconButton onClick={() => removeNote(data.id)} size="small">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Start edit" placement="top">
              <IconButton
                onClick={() => {
                  editNote(data.id)
                }}
                size="small"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      )}

      {edit && (
        <Card variant="outlined" key={data.id} id="updateContainer">
          <CardContent>
            <UpdateContainer>
              <TextField
                value={editNoteInfos?.title}
                variant="outlined"
                label="Edit title"
                onChange={(event) => {
                  changeNoteTitle(event.target.value)
                }}
              />
              <TextField
                value={editNoteInfos?.text}
                label="Edit text"
                variant="outlined"
                onChange={(event) => {
                  changeNoteText(event.target.value)
                }}
              />
            </UpdateContainer>
          </CardContent>
          <CardActions>
            <Tooltip title="Remove" placement="top">
              <IconButton
                onClick={() => removeNote(data.id)}
                size="small"
                id="delete"
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cancel edit" placement="top">
              <IconButton
                onClick={() => {
                  editNote(data.id)
                }}
                size="small"
                id="cancel"
              >
                <BlockIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Update" placement="top">
              <IconButton
                onClick={() => startUpdate(data.id)}
                size="small"
                id="update"
              >
                <CheckCircleOutlineIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      )}

      <ConfirmDialog
        dialogOpen={dialogOpen}
        handleConfirmRemove={handleConfirmRemove}
        handleCloseDialog={handleCloseDialog}
        text="CONFIRM EXCLUDE?"
      />
    </>
  )
}
