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
    );
};

export default NavBar