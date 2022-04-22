import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import {StyledHeader} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Typography component="h3" variant="h6">
          <Link className="header-link" to="/">Popular Events</Link>
      </Typography>
    </StyledHeader>
  )
}

export default Header;