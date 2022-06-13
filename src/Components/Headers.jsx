import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function Headers() {
  return (
    <AppBar position='static' style={{ backgroundColor: '	white' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography className='title' variant='h3'>
            <Link to='/' style={{ color: 'green', textDecoration: 'none' }}>
              Conduit
            </Link>
          </Typography>
          <ul className='nav-link'>
            <li>
              <Link
                to='/signup'
                style={{ color: 'green', textDecoration: 'none' }}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to='/signin'
                style={{
                  color: 'green',
                  textDecoration: 'none',
                  marginTop: '3px',
                }}
              >
                Sign In
              </Link>
            </li>
            <li style={{ color: 'green' }}>Logout</li>
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Headers;
