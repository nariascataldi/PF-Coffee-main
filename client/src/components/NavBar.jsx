import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { BsSearch, BsFillCartFill, BsFillCartPlusFill, BsPersonCircle,BsFillPersonCheckFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { getByTitle, resetFilter, setFilterState, getUserDetail } from "../redux/actions/index";

import logo from "../assets/logo_coffee.png";
import Menu from "../components/Menu/Menu";

import styles from '../styles/NavBar.module.css';
import SearchBar from "./SearchBar";

const NavBar = ({ noFilters }) => {
  const { categories, diets, fillCart, filterBy,userInit } = useSelector((state) => state);
  const [busqueda, setBusqueda] = useState("");
  const [menu, setMenu] = useState(false);
  const [price, setPrice] = useState({
    minPrice: '',
    maxPrice: ''
  });

  let userDetail= useSelector(state=>state.userDetail)
    useEffect(()=>{
        dispatch(getUserDetail(userInit.id))
    },[])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(()=>{
    
  },[filterBy]);
  
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

  const handlePriceChange = (e) => {
      setPrice({
        ...price,
        [e.target.name]: e.target.value
      })
  }

  const handleSubmitPrice = () => {
    dispatch(setFilterState({ minPrice: price.minPrice, maxPrice: price.maxPrice }));
  }

  const handleOnClick = () => {
    setMenu(!menu);
  };
  
  const sacarFiltros =()=>{
    dispatch(resetFilter())
    navigate('/')
  }
 
  
  

  return (
    <div className={styles.navbar}>
      <div className={styles.menu_logo}>
        <div className={styles.contenedor_menu}>
          <div
            className={`${menu && styles.active} ${styles.navMenu}`}
            onClick={() => handleOnClick()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
          <button onClick={sacarFiltros} className={styles.botonresetfilter}> 
          <img src={logo} alt="img" className={styles.logo} /></button>
         

      </div>
      <SearchBar />

      {!noFilters && (
        <>
          <div>
            <select
              name="category"
              className={styles.input_filter}
              onChange={handleSelect}
            >
              <option value="">{filterBy?.category !=="" ? filterBy.category : 'Categories'}</option>
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
              <option value="">{filterBy?.diet !=="" ? filterBy.diet : 'Diets'}</option>
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
              <option value="">{filterBy?.sort !=="" ? filterBy.sort : 'Sort'}</option>
              <option value="A-Z">Alphabetically: A-Z</option>
              <option value="Z-A">Alphabetically: Z-A</option>
              <option value="High">Price: High to Low</option>
              <option value="Low">Price: Low to High</option>
            </select>
          </div>

          <div>
            <span 
            className={styles.input_price}>Price: </span>
            <input
              type="text"
              placeholder="Min."
              name="minPrice"
              value={price.minPrice}
              onChange={(e) => handlePriceChange(e)}
              className={styles.inputPrice}
            />
            <span> - </span>
            <input
              type="text"
              placeholder="Max."
              name="maxPrice"
              value={price.maxPrice}
              onChange={(e) => handlePriceChange(e)}
              className={styles.inputPrice}
            />
            <button
              onClick={(e) => handleSubmitPrice(e)}
              className={styles.buttonPrice}
            >
              Play
            </button>
          </div>
        </>
      )}
      <Link className={styles.link_contador} to="/fillCart">
        <BsFillCartFill className={styles.carrito_nav} />
        <p className={styles.contador_carrito}>
          {fillCart.length > 0 && fillCart.length}
        </p>
        
      </Link>
      
      
      { userDetail.name ? 
        <img src={ userDetail?.avatar !=="" ? userDetail.avatar : <BsFillPersonCheckFill/>}
         className='signin-img-user' referrerPolicy="no-referrer"/> :
        <BsPersonCircle className={styles.non_sesion_init_icon}/>
      }

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
