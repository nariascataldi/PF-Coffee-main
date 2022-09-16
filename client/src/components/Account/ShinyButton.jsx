import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import style from "./ShinyButton.module.css"


const ShinyButton = () => {
  const buttonRef = React.useRef(null)
  function mouseMoveEvent(e) {
    const { x, y } = buttonRef.current.getBoundingClientRect();
    buttonRef.current.style.setProperty('--x', e.clientX - x);
    buttonRef.current.style.setProperty('--y', e.clientY - y);
  }

  React.useEffect(() => {
    if (buttonRef) {
      buttonRef.current.addEventListener('mousemove', mouseMoveEvent)
    }
    return () => buttonRef.current.removeEventListener('mousemove', mouseMoveEvent)
  }, [buttonRef])

  return (
    <Fragment>
      <NavLink exact to='../home' className={style.shiny} >Perfil</NavLink>
      <NavLink exact to='../home' className={style.shiny} >Direcciones</NavLink>
      <NavLink exact to='../home' className={style.shiny} >Pedidos Anteriores</NavLink>
      <NavLink exact to='../home' ref={buttonRef} className={style.shiny} >Salir</NavLink>
    </Fragment>
  );

}

export default ShinyButton;