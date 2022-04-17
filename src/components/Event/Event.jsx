
import React from 'react'
import {Link} from 'react-router-dom';
const Event = ({id}) => {
  return (
    <div>
        <Link to={`/event/${id}`} >
            <span>{id}</span>
        </Link>
    </div>
  )
}

export default Event