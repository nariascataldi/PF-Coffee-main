import React, { useEffect, useState } from 'react'
import logo from './img/logo_coffee.png'
import { Link } from 'react-router-dom'
import './NavBar.css'
import {BsSearch} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { getByTitle } from '../../redux/actions';

const NavBar = () => {
const [busqueda, setBusqueda] = useState('');
const dispatch = useDispatch();

const handleOnChange=(d)=>{
    setBusqueda(d.target.value)
};
const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(getByTitle(busqueda));
    setBusqueda('')
}

    return (
    <nav className="navbar navbar-expand-lg">
        <div class="container-fluid">
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
        <form className='searchBar' onSubmit={(e)=>handleSubmit(e)}>
            <input className='input-search' type='text' onChange={d=>handleOnChange(d)} value={busqueda} placeholder='Search...' />
                <button className='search-button' type='submit'><BsSearch/></button>
        </form>
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
            </ul>
            </div>
        </div>
        <img src={ logo } alt="img" className='logo'/>
    </nav>
    );
};

export default NavBar