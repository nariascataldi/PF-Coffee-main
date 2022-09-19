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
//componentes
import NavBar from '../NavBar/NavBar';
import UserCreate from '../Account/UserCreate/UserCreate';
//estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Perfil.module.css";

function Perfil() {
  return (
    <div className={styles.bodyHome}>
      <div className={styles.navBar}> <NavBar /> </div>
      <div className={styles.container}>
        <div className={styles.navBarPerfil}>
          <NavLink exact to='../home'  >Perfil</NavLink>
          <NavLink exact to='../home'  >Direcciones</NavLink>
          <NavLink exact to='../home'  >Pedidos Anteriores</NavLink>
          <NavLink exact to='../home'  >Salir</NavLink>
        </div>
        <div className={styles.container1}><UserCreate></UserCreate></div>
      </div>
    </div>
  )
}
export default Perfil;

// import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Register from '../Account/UserCreate'



// function Perfil() {
//   return (
//     <div className={styles.bodyHome}>
//       <div className={styles.navBar}> <NavBar /> </div>
//       <div className={styles.container}>
//         <div className={styles.navBarPerfil}>
//           <ShinyButton />
//         </div>
//         <div className={styles.container1}>
//           <Routes>
//             <Route path='/userRegister' element={<Register />} />
//           </Routes>
//           </div>
//       </div>
//     </div>

//   );
// }

// export default Perfil;
