import React, { useState } from "react"
import { MouseEventHandler } from "react"
import { Typography, Icon } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import { ButtonActiveS } from "./styles"

interface IButtonActive {
  active?: boolean
  text?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  href?: string
  children?: any
  icon?: string
}

export const ButtonActive = ({
  active,
  text,
  onClick,
  href,
  icon,
}: IButtonActive) => {
  const theme = useTheme()

  return (
    <>
      <ButtonActiveS
        href={href}
        onClick={onClick}
        style={{ color: active ? theme.palette.primary.main : "white" }}
      >
        <Icon>{icon}</Icon>
        <Typography variant="subtitle2">{text}</Typography>
      </ButtonActiveS>
    </>
  )
}
