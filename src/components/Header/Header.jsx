import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link className="header-link" to="/">Popular Events</Link>
    </div>
  )
}

export default Header;