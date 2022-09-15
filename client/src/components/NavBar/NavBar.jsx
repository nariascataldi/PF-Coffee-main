import React from 'react'
import logo from './img/logo_coffee.png'
import { Link } from 'react-router-dom'
import './NavBar.css'

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
            <Link to='/form' className='links'>
            Form
            </Link>
          </a>
        </li>
            <li class="nav-item dropdown">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
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