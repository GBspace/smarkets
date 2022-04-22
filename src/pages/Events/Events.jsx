import { List } from '@material-ui/core';
import React, { useRef } from 'react'
import Event from '../../components/Event/Event';
import {useFetch} from '../../utils/FetchApi/useFetch';
import { StyledEvents } from './Events.styled';

const Events = () => {
  const isComponentMounted = useRef(true);
  const {data,error,loading} = useFetch('https://api.smarkets.com/v3/popular/event_ids/sport/football/',isComponentMounted,[]);
  const events = (data && data.popular_event_ids) || [];
    return ( 
      <StyledEvents>
        <div className='events-container' data-testid="events">
          {loading &&  <div className='loading'>Loading...</div>}
          {data && 
          <List>
            {(events.map(id => <Event key={id} id={id}/>))}
          </List>
          }
          {error && <div className='error-container'>{error}</div>}
        </div>
      </StyledEvents>
  )
}

export default Events;