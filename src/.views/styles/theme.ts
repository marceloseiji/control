import { createMuiTheme } from "@material-ui/core/styles";
import { blue, green, red, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: red[500],
    },
    warning: {
      main: orange[500]
    },
    success: {
      main: green[500]
    },
    grey: {
      900: "#28293D"
    }
  },
});

export default theme;
