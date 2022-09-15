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
import UserCreate from '../Account/UserCreate/UserCreate';
import NavBar from '../NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Perfil.module.css";

function Perfil() {
  return (
    <div className={styles.bodyHome}>
      <div className={styles.navBar}> <NavBar /> </div>
      <div className={styles.container}>
        <div className={styles.navBarPerfil}>
        <button>Perfil</button>
        <button>Direcciones</button>
        <button>Pedidos Anteriores</button>
        <button>Salir</button>
        </div>
        <div className={styles.container1}><UserCreate></UserCreate></div>
      </div>
    </div>
  )
}
export default Perfil;