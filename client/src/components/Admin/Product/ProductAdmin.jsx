import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts, getByTitle, setFilterState } from '../../../redux/actions/index.js';

import Cards from '../CardsAdmin/CardsAdmin';
// import NavBarAdmin from '../NavBarAdmin/NavBarAdmin.jsx';

import { BsSearch } from 'react-icons/bs';
import FormProduct from './ProductCreate';
import style from '../../../styles/Admin/NavBarAdm.module.css';

export default function ProductAdmin() {

  const [busqueda, setBusqueda] = useState('');

  const dispatch = useDispatch();
  // let allProducts = useSelector(state => state.allProducts)
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  const handleOnChange = (d) => {
    setBusqueda(d.target.value)
    dispatch(getByTitle(busqueda));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setFilterState({ title: busqueda }));
    setBusqueda('')
  }

  return (
    <Fragment>
      {/* <NavBarAdmin /> */}
      <div className="container my-3 py-5">
        <div className="row">
          <div id='formularioProducto' className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-white">
            <FormProduct />
          </div>
          <div id='ListadoProductos' className="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 bg-white">
          {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
            {/* Search Bar */}

            <form className={style.searchBar} onSubmit={(e) => handleSubmit(e)}>
              <input className={style.input_search} type='text' name='title' onChange={d => handleOnChange(d)} value={busqueda} placeholder='Search...' />
              <button className={style.search_button} type='submit'><BsSearch /></button>
            </form>

            <Cards />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
