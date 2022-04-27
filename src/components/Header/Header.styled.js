import { styled } from "@mui/system";

export const StyledHeader = styled('div')(({theme}) => ({
    a: {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText,
      padding: '5px',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10 0px',
    border: '5px',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  }));