import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute() {
  let isLoggedIn = localStorage.getItem('loggedInStatus');

  return isLoggedIn ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoute;
