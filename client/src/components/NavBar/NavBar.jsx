import React, { useEffect, useState } from 'react'
import logo from './img/logo_coffee.png'
import { Link } from 'react-router-dom'
import './NavBar.css'
import {BsSearch} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getByTitle, setFilterState } from '../../redux/actions';

const NavBar = () => {
    const {categories,diets} = useSelector(state=>state)
const [busqueda, setBusqueda] = useState('');
const dispatch = useDispatch();

const handleOnChange=(d)=>{
    setBusqueda(d.target.value)
    dispatch(getByTitle(busqueda));

};
const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(setFilterState({title:busqueda}));
    setBusqueda('')
}
function handleSelect(e){
    dispatch(setFilterState({[e.target.name]:e.target.value}));
}

    return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <img src={ logo } alt="img" className='logo'/>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                    <Link to='/home' className='links'>
                            Home
                    </Link>
                </a>
            </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
                <Link to='/about' className='links'>
                    About
                </Link>
            </a>
        </li>
        <form className='searchBar' onSubmit={(e)=>handleSubmit(e)}>
            <input className='input-search' type='text' name='title' onChange={d=>handleOnChange(d)} value={busqueda} placeholder='Search...' />
                <button className='search-button' type='submit'><BsSearch/></button>
        </form>
        <li className="nav-item">
          
            <Link to='/form' className='links nav-link'>
            Form
            </Link>
          
        </li>
            <li className="nav-item dropdown">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            </ul>
            </div>
                    <div className='box'>
                        <label className='label-filter'>Categories : </label>
                         <select name='category' className='input-filter' onChange={handleSelect} >
                            <option value=''>Default</option> 
                            {categories?.map((p)=>{
                                return <option key={p.id} value={p.name}>{p.name}</option>
                            })}
                        </select>
                    </div>
                    <div className='box'>
                        <label className='label-filter'>Diets : </label>
                         <select name='diet' className='input-filter' onChange={handleSelect} >
                            <option value=''>Default</option> 
                            {diets?.map((p)=>{
                                return <option key={p.id} value={p.name}>{p.name}</option>
                            })}
                        </select>
                    </div>
        </div>
        
    </nav>
    );
};

export default NavBar