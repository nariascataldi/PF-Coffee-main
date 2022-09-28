import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext';

import { PRIVATE } from '../../config/router/paths';


const PublicRoute = (props) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={PRIVATE} />;
  }

  return (
    <div>
      <Outlet/>
    </div>
  )
};

export default PublicRoute;
