import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Headers() {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('loggedInStatus');
    localStorage.removeItem('loggedInUserEmail');
    //window.location.reload();
    navigate('/signin');
  };

  return (
    <AppBar position='static' style={{ backgroundColor: '	white' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography className='title' variant='h3'>
            <Link to='/' style={{ color: ' #5cb85c', textDecoration: 'none' }}>
              Conduit
            </Link>
          </Typography>
          <ul className='nav-link'>
            {!!localStorage.getItem('loggedInStatus') ? (
              <>
                <li>
                  <Link
                    to='/newarticle'
                    style={{ color: ' #5cb85c', textDecoration: 'none' }}
                  >
                    New Article
                  </Link>
                </li>
                <li>
                  <Link
                    to='/settings'
                    style={{ color: ' #5cb85c', textDecoration: 'none' }}
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/user/${localStorage.getItem('loggedInUser')}`}
                    style={{ color: ' #5cb85c', textDecoration: 'none' }}
                  >
                    {localStorage.getItem('loggedInUser')}
                  </Link>
                </li>
                <li
                  style={{ color: ' #5cb85c', cursor: 'pointer' }}
                  onClick={Logout}
                >
                  Logout
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to='/signup'
                    style={{ color: ' #5cb85c', textDecoration: 'none' }}
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to='/signin'
                    style={{
                      color: ' #5cb85c',
                      textDecoration: 'none',
                      marginTop: '3px',
                    }}
                  >
                    Sign In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Headers;
