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
import styles from './LandingPage.module.css';

function LandingPage() {
  console.log("Bienvenidos")
  return (
    <div className={styles.LandingPage}>
      <div className={styles.home}>
        <NavLink to='/about'>
          <button className={styles.button} id='button'>Coffee`s Orders</button>
        </NavLink>
      </div>
    </div>
  )
}
export default LandingPage;