import React from 'react';
import { useEffect } from 'react';
import logo from '../assests/smiley-cyrus.jpeg';
import { useNavigate } from 'react-router-dom';

function LoggedInUser({ user, setUser }) {
  const navigate = useNavigate();

  const getCurrentLoggedInUser = async () => {
    await fetch('https://api.realworld.io/api/user', {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setUser(data.user.username);
        // console.log(data.user.username);
        // console.log(data);
      });
  };
  useEffect(() => {
    getCurrentLoggedInUser();
  });

  const handleEditProfile = () => {
    navigate('/settings');
  };

  return (
    <div>
      <div className='banner'>
        <img className='smiley-logo' src={logo} alt='smiley-face'></img>
        {localStorage.getItem('loggedInUser')}
        <button className='edit-profile' onClick={handleEditProfile}>
          Edit Profile Settings
        </button>
      </div>
    </div>
  );
}

export default LoggedInUser;
