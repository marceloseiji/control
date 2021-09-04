import styled from "styled-components/macro"
import theme from "./theme"

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  backgroundcolor: ${theme.palette.background.default};
`

export const InfiniteScroll = `overflow-y: scroll;`

export const ScrollBarStyle = `::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: ${theme.palette.background.default};
}
::-webkit-scrollbar-thumb {
  background-color: ${theme.palette.background.paper};
}`
