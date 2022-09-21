import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo_coffee.png'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getByTitle, setFilterState } from '../../redux/actions';
import Menu from './Menu.module.css';
import style from './NavBar.module.css';


const NavBar = ({ noFilters }) => {
  const { categories, diets } = useSelector(state => state)
  const [busqueda, setBusqueda] = useState('');
  const [menu, setMenu] = useState(false);

  const dispatch = useDispatch();

  const handleOnChange = (d) => {
    setBusqueda(d.target.value)
    dispatch(getByTitle(busqueda));

  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setFilterState({ title: busqueda }));
    setBusqueda('')
  }
  function handleSelect(e) {
    dispatch(setFilterState({ [e.target.name]: e.target.value }));
  }

  const handleOnClick = () => {
    setMenu(!menu)
  }

  return (

    <div className={style.navbar}>
      <div className="menu-logo">
        <div className='contenedor-menu'>
          <div id='navMenu' className={menu ? 'active' : ''} onClick={() => handleOnClick()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Link to='/home'><img src={logo} alt="img" className='logo' /></Link>
      </div>


      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">
          <Link to='/home' className='links'>
            Home
          </Link>
        </a>
      </li>

      <form className='searchBar' onSubmit={(e) => handleSubmit(e)}>
        <input className='input-search' type='text' name='title' onChange={d => handleOnChange(d)} value={busqueda} placeholder='Search...' />
        <button className='search-button' type='submit'><BsSearch /></button>
      </form>

      <li className="nav-item">
        <a className="nav-link" href="#">
          <Link to='/about' className='links'>
            About
          </Link>
        </a>
      </li>

      <li className="nav-item">
        <Link to='/providers' className='links nav-link'>
          Providers
        </Link>
      </li>

      {!noFilters &&
        <>
          <div>
            <select name='category' className='input-filter' onChange={handleSelect} >
              <option value=''>Categories</option>
              <option value=''>None</option>
              {categories?.map((p) => {
                return <option key={p.id} value={p.name}>{p.name}</option>
              })}
            </select>
          </div>

          <div className='box'>
            <select name='diet' className='input-filter' onChange={handleSelect} >
              <option value=''>Diets</option>
              <option value=''>None</option>
              {diets?.map((p) => {
                return <option key={p.id} value={p.name}>{p.name}</option>
              })}
            </select>
          </div>
          <div className='box'>
            <select name='sort' className='input-filter' onChange={handleSelect}>
              <option value=''>Sort</option>
              <option value='A-Z'>A-Z</option>
              <option value='Z-A'>Z-A</option>
            </select>
          </div>
        </>
      }
      {noFilters &&
        <>
          <h2></h2><h2></h2><h2></h2><h2></h2><h2></h2><h2></h2><p></p><p></p><p></p><p></p><p></p><p></p>
        </>
      }

      <Menu
        menu={menu}
      />
    </div>

  );
};

export default NavBar