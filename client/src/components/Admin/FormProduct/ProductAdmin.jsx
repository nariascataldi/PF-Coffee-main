import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/index.js';

import FormularioProducto from './ProductCreate';
import Cards from '../CardsAdmin/CardsAdminScss';
import NavBar from '../NavBarAdmin/NavBarAdmin.jsx';

export default function ProductAdmin() {

  const dispatch = useDispatch();
  // let allProducts = useSelector(state => state.allProducts)
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  return (
    <Fragment>
      <NavBar />
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
