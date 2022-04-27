
import { ListItem, ListItemText } from '@material-ui/core'; 
import React from 'react'
import {Link} from 'react-router-dom';
import {StyledEvent} from './Event.styled';
import ListItemButton from '@mui/material/ListItemButton';

const Event = ({id}) => {
  return (
    <StyledEvent>
      <Link to={`/event/${id}`} >
          <ListItem>
            <ListItemButton>
              <ListItemText primary={id} />
            </ListItemButton>
          </ListItem>
      </Link>
    </StyledEvent>
  )
}

export default Event;