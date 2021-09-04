import React, { useState, useContext, useEffect } from "react"
import { Icon } from "@material-ui/core"
import { IconButton } from "./styles"

const AddButton = ({ show, setShow }: any) => {
  const ToggleShow = () => {
    setShow(!show)
  }

  return (
    <IconButton
      onClick={() => {
        ToggleShow()
      }}
    >
      {!show && <Icon>add_circle</Icon>}
      {show && <Icon>remove_circle</Icon>}
    </IconButton>
  )
}

export default AddButton
