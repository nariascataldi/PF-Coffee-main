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
<<<<<<< HEAD
        <nav className='parentNav'>
            <div className='element-nav'>
            <Link to='/home' className='link-nav1'>Home</Link>
            <Link to='/form' className='link-nav'>Form</Link>
            <form className='searchBar' onSubmit={(e)=>handleSubmit(e)}>
            <input className='input-search' type='text' onChange={d=>handleOnChange(d)} value={busqueda} placeholder='Search...' />
                
                <button className='search-button' type='submit'><BsSearch/></button>
            </form>
            <Link to='/about' className='link-nav'>About</Link>
            
            </div>
            <img src={ logo } alt="img" className='logo'/>
            
        </nav>
=======
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
>>>>>>> b3c46f983836824fd834fdfb32b41bde14978603
    );
};

export default NavBar