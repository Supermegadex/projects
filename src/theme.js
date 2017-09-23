import { createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import amber from 'material-ui/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: amber,
    type: 'dark'
  },
});

export default theme;