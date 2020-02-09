import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000' },
    secondary: {
      main: '#00B3C0',
      contrastText: '#FFF',
    },
  },
});

export default theme;
