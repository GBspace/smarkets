import { styled } from "@mui/system";

export const StyledEvent = styled('div')(({theme})=>({
    a: {
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
        border: '2px',
    },
    transition:`${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
      })}`,
}));