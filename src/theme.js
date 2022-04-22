import {createTheme} from '@mui/material/styles';
import {red} from '@material-ui/core/colors';

// A custom theme for this app
const customTheme = createTheme({
    // palette: {
    //   type: 'light',
    //   primary: {
    //     main: '#696969',
    //     contrastText: 'white'
    //   },
    //   secondary: {
    //     main: '#19857b',
    //   },
    //   error: {
    //     main: red.A400,
    //   },
    //   background: {
    //     default: '#282c34',
    //   },
    //   action:{
    //       focus: '#e6e6e6'
    //   }
    // },
    overrides: {
      MuiPaper: {
        root: {
          padding: '20px 10px',
          margin: '10px',
          backgroundColor: '#fff',
        },
      },
      MuiButton: {
        root: {
          margin: '5px',
        },
      },
    },
  });
  export {customTheme};