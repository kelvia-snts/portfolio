import { createMuiTheme } from "@material-ui/core/styles";
import { primaryColor, neutralColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    text: {
      primary: neutralColor
  }
},
typography: {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
},
})
//theme.typography.fontFamily

export default theme
