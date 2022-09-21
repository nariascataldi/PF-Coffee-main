import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/index.js';
import ProductAdmin from '../FormProduct/ProductAdmin.jsx';
import NavBarAdmin from '../NavBarAdmin/NavBarAdmin';
import NavBarAdminIzq from '../NavBarAdmin/NavBarAdminIzq';
// import CardsAdmin from '../CardsAdmin/CardsAdmin';

import './HomeAdm.css'

export default function HomeAdmin() {
  const dispatch = useDispatch();
  let allProducts = useSelector(state => state.allProducts)
  React.useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch])
  return (

    <div className='home-container'>
    <NavBarAdmin></NavBarAdmin>
      <div className="container my-3 py-5">
        <div className="row">
          <div id='NavBarIzq' className="col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4 bg-white">
            <NavBarAdminIzq />
          </div>
          <div id='Productos' className="col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4 bg-white">
            <ProductAdmin></ProductAdmin>
          </div>
        </div>
      </div>
    </div>
  )
}