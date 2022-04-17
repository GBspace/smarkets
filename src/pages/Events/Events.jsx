import React, { useRef } from 'react'
import Event from '../../components/Event/Event';
import {useFetch} from '../../utils/FetchApi/useFetch';

const Events = () => {
  const isComponentMounted = useRef(true);
  const {data,error,loading} = useFetch('https://api.smarkets.com/v3/popular/event_ids/sport/football/',isComponentMounted,[]);
  const events = (data && data.popular_event_ids) || [];
    return ( 
      <div className='events-container' data-testid="events">
        {loading &&  <div className='loading'>Loading...</div>}
        {data && (events.map(id => <Event key={id} id={id}/>))}
        {error ? <div className='error-container'>{error}</div> :
        events.length === 0 && <div> No Events scheduled yet!! </div>}
      </div>
  )
}

export default Events;