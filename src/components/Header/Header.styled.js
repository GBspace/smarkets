import { styled } from "@mui/system";

export const HeaderDiv = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px',
    width: '100%',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  }));