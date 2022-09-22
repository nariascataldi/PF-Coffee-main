import React from "react";

import UserCreate from '../Account/UserCreate/UserCreate';
import NavBar from '../NavBar';
import NavBarPerfil from './NavBarPerfil';

import styles from "../../styles/Perfil.module.css";

function Perfil() {

  return (
    <div className={styles.bodyHome}>
      <div className={styles.navBar}>
        <NavBar />
      </div>
      <div className={styles.container}>
        <div className={styles.navBarPerfil}>
          <NavBarPerfil />
        </div>
        <div className={styles.container1}>
          <UserCreate />
        </div>
      </div>
    </div>
  )
}
export default Perfil;

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
