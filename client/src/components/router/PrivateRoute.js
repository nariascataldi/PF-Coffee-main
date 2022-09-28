import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { HOME, LOGIN } from '../../config/router/paths';
import { useAuthContext} from '../../contexts/authContext';




const PrivateRoute = (props) => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={HOME} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  )
};

export default PrivateRoute;
