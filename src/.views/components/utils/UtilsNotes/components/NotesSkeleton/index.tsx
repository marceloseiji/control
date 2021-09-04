import React, { useState, useContext, useEffect } from "react"
import Skeleton from "@material-ui/lab/Skeleton"
import { SkeletonContainer, SqueletonText, SqueletonButtons } from "./styles"

const NotesSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton variant="rect" width={250} height={20} />
      <SqueletonText>
        <Skeleton variant="text" width={320} height={22} />
        <Skeleton variant="text" width={360} height={22} />
        <Skeleton variant="text" width={360} height={22} />
      </SqueletonText>
      <SqueletonButtons>
        <Skeleton variant="rect" width={16} height={20} />
        <Skeleton variant="rect" width={16} height={20} />
        <Skeleton variant="rect" width={16} height={20} />
      </SqueletonButtons>
    </SkeletonContainer>
  )
}

export default NotesSkeleton
