import { createMuiTheme } from "@material-ui/core/styles"
import { blue, green, red, orange, amber } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: red[500],
    },
    warning: {
      main: orange[500],
    },
    success: {
      main: green[500],
    },
    grey: {
      900: "#28293D",
    },
    background: {
      default: "#28293D",
      paper: "#313248",
    },
  },
})

export default theme
