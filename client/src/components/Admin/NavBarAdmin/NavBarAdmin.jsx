import React from 'react'

import { Link } from 'react-router-dom'
import './NavBarAdm.css'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Coffee`s orders</a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                <Link to='/home' className='links'>
                  Home
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to='/about' className='links'>
                  About
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to='/productCreate' className='links'>
                  Formulario Producto Admin
                </Link>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar