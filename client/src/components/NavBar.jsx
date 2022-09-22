import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsFillCartFill, BsFillCartPlusFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { getByTitle, setFilterState } from "../redux/actions";

import logo from "../assets/logo_coffee.png";
import Menu from "../components/NavBar/Menu";


import styles from '../styles/NavBar.module.css'

const NavBar = ({ noFilters }) => {
  const { categories, diets, fillCart } = useSelector((state) => state);
  const [busqueda, setBusqueda] = useState("");
  const [menu, setMenu] = useState(false);
  const localStorageCart = JSON.parse(localStorage.getItem("carrito"));

  const dispatch = useDispatch();

  const handleOnChange = (d) => {
    setBusqueda(d.target.value);
    dispatch(getByTitle(busqueda));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilterState({ title: busqueda }));
    setBusqueda("");
  };
  function handleSelect(e) {
    dispatch(setFilterState({ [e.target.name]: e.target.value }));
  }

  const handleOnClick = () => {
    setMenu(!menu);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.menu_logo}>
        <div className={styles.contenedor_menu}>
          <div id="navMenu" onClick={() => handleOnClick()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Link to="/home">
          <img src={logo} alt="img" className={styles.logo} />
        </Link>
      </div>

      <li className={styles.nav_item}>
        <Link to="/home" className={styles.links}>
          Home
        </Link>
      </li>

      <form className={styles.searchBar} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={styles.input_search}
          type="text"
          name="title"
          onChange={(d) => handleOnChange(d)}
          value={busqueda}
          placeholder="Search..."
        />
        <button className={styles.search_button} type="submit">
          <BsSearch />
        </button>
      </form>

      <li className={styles.nav_item}>
        <Link to="/about" className={styles.links}>
          About
        </Link>
      </li>

      <li className={styles.nav_item}>
        <Link to="/providers" className={styles.links}>
          Providers
        </Link>
      </li>

      {!noFilters && (
        <>
          <div>
            <select
              name="category"
              className={styles.input_filter}
              onChange={handleSelect}
            >
              <option value="">Categories</option>
              <option value="">None</option>
              {categories?.map((p) => {
                return (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <select
              name="diet"
              className={styles.input_filter}
              onChange={handleSelect}
            >
              <option value="">Diets</option>
              <option value="">None</option>
              {diets?.map((p) => {
                return (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <select
              name="sort"
              className={styles.input_filter}
              onChange={handleSelect}
            >
              <option value="">Sort</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
        </>
      )}
      <Link 
      className={styles.link_contador}
      to="/fillCart">
        <BsFillCartFill 
        className={styles.carrito_nav} 
        />
        <p 
        className={styles.contador_carrito}
        >
          {/* {localStorageCart.length > 0 && localStorageCart.length} */}
        </p>
      </Link>
      {noFilters && (
        <>
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <h2></h2>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </>
      )}

      <Menu menu={menu} />
    </div>
  );
};

export default NavBar;
