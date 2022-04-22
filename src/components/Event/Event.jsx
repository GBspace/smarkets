
import { ListItem, ListItemText } from '@material-ui/core'; 
import React from 'react'
import {Link} from 'react-router-dom';
import {StyledEvent} from './Event.styled';
import ListItemButton from '@mui/material/ListItemButton';

const Event = ({id}) => {
  return (
    <StyledEvent>
      <ListItem>
        <ListItemButton>
            <Link to={`/event/${id}`} >
              <ListItemText primary={id} />
            </Link>
          </ListItemButton>
      </ListItem>
    </StyledEvent>
  )
}

export default Event;