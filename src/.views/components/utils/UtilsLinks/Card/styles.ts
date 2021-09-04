import styled from "styled-components/macro"
import theme from "../../../../styles/theme"
import { Paper } from "@material-ui/core"

interface ICard {
  xPosition?: number
}

export const CardContainer = styled.div`
  &:nth-child(n + 1) {
    margin-right: ${theme.spacing(1)}px;
  }
  display: inline-block;
  background: linear-gradient(
    to right,
    ${theme.palette.background.paper},
    ${theme.palette.primary.main}55
  );
  border-radius: 30px;
  padding: ${theme.spacing(1, 3, 1, 2)};
  margin: ${theme.spacing(1, 0)};
  position: relative;
  button {
    padding: ${theme.spacing(0, 1, 0, 0)};
  }
  transition: 0.3s ease;
  &:hover {
    button {
      &: hover {
        color: ${theme.palette.primary.main};
      }
      background-color: transparent;
    }
  }
  a {
    p {
      display: inline-block;
      text-decoration: none;
      color: white;
    }
  }
  &:hover {
    .styles__CardOverlay-sc-129sktc-1 {
      background-color: transparent;
    }
  }
`

export const CardOverlay = styled.div`
  background-color: ${theme.palette.background.paper};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  z-index: 0;
  transition: 0.3s ease;
`

export const CardInfos = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 0;
  border-radius: 30px;
  line-break: anywhere;
  height: 100%;
  width: 100%;
  z-index: 1;
`

export const CardPreview = styled.div<ICard>`
  position: absolute;
  top: -100px;
  left: ${(props) => (props.xPosition ? props.xPosition + 20 : 100)}px;
  z-index: 5000;
`

export const PreviewLoader = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  width: 100px;
  height: 100px;
`
