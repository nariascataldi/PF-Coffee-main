import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./NavBarPerfil.module.css"

const ShinyButton = () => {
  return (
    <div className={style.container}>
      <NavLink exact to='../home' className={style.navBarPerfil} >Profile</NavLink>
      <NavLink exact to='../home' className={style.navBarPerfil} >Addresses</NavLink>
      <NavLink exact to='../home' className={style.navBarPerfil} >Previous Orders</NavLink>
      <NavLink exact to='../home' className={style.navBarPerfil} >Exit</NavLink>
    </div>
  );

}

export default ShinyButton;