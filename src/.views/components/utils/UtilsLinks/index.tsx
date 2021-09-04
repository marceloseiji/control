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
} from "@material-ui/core"
import EventEmitter from "events"
import AuthContext from "../../../../contexts/AuthContext"
import GlobalContext from "../../../../contexts/GlobalContext"
import utilsLinksController from "../../../../.controllers/utilsLinksController"
import SnackBar from "../../../components/global/SnackBar"
import Card from "./Card"
import { LinksContainer, FormContainer } from "./styles"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const UtilsLinks = () => {
  const [links, setLinks] = useState<any[]>([])
  const [link, setLink] = useState<string>("")
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState<any>()
  const [linkListReorder, setLinkLIstReorder] = useState<any>()
  const user: any = useContext(AuthContext)

  const { snack, setSnack } = useContext(GlobalContext)

  useEffect(() => {
    getLinks()
  }, [])

  const getLinks = () => {
    setLoading(true)
    utilsLinksController.getAllLinks(user.uid).then((res) => {
      setLinks(res)
      setLoading(false)
    })
  }

  const removeLink = (id: string, uid: string) => {
    utilsLinksController.removeLink(id, uid).then((res) => {
      if (res) {
        const remainingLinks = links?.filter((link) => {
          return link.id !== id
        })
        setLinks(remainingLinks)
      }
    })
  }

  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      utilsLinksController
        .addLink(e.target.value, user.uid, links)
        .then((response) => {
          if (response && response.key) {
            setLink("")
            setSnack({
              open: true,
              severity: "success",
              message: "Link adicionado!",
            })
            getLinks()
          } else {
            setSnack({
              open: true,
              severity: "error",
              message: "Erro ao adicionar!",
            })
          }
        })
      e.preventDefault()
    }
  }

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result: any = Array.from(list)

    const dbUpdateFirst = result[startIndex]
    const dbUpdateEnd = result[endIndex]
    const linkHolder = result[startIndex].link
    dbUpdateFirst.link = result[endIndex].link
    dbUpdateEnd.link = linkHolder
    utilsLinksController.updateDnd(user.uid, dbUpdateFirst, dbUpdateEnd)

    const [removed]: any = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    const items = reorder(links, result.source.index, result.destination.index)
    // setLinks(items);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <LinksContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
            item
            xs={12}
            sm={9}
          >
            <FormContainer>
              <TextField
                value={link}
                id="add-link"
                label="Link here"
                helperText="press enter to add a link"
                onChange={(e) => {
                  setLink(e.target.value)
                }}
                onKeyDown={keyPress}
              />
            </FormContainer>
            {loading && <LinearProgress />}
            {links &&
              links.length > 0 &&
              links.map((link, index) => (
                <Draggable key={link.id} draggableId={link.id} index={index}>
                  {(provided, snapshot) => (
                    <span
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <Card data={link} remove={removeLink} />
                    </span>
                  )}
                </Draggable>
              ))}
            <SnackBar />
          </LinksContainer>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default UtilsLinks
