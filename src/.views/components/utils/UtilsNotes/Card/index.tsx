import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Card } from "./styles"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import { IconButton } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import DeleteIcon from "@material-ui/icons/Delete"

interface ICard {
  data: {
    id: string
    text: string
    title: string
  }
  remove: Function
}

export default function OutlinedCard({ data, remove }: ICard) {
  return (
    <Card variant="outlined" key={data.id}>
      <CardContent>
        <Typography variant="h6">{data.title}</Typography>
        <Typography color="textSecondary">{data.text}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => remove(data.id)} size="small">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
