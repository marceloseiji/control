import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { ListItemText, Tooltip, Avatar } from "@material-ui/core"
import { IconButton } from "../styles"

interface IMainButton {
  text?: string
  icon?: any
  className?: string
  onClick: any
  photoURL: string
  displayName?: string
}

const AvatarButton = ({
  text,
  onClick,
  className,
  photoURL,
  displayName = "",
}: IMainButton) => {
  return (
    <Tooltip title={displayName} placement="right">
      <IconButton className={className} onClick={onClick}>
        <Avatar src={photoURL} />
        <ListItemText primary={text} />
      </IconButton>
    </Tooltip>
  )
}

export default AvatarButton
