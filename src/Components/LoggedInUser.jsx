import React from 'react';
import { useEffect } from 'react';

function LoggedInUser({ user, setUser }) {
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
        setUser(data.user.username);
        console.log(data.user.username);
        console.log(data);
      });
  };
  useEffect(() => {
    getCurrentLoggedInUser();
  });

  return <div>Hello</div>;
}

export default LoggedInUser;
