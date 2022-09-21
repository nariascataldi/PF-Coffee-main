import React from 'react'
import { Link } from 'react-router-dom'
import './NavBarAdm.css'
 
const NavBar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/homeAdmin">Administrator</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link class="nav-link" to="/home">Home</Link>
              <Link class="nav-link" to="/providerCreate">Provider</Link>
              <Link class="nav-link" to="#">User</Link>
              <Link class="nav-link" to="/productAdmin">Product</Link>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default NavBar