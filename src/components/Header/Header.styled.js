import { styled } from "@mui/system";

export const StyledHeader = styled('div')(({theme}) => ({
    a: {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px',
    border: '5px',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
  }));