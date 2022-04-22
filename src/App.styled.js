import { styled } from '@mui/system';

  
export const AppRoot = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5),
    borderRadius: theme.shape.borderRadius,
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px'
  }));