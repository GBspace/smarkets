import {createTheme} from '@mui/material/styles';

// A custom theme for this app
const customTheme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#696969',
        contrastText: '#282c34'
      },
    },
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