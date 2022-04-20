import { styled, createTheme } from '@mui/system';
import { red } from '@material-ui/core/colors';

// A custom theme for this app
const customTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
      contrastText: 'white'
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#282c34',
    },
    action:{
        focus: '#e6e6e6'
    }
  },
  typography: {
      variant: 'h3'
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
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
  
export const AppRoot = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }));