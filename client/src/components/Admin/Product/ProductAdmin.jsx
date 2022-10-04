import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/index.js';

import SearchBar from '../../SearchBar';
import Cards from '../CardsAdmin/CardsAdmin';
import FormProduct from './ProductCreate.jsx';


export default function ProductAdmin() {

  const dispatch = useDispatch();
  // let allProducts = useSelector(state => state.allProducts)
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])

  return (
    <Fragment>
      <div >
        <div className="row">
          <div id='formularioProducto' className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-1 bg-white">
            <FormProduct />
          </div>
          <div id='ListadoProductos' className="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-1 bg-white">
            <SearchBar/>
            <Cards />
          </div>
        </div>
      </div>
    </Fragment>
  )
}