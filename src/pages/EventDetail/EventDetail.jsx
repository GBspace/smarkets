import React, {useRef} from 'react'
import { useParams } from 'react-router-dom'
import {useFetch} from '../../utils/FetchApi/useFetch';

const EventDetail = () => {
    const isComponentMounted = useRef(true);
    const {id} = useParams();
    const {data,error,loading} = useFetch(`https://api.smarkets.com/v3/events/${id}/`,isComponentMounted,[]);
    return (
        <div data-testid="eventDetail">
            {loading && <div className='loading'>Loading...</div>}
            {(data?.events) && 
                    <div className='data-container'>
                        <div className='name'>Event Name: {data.events[0].name} </div>
                        <div className='desc'>Event Description: {data.events[0].description} </div>
                        <div className='startTime'>Start Time: {data.events[0].start_datetime} </div>
                    </div>
            }
            {error && <div className="error-container">{error}</div>}
        </div>
    )
}

export default EventDetail;