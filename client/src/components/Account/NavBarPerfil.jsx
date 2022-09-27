import React from 'react';
import { NavLink } from 'react-router-dom';

import style from "../../styles/NavBarPerfil.module.css";

const ShinyButton = () => {
  return (
    <div className={style.container}>
      <NavLink exact to='../' className={style.navBarPerfil} >Perfil</NavLink>
      <NavLink exact to='../' className={style.navBarPerfil} >Direcciones</NavLink>
      <NavLink exact to='../' className={style.navBarPerfil} >Pedidos Anteriores</NavLink>
      <NavLink exact to='../' className={style.navBarPerfil} >Salir</NavLink>
    </div>
  );

}

export default ShinyButton;