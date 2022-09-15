/* En este componente Perfil necesito que tenga:
[] Heder
  [] NavBar
[] una barra lateral iz con:
  [] Imágen
  [] Perfil
  [] Direcciones
  [] Tarjeta de Crédito
  [] Autenticación
  [] Suscripto
  [] Pedidos Anteriores
  [] Salir --> Home
[] Body
  [] Detalle del Perfil ---> editar
    [] editar --> form Editar perfil
[] Footer
---- y ver de colocar un boton flotante con los productos más populares  
*/

import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserCreate from '../Account/UserCreate/UserCreate';
import NavBar from '../NavBar/NavBar';

function Perfil() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
          <div><NavBarPerfil /></div>
          <div><UserCreate></UserCreate></div>
      </div>
    </div>
  )
}
export default Perfil;