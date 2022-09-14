import React from 'react'
import logo from './img/logo_coffee.png'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    return (
        <nav className='parentNav'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/form'>Form</Link>
            <img src={ logo } alt="img" className='logo'/>
        </nav>
    );
};

export default NavBar