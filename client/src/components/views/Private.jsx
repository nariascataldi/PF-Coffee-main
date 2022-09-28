import React from 'react';
import {Link} from 'react-router-dom';
import {HOME, LOGOUT} from '../../config/router/paths';

function Private() {
  return (
    <div>
      Mi ruta privada
      <Link to={LOGOUT}>Cerrar sesión</Link>
      <br></br>
      <Link to={HOME}>HOME</Link>
    </div>
  );
}

export default Private;
