import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/index.js';

import FormularioProducto from './ProductCreate';
import Cards from '../CardsAdmin/CardsAdminScss';
import NavBar from '../NavBarAdmin/NavBarAdmin.jsx';

export default function ProductAdmin() {

  const dispatch = useDispatch();
  let allProducts = useSelector(state => state.allProducts)
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Administrator</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link" href="./home">Home</a>
              <a class="nav-link" href="#">Providers</a>
              <a class="nav-link" href="#">Users</a>
            </div>
          </div>
        </div>
      </nav>
      <div class="container my-3 py-5">
        <div class="row">
          <div id='formularioProducto' class="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-white">
            <FormularioProducto />
          </div>
          <div id='ListadoProductos' class="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 bg-white">
            {/* <h2>Listado de Productos</h2> */}
            <Cards />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
