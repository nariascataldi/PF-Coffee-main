import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBarIzq = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <NavLink className="nav-link active" to='/homeAdmin' role="tab" aria-controls="v-pills-home" aria-selected="true">Home</NavLink>
          <NavLink className="nav-link active" to='/productAdmin' role="tab" aria-controls="v-pills-home" aria-selected="true">Product create</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBarIzq