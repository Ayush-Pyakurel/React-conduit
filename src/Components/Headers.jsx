import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

function Headers() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <h1>Conduit</h1>
          <ul className='nav-link'>
            <li>Sign Up</li>
            <li>Sign In</li>
            <li>Logout</li>
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Headers;
