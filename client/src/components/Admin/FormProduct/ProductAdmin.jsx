import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts, getByTitle, setFilterState } from '../../../redux/actions/index.js';

import FormularioProducto from './ProductCreate';
import Cards from '../CardsAdmin/CardsAdmin';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin.jsx';

import { BsSearch } from 'react-icons/bs';


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
      <NavBarAdmin />
      <div class="container my-3 py-5">
        <div class="row">
          <div id='formularioProducto' class="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-white">
            <FormularioProducto />
          </div>
          <div id='ListadoProductos' class="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 bg-white">
          {/* <button onClick={() => window.location.reload(false)}>Click to reload!</button> */}
            {/* Search Bar */}

            <form className='searchBar' onSubmit={(e) => handleSubmit(e)}>
              <input className='input-search' type='text' name='title' onChange={d => handleOnChange(d)} value={busqueda} placeholder='Search...' />
              <button className='search-button' type='submit'><BsSearch /></button>
            </form>

            <Cards />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
