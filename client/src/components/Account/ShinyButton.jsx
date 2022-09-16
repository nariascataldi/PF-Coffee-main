import React, { Fragment, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import style from "./ShinyButton.module.css"


const ShinyButton = () => {
  var buttonRef = React.useRef(null)
  function mouseMoveEvent(e) {
    var { x } = buttonRef.current.getBoundingClientRect();
    buttonRef.current.style.setProperty('--x', e.clientX - x);
  }

  React.useEffect(() => {
    if (buttonRef) {
      buttonRef.current.addEventListener('mousemove', mouseMoveEvent)
    }
    return () => buttonRef.current.removeEventListener('mousemove', mouseMoveEvent)
  }, [buttonRef])

  return (
    <Fragment>
        <button ref={buttonRef} className={style.shiny}>Perfil</button>
        <button ref={buttonRef} className={style.shiny}>Perfil</button>
          <button>Direcciones</button>
          <button>Pedidos Anteriores</button>
          <NavLink exact to='../home'>
            <button>Salir</button>
          </NavLink>
    </Fragment>
  );

}

export default ShinyButton;